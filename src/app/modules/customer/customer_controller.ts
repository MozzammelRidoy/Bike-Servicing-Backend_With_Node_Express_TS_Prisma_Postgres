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

// get all customers controller
const fetchAllCustomers = catchAsync(async (req, res) => {
  const result = await CustomerServices.fetchAllCustomersFromDB();
  sendResponse(res, {
    status: 200,
    success: true,
    message: "Customers fetched successfully",
    data: result,
  });
});

export const CustomerControllers = {
  createCustomer,
  fetchAllCustomers,
};
