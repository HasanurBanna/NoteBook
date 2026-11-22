import express from "express";

const router = express.Router();

const routers = [
    {
        path: "/auth",
        route: ,
    },
    {
        path: "/user",
        route: ,
    },
    {
        path: "/note",
        route: ,
    },
    {
        path: "/tag",
        route: ,
    },

];


routers.forEach((r) => router.use(r.path, r.route));

export const allRoutes = router;