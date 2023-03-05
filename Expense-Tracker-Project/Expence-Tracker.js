let expenses = JSON.parse(localStorage.getItem('expenses')) || [];

function addExpense() {
  
  const amount = document.getElementById('expenseAmount').value;
  const desc = document.getElementById('expenseDesc').value;
  const category = document.getElementById('expenseCategory').value;

  
  const expense = { amount, desc, category };
  expenses.push(expense);

  
  localStorage.setItem('expenses', JSON.stringify(expenses));

  
  document.getElementById('expenseAmount').value = '';
  document.getElementById('expenseDesc').value = '';
  document.getElementById('expenseCategory').selectedIndex = 0;

  updateExpenseList();
}

function deleteExpense(index) {
  expenses.splice(index, 1);
  localStorage.setItem('expenses', JSON.stringify(expenses));
  updateExpenseList();
}

function editExpense(index) {
  const expense = expenses[index];
  const newAmount = prompt('Enter new expense amount:', expense.amount);
  const newDesc = prompt('Enter new expense description:', expense.desc);
  const newCategory = prompt('Enter new expense category:', expense.category);
  expenses[index] = { amount: newAmount, desc: newDesc, category: newCategory };
  localStorage.setItem('expenses', JSON.stringify(expenses));
  updateExpenseList();
}

function updateExpenseList() {
  const list = document.getElementById('expenseList');
  list.innerHTML = '';
  expenses.forEach((expense, index) => {
    const item = document.createElement('li');
    item.classList.add('list-group-item');
    item.innerHTML = `
      <span>${expense.amount} - ${expense.desc} - ${expense.category}</span>
      <div class="btn-group float-right">
        <button type="button" class="btn btn-danger" onclick="deleteExpense(${index})">Delete</button>
        <button type="button" class="btn btn-secondary" onclick="editExpense(${index})">Edit</button>
      </div>
    `;
    list.appendChild(item);
  });
}


const addExpenseBtn = document.getElementById('addExpenseBtn');
addExpenseBtn.addEventListener('click', addExpense);

updateExpenseList();
