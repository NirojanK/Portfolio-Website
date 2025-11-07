//variables
const container = document.getElementById('sContainer');
const numberOfStars = 100;
//function that appends a random amount of stars to the website and animates them
function createStar() {
    const star = document.createElement('div');
    star.classList.add('star');

    // Random position
    star.style.left = `${Math.random() * 100}vw`;
    star.style.top = `${Math.random() * 100}vh`;

    // Random size
    const size = Math.random() * 3 + 1; // Stars between 1px and 4px
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;

    // Random animation duration and delay
    star.style.animationDuration = `${Math.random() * 3 + 1}s`; // 1s to 4s
    star.style.animationDelay = `${Math.random() * 2}s`; // Up to 2s delay

    container.appendChild(star);
}

// Create the specified number of stars
for (let i = 0; i < numberOfStars; i++) {
    createStar();
}
//light mode function
function lightMode(){
    var element = document.body;
    element.classList.toggle("light-mode");
}