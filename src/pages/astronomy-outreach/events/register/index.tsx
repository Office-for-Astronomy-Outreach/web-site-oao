"use client";

import Banner from "@/components/Banner";
import EventRegisterForm from "@/components/RegisterForm";
import { projectPath } from "@/utils/path";
import classNames from "classnames";

export default function EventForm() {
  const containerClass = classNames(
    "md:container",
    "md:mx-auto mx-2",
    "my-16",
    "md:px-4",
    "py-2",
    "flex flex-col gap-24"
  );

  return (
    <>
      <Banner
        image={{
          urlImage: `${projectPath}/images/astronomy-outreach-map/background.jpg`,
          caption:
            "Image composition showing all the ESO observatories and the Headquarters. Credit: ESO/M. Kornmesse",
        }}
        title="Astronomy Outreach Events"
        breadcrumbs={[]}
      />
      <div className={containerClass}>
        <EventRegisterForm />
      </div>
    </>
  );
}
