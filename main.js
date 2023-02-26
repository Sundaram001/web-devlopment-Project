

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
const name = document.querySelector('#name').value;
const email = document.querySelector('#email').value;

// Create user object
const user = {
  name: name,
  email: email
};

// Store user object in local storage
localStorage.setItem('user', JSON.stringify(user));

// Retrieve user object from local storage
const userFromLocalStorage = JSON.parse(localStorage.getItem('user'));

// Access user object properties
console.log(userFromLocalStorage.name); // Output: User's name
console.log(userFromLocalStorage.email); // Output: User's email
