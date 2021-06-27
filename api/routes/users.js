import { Router } from "express";
import userController from '../../controllers/userController'
import { authVerify } from "../../middlewares/authVerify";

const route = Router();

export default (app) => {

    app.use('/users', route);
    route.get('/', [ authVerify ] , userController.getAll);
    route.get('/profile', [ authVerify ], userController.profile);
}