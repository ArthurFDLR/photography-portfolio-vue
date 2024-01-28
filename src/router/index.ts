import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import NavigationView from "../views/NavigationView.vue";
import { GalleriesWrapper } from "@/utils/galleriesWrapper";

const allowedgalleryName = GalleriesWrapper.getPaths();

const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        name: "home",
        component: NavigationView,
    },
    {
        path: "/gallery/:galleryKey",
        name: "gallery",

        component: () => import("../views/GalleryView.vue"),
        beforeEnter: (to, from, next) => {
            if (allowedgalleryName.includes(to.params.galleryKey as string)) {
                next();
            } else {
                next({
                    name: "NotFound",
                    params: { pathMatch: to.path.substring(1).split("/") },
                });
            }
        },
    },
    {
        path: "/:pathMatch(.*)*",
        name: "NotFound",
        component: () => import("../views/NotFound.vue"),
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
