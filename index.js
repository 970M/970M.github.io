// ----------------------------------
// Data
//-----------------------------------

const xps = [
    {
        id: "Safran",
        description:
            "Développement d’un système de détection de piétons par caméra infra-rouge pour des applications en automobile (projet PreVENT).",
        skills: [
            "C/C++",
            "Visual.NET",
            "Matlab",
            "OpenCV",
            "Matrox Image Library (MIL)",
            "Reconnaissance de Forme",
        ],
        img: "assets/img/safran.JPG",
    },
    {
        id: "Johnson Controls",
        description:
            "Pilote fonctionnel pour un projet de conception d'outils de diagnostique automobile (PROXIA)",
        skills: ["C/C++", "Bash"],
        img: "assets/img/johnson-controls.JPG",
    },
    {
        id: "Safran",
        description:
            "Développement d’un système de détection de piétons par caméra infra-rouge pour des applications en automobile (projet PreVENT).",
        skills: [
            "C/C++",
            "Visual.NET",
            "Matlab",
            "OpenCV",
            "Matrox Image Library (MIL)",
            "Reconnaissance de Forme",
        ],
        img: "assets/img/safran.JPG",
    },
    {
        id: "Safran",
        description:
            "Développement d’un système de détection de piétons par caméra infra-rouge pour des applications en automobile (projet PreVENT).",
        skills: [
            "C/C++",
            "Visual.NET",
            "Matlab",
            "OpenCV",
            "Matrox Image Library (MIL)",
            "Reconnaissance de Forme",
        ],
        img: "assets/img/safran.JPG",
    },
];

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
    console.log(element);
    var rect = element.getBoundingClientRect();
    var top = rect.top + scrollY();
    // --- Fonctions
    var onScroll = function () {
        console.log(window.scrollY);
        var hasScrollClass = element.classList.contains("fixed");
        if (scrollY() > top && !hasScrollClass) {
            element.classList.add("fixed");
            element.style.width = rect.width + "px";
        } else if (scrollY() <= top && hasScrollClass) {
            element.classList.remove("fixed");
        }
    };

    // var onResize = function () {
    //     // Défaire le style
    //     element.style.width = "auto";
    //     element.classList.remove("fixed");
    //     fake.style.display = "none";
    //     // Recalculer les positions
    //     rect = element.getBoundingClientRect();
    //     top = rect.top + window.scrollY;
    //     // Remettre le style
    //     fake.style.with = rect.width + "px";
    //     fake.style.height = rect.height + "px";
    //     onScroll();
    // };

    // --- Listener
    window.addEventListener("scroll", onScroll);
    window.addEventListener("resize", onResize);
})();
