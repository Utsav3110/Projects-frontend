function applyBoxEvents(box) {
    box.addEventListener('mousemove', (e) => {
        box.style.color = 'black';
        box.style.backgroundColor = 'hsl(75, 94%, 57%)';
    });

    box.addEventListener('mouseleave', (e) => {
        box.style.color = 'hsl(0, 0%, 100%)';
        box.style.backgroundColor = 'hsl(0, 0%, 20%)';
    });
}

const boxes = document.querySelectorAll(".box .link");

boxes.forEach(box => {
    applyBoxEvents(box);
});