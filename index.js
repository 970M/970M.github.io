const blocs = document.querySelectorAll(".categ");

blocs.forEach((element) => {
    // console.log(element);
    element.addEventListener("click", (e) => {
        console.log(e);

        blocs.forEach((elem) => {
            elem.classList.remove("active");
        });

        element.classList.add("active");
    });
});

const navBar = document.querySelector(".navbar");
console.log(navBar);

window.addEventListener("scroll", function () {
    const scroll = this.document.documentElement.scrollTop;
    console.log(scroll);

    if (scroll > 100) {
        // navBar.style.backgroundColor = "var(--dark1)";
        navBar.style.backgroundColor = "black";
        // navBar.style.background =
        //     "url(./assets/image-11.jpg) fixed center/cover";
        // navBar.style.borderBottom = "solid 2px var(--dark3)";
        navBar.style.opacity = "0.95";
        navBar.style.filter = "drop-shadow(0px 2px 4px var(--dark1))";
        navBar.style.transition = "all 0.5s ease-out";
    } else {
        navBar.style.backgroundColor = "";
        navBar.style.borderBottom = "";
        navBar.style.opacity = "";
        navBar.style.filter = "";
        navBar.style.background = "";
        navBar.style.transition = "all 0.5s ease-out";
    }
});
