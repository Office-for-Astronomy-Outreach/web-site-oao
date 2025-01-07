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
 */
interface ButtonProps {
  label: string;
  onClick?: () => void;
  url?: string;
  newTab?: boolean;
  variant?: "solid" | "outline" | "transparent";
  color?: "primary" | "secondary" | "dark" | "light";
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  url,
  newTab = false,
  variant = "solid",
  color = "primary",
}) => {
  const router = useRouter();

  // Define static color classes
  const colorClasses = {
    primary: {
      solid: "bg-primary-main text-white hover:bg-primary-light",
      outline:
        "outline-2 outline-primary-main text-primary-main hover:bg-primary-main hover:text-white",
      transparent: "bg-transparent text-primary-main hover:bg-primary-light hover:bg-opacity-30",
    },
    secondary: {
      solid: "bg-secondary text-white hover:bg-secondary-light",
      outline:
        "outline-2 outline-secondary text-secondary hover:bg-secondary hover:text-white",
      transparent: "bg-transparent text-secondary hover:bg-secondary-light hover:bg-opacity-30",
    },
    dark: {
      solid: "bg-dark-main text-white hover:bg-dark-light",
      outline: "outline-2 outline-dark-main text-dark-main hover:bg-dark-main hover:text-white",
      transparent: "bg-transparent text-dark-main hover:bg-dark-light hover:bg-opacity-30",
    },
    light: {
      solid: "bg-white text-body hover:bg-dark-light",
      outline: "outline-2 outline-white text-white hover:dark-light hover:dark-light",
      transparent: "bg-transparent text-white hover:bg-dark-light hover:bg-opacity-30",
    },
  };

  const handleClick = () => {
    if (url) {
      if (newTab) {
        window.open(url, "_blank");
      } else {
        router.push(url);
      }
    } else if (onClick) {
      onClick();
    }
  };

  const buttonClass = classNames(
    "rounded-full uppercase px-6 py-2 text-center font-medium transition duration-300 min-w-60",
    colorClasses[color][variant]
  );

  return (
    <button className={buttonClass} onClick={handleClick} aria-label={label} role="button">
      {label}
    </button>
  );
};

export default Button;
