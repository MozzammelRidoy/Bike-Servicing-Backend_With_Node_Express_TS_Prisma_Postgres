import catchAsync from "../../shared/catchAsync";
import sendResponse from "../../shared/sendResponse";
import { CustomerServices } from "./customer_service";

// create customer controller
const createCustomer = catchAsync(async (req, res) => {
  const result = await CustomerServices.createCustomer(req.body);
  sendResponse(res, {
    status: 201,
    success: true,
    message: "Customer created successfully",
    data: result,
  });
});

export const CustomerControllers = {
  createCustomer,
};
