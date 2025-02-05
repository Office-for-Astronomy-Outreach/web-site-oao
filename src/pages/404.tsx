import type { GetServerSideProps } from "next";
import { ni18nConfig } from "ni18n.config";
import { loadTranslations } from "ni18n";

import Button from "@/components/Button";
import StarCanvas from "@/components/Animations/StarCanvas";

const NotFound = () => {
  return (
    <div
      className="h-100 min-h-[100vh] relative"
      style={{
        overflow: "hidden",
        background:
          "linear-gradient(90deg, #000 82%, #010818e3 90%, #000 100%)",
      }}
    >
      {/* Fondo de estrellas */}
      <StarCanvas
        numStars={650}
        starColors={["#ffffff", "#e0e7ff", "#99b9eb"]}
      />

      {/* Punto azul y descripción */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          right: "10%",
          transform: "translateY(-180%)",
          textAlign: "right",
          color: "#ffffff",
          zIndex: 2,
        }}
      >
        {/* Punto azul */}
        <div
          className="w-[5px] h-[5px] rounded-[50%] bg-primary-light absolute right-0"
          style={{
            marginTop: "12px",
            boxShadow: "0 0 10px #ffff",
          }}
        ></div>

        {/* Flecha SVG */}
        <svg
          width="120"
          height="60"
          viewBox="0 0 120 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute"
          style={{
            position: "absolute",
            top: "35%",
            right: "15px",
            transform: "translateY(-50%)",
          }}
        >
          <path
            d="M5 55 C50 10, 90 10, 115 5"
            stroke="#ffffff"
            strokeWidth="2"
            fill="none"
          />
          <polygon points="110,0 120,5 110,10" fill="#ffffff" />
        </svg>

        <div className="relative max-w-[200px] mt-16 flex items-center justify-end">
          <span className="text-white text-xs relative">
            But we{"'"}re sure what you{"'"}re looking for is here somewhere.
          </span>
        </div>
      </div>

      {/* Título de la página */}
      <div className="h-[100vh] w-full absolute z-10 flex flex-col justify-end gap-8 p-16 text-white">
        <h1 className="md:text-9xl text-5xl font-bold">404</h1>

        <div>
          <p className="md:text-5xl text-2xl font-bold mt-4">Page Not Found</p>
          <p className="md:text-3xl text-md font-bold mt-4">
            Sorry we couldn{"'"}t find the page you{"'"}re looking for.
          </p>
        </div>
        <div>
          <Button
            label={"Back to home"}
            variant="outline"
            color="light"
            url="/"
          />
        </div>
        <div className="flex mt-6 sm:w-1/2">
          <p className="text-xs">
            Did you know? This is a reference to a photograph showing Earth from
            about 6 billion kilometers away as a {"'"}Pale Blue Dot{"'"}{" "}
            captured by Voyager 1.
          </p>
        </div>
      </div>
    </div>
  );
};

NotFound.is404 = true;

export default NotFound;

export const get: GetServerSideProps = async ({ locale }) => {
  return {
    props: {
      ...(await loadTranslations(ni18nConfig, locale, [
        "home",
        "layout",
        "about",
      ])),
    },
  };
};
