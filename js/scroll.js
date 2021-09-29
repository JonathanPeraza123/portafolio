const links = document.querySelectorAll(".navbar .navbar-collapse div a");
const MiWork = document.getElementById("work");
    MiWork.addEventListener("click", clickHandler)

for (const link of links) {
  link.addEventListener("click", clickHandler);
}

function clickHandler(e) {
    e.preventDefault();
    const href = this.getAttribute("href");
    const offsetTop = document.querySelector(href).offsetTop;
    scroll({
        top: offsetTop-35,
        behavior: "smooth"
        });
}