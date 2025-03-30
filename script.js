function toggleMenu(){
    const Menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    Menu.classList.toggle("open");
    icon.classList.toggle("open");
}

document.addEventListener("DOMContentLoaded", function () {
    let audio = document.getElementById("bg-music");

    function checkVisibility() {
        let profileSection = document.getElementById("profile");
        let rect = profileSection.getBoundingClientRect();
        let isVisible = rect.top < window.innerHeight && rect.bottom > 0;

        if (isVisible) {
            if (audio.paused) {
                audio.play().catch(error => console.log("Autoplay blocked:", error));
            }
        } else {
            audio.pause();
        }
    }

    window.addEventListener("scroll", checkVisibility);
    checkVisibility(); // Initial check when page loads
});

