import { ServiceRecord } from "../../../../generated/prisma";

// create a service
const createServiceIntoDB = async (paylaod: ServiceRecord) => {
  console.log(paylaod);
};

export const ServiceServices = {
  createServiceIntoDB,
};
