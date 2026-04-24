
// typing effect
const text="شاهين";
let i=0;
const el=document.getElementById("name");

function typing(){
if(el && i<text.length){
el.innerHTML+=text.charAt(i);
i++;
setTimeout(typing,150);
}
}
typing();

// menu
function toggleMenu(){
document.querySelector(".menu").classList.toggle("active");
}

// dark mode
function toggleDark(){
document.body.classList.toggle("dark");
}
