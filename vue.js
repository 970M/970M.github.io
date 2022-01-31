// ----------------------------------
// App
// ----------------------------------
const app = Vue.createApp({});

// ----------------------------------
// Components
// ----------------------------------
app.component("nav-bar", {
    template: "#nav-bar",
    name: "NavBar",
});
const Note = app.component("nav-bar");

// ----------------------------------
// Router
// ----------------------------------

// Pages components

// Home
app.component("home", {
    template: "#home",
    name: "Home",
});
const Home = app.component("home");

// Works
app.component("works", {
    template: "#works",
    name: "Works",
});
const Works = app.component("works");

// Skills
app.component("skills", {
    template: "#skills",
    name: "Skills",
});
const Skills = app.component("skills");

// Contact
app.component("contact", {
    template: "#contact",
    name: "Contact",
});
const Contact = app.component("contact");

// 404
app.component("NotFound", {
    template: "#not-found",
    name: "NotFound",
});
const NotFound = app.component("NotFound");

// Router
const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes: [
        { path: "/", component: Home },
        { path: "/works", component: Works },
        { path: "/Skills", component: Skills },
        { path: "/contact", component: Contact },
        { path: "/:pathMatch(.*)", component: NotFound },
    ],
});
app.use(router);
//
app.mount("#app");
