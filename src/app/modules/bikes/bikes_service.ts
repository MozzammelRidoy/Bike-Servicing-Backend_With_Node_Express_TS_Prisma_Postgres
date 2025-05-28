import { Bike } from "../../../../generated/prisma";

// create a bike into db.
const createBikeIntoDB = async (payload: Bike) => {
  console.log(payload);
};

export const BikesServices = {
  createBikeIntoDB,
};
