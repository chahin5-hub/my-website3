// اسم متحرك
const nameText = "شاهين";
let i=0;
const nameEl=document.getElementById("name");

function typingName(){
if(nameEl && i<nameText.length){
nameEl.innerHTML+=nameText[i];
i++;
setTimeout(typingName,150);
}
}
typingName();

// typing
const text="مصمم مواقع احترافي 🚀";
let j=0;
const el=document.getElementById("typing");

function typing(){
if(el && j<text.length){
el.innerHTML+=text[j];
j++;
setTimeout(typing,80);
}
}
typing();

// dark mode
function toggleDark(){
document.body.classList.toggle("dark");
}

// menu
function toggleMenu(){
document.querySelector(".menu").classList.toggle("active");
}

// cursor
const cursor=document.querySelector(".cursor");
document.addEventListener("mousemove",e=>{
if(cursor){
cursor.style.left=e.clientX+"px";
cursor.style.top=e.clientY+"px";
}
});
