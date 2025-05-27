import { z } from "zod";

const createCustomerValidationSchema = z.object({
  body: z.object(
    {
      name: z
        .string({
          required_error: "Name is required",
        })
        .min(3, {
          message: "Name must be at least 3 characters long",
        })
        .max(70, {
          message: "Name must not exceed 70 characters",
        })
        .regex(/^[A-Za-z\s]+$/, {
          message: "Name must contain only letters",
        }),
      email: z
        .string({
          required_error: "Email is required",
        })
        .min(3, {
          message: "Email must be at least 3 characters long",
        })
        .max(70, {
          message: "Email must not exceed 70 characters",
        })
        .email({
          message: "Invalid email address",
        }),

      phone: z
        .string({
          required_error: "Phone number is required",
        })
        .length(11, {
          message: "Phone number must be exactly 11 characters long",
        })
        .regex(/^[0-9]+$/, {
          message: "Phone number must contain only numbers",
        }),
    },
    { required_error: "Body is required" }
  ),
});

export const CustomerValidation = {
  createCustomerValidationSchema,
};
