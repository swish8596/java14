document.addEventListener("DOMContentLoaded", () => {
    const blocks = document.querySelectorAll(".color-block");
    const resetButton = document.querySelector(".reset-btn");

    blocks.forEach(block => {
        block.addEventListener("click", () => {
            document.body.style.backgroundColor = block.dataset.color;
        });
    });

    resetButton.addEventListener("click", () => {
        document.body.style.backgroundColor = "";
    });
});
