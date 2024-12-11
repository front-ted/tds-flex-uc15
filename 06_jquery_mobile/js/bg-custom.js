// script.js
function createLines(containerId) {
    const container = document.getElementById(containerId);
    const lineCount = 15;

    for (let i = 0; i < lineCount; i++) {
        const line = document.createElement('div');
        line.className = 'line';

        const lineWidth = Math.random() * 10 + 5 + 'vw';
        line.style.width = lineWidth;

        line.style.left = Math.random() * 10 + 'vw';
        line.style.top = i * (100 / lineCount) + 'vh';
        line.style.animationDelay = i * 0.6 + 's';

        container.appendChild(line);
    }

    let elapsedTime = 0;
    const interval = setInterval(() => {
        elapsedTime += 1;
        const lines = container.querySelectorAll('.line');

        lines.forEach(line => {
            const currentDuration = parseFloat(
                window.getComputedStyle(line).animationDuration
            );

            if (elapsedTime <= 12) {
                line.style.animationDuration = (currentDuration + 0.5) + 's';
            } else {
                line.style.animation = 'fadeInOutPaused 1s infinite';
            }
        });

        if (elapsedTime >= 12) {
            clearInterval(interval);
        }
    }, 1000);
}

document.addEventListener("DOMContentLoaded", () => {
    createLines('left-side');
    createLines('right-side');
});
