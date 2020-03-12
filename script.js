const headerMainMenu = document.getElementById("header-main-menu");

;

headerMainMenu.addEventListener('click', (event) => {
    headerMainMenu.querySelectorAll('a')
                  .forEach(el => el.classList.remove('active'));
    event.target.classList.add("active");
})