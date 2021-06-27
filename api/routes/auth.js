import { Router } from "express";
import authController from '../../controllers/authController';
import { authVerify } from "../../middlewares/authVerify";
import { singinScheme } from "../middlewares/signinScheme";

const route = Router();

export default (app) => {
    app.use('/auth', route);
    route.post('/signin', [singinScheme], authController.signin);
    route.post('/signup', authController.signup);
    route.post('/check', [authVerify], authController.check);
};