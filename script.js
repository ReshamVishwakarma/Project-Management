document.addEventListener("DOMContentLoaded", function() {
    const projectCards = document.querySelectorAll(".project");

    // Add event listeners for each project card
    projectCards.forEach(function(card) {
        card.addEventListener("mouseenter", function() {
            card.style.backgroundColor = "#f2f2f2"; // Change background color on hover
        });

        card.addEventListener("mouseleave", function() {
            card.style.backgroundColor = "#ffffff"; // Restore background color on mouse leave
        });
    });

    // Add event listener for search input
    const searchInput = document.querySelector(".search-bar input[type='text']");
    searchInput.addEventListener("input", function() {
        const searchTerm = searchInput.value.toLowerCase();

        projectCards.forEach(function(card) {
            const projectTitle = card.querySelector("h3").textContent.toLowerCase();
            const projectDescription = card.querySelector("p").textContent.toLowerCase();

            if (projectTitle.includes(searchTerm) || projectDescription.includes(searchTerm)) {
                card.style.display = "block"; // Show the project card if it matches the search term
            } else {
                card.style.display = "none"; // Hide the project card if it doesn't match the search term
            }
        });
    });
});
