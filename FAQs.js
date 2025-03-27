document.addEventListener("DOMContentLoaded", function () {
    // Select all FAQ question buttons
    const faqButtons = document.querySelectorAll(".faq-question");

    // Add click event listener to each FAQ button
    faqButtons.forEach(button => {
        button.addEventListener("click", function () {
            // Toggle the active class for the button (to rotate the arrow)
            this.classList.toggle("active");

            // Find the corresponding answer element
            const answer = this.nextElementSibling;

            // Toggle the visibility of the answer by adjusting its max-height
            if (answer.style.maxHeight) {
                answer.style.maxHeight = null; // Hide the answer
            } else {
                answer.style.maxHeight = answer.scrollHeight + "px"; // Show the answer
            }
        });
    });
});
