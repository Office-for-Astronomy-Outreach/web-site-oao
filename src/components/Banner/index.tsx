import React from "react";
import Image from "next/image";
import Link from "next/link";

export interface Breadcrumb {
  label: string;
  href: string;
}

export interface BannerProps {
  image: {
    urlImage: string;
    caption?: string;
    alt?: string;
  };
  title: string | React.ReactElement;
  breadcrumbs: Breadcrumb[];
}

const Banner: React.FC<BannerProps> = ({ image, title, breadcrumbs }) => {
  return (
    <div className="relative w-full h-80 md:h-96">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={image.urlImage}
          alt={image.alt ?? ""}
          fill
          className="z-0"
          style={{ objectFit: "cover", objectPosition: "center" }}
          sizes="(max-width: 768px) 90vw, (max-width: 1200px) 100vw"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-10 z-1"></div>
      </div>

      {/* Content */}
      <div className="relative z-2 h-full flex flex-col justify-center items-center text-white text-center px-4 gap-8">
        <div></div>
        {/* Title */}
        <h1 className="text-h1 font-bold text-white md:leading-none tracking-wide mb-4">
          {title}
        </h1>
        {/* Breadcrumbs */}
        <nav className="text-sm">
          <ul className="flex">
            {breadcrumbs.map((breadcrumb, index) => (
              <li key={index} className="flex items-center">
                {index < breadcrumbs.length - 1 ? (
                  <>
                    <Link href={breadcrumb.href} className="hover:underline">
                      {breadcrumb.label}
                    </Link>

                    <span className="mx-2 text-white leading-relaxed tracking-wide">
                      /
                    </span>
                  </>
                ) : (
                  <span>{breadcrumb.label}</span>
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
