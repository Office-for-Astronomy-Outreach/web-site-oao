import React from "react";
import classNames from "classnames";
import { useRouter } from "next/router";

/**
 * Button Component
 * A customizable button supporting different styles, actions, and navigation.
 *
 * Props:
 * @param {string} label - The text displayed on the button.
 * @param {() => void} [onClick] - Function to execute when the button is clicked.
 * @param {string} [url] - URL to navigate to when the button is clicked.
 * @param {boolean} [newTab] - If true, opens the link in a new tab.
 * @param {"solid" | "outline" | "transparent"} variant - Defines the button's style.
 * @param {string} color - Tailwind color class for the button (e.g., "primary", "secondary").
 * @param {object} [rest] - Other optional properties like `disabled`, `type`, etc.
 */
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  onClick?: () => void;
  url?: string;
  target?: "_blank" | "_self" | "_top" | "_parent";
  newTab?: boolean;
  variant?: "solid" | "outline" | "transparent";
  color?: "primary" | "secondary" | "dark" | "light";
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  url,
  target,
  newTab = false,
  variant = "solid",
  color = "primary",
  ...rest
}) => {
  const router = useRouter();

  // Define static color classes
  const colorClasses = {
    primary: {
      solid: "bg-primary-main text-white hover:bg-primary-light",
      outline:
        "outline-2 border-2 outline-primary-main text-primary-main hover:bg-primary-main hover:text-white",
      transparent:
        "bg-transparent text-primary-main hover:bg-primary-light hover:bg-opacity-30",
    },
    secondary: {
      solid: "bg-secondary text-white hover:bg-secondary-light",
      outline:
        "outline-2 border-2 outline-secondary text-secondary hover:bg-secondary hover:text-white",
      transparent:
        "bg-transparent text-secondary hover:bg-secondary-light hover:bg-opacity-30",
    },
    dark: {
      solid: "bg-dark-main text-white hover:bg-dark-light",
      outline:
        "outline-2 border-2 border-dark-main outline-dark-main text-dark-main hover:bg-dark-main hover:text-white",
      transparent:
        "bg-transparent text-dark-main hover:bg-dark-light hover:bg-opacity-30",
    },
    light: {
      solid: "bg-white text-body hover:bg-dark-light",
      outline:
        "outline-2 border-2 outline-white text-white hover:text-body hover:bg-white",
      transparent:
        "bg-transparent text-white hover:bg-dark-light hover:bg-opacity-30",
    },
  };

  const handleClick = () => {
    if (url) {
      if (newTab || target === "_blank") {
        window.open(url, target ?? "_blank");
      } else {
        router.push(url);
      }
    } else if (onClick) {
      onClick();
    }
  };

  const buttonClass = classNames(
    "rounded-full capitalize px-6 py-2 text-center font-medium transition duration-300 sm:min-w-52 min-w-full",
    colorClasses[color][variant]
  );

  return (
    <button
      {...rest} // Spread operator to pass any additional props like 'disabled', 'type', etc.
      className={buttonClass}
      onClick={handleClick}
      aria-label={label}
      role="button"
    >
      {label}
    </button>
  );
};

export default Button;
