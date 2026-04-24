
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family:'Cairo',sans-serif;
}

body{
    background:#0f172a;
    color:#fff;
}

/* NAV */
nav{
    position:fixed;
    width:100%;
    top:0;
    background:#111827;
    display:flex;
    justify-content:space-between;
    padding:15px 40px;
    z-index:1000;
}

nav h2{
    color:#ff5a3c;
}

.menu{
    display:flex;
    gap:20px;
}

.menu a{
    color:#fff;
    text-decoration:none;
}

/* HERO */
.hero{
    height:100vh;
    background:linear-gradient(135deg,#ff5a3c,#ff9966);
    display:flex;
    align-items:center;
    justify-content:center;
    text-align:center;
}

.main-name{
    font-size:50px;
    animation: glow 2s infinite alternate;
}

@keyframes glow{
    from{ text-shadow:0 0 10px #fff;}
    to{ text-shadow:0 0 30px #000;}
}

/* SECTION */
section{
    padding:60px 20px;
}

.section-title{
    text-align:center;
    font-size:28px;
    margin-bottom:30px;
}

/* CARDS */
.cards{
    display:flex;
    justify-content:center;
    gap:20px;
    flex-wrap:wrap;
}

.card{
    background:#1e293b;
    padding:25px;
    width:250px;
    border-radius:15px;
    transition:0.3s;
}

.card:hover{
    transform:translateY(-10px) scale(1.05);
    box-shadow:0 20px 40px rgba(0,0,0,0.5);
}

/* CTA */
.cta{
    background:#ff5a3c;
    text-align:center;
    padding:50px;
}

.cta button{
    padding:15px 30px;
    border:none;
    border-radius:30px;
    background:#fff;
    color:#ff5a3c;
    cursor:pointer;
}

.cta button:hover{
    background:#000;
    color:#fff;
}

/* FADE */
.fade-in{
    opacity:0;
    transform:translateY(30px);
    transition:0.8s;
}

.fade-in.show{
    opacity:1;
    transform:translateY(0);
}
