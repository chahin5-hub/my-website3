// Typing
const text = "شـاهـيـن";
let i = 0;
const el = document.getElementById("name");

function typing(){
    if(i < text.length){
        el.innerHTML += text.charAt(i);
        i++;
        setTimeout(typing,120);
    }
}
typing();

// Scroll animation
const elements = document.querySelectorAll('.section');
window.addEventListener('scroll',()=>{
    elements.forEach(el=>{
        if(el.getBoundingClientRect().top < window.innerHeight - 100){
            el.style.opacity = 1;
            el.style.transform = "translateY(0)";
        }
    });
});


