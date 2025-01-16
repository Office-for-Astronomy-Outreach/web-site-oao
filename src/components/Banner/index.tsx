import React from "react";
import Image from "next/image";
import Link from "next/link";

export interface Breadcrumb {
  label: string;
  href: string;
}

export interface BannerProps {
  image: string;
  title: string;
  breadcrumbs: Breadcrumb[];
}

const Banner: React.FC<BannerProps> = ({ image, title, breadcrumbs }) => {
  return (
    <div className="relative w-full h-80 md:h-96">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={image}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="z-0"
          objectPosition="center"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 z-1"></div>
      </div>

      {/* Content */}
      <div className="relative z-2 h-full flex flex-col justify-center items-center text-white text-center px-4">
        {/* Title */}
        <h1 className="text-h1 font-bold text-white leading-relaxed tracking-wide">
          {title}
        </h1>
        {/* Breadcrumbs */}
        <nav className="mb-4 text-sm">
          <ul className="flex space-x-2">
            {breadcrumbs.map((breadcrumb, index) => (
              <li key={index} className="flex items-center">
                <Link href={breadcrumb.href} className="hover:underline">
                  {breadcrumb.label}
                </Link>
                {index < breadcrumbs.length - 1 && (
                  <span className="mx-2 text-white leading-relaxed tracking-wide">
                    /
                  </span>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Banner;
