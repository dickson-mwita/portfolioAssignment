/* =========================
   MOBILE MENU
========================= */

const nav = document.querySelector("nav");
const menuToggle = document.createElement("div");

menuToggle.innerHTML = "☰";
menuToggle.style.fontSize = "26px";
menuToggle.style.cursor = "pointer";
menuToggle.style.color = "#8B5CF6";

document.querySelector("header").appendChild(menuToggle);

menuToggle.addEventListener("click", () => {
    nav.classList.toggle("active");
});

/* =========================
   DARK / LIGHT MODE
========================= */

const themeBtn = document.createElement("button");
themeBtn.innerHTML = "🌙";
themeBtn.style.marginLeft = "15px";
themeBtn.style.background = "transparent";
themeBtn.style.border = "none";
themeBtn.style.color = "#8B5CF6";
themeBtn.style.fontSize = "20px";
themeBtn.style.cursor = "pointer";

document.querySelector("header").appendChild(themeBtn);

themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("light");

    if(document.body.classList.contains("light")){
        document.body.style.background = "#f5f5f5";
        document.body.style.color = "#111";
        themeBtn.innerHTML = "☀️";
    } else {
        document.body.style.background = "";
        document.body.style.color = "";
        themeBtn.innerHTML = "🌙";
    }
});

/* =========================
   SCROLL PROGRESS BAR
========================= */

const progressBar = document.createElement("div");
progressBar.style.position = "fixed";
progressBar.style.top = "0";
progressBar.style.left = "0";
progressBar.style.height = "4px";
progressBar.style.width = "0%";
progressBar.style.background = "linear-gradient(90deg,#8B5CF6,#A855F7)";
progressBar.style.zIndex = "9999";

document.body.appendChild(progressBar);

window.addEventListener("scroll", () => {

    const scrollTop = document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

    const scrolled = (scrollTop / height) * 100;

    progressBar.style.width = scrolled + "%";

});

/* =========================
   SCROLL REVEAL
========================= */

const reveals = document.querySelectorAll(".reveal");

function revealOnScroll(){

    reveals.forEach(el => {

        const windowHeight = window.innerHeight;
        const elementTop = el.getBoundingClientRect().top;

        if(elementTop < windowHeight - 100){
            el.classList.add("active");
        }

    });

}

window.addEventListener("scroll", revealOnScroll);

/* =========================
   TYPING EFFECT (ACADEMIC TITLE)
========================= */

const words = [
    "Web Developer",
    "Data analyst",
    "Machine Learning",
    "Data visualization",
];

let i = 0;
let j = 0;
let isDeleting = false;

const typing = document.getElementById("typing");

function type() {

    const currentWord = words[i];

    if (!isDeleting) {

        typing.textContent = currentWord.substring(0, j + 1);
        j++;

        if (j === currentWord.length) {
            isDeleting = true;
            setTimeout(type, 1500);
            return;
        }

    } else {

        typing.textContent = currentWord.substring(0, j - 1);
        j--;

        if (j === 0) {
            isDeleting = false;
            i++;

            if (i === words.length) i = 0;
        }
    }

    setTimeout(type, isDeleting ? 60 : 120);
}

document.addEventListener("DOMContentLoaded", () => {
    setTimeout(type, 800);
});

/* =========================
   ACTIVE NAV LINK
========================= */

const links = document.querySelectorAll("nav a");

links.forEach(link => {
    link.addEventListener("click", () => {

        links.forEach(l => l.classList.remove("active"));
        link.classList.add("active");

    });
});

/* =========================
   SMOOTH SCROLL
========================= */

document.querySelectorAll("a[href^='#']").forEach(anchor => {
    anchor.addEventListener("click", function(e){
        e.preventDefault();

        document.querySelector(this.getAttribute("href"))
        .scrollIntoView({
            behavior:"smooth"
        });
    });
});

/* =========================
   CONTACT FORM
========================= */

const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    alert("Message sent successfully 🎓");

    form.reset();
});

/* =========================
   SIMPLE PARTICLES BACKGROUND (PURPLE DOTS)
========================= */

const canvas = document.createElement("canvas");
document.body.appendChild(canvas);

canvas.style.position = "fixed";
canvas.style.top = "0";
canvas.style.left = "0";
canvas.style.zIndex = "-2";

const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let dots = [];

for(let i=0; i<60; i++){
    dots.push({
        x: Math.random()*canvas.width,
        y: Math.random()*canvas.height,
        r: Math.random()*2,
        dx: (Math.random()-0.5),
        dy: (Math.random()-0.5)
    });
}

function animateDots(){

    ctx.clearRect(0,0,canvas.width,canvas.height);

    ctx.fillStyle = "#8B5CF6";

    dots.forEach(d => {

        d.x += d.dx;
        d.y += d.dy;

        if(d.x < 0 || d.x > canvas.width) d.dx *= -1;
        if(d.y < 0 || d.y > canvas.height) d.dy *= -1;

        ctx.beginPath();
        ctx.arc(d.x,d.y,d.r,0,Math.PI*2);
        ctx.fill();

    });

    requestAnimationFrame(animateDots);
}

animateDots();

document.addEventListener("DOMContentLoaded", () => {

    const form = document.querySelector(".contact-form");

    if (!form) return;

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const button = form.querySelector("button");

        if (!button) return;

        const originalText = button.innerText;

        button.innerText = "Sending...";

        setTimeout(() => {
            button.innerText = "Message Sent ✓";

            setTimeout(() => {
                button.innerText = originalText;
                form.reset();
            }, 1500);

        }, 1200);

    });

});