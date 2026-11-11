
function toggleMenu() {
    const menu = document.querySelector("nav");

    menu.classList.toggle("active");
}

// Fechar menu ao clicar em um link

document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", () => {
        document.querySelector("nav")
            .classList.remove("active");
    });
});
