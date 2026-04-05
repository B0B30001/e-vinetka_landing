import { z } from "zod";

export const leadSchema = z.object({
  city: z.string().min(1, "Обязательное поле").max(100),
  school: z.string().min(1, "Обязательное поле").max(200),
  classLabel: z.string().min(1, "Обязательное поле").max(20),
  graduationYear: z.string().min(1, "Обязательное поле"),
  studentCount: z
    .number({ error: "Укажите число" })
    .int()
    .min(1, "Минимум 1 ученик")
    .max(500),
  name: z.string().min(1, "Обязательное поле").max(100),
  phone: z
    .string()
    .min(1, "Обязательное поле")
    .regex(/^\+?[\d\s()-]{7,20}$/, "Некорректный номер телефона"),
  email: z
    .string()
    .max(200)
    .email("Некорректный email")
    .optional()
    .or(z.literal("")),
  role: z.string().min(1, "Обязательное поле"),
  interest: z.string().min(1, "Обязательное поле"),
  comment: z.string().max(1000).optional().or(z.literal("")),
  consent: z.literal(true, { error: "Необходимо дать согласие" }),
});

export type LeadFormData = z.infer<typeof leadSchema>;
