
// اسم متحرك
const text="شاهين";
let i=0;
const el=document.getElementById("name");

function typing(){
if(el && i<text.length){
el.innerHTML+=text[i];
i++;
setTimeout(typing,150);
}
}
typing();

// القائمة
function toggleMenu(){
document.querySelector(".menu").classList.toggle("active");
}

// دارك مود
function toggleDark(){
document.body.classList.toggle("dark");
}
