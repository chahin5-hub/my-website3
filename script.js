
// كتابة الاسم
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

// menu mobile
function toggleMenu(){
    document.querySelector(".menu").classList.toggle("active");
}

// fade animation
const elements=document.querySelectorAll(".fade-in");

window.addEventListener("scroll",()=>{
    elements.forEach(el=>{
        const pos=el.getBoundingClientRect().top;
        if(pos < window.innerHeight - 100){
            el.classList.add("show");
        }
    });
});
