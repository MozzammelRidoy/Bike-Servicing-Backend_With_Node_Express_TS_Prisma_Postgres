import { Customer } from "../../../../generated/prisma";
import AppError from "../../errors/AppError";
import prisma from "./../../shared/prisma";

// create customer into db
const createCustomer = async (payload: Customer) => {
  const exist = await prisma.customer.findUnique({
    where: { email: payload.email },
  });
  if (exist) {
    throw new AppError(400, "email", "Customer already exists with this email");
  }
  const result = await prisma.customer.create({
    data: payload,
  });

  return result;
};

// fetch all customer from db.
const fetchAllCustomersFromDB = async () => {
  const customers = await prisma.customer.findMany();
  return customers;
};

export const CustomerServices = {
  createCustomer,
  fetchAllCustomersFromDB,
};
