import { createRouter, createWebHistory } from 'vue-router'
import mänguMenüü from "../views/testmäng.vue";
import mänguLõpp from "../views/mänguLõpp.vue";
import Avaleht from "../views/Avaleht.vue";
import Pealinnad from "../views/Pealinnad.vue";
import Lipud from "../views/Lipud.vue";
import Tehnikad from "../views/Tehnikad.vue";
import Meie from "../views/Meie.vue";
import LippudeMäng from "../views/LippudeMäng.vue";
import PealinnadeMäng from "../views/PealinnadeMäng.vue";
import LippudeMängRiikideNimedega from "../views/LippudeMäng2.vue";
import Postitus from "../views/postitus.vue";


const routes = [{
        path: '/',
        name: 'mänguMenüü',
        component: mänguMenüü,
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
        path: "/mänguMenüü",
        name: "mänguMenüü",
        component: mänguMenüü,
    },
    {
        path: "/pealinnade-mäng",
        name: "PealinnadeMäng",
        component: PealinnadeMäng,
    },
    {
        path: "/lippude-mäng2",
        name: "LippudeMängRiikideNimedega",
        component: LippudeMängRiikideNimedega,
    },
    {
        path: "/mänguLõpp",
        name: "mänguLõpp",
        component: mänguLõpp,
    },
    {
        path: "/postitus",
        name: "Postitus",
        component: Postitus,
    },
    { //will route to Avaleht view if none of the previous routes apply
        path: "/:catchAll(.*)",
        name: "mänguMenüü",
        component: mänguMenüü,
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})



export default router