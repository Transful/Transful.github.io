import { createRouter, createWebHistory } from 'vue-router'
import Avaleht from "../views/Avaleht.vue";
import Pealinnad from "../views/Pealinnad.vue";
import Lipud from "../views/Lipud.vue";
import Tehnikad from "../views/Tehnikad.vue";
import Meie from "../views/Meie.vue";
import LippudeMäng from "../views/LippudeMäng.vue";
import testmäng from "../views/testmäng.vue";
import PealinnadeMäng from "../views/PealinnadeMäng.vue";


const routes = [{
        path: '/',
        name: 'Avaleht',
        component: () =>
            import ("../views/Avaleht.vue")
    },
    {
        path: "/pealinnad",
        name: "Pealinnad",
        component: Pealinnad,
    },
    {
        path: "/lipud",
        name: "Lipud",
        component: Lipud,
    },
    {
        path: "/tehnikad",
        name: "Tehnikad",
        component: Tehnikad,
    },
    {
        path: "/meie",
        name: "Meie",
        component: Meie,
    },
    {
        path: "/lippude-mäng",
        name: "LippudeMäng",
        component: LippudeMäng,
    },
    {
        path: "/testmäng",
        name: "testmäng",
        component: testmäng,
    },
    {
        path: "/pealinnade-mäng",
        name: "PealinnadeMäng",
        component: PealinnadeMäng,
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