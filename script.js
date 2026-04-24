// ===== Typing Effect =====
const text = "مصمم مواقع احترافي 🚀";
let i = 0;
const el = document.getElementById("typing");

function typing(){
    if(i < text.length){
        el.innerHTML += text.charAt(i);
        i++;
        setTimeout(typing, 80);
    }
}
typing();

// ===== Scroll Animation =====
const sections = document.querySelectorAll(".section");

window.addEventListener("scroll", ()=>{
    sections.forEach(sec=>{
        const pos = sec.getBoundingClientRect().top;
        if(pos < window.innerHeight - 100){
            sec.classList.add("show");
        }
    });
});

// ===== Cursor =====
const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", e=>{
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";
});
