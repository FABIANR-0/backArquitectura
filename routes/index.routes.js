import { Router } from "express";

import Product from "./prodcut.routes.js";
import Auth from "./auth.routes.js";

const router = Router();

const generalRoutes=[
    {path:'/product', route:Product},
    {path:'/auth', route:Auth}
]

generalRoutes.forEach(route=>{
    router.use(route.path,route.route)
})

export default router;