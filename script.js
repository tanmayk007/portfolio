// dark mode
function toggleMode() {
    document.body.classList.toggle("dark");
}

// typing effect
const text = ["Aspiring Engineer", "Tech Enthusiast", "Problem Solver"];
let i = 0, j = 0, current = "", isDeleting = false;

function type() {
    current = text[i];
    if (isDeleting) {
        document.getElementById("typing").textContent = current.substring(0, j--);
    } else {
        document.getElementById("typing").textContent = current.substring(0, j++);
    }

    if (!isDeleting && j === current.length) {
        isDeleting = true;
        setTimeout(type, 1000);
        return;
    }

    if (isDeleting && j === 0) {
        isDeleting = false;
        i = (i + 1) % text.length;
    }

    setTimeout(type, isDeleting ? 50 : 100);
}

type();

// scroll animation
window.addEventListener("scroll", () => {
    document.querySelectorAll("section").forEach(sec => {
        let top = sec.getBoundingClientRect().top;
        if (top < window.innerHeight - 50) {
            sec.style.opacity = 1;
            sec.style.transform = "translateY(0)";
        }
    });

    // progress bar
    let scroll = document.documentElement.scrollTop;
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    document.getElementById("progress").style.width = (scroll / height) * 100 + "%";
});