const text = document.querySelector("#name-tag");
const strText = text.textContent;
const splitText = strText.split("");

text.textContent = "";

for (let i = 0; i < splitText.length; i++) {
    text.innerHTML += "<span>" + splitText[i] + "</span>"; 
}

let counter = 0;
let timer = setInterval(onTick, 50);

function onTick() {
    const span = text.querySelectorAll("span")[counter];
    span.classList.add("fade");

    if ((span.textContent == " ")) { // BUGFIX !!!!!
        span.classList.add("fixedWidth");
    }

    counter++;
    if(counter === splitText.length) {
        clearInterval(timer);
        timer = null;
        return; 
    }
}