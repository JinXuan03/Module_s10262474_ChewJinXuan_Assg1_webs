let header = document.querySelector('header');
let menu = document.querySelector('#image-container');
let navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    header.classList.toggle('active', window.scrollY > 0);
});

menu.onclick = () => {
  navbar.classList.toggle('active')
}
window.onscroll = () => {
  navbar.classList.remove('active')
}

function submitForm() {
    // Simple validation
    var form = document.getElementById("bookingForm");
    if (!form.checkValidity()) {
      alert("Please fill in all required fields.");
      return;
    }
  
    // If validation passes, show success message
    alert("Booking Successful!");
  }