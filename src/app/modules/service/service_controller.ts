import catchAsync from "../../shared/catchAsync";
import sendResponse from "../../shared/sendResponse";
import { ServiceServices } from "./service_service";

// create a service controller
const createService = catchAsync(async (req, res) => {
  const result = await ServiceServices.createServiceIntoDB(req.body);
  sendResponse(res, {
    status: 201,
    success: true,
    message: "Service created successfully",
    data: result,
  });
});

// fetch all services
const getAllServices = catchAsync(async (req, res) => {
  const result = await ServiceServices.fetchAllServicesFromDB();
  sendResponse(res, {
    status: 200,
    success: true,
    message: "Services fetched successfully",
    data: result,
  });
});
export const ServiceControllers = {
  createService,
  getAllServices,
};
