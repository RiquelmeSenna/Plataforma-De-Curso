import { Router } from "express";
import * as categoryController from "../controllers/categoryController";
import { authMiddleware } from "../middlewares/authMidleware";

const categoryRouter = Router();

categoryRouter.get('/', categoryController.getCategories)
categoryRouter.get('/search', categoryController.getCategoryByName)
categoryRouter.get('/:id', categoryController.getCategory)
categoryRouter.post('/', authMiddleware, categoryController.createCategory)
categoryRouter.put('/:id', authMiddleware, categoryController.updateCategory)
categoryRouter.delete('/:id', authMiddleware, categoryController.deleteCategory)

export default categoryRouter