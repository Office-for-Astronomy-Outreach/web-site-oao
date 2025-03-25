import Image from "next/image";
import React from "react";
import classNames from "classnames";

import EmailDisplay from "@/components/EmailDisplay";

interface NocMemberProps {
  name: string;
  role: string;
  image: string;
  description: string | React.ReactElement;
  affiliation?: string;
  email?: string;
  appointedStart?: string;
  appointedEnd?: string;
}

const CardNocMember: React.FC<NocMemberProps> = ({
  name,
  role,
  image,
  description,
  affiliation,
  email,
  appointedStart,
  appointedEnd,
}) => {
  const startDate = new Date(`${appointedStart}T00:00:00.000Z`);
  const endDate = new Date(`${appointedEnd}T00:00:00.000Z`);

  const formattedDate = (date: Date) => {
    return new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "short",
      timeZone: "UTC",
    }).format(date);
  };

  const infoClass = classNames(
    "flex-1",
    "flex",
    "flex-col",
    "justify-between",
    image && image.length > 0 ? "p-4" : "pt-4 px-8"
  );

  return (
    <div className="bg-white rounded-lg shadow-sm">
      <div className="flex sm:flex-row flex-col">
        {image && (
          <div className="sm:w-36 w-full">
            <div className="relative sm:aspect-square aspect-video">
              <Image
                src={image}
                alt={name}
                className="sm:rounded-ss-lg sm:rounded-t-none rounded-t-lg object-cover"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          </div>
        )}

        <div className={infoClass}>
          <h3 className="text-h4 font-semibold text-primary-main leading-none">
            {name}
          </h3>
          <p className="text-md text-gray-500 mb-4">{role}</p>

          {affiliation && (
            <p className="font-semibold text-xs text-gray-700">
              <span>Affiliation: </span>
              <span className="font-normal">{affiliation}</span>
            </p>
          )}

          {appointedStart && appointedEnd && (
            <p className="font-semibold text-xs text-gray-700">
              <span>Appointed in: </span>
              <span className="font-normal">
                {formattedDate(startDate)} until {formattedDate(endDate)}
              </span>
            </p>
          )}

          {email && (
            <p className="font-semibold text-xs">
              <span className="text-gray-700">Email: </span>
              <EmailDisplay email={email} />
            </p>
          )}
        </div>
      </div>
      {description && (
        <div className="px-8 pb-6 pt-4">
          <p className="mb-0 pb-0 text-xs">{description}</p>
        </div>
      )}
    </div>
  );
};

export default CardNocMember;
