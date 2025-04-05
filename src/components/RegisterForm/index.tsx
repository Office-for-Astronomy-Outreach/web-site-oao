/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useMemo, useRef, useState } from "react";
import { Autocomplete, LoadScript } from "@react-google-maps/api";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Image from "next/image";
import makeAnimated from "react-select/animated";
import Select from "react-select";
import useSWR from "swr";

import { projectPath } from "@/utils/path";
import { Country, TypeEvent } from "@/types";
import { eventSchema } from "./validationForm";
import FormLabel from "../Label";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const animatedComponents = makeAnimated();

const GOOGLE_MAPS_API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "";

type EventFormData = z.infer<typeof eventSchema>;

const EventRegisterForm = () => {
  const { data: nocsData } = useSWR(`${projectPath}/api/countries`, fetcher);
  const { data: categoriesData } = useSWR(
    `${projectPath}/api/categories`,
    fetcher
  );

  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [categories, setCategories] =
    useState<{ id: number; name: string }[]>();
  const [isNocMember, setIsNocMember] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const autocompleteRef = useRef<any>(null);

  const transformedData: { value: number; label: string }[] = useMemo(() => {
    return (
      nocsData?.map(({ id, name }: Country) => ({
        value: id,
        label: name,
      })) || []
    );
  }, [nocsData]);

  useEffect(() => {
    if (categoriesData && categoriesData.length > 0) {
      setCategories(categoriesData);
    }
  }, [categoriesData]);

  const categoryOptions = useMemo(
    () => categories?.map(({ id, name }) => ({ value: id, label: name })),
    [categories]
  );

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm<EventFormData>({
    resolver: zodResolver(eventSchema),
  });

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setImagePreview(URL.createObjectURL(file));
      setValue("event_image", file);
    }
  };

  const handlePlaceSelect = () => {
    if (autocompleteRef.current) {
      const place = autocompleteRef.current.getPlace();

      if (!place || !place.geometry) return;

      setValue(
        "city",
        place.address_components?.find((c: { types: string | string[] }) =>
          c.types.includes("locality")
        )?.long_name || ""
      );
      setValue(
        "country",
        place.address_components?.find((c: { types: string | string[] }) =>
          c.types.includes("country")
        )?.long_name || ""
      );
      setValue("latitude", place.geometry.location?.lat().toString() || "");
      setValue("longitude", place.geometry.location?.lng().toString() || "");
    }
  };

  const handleKeywords = (target: EventTarget & HTMLInputElement) => {
    let keys: string[] = [];
    if (typeof target.value === "string" && target.value.includes(",")) {
      const cleanKey = target.value.trim();
      keys = cleanKey.split(",").map((item) => item.trim());
    } else if (target.value.length > 0) {
      keys = [target.value.trim()];
    }

    setValue("keywords", keys);
  };

  const createEvent = async (data: EventFormData) => {
    try {
      const formData = new FormData();

      formData.append("event[name]", data.name);
      formData.append("event[brief_description]", data.brief_description);
      formData.append("event[city]", data.city);
      formData.append("event[contact_email]", data.contact_email);
      formData.append("event[contact_name]", data.contact_name);
      formData.append("event[country]", data.country);
      formData.append("event[end_date]", data.end_date);
      formData.append("event[latitude]", data.latitude);
      formData.append("event[location_of_event]", data.location_of_event);
      formData.append("event[longitude]", data.longitude);
      formData.append("event[organizer]", data.organizer);
      formData.append("event[participants]", data.participants.toString());
      formData.append("event[iau_member]", data.iau_member.toString());
      formData.append("event[start_date]", data.start_date);
      formData.append("event[website]", data.website);

      if (data.keywords.length > 0) {
        data.keywords.forEach((keyword) => {
          formData.append("event[keywords][]", keyword);
        });
      }

      if (data.categories.length > 0) {
        data.categories.forEach((category_id) => {
          formData.append("event[categories][]", category_id.toString());
        });
      }

      // Solo agregar la imagen si existe y es un archivo
      if (data.event_image instanceof File) {
        formData.append("event[event_image]", data.event_image);
      }

      const response = await fetch("http://localhost:3001/events", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Failed to create event");
      }

      const result = await response.json();
      console.log("Event created:", result);
      return result;
    } catch (error) {
      console.error("Error creating event:", error);
    }
  };

  const onSubmit = async (data: EventFormData) => {
    setIsSubmitting(true);
    try {
      const result = await createEvent(data);
      if (result) {
        toast.success(
          <div>
            <h4>Thank you for submitting your event.</h4>
            <span className="text-xs">
              Our team will review it soon. If approved, it will be listed, and
              we&apos;ll notify you of any updates.
            </span>
          </div>,
          {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          }
        );
        reset(); // Limpia el formulario
        setImagePreview(null);
      }
    } catch (error) {
      toast.error("Error creating event, please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-8 text-primary-main">
        Register your event
      </h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
        {/* Nombre */}
        <fieldset>
          <FormLabel htmlFor={"name"} required>
            Name of Event
          </FormLabel>
          <input
            {...register("name")}
            type="text"
            placeholder="Name of your event"
            className="w-full p-2 border rounded border-gray-300"
          />
          {errors.name && <p className="text-red-500">{errors.name.message}</p>}
        </fieldset>

        <fieldset>
          <LoadScript
            googleMapsApiKey={GOOGLE_MAPS_API_KEY}
            libraries={["places"]}
          >
            <FormLabel
              htmlFor={"name"}
              required
              description="Please provide the full address of where the event will be held.
                If the activity is online only, please provide the country and
                city of the main organizer."
            >
              Address of Event
            </FormLabel>
            <Autocomplete
              onLoad={(autocomplete) =>
                (autocompleteRef.current = autocomplete)
              }
              onPlaceChanged={handlePlaceSelect}
            >
              <input
                type="text"
                name="address"
                placeholder="Busca tu ciudad"
                className="w-full p-2 border rounded border-gray-300"
              />
            </Autocomplete>
          </LoadScript>
          {errors.country && (
            <p className="text-red-500">{errors.country.message}</p>
          )}
        </fieldset>

        <fieldset>
          <FormLabel
            htmlFor="description"
            required
            description="Please give us a brief description of your event. (e.g. topics
                covered, language(s), target audience, national or global, if
                reservations of required, etc.)"
          >
            Brief Description (max 500 characters)
          </FormLabel>

          <textarea
            {...register("brief_description")}
            placeholder="Breve descripción"
            className="w-full p-2 border rounded border-gray-300"
            rows={3}
          />
          {errors.brief_description && (
            <p className="text-red-500">{errors.brief_description.message}</p>
          )}
        </fieldset>

        {/* Fechas */}
        <div className="grid grid-cols-2 gap-4">
          <fieldset>
            <FormLabel htmlFor="start_date" required>
              Start Date
            </FormLabel>
            <input
              {...register("start_date")}
              type="date"
              className="w-full p-2 border rounded border-gray-300"
            />
            {errors.start_date && (
              <p className="text-red-500">{errors.start_date.message}</p>
            )}
          </fieldset>
          <fieldset>
            <FormLabel htmlFor="end_date" required>
              End Date
            </FormLabel>
            <input
              {...register("end_date")}
              type="date"
              className="w-full p-2 border rounded border-gray-300"
            />
            {errors.end_date && (
              <p className="text-red-500">{errors.end_date.message}</p>
            )}
          </fieldset>
        </div>

        {/* URL */}
        <fieldset>
          <FormLabel
            htmlFor="website"
            required
            description="Link to a webpage/website or a social media post about the event. We cannot add the event to the calendar without a valid link. (e.g. https://iau.org/)"
          >
            Event Website or Webpage
          </FormLabel>

          <input
            {...register("website")}
            type="text"
            placeholder="https://......."
            className="w-full p-2 border rounded border-gray-300"
          />
          {errors.website && (
            <p className="text-red-500">{errors.website.message}</p>
          )}
        </fieldset>

        {/* Imagen */}
        <fieldset>
          <FormLabel
            htmlFor="image"
            description="Optional, it can be the promotional image of your event."
          >
            Image of your event
          </FormLabel>
          <input
            name="event_img"
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="w-full p-2 border rounded border-gray-300"
          />
          {imagePreview && (
            <Image
              src={imagePreview}
              alt="Preview"
              className="w-32 h-32 object-cover mt-2"
              height={200}
              width={200}
              style={{ height: 200, width: 200 }}
            />
          )}
          {errors.event_image && (
            <p className="text-red-500">{errors.event_image.message}</p>
          )}
        </fieldset>

        <fieldset>
          <FormLabel
            htmlFor="image"
            required
            description="If you are organising your event on behalf of or as a
              representative of an institution, please let us know which one. If
              not, write in 'Freelance' "
          >
            Organising Institution
          </FormLabel>
          <input
            {...register("organizer")}
            type="text"
            placeholder="Organizador"
            className="w-full p-2 border rounded border-gray-300"
          />
          {errors.organizer && (
            <p className="text-red-500">{errors.organizer.message}</p>
          )}
        </fieldset>

        <fieldset>
          <FormLabel
            htmlFor="contact_name"
            required
            description="Please add your first and last names in case your audience needs
              to contact you."
          >
            Contact Name
          </FormLabel>
          <input
            {...register("contact_name")}
            type="text"
            placeholder="Nombre de contacto"
            className="w-full p-2 border rounded border-gray-300"
          />
          {errors.contact_name && (
            <p className="text-red-500">{errors.contact_name.message}</p>
          )}
        </fieldset>

        <fieldset>
          <FormLabel
            htmlFor="contact_email"
            required
            description="Please add your email in case your audience needs to contact you."
          >
            Contact Email
          </FormLabel>
          <input
            {...register("contact_email")}
            type="email"
            placeholder="Correo de contacto"
            className="w-full p-2 border rounded border-gray-300"
          />
          {errors.contact_email && (
            <p className="text-red-500">{errors.contact_email.message}</p>
          )}
        </fieldset>

        <fieldset>
          <FormLabel
            htmlFor="location_of_event"
            required
            description="Please let us know where your event will occur."
          >
            Location of Event
          </FormLabel>
          <Select
            name="location_of_event"
            options={[
              { value: TypeEvent.in_person, label: "In person" },
              { value: TypeEvent.online, label: "Online" },
              { value: TypeEvent.hybrid, label: "Hybrid" },
            ]}
            onChange={(e) => {
              if (e) {
                setValue("location_of_event", e.value);
              }
            }}
          />
          {errors.location_of_event && (
            <p className="text-red-500">{errors.location_of_event.message}</p>
          )}
        </fieldset>

        <fieldset>
          <FormLabel
            htmlFor="keywords_input"
            required
            description="Let us know two or three words that best describe your event. (Please separate them with commas, e.g., women in astronomy, astronomy for all, STEM, astrophotography)"
          >
            Keywords
          </FormLabel>
          <input
            name="keyword_input"
            type="text"
            placeholder="Keywords"
            className="w-full p-2 border rounded border-gray-300"
            onChange={(e) => handleKeywords(e?.target)}
          />
          {errors.keywords && (
            <p className="text-red-500">{errors.keywords.message}</p>
          )}
        </fieldset>

        <fieldset>
          <FormLabel htmlFor="categories_select" required>
            Category or Type of Event
          </FormLabel>
          <Select
            name="categories_select"
            closeMenuOnSelect={false}
            components={animatedComponents}
            defaultValue={[]}
            isMulti
            options={categoryOptions}
            onChange={(selected) => {
              if (selected && Array.isArray(selected)) {
                const values = selected.map((option) => option.value);
                setValue("categories", values);
              }
            }}
          />
          {errors.categories && (
            <p className="text-red-500">{errors.categories.message}</p>
          )}
        </fieldset>

        <fieldset>
          <FormLabel
            htmlFor="participants"
            required
            description="Please let us know how many people you expect will attend your
              event."
          >
            Participants
          </FormLabel>

          <input
            {...register("participants", { valueAsNumber: true })}
            type="number"
            step="1"
            onKeyDown={(e) => {
              if (
                e.key === "e" ||
                e.key === "." ||
                e.key === "," ||
                e.key === "-"
              ) {
                e.preventDefault();
              }
            }}
            placeholder="Número de participantes"
            className="w-full p-2 border rounded border-gray-300"
          />
          {errors.participants && (
            <p className="text-red-500">{errors.participants.message}</p>
          )}
        </fieldset>

        <fieldset>
          <FormLabel htmlFor="is_iau_member" required>
            Are you a member of the IAU National Outreach Coordinator network at
            the Office for Astronomy Outreach?
          </FormLabel>
          <Select
            name="is_iau_member"
            options={[
              { value: 0, label: "No" },
              { value: 1, label: "Yes" },
            ]}
            onChange={(e) => {
              if (e) {
                setIsNocMember(e.value === 1);
              }
            }}
          />
          {errors.iau_member && (
            <p className="text-red-500">{errors.iau_member.message}</p>
          )}
        </fieldset>

        {isNocMember && (
          <fieldset>
            <FormLabel htmlFor="iau_member" required={isNocMember}>
              Select your NOC
            </FormLabel>
            <Select
              name="iau_member"
              options={transformedData ?? []}
              onChange={(e) => {
                if (e) {
                  setValue("iau_member", e.value);
                }
              }}
            />
            {errors.iau_member && (
              <p className="text-red-500">{errors.iau_member.message}</p>
            )}
          </fieldset>
        )}
        {/* Botón de enviar */}
        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full py-2 px-4 text-white font-bold rounded ${
            isSubmitting
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-blue-500 hover:bg-blue-700"
          }`}
        >
          {isSubmitting ? "Creating Event..." : "Submit my event"}
        </button>
      </form>
    </div>
  );
};

export default EventRegisterForm;
