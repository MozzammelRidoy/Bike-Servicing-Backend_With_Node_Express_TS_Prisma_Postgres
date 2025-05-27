import { Customer } from "../../../../generated/prisma";

// create customer into db
const createCustomer = async (payload: Partial<Customer>) => {
  console.log(payload);
};

export const CustomerServices = {
  createCustomer,
};
