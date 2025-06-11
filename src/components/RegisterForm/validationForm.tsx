import { z } from "zod";
import { TypeEvent } from "@/types";

export const eventSchema = z
  .object({
    name: z
      .string()
      .min(
        3,
        "The name of the event is required and must have at least 3 characters."
      ),
    country: z.string().min(1, "The address is requiered"),
    city: z.string().min(1, "You need to add a city"),
    latitude: z.string(),
    longitude: z.string(),
    brief_description: z
      .string()
      .min(
        10,
        "Brief description is required and must have at least 10 characters."
      )
      .max(500, "Brief description cannot exceed 500 characters."),
    start_date: z
      .string()
      .min(1, "Start date is required.")
      .refine((date) => !isNaN(Date.parse(date)), {
        message: "Start date must be a valid date.",
      }),
    end_date: z
      .string()
      .min(1, "End date is required.")
      .refine((date) => !isNaN(Date.parse(date)), {
        message: "End date must be a valid date.",
      }),
    website: z.string().url("A valid URL is required for the event website."),
    event_image: z.instanceof(File).optional(),
    organizer: z
      .string()
      .min(
        3,
        "Organizer's name is required and must have at least 3 characters."
      ),
    contact_name: z
      .string()
      .min(3, "Contact name is required and must have at least 3 characters."),
    contact_email: z.string().email("A valid contact email is required."),
    location_of_event: z.enum(
      [TypeEvent.in_person, TypeEvent.online, TypeEvent.hybrid],
      { message: "A valid event location type is required." }
    ),
    keywords: z.array(z.string()).min(1, "At least one keyword is required"),
    categories: z.array(z.number()).min(1, "At least one category is required"),
    participants: z.number().min(1, "There must be at least one participant."),
    iau_member: z.number().min(0, "IAU member status is required."),
  })
  .refine(
    (data) => {
      const start = new Date(data.start_date);
      const end = new Date(data.end_date);

      // Elimina la parte de hora, minutos, segundos
      start.setHours(0, 0, 0, 0);
      end.setHours(0, 0, 0, 0);

      return end > start;
    },
    {
      message: "End date must be after the start date.",
      path: ["end_date"],
    }
  );
