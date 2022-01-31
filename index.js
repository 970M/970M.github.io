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

// const navBar = document.querySelector(".navbar");
// console.log(navBar);

// window.addEventListener("scroll", function () {
//     const scroll = this.document.documentElement.scrollTop;
//     console.log(scroll);

//     if (scroll > 100) {
//         // navBar.style.backgroundColor = "var(--dark1)";
//         navBar.style.backgroundColor = "black";
//         // navBar.style.background =
//         //     "url(./assets/image-11.jpg) fixed center/cover";
//         // navBar.style.borderBottom = "solid 2px var(--dark3)";
//         navBar.style.opacity = "0.95";
//         navBar.style.filter = "drop-shadow(0px 2px 4px var(--dark1))";
//         navBar.style.transition = "all 0.5s ease-out";
//     } else {
//         navBar.style.backgroundColor = "";
//         navBar.style.borderBottom = "";
//         navBar.style.opacity = "";
//         navBar.style.filter = "";
//         navBar.style.background = "";
//         navBar.style.transition = "all 0.5s ease-out";
//     }
// });

(function () {
    var scrollY = function () {
        return window.scrollY;
    };

    // --- Variables
    // Calculs initials
    var element = document.querySelector(".menu");
    var rect = element.getBoundingClientRect();
    var top = rect.top + window.scrollY;

    // Creer un élément fake
    var fake = document.createElement("div");
    fake.style.with = rect.width + "px";
    fake.style.height = rect.heigth + "px";

    // --- Fonctions
    var onScroll = function () {
        var hasScrollClass = element.classList.contains("fixed");
        // if (element.getBoundingClientRect().top <= 0) {
        if (window.scrollY > top && !hasScrollClass) {
            console.log("Add");

            // Ajouter une class fixed
            element.classList.add("fixed");
            element.style.width = rect.width + "px";
            // Recuperer l'élément parent et lui ajout fake avant element
            element.parentNode.insertBefore(fake, element);
        } else if (window.scrollY <= top && hasScrollClass) {
            console.log("Remove");
            // Supprimer la class fixed
            element.classList.remove("fixed");
            element.parentNode.removeChild(fake);
        }
    };

    var onResize = function () {
        // Défaire le style
        element.style.width = "auto";
        element.classList.remove("fixed");
        fake.style.display = "none";
        // Recalculer les positions
        rect = element.getBoundingClientRect();
        top = rect.top + window.scrollY;
        // Remettre le style
        fake.style.with = rect.width + "px";
        fake.style.height = rect.height + "px";
        onScroll();
    };
    // --- Listener
    window.addEventListener("scroll", onScroll);
    window.addEventListener("resize", onResize);
})();
