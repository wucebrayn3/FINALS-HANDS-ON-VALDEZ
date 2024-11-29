let fnH1 = document.getElementById("fn");
let lnH1 = document.getElementById("ln");

let myFn = "SAMUEL";
let myLn = "VALDEZ";
let wc = "WELCOME";

let navbar = document.getElementById("nav-bar");
navbar.style.display = "none"
navbar.style.opacity = "0"

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
}

async function showNavBar() {
    await delay(5500)
    navbar.style.display = ""
    navbar.style.opacity = "0"
    await delay(500)
    navbar.style.opacity = "1"
    navbar.style.transition = ""
}

Promise.all([showFn(), showLn(), cls(fnH1, myFn, 40, 5000),cls(lnH1, myLn, 30, 4900), welcome(), showNavBar()]);

navbar.addEventListener("mouseenter", ()=>{
    navbar.style.gap = "15%"
})
navbar.addEventListener("mouseleave", ()=>{
    navbar.style.gap = ""
})




async function iThinkThisIsATooltip(input, basis){
    wc = input;
    if (lnH1.textContent == wc){
        return
    }

    for (i = 0; i < input.length; i++){
        lnH1.textContent = basis.slice(0, input.length - i - 1)
        await delay(50)
    }

    await delay(250)

    for (i = 0; i < input.length; i++){
        lnH1.textContent += wc[i]
        await delay(30)
    }
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
    })
    a.addEventListener("mouseleave", ()=>{
        a.querySelectorAll("p").forEach(b=>{
            b.style.marginRight = ""
            b.style.marginLeft = ""
        })
    })
})