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
// increment/decrement
// let cartCount = 0;

// function updateCart(change) {
//     const cartIcon = document.querySelector('.cart-count'); // Update to target the cart count element
//     cartCount += change;

//     // Ensure cart count doesn't go below 0
//     if (cartCount < 0) {
//         cartCount = 0;
//     }

//     // Update the cart icon with the current count
//     if (cartCount > 0) {
//         cartIcon.textContent = cartCount; // Display the cart count
//         cartIcon.style.display = 'inline-block'; // Make sure the cart count is visible
//     } else {
//         cartIcon.textContent = ''; // Clear the cart count when it's 0
//         cartIcon.style.display = 'none'; // Hide the cart count when it's 0
//     }
// }
// loading
function openSearchModal() {
    document.getElementById('searchModal').style.display = "block";
}

function closeSearchModal() {
    document.getElementById('searchModal').style.display = "none";
}

function performSearch() {
    var searchTerm = document.getElementById('searchInput').value;
    alert('Search for: ' + searchTerm);
    // Here you will typically handle the search term with your backend.
    closeSearchModal(); // Optionally close the modal after search
}

document.getElementById('subscriptionForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting in the traditional way
    var email = document.getElementById('emailInput').value;
    console.log('Email submitted: ' + email);
    alert('Thank you for subscribing!');
  });

  