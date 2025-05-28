import catchAsync from "../../shared/catchAsync";
import sendResponse from "../../shared/sendResponse";
import { BikesServices } from "./bikes_service";

// create bike controller
const createBike = catchAsync(async (req, res) => {
  const result = await BikesServices.createBikeIntoDB(req.body);

  sendResponse(res, {
    status: 201,
    success: true,
    message: "Bike created successfully",
    data: result,
  });
});

export const BikeControllers = {
  createBike,
};
