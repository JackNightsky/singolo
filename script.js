const HEADER_MAIN_MENU = document.getElementById("header-main-menu");
const PORTFOLIO_MENU = document.getElementById("portfolio-menu");
const PORTFOLIO_GALERY = document.getElementById("portfolio-galery");
const FORM_SEND = document.getElementById("formSend");
const CLOSE_BUTTON = document.getElementById("close-popup-btn")
const galery = Array.from(PORTFOLIO_GALERY.children);
const scrollLeft = document.getElementById("slider-control-left");
const scrollRight = document.getElementById("slider-control-right");

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

FORM_SEND.addEventListener("click", (event) => {
    const form = document.getElementById("feedback-form");
    const name = document.getElementById("form-name").value.toString();
    const email = document.getElementById("form-email").value.toString();
    if (!name || !email) return false;

    const subject = document.getElementById("form-subject").value.toString() || "Без темы";
    const describe = document.getElementById("form-describe").value.toString() || "Без описания";
    const popup = document.getElementById("message-block");
    let result = [name,email,subject,describe];
    popup.querySelectorAll(".result").forEach((el,idx) => {
        if (result[idx] === "Без темы") el.parentElement.innerHTML = result[idx];
        if (result[idx] === "Без описания") el.parentElement.innerHTML = result[idx];
        else el.innerHTML = result[idx];
    });

    popup.classList.remove('hidden');
    event.preventDefault();
});

CLOSE_BUTTON.addEventListener("click", (event) => {
    const form = document.getElementById("feedback-form");
    const popup = document.getElementById("message-block");
    popup.querySelectorAll(".result").forEach(el => el.innerHTML = "");
    form.reset();
    popup.classList.add('hidden');
});