const HEADER_MAIN_MENU = document.getElementById("header-main-menu");
const PORTFOLIO_MENU = document.getElementById("portfolio-menu");
const PORTFOLIO_GALERY = document.getElementById("portfolio-galery");
const FORM = document.getElementById("feedback-form");
const FORM_SEND = document.getElementById("formSend");
const CLOSE_BUTTON = document.getElementById("close-popup-btn")
const galery = Array.from(PORTFOLIO_GALERY.children);
const scrollLeft = document.getElementById("slider-control-left");
const scrollRight = document.getElementById("slider-control-right");
const btnHome = document.getElementsByClassName("phone-btn");

// HEADER

HEADER_MAIN_MENU.addEventListener('click', (event) => {
    HEADER_MAIN_MENU.querySelectorAll('a')
                  .forEach(el => el.classList.remove("active"));
    event.target.classList.add("active");
});

// SLIDER
function changeCard() {
    const cardsConteiner = document.getElementById("cards-container");
    cardsConteiner.querySelectorAll(".card").forEach(el => {
        el.classList.toggle("active");
        if (el.classList.contains("active")) {
            document.getElementById("slider").style.backgroundColor = el.classList[0];
        }
    });
}

scrollLeft.addEventListener("click", changeCard);

scrollRight.addEventListener("click", changeCard);

[...btnHome].forEach(el => el.addEventListener("click", (event) => {
    event.target.parentElement.querySelector('.screen').classList.toggle("hidden");
}));





// PORTFOLIO

PORTFOLIO_MENU.addEventListener('click', (event) => {
    const target = event.target;
    PORTFOLIO_MENU.querySelectorAll('.menu-item')
                  .forEach(el => el.classList.remove("active"));
    target.classList.add("active");
    
    if (target.innerHTML.toLowerCase() === "all") {
        while (PORTFOLIO_GALERY.firstChild) {
            PORTFOLIO_GALERY.removeChild(PORTFOLIO_GALERY.firstChild);
        }
        galery.forEach(el => PORTFOLIO_GALERY.append(el));
    }
    else {
        let listChild = Array.from(PORTFOLIO_GALERY.children);
        while (PORTFOLIO_GALERY.firstChild) {
            PORTFOLIO_GALERY.removeChild(PORTFOLIO_GALERY.firstChild);
        }
        let tmp = listChild.pop();
        listChild.unshift(tmp);
        listChild.forEach(el => PORTFOLIO_GALERY.append(el));
    }
});

PORTFOLIO_GALERY.addEventListener('click', (event) => {
    PORTFOLIO_GALERY.querySelectorAll('.galery-item')
                    .forEach(el => el.classList.remove("active"));
    if (event.target.classList.contains("galery-item")) {
        event.target.classList.add("active");
    }
});

// FORMS

FORM.addEventListener("submit", (e) => e.preventDefault());

FORM_SEND.addEventListener("click", (event) => {
    const name = document.getElementById("form-name").value.toString();
    const email = document.getElementById("form-email").value.toString();
    if (!name || !email || !email.match(/[^@ \t\r\n]+@[^@ ! \t\r\n]+\.[^@ \t\r\n]+/)) return false;

    const subject = document.getElementById("form-subject").value.toString();
    const describe = document.getElementById("form-describe").value.toString();
    const popup = document.getElementById("message-block");
    let result = [name,email,subject,describe];
    console.log(result);
    document.getElementById("name-value").innerHTML = `Name: ${name}`;
    document.getElementById("email-value").innerHTML = `Email: ${email}`;
    document.getElementById("subject-value").innerHTML = !subject ? "No subject" :  `Subject: ${subject}`;
    document.getElementById("description-value").innerHTML = !describe ? "No describe" : `Describe: ${describe}`;
    popup.classList.remove('hidden');
    
});

CLOSE_BUTTON.addEventListener("click", (event) => {
    const popup = document.getElementById("message-block");
    
    FORM.reset();
    popup.classList.add('hidden');
});