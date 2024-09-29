
window.addEventListener('DOMContentLoaded', (event) => {
    var navbar = document.querySelector(".navbar");

    if (navbar) {  // Ensure the navbar element exists
        var sticky = navbar.offsetTop;

        window.addEventListener('scroll', function() {
            stickyHeader();
        });

        function stickyHeader() {
            if (window.pageYOffset > sticky) {
                navbar.classList.add("sticky");
            } else {
                navbar.classList.remove("sticky");
            }
        }
    } else {
        console.error("Navbar not found!");
    }
});

document.getElementById('subscriptionForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting in the traditional way
    var email = document.getElementById('emailInput').value;
    console.log('Email submitted: ' + email);
    alert('Thank you for subscribing!');
  });

