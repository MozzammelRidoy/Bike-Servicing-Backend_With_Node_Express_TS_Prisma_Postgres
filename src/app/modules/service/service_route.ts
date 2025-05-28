import express from "express";
import { ServiceControllers } from "./service_controller";

const router = express.Router();

// create a service route.
router.post("/", ServiceControllers.createService);

export const ServiceRoutes = router;
