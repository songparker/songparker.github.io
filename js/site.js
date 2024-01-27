const roles = ["Product Manager.", "Data Analyst.", "Problem Solver."];
let currentRoleIndex = 0;
let element;

// Role functionality
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

    setTimeout(updateRole, 3500); // Change role every 3.5 seconds
}

// Clock functionality
function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var ampm = h >= 12 ? 'PM' : 'AM';
    h = h % 12;
    h = h ? h : 12;
    m = checkTime(m);
    var txtElement = document.getElementById('txt');
    if (txtElement) {
        txtElement.innerHTML = h + ":" + m + " " + ampm;
    }
    setTimeout(startTime, 500);
}

function checkTime(i) {
    if (i < 10) {i = "0" + i};
    return i;
}

document.addEventListener('DOMContentLoaded', (event) => {
    updateRole();
    startTime(); // Start the clock
});

//Images Hover
document.querySelector('.portfolio-button').addEventListener('mouseover', function() {
    this.src = 'images/home/linkedin_blue.png';
});
document.querySelector('.portfolio-button').addEventListener('mouseout', function() {
    this.src = 'images/home/linkedin.png';
});