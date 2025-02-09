import Link from "next/link";
import { useState } from "react";

interface EmailDisplayProps {
  email: string;
}

const EmailDisplay: React.FC<EmailDisplayProps> = ({ email }) => {
  const [showFull, setShowFull] = useState(false);

  const [user] = email.split("@");

  return (
    <span className="relative group">
      {/* Email oculto o completo */}
      {showFull ? (
        <Link
          href={`mailto:${email}`}
          className="text-blue-600 hover:underline"
          aria-label="Send an email"
        >
          {email}
        </Link>
      ) : (
        <span
          className="cursor-pointer text-blue-500 hover:underline w-full"
          onClick={() => {
            setShowFull(true); // Mostrar el email completo
          }}
        >
          {showFull ? email : `${user}@...`}
        </span>
      )}

      {/* Tooltip al hacer hover */}
      {!showFull && (
        <div className="absolute left-1/2 -top-8 bg-gray-800 text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-[100px]">
          <span>Click to show</span>
          <div
            className="bg-gray-800 w-[20px] h-[20px] absolute"
            style={{ clipPath: "polygon(100% 0, 0 0, 50% 50%)" }}
          ></div>
        </div>
      )}
    </span>
  );
};

export default EmailDisplay;
