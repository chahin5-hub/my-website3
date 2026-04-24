// typing
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

// animation scroll
window.addEventListener("scroll",()=>{
document.querySelectorAll(".card").forEach(el=>{
let top=el.getBoundingClientRect().top;
if(top<window.innerHeight-50){
el.style.opacity=1;
el.style.transform="translateY(0)";
}
});
});

