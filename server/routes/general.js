import express from 'express';
import { getUser, getDashboardStats } from '../controllers/general.js';
import  { logout, postLogin, test }  from "../controllers/auth.js";
import ensureAuth from "../middleware/auth.js";

const router = express.Router();

router.get('/user/:id', getUser);
router.get('/dashboard',  ensureAuth,getDashboardStats);

router.post("/login", postLogin);
router.get("/test", test);
router.get("/logout", logout);

export default router;