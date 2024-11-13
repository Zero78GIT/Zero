/ Control de música de fondo
let music = document.getElementById("background-music");

// Función para alternar reproducción de música
function toggleMusic() {
    if (music.paused) {
        music.play();
        document.getElementById("music-toggle").innerText = "Pausar Música";
    } else {
        music.pause();
        document.getElementById("music-toggle").innerText = "Reproducir Música";
    }
}

// Reproducir la música de fondo cuando la página se cargue
window.addEventListener("load", () => {
    music.play().catch(error => {
        console.log("Autoplay bloqueado por el navegador.");
    });
});
