// ====== TYPING EFFECT ======
const text = "شاهين";
let i = 0;
const el = document.getElementById("name");

function typing(){
    if(el && i < text.length){
        el.innerHTML += text.charAt(i);
        i++;
        setTimeout(typing, 120);
    }
}
typing();


// ====== MENU ======
function toggleMenu(){
    document.querySelector(".menu").classList.toggle("active");
}


// ====== DARK MODE ======
function toggleDark(){
    document.body.classList.toggle("dark");
}


// ====== NAV SCROLL ======
window.addEventListener("scroll", ()=>{
    const nav = document.querySelector("nav");
    if(window.scrollY > 50){
        nav.classList.add("scrolled");
    }else{
        nav.classList.remove("scrolled");
    }
});


// ====== CURSOR EFFECT ======
const cursor = document.createElement("div");
cursor.classList.add("cursor");
document.body.appendChild(cursor);

document.addEventListener("mousemove",(e)=>{
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";
});
