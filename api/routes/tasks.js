import { Router } from "express";
import taskController from '../../controllers/taskController';
import { authVerify } from "../../middlewares/authVerify";

const route = Router();

export default (app) => {

    app.use('/tasks', route);

    route.get('/', [ authVerify ], taskController.getAll);

    route.get('/:id', [ authVerify ], taskController.detail);

    route.post('/create', [ authVerify ], taskController.create);

    route.put('/status/:id', [ authVerify ], taskController.updateStatus);
}