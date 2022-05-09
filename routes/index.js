import express from "express";

import authRouter from "./authroute";

const router = express.Router();

router.use(authRouter);


export default router