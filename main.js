let header = document.querySelector('header');

window.addEventListener('scroll', () => {
    header.classList.toggle('active', window.scrollY > 0);
});

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