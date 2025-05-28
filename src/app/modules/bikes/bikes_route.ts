import express from "express";
import validateRequest from "../../middlewares/validateRequest";
import { BikeValidation } from "./bikes_validationZodSchema";
import { BikeControllers } from "./bikes_controller";

const router = express.Router();

// create bike.
router.post(
  "/",
  validateRequest(BikeValidation.createBikeValidationZodSchema),
  BikeControllers.createBike
);

// fetch all bikes.
router.get("/", BikeControllers.fetchAllBikes);

export const BikeRoutes = router;
//
