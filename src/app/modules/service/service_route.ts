import express from "express";
import { ServiceControllers } from "./service_controller";
import validateRequest from "../../middlewares/validateRequest";
import { ServiceValidation } from "./service_validationZodSchema";

const router = express.Router();

// create a service route.
router.post(
  "/",
  validateRequest(ServiceValidation.createServiceValidationZodSchema),
  ServiceControllers.createService
);

// fetch all services
router.get("/", ServiceControllers.getAllServices);

export const ServiceRoutes = router;
