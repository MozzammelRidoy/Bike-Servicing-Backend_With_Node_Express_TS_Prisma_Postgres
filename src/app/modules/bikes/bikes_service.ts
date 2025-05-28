import { Bike } from "../../../../generated/prisma";
import AppError from "../../errors/AppError";
import prisma from "../../shared/prisma";

// create a bike into db.
const createBikeIntoDB = async (payload: Bike) => {
  const customer = await prisma.customer.findUnique({
    where: { customerId: payload.customerId },
  });
  if (!customer) {
    throw new AppError(404, "customerId", "Customer id not found");
  }
  const bike = await prisma.bike.create({
    data: payload,
  });
  return bike;
};

export const BikesServices = {
  createBikeIntoDB,
};
