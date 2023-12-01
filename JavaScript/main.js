// Selecting elements from the DOM
let header = document.querySelector('header');
let menu = document.querySelector('#image-container');
let navbar = document.querySelector('.navbar');

// Adding a scroll event listener to toggle the 'active' class on the header
window.addEventListener('scroll', () => {
    header.classList.toggle('active', window.scrollY > 0);
});

// Handling click event on the menu icon to toggle the 'active' class on the navbar
menu.onclick = () => {
  navbar.classList.toggle('active')
}
// Removing the 'active' class from the navbar on window scroll
window.onscroll = () => {
  navbar.classList.remove('active')
}

// Function to validate the booking form
function validateForm() {
  // Retrieving values from form elements
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var phone = document.getElementById('phone').value;
  var date = document.getElementById('date').value;
  var time = document.getElementById('time').value;
  var adults = document.getElementById('adults').value;
  var children = document.getElementById('children').value;
  var address = document.getElementById('address').value;
  var contactNumber = document.getElementById('contactNumber').value;
  var dob = document.getElementById('dob').value;
  var age = document.getElementById('age').value;
  var termsChecked = document.getElementById('terms').checked;

  // Checking if all required fields are filled
  if (
      name && email && phone && date && time &&
      adults && children && address && contactNumber &&
      dob && age && termsChecked
  ) {
      // Displaying success message and allowing form submission
      alert('Booking successful! and the booking information is sent to your email address');
      return true; 
  } else {
      // Displaying an alert if any required field is empty
      alert('Please fill in all the information.');
      return false;
  }
}