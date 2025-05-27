import express from "express";
import validateRequest from "../../middlewares/validateRequest";
import { CustomerValidation } from "./customer_validationZodSchema";
import { CustomerControllers } from "./customer_controller";

const router = express.Router();

// create a customer
router.post(
  "/",
  validateRequest(CustomerValidation.createCustomerValidationSchema),
  CustomerControllers.createCustomer
);

export const CustomerRoutes = router;
