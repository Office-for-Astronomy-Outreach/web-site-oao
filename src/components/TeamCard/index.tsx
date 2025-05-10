import Image from "next/image";
import React from "react";

interface TeamMemberProps {
  name: string;
  role: string;
  image: string;
  description: string | React.ReactElement;
}

const CardTeamMember: React.FC<TeamMemberProps> = ({
  name,
  role,
  image,
  description,
}) => {
  return (
    <div className="flex flex-col bg-white shadow-md rounded-lg transition-transform duration-300 hover:scale-105">
      {/* Imagen del miembro del equipo */}
      {image && (
        <div className="aspect-[4/3] w-full rounded-t-lg overflow-hidden relative">
          <Image
            src={image}
            alt={name}
            className="w-full h-full object-cover "
            fill
            sizes="(max-width: 1200px) 100vw, 1200px"
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
        </div>
      )}

      {/* Información */}

      <div className="flex flex-col items-center p-8 gap-8">
        <div className="flex flex-col gap-2">
          <h3 className="text-h5 font-semibold text-primary-main text-center leading-none">
            {name}
          </h3>
          <p className="text-sm text-gray-500 text-center">{role}</p>
        </div>
        <div className="text-gray-600 2xl:text-p text-sm text-left w-full relative h-full">
          {typeof description === "string" ? <p>{description}</p> : description}
        </div>
      </div>
    </div>
  );
};

export default CardTeamMember;
