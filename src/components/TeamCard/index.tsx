import Image from "next/image";
import React from "react";

interface TeamMemberProps {
  name: string;
  role: string;
  image: string;
  description: string;
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
      <div className="aspect-[4/3] w-full rounded-t-lg overflow-hidden content-card-img">
        <Image
          src={image}
          alt={name}
          className="w-full h-full object-cover "
          layout="fill"
          objectFit="cover"
        />
      </div>

      {/* Información */}

      <div className="flex flex-col items-center p-8 gap-8">
        <div className="flex flex-col gap-2">
          <h3 className="text-h5 font-semibold text-primary-main text-center">
            {name}
          </h3>
          <p className="text-sm text-gray-500 text-center">{role}</p>
        </div>
        <p className="text-gray-600 2xl:text-p text-sm text-left">
          {description}
        </p>
      </div>
    </div>
  );
};

export default CardTeamMember;
