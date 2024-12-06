let fnH1 = document.getElementById("fn");
let lnH1 = document.getElementById("ln");

let namecont = document.getElementById("namecont");

let myFn = "SAMUEL";
let myLn = "VALDEZ";
let wc = "WELCOME";

let inst = document.getElementById("inst");

let navbar = document.getElementById("nav-bar");
navbar.style.display = "none"
navbar.style.opacity = "0"

let arrowdown = document.getElementById("arrowdown");
arrowdown.style.display = "none"
arrowdown.style.opacity = "0"

let foot = document.querySelector("footer");

let homecontent = document.getElementById("home-content");
let aboutcontent = document.getElementById("about-content");
let skillscontent = document.getElementById("skills-content");
let workscontent = document.getElementById("works-content");
let contactcontent = document.getElementById("contact-content");


function delay(ms){
    return new Promise(resolve=>setTimeout(resolve, ms));
}

async function showFn() {
    await delay(1500);
    for (let i = 0; i < myFn.length; i++){
        fnH1.textContent += myFn[i]
        await delay(50)
    }
}
async function showLn() {
    await delay(1700);
    for (let i = 0; i < myLn.length; i++){
        lnH1.textContent += myLn[i]
        await delay(80)
    }
}

async function cls(targ, basis, delaytime, start) {
    await delay(start)
    for (let i = 1; i <= myFn.length; i++){
        targ.textContent = basis.slice(0, myFn.length - i)
        await delay(delaytime)
    }
}

async function welcome() {
    await delay(5500)
    for (let i = 0; i < wc.length; i++){
        lnH1.textContent += wc[i];
        await delay(50)
    }
    inst.textContent = "HOVER ON THE NAVIGATION BAR"
}

async function showNavBar() {
    await delay(5500)
    navbar.style.display = ""
    navbar.style.opacity = "0"
    arrowdown.style.display = ""
    await delay(500)
    navbar.style.opacity = "1"
    navbar.style.transition = ""
    arrowdown.style.opacity = "1"
}

Promise.all([showFn(), showLn(), cls(fnH1, myFn, 40, 5000),cls(lnH1, myLn, 30, 4900), welcome(), showNavBar()]);

lnH1.addEventListener("click", ()=>{
    namecont.style.position = "absolute"
    namecont.style.top = "100px"
    lnH1.style.fontSize = "5vw"
    if (lnH1.textContent == "HOME"){
        homecontent.style.left = "0"
        homecontent.style.opacity = "1"
    }
    else if (lnH1.textContent == "ABOUT"){
        aboutcontent.style.left = "0"
        aboutcontent.style.opacity = "1"
    }
    else if (lnH1.textContent == "SKILLS"){
        skillscontent.style.left = "0"
        skillscontent.style.opacity = "1"
    }
    else if (lnH1.textContent == "WORKS"){
        workscontent.style.left = "0"
        workscontent.style.opacity = "1"
    }
    else if (lnH1.textContent == "CONTACT"){
        contactcontent.style.left = "0"
        contactcontent.style.opacity = "1"
    }
})

navbar.addEventListener("mouseenter", ()=>{
    navbar.style.gap = "15%"
})
navbar.addEventListener("mouseleave", ()=>{
    navbar.style.gap = ""
})

let isBusy = false;

async function iThinkThisIsATooltip(input, basis){
    const wc = input;
    if (lnH1.textContent == wc || isBusy){
        return
    }

    isBusy = true;

    for (i = 0; i < input.length; i++){
        lnH1.textContent = basis.slice(0, input.length - i - 1)
        await delay(50)
    }

    await delay(250)

    for (i = 0; i < input.length; i++){
        lnH1.textContent += wc[i]
        await delay(30)
    }

    isBusy = false;
}

async function cls2() {
    
}

let navbarlinks = document.querySelectorAll(".links");

navbarlinks.forEach(a=>{
    a.addEventListener("mouseenter", ()=>{
        a.querySelectorAll("p").forEach(b=>{
            b.style.marginRight = "0.5em"
            b.style.marginLeft = "0.5em"
        })
    iThinkThisIsATooltip(a.id, wc)
    namecont.style.position = ""
    namecont.style.top = ""
    lnH1.style.fontSize = ""
    homecontent.style.left = "-100%"
    aboutcontent.style.left = "-100%"
    skillscontent.style.left = "-100%"
    workscontent.style.left = "-100%"
    contactcontent.style.left = "-100%"
    homecontent.style.opacity = "0"
    aboutcontent.style.opacity = "0"
    skillscontent.style.opacity = "0"
    workscontent.style.opacity = "0"
    contactcontent.style.opacity = "0"
    })
    a.addEventListener("mouseleave", ()=>{
        a.querySelectorAll("p").forEach(b=>{
            b.style.marginRight = ""
            b.style.marginLeft = ""
        })
    })
})



lnH1.addEventListener("mouseenter", ()=>{
    if (lnH1.textContent == "HOME"){
        inst.style.opacity = "0"
        inst.textContent = "You are HOME."
        inst.style.opacity = ""
    }
    else if (lnH1.textContent == "ABOUT"){
        inst.style.opacity = "0"
        inst.textContent = "Know more..."
        inst.style.opacity = "1"
    }
    else if (lnH1.textContent == "SKILLS"){
        inst.style.opacity = "0"
        inst.textContent = "Go deeper..."
        inst.style.opacity = "1"
    }
    else if (lnH1.textContent == "WORKS"){
        inst.style.opacity = "0"
        inst.textContent = "Mes oeuvres"
        inst.style.opacity = "1"
    }
    else if (lnH1.textContent == "CONTACT"){
        inst.style.opacity = "0"
        inst.textContent = "Get in touch."
        inst.style.opacity = "1"
    }
    else if (lnH1.textContent == "WELCOME"){
        inst.style.opacity = "0"
        inst.textContent = "Go where you DESIRE."
        inst.style.opacity = "1"
    }
})
lnH1.addEventListener("mouseleave", ()=>{
    if (lnH1.textContent == "HOME"){
        inst.textContent = "GO SOMEWHERE"
    }
    else{
        inst.style.opacity = "0"
        inst.textContent = ""
    }
})

arrowdown.addEventListener("click", ()=>{
    foot.style.transition = "0.3s"
    foot.style.bottom = "0"
})

foot.addEventListener("mouseleave", ()=>{
    foot.style.transition = "1s"
    foot.style.bottom = ""
})

let fb = document.getElementById("fb");
let ig = document.getElementById("ig");
let gh = document.getElementById("gh");

fb.addEventListener("mouseenter", ()=>{
    fb.src = "images/facebook colored.png"
})
fb.addEventListener("mouseleave", ()=>{
    fb.src = "images/facebook.png"
})

ig.addEventListener("mouseenter", ()=>{
    ig.src = "images/instagram colored.png"
})
ig.addEventListener("mouseleave", ()=>{
    ig.src = "images/instagram.png"
})

gh.addEventListener("mouseenter", ()=>{
    gh.src = "images/github colored.png"
})
gh.addEventListener("mouseleave", ()=>{
    gh.src = "images/github.png"
})

let myfb = document.getElementById("myfb");
let myig = document.getElementById("myig");
let mygh = document.getElementById("mygh");
let myfb2 = document.getElementById("fb2");
let myig2 = document.getElementById("ig2");
let mygh2 = document.getElementById("gh2");

myfb.addEventListener("click", ()=>{
    window.location.href = "https://www.facebook.com/samuel.valdez.98892/"
    window.location.href.targ = "_blank"
})
myig.addEventListener("click", ()=>{
    window.location.href = "https://www.instagram.com/monsieursamm/"
})
mygh.addEventListener("click", ()=>{
    window.location.href = "https://github.com/wucebrayn3"
})
myfb2.addEventListener("click", ()=>{
    window.location.href = "https://www.facebook.com/samuel.valdez.98892/"
    window.location.href.targ = "_blank"
})
myig2.addEventListener("click", ()=>{
    window.location.href = "https://www.instagram.com/monsieursamm/"
})
mygh2.addEventListener("click", ()=>{
    window.location.href = "https://github.com/wucebrayn3"
})