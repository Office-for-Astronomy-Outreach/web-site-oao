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
    <div className="flex flex-col items-center  bg-white shadow-md rounded-lg transition-transform duration-300 hover:scale-105">
      {/* Imagen del miembro del equipo */}
      <div className="aspect-[4/3] w-full rounded-t-lg overflow-hidden mb-4 content-card-img">
        <Image
          src={image}
          alt={name}
          className="w-full h-full object-cover "
          layout="fill"
          objectFit="cover"
        />
      </div>

      {/* Información */}
      <h3 className="text-xl font-semibold text-gray-800 px-6">{name}</h3>
      <p className="text-sm text-gray-500 mb-2">{role}</p>
      <p className="text-center text-gray-600 text-sm p-6">{description}</p>
    </div>
  );
};

export default CardTeamMember;
