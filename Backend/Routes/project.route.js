import { Router } from "express";
import * as projectController from "../Controller/project.controller.js";
import { body } from "express-validator";
import * as authMiddleware from "../middleware/auth.middleware.js";

const router = Router();
router.post(
  "/create",
  authMiddleware.authUser,
  body("name").isString().withMessage("Project name is required"),
  projectController.createProjectController
);
router.get(
  "/all",
  authMiddleware.authUser,
  projectController.getAllProjectsController
);
router.put(
  "/add-user",
  authMiddleware.authUser,
  body("projectId").isString().withMessage("Project ID is required"),
  body("users")
    .isArray({ min: 1 })
    .withMessage("Users array is required")
    .bail()
    .custom((users) => users.every((user) => typeof user === "string"))
    .withMessage("Users must be an array of strings"),
  projectController.addUserToProjectController
);
router.get('/get-project/:projectId',authMiddleware.authUser, projectController.getProjectByIdController);
export default router;
