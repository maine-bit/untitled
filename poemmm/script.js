function createPetal() {
    const petal = document.createElement('div');
    petal.classList.add('petal');

    // Randomize petal position and animation duration
    const leftPosition = Math.random() * window.innerWidth;
    const animationDuration = Math.random() * 2 + 3; // 3s to 5s

    petal.style.left = `${leftPosition}px`;
    petal.style.animationDuration = `${animationDuration}s`;

    document.getElementById('petals').appendChild(petal);

    // Remove petal after animation ends
    petal.addEventListener('animationend', () => {
        petal.remove();
    });
}

// Create a petal every 200 milliseconds
setInterval(createPetal, 200);
