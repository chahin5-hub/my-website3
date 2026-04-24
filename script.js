// Typing
const text="شـاهـيـن";
let i=0;
const el=document.getElementById("name");

function typing(){
if(el && i<text.length){
el.innerHTML+=text.charAt(i);
i++;
setTimeout(typing,120);
}}
typing();

// Dark mode
function toggleDark(){
document.body.classList.toggle("dark");
}

// Navbar scroll
window.addEventListener("scroll",()=>{
const nav=document.querySelector("nav");
if(window.scrollY>50){nav.classList.add("scrolled")}
else{nav.classList.remove("scrolled")}
});

// Cursor
const cursor=document.createElement("div");
cursor.classList.add("cursor");
document.body.appendChild(cursor);

document.addEventListener("mousemove",(e)=>{
cursor.style.left=e.clientX+"px";
cursor.style.top=e.clientY+"px";
});
