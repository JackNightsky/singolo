const HEADER_MAIN_MENU = document.getElementById("header-main-menu");
const PORTFOLIO_GALERY = document.getElementById("portfolio-galery");
const FORM_SEND = document.getElementById("formSend");
const CLOSE_BUTTON = document.getElementById("close-popup-btn")

HEADER_MAIN_MENU.addEventListener('click', (event) => {
    HEADER_MAIN_MENU.querySelectorAll('a')
                  .forEach(el => el.classList.remove("active"));
    event.target.classList.add("active");
});

PORTFOLIO_GALERY.addEventListener('click', (event) => {
    PORTFOLIO_GALERY.querySelectorAll('.galery-item')
                  .forEach(el => el.classList.remove("active"));
    if (event.target.classList.contains("galery-item")) {
        event.target.classList.add("active");
    }
});

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