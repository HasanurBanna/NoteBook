import express from "express";
import { authRouter } from "../modules/auth/auth.routes";

const router = express.Router();

const routers = [
    {
        path: "/auth",
        route: authRouter,
    },
    // {
    //     path: "/user",
    //     route: ,
    // },
    // {
    //     path: "/note",
    //     route: ,
    // },
    // {
    //     path: "/tag",
    //     route: ,
    // },

];


routers.forEach((r) => router.use(r.path, r.route));

export const allRoutes = router;