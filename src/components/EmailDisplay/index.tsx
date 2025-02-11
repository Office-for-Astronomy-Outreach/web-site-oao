import Link from "next/link";
import { useState } from "react";

interface EmailDisplayProps {
  email: string;
  color?: string;
}

const EmailDisplay: React.FC<EmailDisplayProps> = ({ email, color }) => {
  const [showFull, setShowFull] = useState(false);

  const [user] = email.split("@");

  return (
    <span className="relative group">
      {/* Email oculto o completo */}
      {showFull ? (
        <Link
          href={`mailto:${email}`}
          className={`${color ?? "text-primary-main"} hover:underline`}
          aria-label="Send an email"
        >
          {email}
        </Link>
      ) : (
        <span
          className={`${color ?? "text-primary-main"} cursor-pointer hover:underline w-full`}
          onClick={() => {
            setShowFull(true); // Mostrar el email completo
          }}
        >
          {showFull ? email : `${user}@...`}
        </span>
      )}

      {/* Tooltip al hacer hover */}
      {!showFull && (
        <span className="absolute left-1/2 -top-8 bg-gray-800 text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-[100px]">
          <span>Click to show</span>
          <span
            className="bg-gray-800 w-[20px] h-[20px] absolute  -bottom-4  left-2"
            style={{ clipPath: "polygon(100% 0, 0 0, 50% 50%)" }}
          ></span>
        </span>
      )}
    </span>
  );
};

export default EmailDisplay;
