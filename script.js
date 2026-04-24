// typing
const text = "منصة تصميم مواقع احترافية 👑";
let i = 0;
const el = document.getElementById("typing");

function type(){
if(i < text.length){
el.innerHTML += text.charAt(i);
i++;
setTimeout(type,80);
}
}
type();

// cursor
const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", e=>{
cursor.style.left = e.clientX+"px";
cursor.style.top = e.clientY+"px";
});

