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

// floating toggle
document.querySelector(".main-btn").onclick = () => {
let menu = document.querySelector(".floating-menu");
menu.style.display = menu.style.display === "flex" ? "none" : "flex";
};
