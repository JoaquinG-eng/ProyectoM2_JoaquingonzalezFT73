import { Router } from "express";

import userroutes from "../routes/Authors.Routes.js "; 

const router = Router(); 

router.use("/authors", userroutes); 

export default router; 
