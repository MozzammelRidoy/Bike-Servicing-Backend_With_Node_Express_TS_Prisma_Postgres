import { ServiceRecord, ServiceStatus } from "../../../../generated/prisma";
import AppError from "../../errors/AppError";
import prisma from "../../shared/prisma";

// create a service
const createServiceIntoDB = async (paylaod: ServiceRecord) => {
  const bike = await prisma.bike.findUnique({
    where: {
      bikeId: paylaod.bikeId,
    },
  });
  if (!bike) {
    throw new AppError(404, "bikeId", "Bike not found");
  }

  // allow payload.

  paylaod.status = ServiceStatus.PENDING;
  paylaod.serviceDate = new Date(paylaod.serviceDate);
  if (paylaod.serviceDate < new Date()) {
    throw new AppError(
      400,
      "serviceDate",
      "Service date must be in the future"
    );
  }
  paylaod.completionDate = null;

  const data = {
    bikeId: paylaod.bikeId,
    serviceDate: paylaod.serviceDate,
    description: paylaod.description,
    status: paylaod.status,
    completionDate: paylaod.completionDate,
  };

  const result = await prisma.serviceRecord.create({
    data,
  });
  return result;
};

// fetch all services
const fetchAllServicesFromDB = async () => {
  const services = await prisma.serviceRecord.findMany();

  return services;
};

// fetch single sercice by id
const fetchSingleServiceById = async (serviceId: string) => {
  const service = await prisma.serviceRecord.findUnique({
    where: {
      serviceId,
    },
  });

  return service || null;
};
export const ServiceServices = {
  createServiceIntoDB,
  fetchAllServicesFromDB,
  fetchSingleServiceById,
};
