function toggleMenu(){
    const Menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    Menu.classList.toggle("open");
    icon.classList.toggle("open");
}

document.addEventListener("DOMContentLoaded", function () {
    var audio = document.getElementById("bg-music");

    function checkScroll() {
        var profileSection = document.getElementById("profile");
        var rect = profileSection.getBoundingClientRect();
        var isVisible = rect.top < window.innerHeight && rect.bottom > 0;

        if (isVisible) {
            if (audio.paused) {
                audio.play().catch(err => console.log("Autoplay blocked:", err));
            }
        } else {
            audio.pause();
        }
    }

    window.addEventListener("scroll", checkScroll);
    checkScroll(); // Page load झाल्यावरही check करेल
});

