import { createRouter, createWebHistory } from 'vue-router'
import Avaleht from "../views/Avaleht.vue";
import Blogi from "../views/Blogi.vue";
import Seosed from "../views/Seosed.vue";
import Kontakt from "../views/Kontakt.vue";
import Meist from "../views/Meist.vue";
import LippudeMäng from "../views/LippudeMäng.vue";


const routes = [{
        path: '/',
        name: 'Avaleht',
        component: () =>
            import ("../views/Avaleht.vue")
    },
    {
        path: "/blogi",
        name: "Blogi",
        component: Blogi,
    },
    {
        path: "/seoste-andmebaasid",
        name: "Seosed",
        component: Seosed,
    },
    {
        path: "/meist",
        name: "Meist",
        component: Meist,
    },
    {
        path: "/kontakt",
        name: "Kontakt",
        component: Kontakt,
    },
    {
        path: "/lippude-mäng",
        name: "LippudeMäng",
        component: LippudeMäng,
    },
    { //will route to Avaleht view if none of the previous routes apply
        path: "/:catchAll(.*)",
        name: "Avaleht",
        component: Avaleht,
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})



export default router