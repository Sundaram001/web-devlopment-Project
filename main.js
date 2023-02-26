

// main.js
// const form = document.getElementById('my-form');
// const usersList = document.getElementById('users');

// Load existing user details from local storage, if any
//const existingUsers = JSON.parse(localStorage.getItem('users')) || [];

// Render existing user details on page load
// existingUsers.forEach(user => {
//   const li = document.createElement('li');
//   li.textContent = `Name: ${user.name}, Email: ${user.email}`;
//   usersList.appendChild(li);
// });

// form.addEventListener('submit', e => {
//   e.preventDefault();

  // Get user details from form
//   const name = document.getElementById('name').value;
//   const email = document.getElementById('email').value;

  // Add user details to existing users
//  existingUsers.push({ name, email });

  // Save updated user details to local storage
//  localStorage.setItem('users', JSON.stringify(existingUsers));

  // Render updated user details on the page
//  const li = document.createElement('li');
//  li.textContent = `Name: ${name}, Email: ${email}`;
//  usersList.appendChild(li);

  // Clear form fields
//   document.getElementById('name').value = '';
//   document.getElementById('email').value = '';
// });


// Tasks 11 Lets store the users in the right format
// const name = document.querySelector('#name').value;
// const email = document.querySelector('#email').value;

// // Create user object
// const user = {
//   name: name,
//   email: email
// };

// // Store user object in local storage
// localStorage.setItem('user', JSON.stringify(user));

// // Retrieve user object from local storage
// const userFromLocalStorage = JSON.parse(localStorage.getItem('user'));

// // Access user object properties
// console.log(userFromLocalStorage.name); // Output: User's name
// console.log(userFromLocalStorage.email); // Output: User's email

// TASK DELETE DATA FROM LOCAL STORAGE

// Select the form element
const form = document.getElementById('my-form');

// Add an event listener for form submit
form.addEventListener('submit', function(e) {
  e.preventDefault(); // prevent default form submission behavior

  // Get the user's name and email input values
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;

  // Create a user object with name and email properties
  const user = { name, email };

  // Retrieve the existing list of users from local storage, or create an empty array if none exists
  let userList = JSON.parse(localStorage.getItem('users')) || [];

  // Add the new user to the list
  userList.push(user);

  // Store the updated user list back in local storage
  localStorage.setItem('users', JSON.stringify(userList));

  // Call the displayUsers function to update the UI
  displayUsers();

  // Reset the form
  form.reset();
});

// Function to display the list of users
function displayUsers() {
  // Get the list of users from local storage
  const userList = JSON.parse(localStorage.getItem('users'));

  // Get the UL element where the list will be displayed
  const usersList = document.getElementById('users');

  // Clear any existing list items
  usersList.innerHTML = '';

  // Loop through each user in the list and create a new LI element with a Delete button
  userList.forEach(function(user, index) {
    const li = document.createElement('li');
    li.textContent = user.name + ' - ' + user.email;

    // Create a Delete button for each user
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', function() {
      // Remove the user from the list
      userList.splice(index, 1);

      // Update the user list in local storage
      localStorage.setItem('users', JSON.stringify(userList));

      // Update the UI
      displayUsers();
    });

    // Add the Delete button to the LI element
    li.appendChild(deleteButton);

    // Add the LI element to the UL element
    usersList.appendChild(li);
  });
}

// Call the displayUsers function to initialize the UI
displayUsers();

