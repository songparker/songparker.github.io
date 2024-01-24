const roles = ["Product Manager.", "Data Analyst.", "Problem Solver."];
let currentRoleIndex = 0;
let element;

function updateRole() {
    if (!element) {
        element = document.getElementById('animated-text');
    }

    // Start the slide-out animation
    element.classList.add('slide-out');

    setTimeout(() => {
        // Update the role and reset the class
        currentRoleIndex = (currentRoleIndex + 1) % roles.length;
        element.innerHTML = roles[currentRoleIndex];
        element.classList.remove('slide-out');
        element.classList.add('slide-in');
    }, 500); // Change role during the middle of the animation

    setTimeout(() => {
        // Reset the class for the next cycle
        element.classList.remove('slide-in');
    }, 1000); // After the slide-in animation completes

    setTimeout(updateRole, 3500); // Change role every 2 seconds
}

document.addEventListener('DOMContentLoaded', (event) => {
    updateRole();
});

document.querySelector('.portfolio-button').addEventListener('mouseover', function() {
    this.src = 'images/home/linkedin_blue.png';
});
document.querySelector('.portfolio-button').addEventListener('mouseout', function() {
    this.src = 'images/home/linkedin.png';
});