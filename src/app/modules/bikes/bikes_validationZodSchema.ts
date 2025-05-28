import { z } from "zod";

const createBikeValidationZodSchema = z.object({
  body: z.object(
    {
      brand: z
        .string({
          required_error: "Brand is required",
        })
        .min(1, { message: "Brand is required" })
        .max(50, { message: "Brand must not exceed 50 characters" }),
      model: z
        .string({
          required_error: "Model is required",
        })
        .min(1, { message: "Model is required" })
        .max(70, { message: "Model must not exceed 70 characters" }),
      year: z
        .number({
          required_error: "Year is required",
        })
        .min(1900, { message: "Year must be at least 1900" })
        .max(2025, { message: "Year must not exceed 2100" }),
      customerId: z
        .string({
          required_error: "Customer ID is required",
        })
        .min(10, { message: "Customer ID must be at least 10 characters long" })
        .max(50, { message: "Customer ID must not exceed 50 characters" }),
    },
    { required_error: "Body is required" }
  ),
});

export const BikeValidation = {
  createBikeValidationZodSchema,
};
