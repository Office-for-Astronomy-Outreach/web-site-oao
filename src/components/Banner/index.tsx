import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";

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
    <div className="relative w-full md:h-96 h-80 ">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={image.urlImage}
          alt={image.alt ?? ""}
          fill
          className="z-0"
          style={{ objectFit: "cover", objectPosition: "center" }}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-10 z-1"></div>

        {image?.caption && (
          <div className="absolute bottom-2 text-end z-[1] w-full px-4">
            <div className="relative group">
              <p className="text-xs cursor-pointer text-white">
                <FontAwesomeIcon icon={faCircleInfo} />
              </p>
              <div className="absolute w-auto bottom-0 right-8 bg-[#9b9b9b54] text-gray-50 text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-xs">{image?.caption}</span>
              </div>
            </div>
          </div>
        )}
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
