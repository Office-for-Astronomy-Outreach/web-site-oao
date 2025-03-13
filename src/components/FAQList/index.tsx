import { useState } from "react";
import EmailDisplay from "../EmailDisplay";

const faqs = [
  {
    question: "What is a NOC?",
    answer: (
      <div className="flex flex-col gap-4 mt-8 text-gray-600">
        <p>
          A National Outreach Coordinator (NOC) is a representative who connects
          their nation with the IAU Office for Astronomy Outreach, to strengthen
          astronomy communication and education.
        </p>
        <p>
          By leveraging this connection, NOCs help bring astronomy-related
          opportunities, resources, and initiatives to their local communities,
          adapting them to their specific needs and contexts.
        </p>
        <p>
          Their role is to foster collaboration, share knowledge, and ensure
          that astronomy benefits society at all levels.
        </p>
        <p>
          The NOCs implement the IAU public engagement initiatives at the
          national level, disseminate information, and bridge the IAU with
          local/national communities. This is a totally volunteer
          (non-renumerated), online and international network.
        </p>
      </div>
    ),
  },

  {
    question: "A National Outreach Coordinator must:",
    answer: (
      <div className="flex flex-col gap-4 mt-8 text-gray-600">
        <ul className="list-disc ml-4">
          <li>Be involved with and have connections to their community.</li>
          <li>
            Be actively engaged in astronomy communication and public
            engagement.
          </li>
          <li>Have plans and the means to create and disseminate materials.</li>
          <li>Be willing to collaborate with other NOCs.</li>
          <li>
            Understand the NOC role, are willing to participate fully in the
            network and all it entails, and have a plan for how they will
            leverage the NOC role for the benefit of their communities.
          </li>
          <li>
            Be committed to the OAO motto:{" "}
            <strong>Astronomy for Everyone.</strong>
          </li>
        </ul>
      </div>
    ),
  },
  {
    question: "What are the NOC's responsibilities?",
    answer: (
      <div className="flex flex-col gap-4 mt-8 text-gray-600">
        <ul className="list-disc ml-4">
          <li>
            <b>Participate</b> in the Global Project/Themes through distributing
            OAO materials, engaging with the projects laid out by the OAO or
            developing their own project based on the OAO&apos;s content.
          </li>
          <li>
            Make a concerted effort to <b>attend</b> the Regional, Global and
            NFS Update meetings and watch the recordings if they cannot.
            <b>NOCs must attend at least 50% of the meetings.</b>
          </li>
          <li>
            <b>Present</b> at at least one Regional meeting
          </li>
          <li>
            <b>Report</b> on quarterly events and activities{" "}
          </li>
          <li>
            <b>Contribute</b> to the Regional and/or Language Working Groups
          </li>
          <li>
            <b>Engage</b> with other NOCs for brainstorming
          </li>
          <li>
            To be a point of contact between the IAU and OAO, and the
            communities the NOC represents.
          </li>
          <li>
            Develops plans for the public engagement actions associated with the
            IAU nationwide.
          </li>
        </ul>
      </div>
    ),
  },
  {
    question: "How can I become a NOC for your country?",
    answer: (
      <div className="flex flex-col gap-4 mt-8 text-gray-600">
        <p>
          NOC cycles are aligned with the three-year of the IAU General
          Assemblies. After applying, sitting for an interview with a member of
          the OAO Team, and being approved by the OAO and the National Committee
          (where applicable), new NOCs are brought into the network for a
          three-year period starting at the end of that year&apos;s General
          Assembly.
        </p>
        <p>
          <b>What to do?</b>
        </p>
        <ul className="list-disc ml-4">
          <li>
            Get in touch with your local NOC. You can find all contact
            information in each country&apos;s NOC site.
          </li>
          <li>
            If there is no NOC for your country, you can write to us{" "}
            <EmailDisplay email="public@oao.iau.org" />, to receive a link for
            the application form. If
          </li>
          <li>
            After a detailed review we will set up an interview with the
            applicant to continue direct communication with the Office for
            Astronomy Outreach team.
          </li>
        </ul>
      </div>
    ),
  },
  {
    question:
      "What are the benefits of being part of the National Outreach Coordinators Network? ",
    answer: (
      <div className="flex flex-col gap-4 mt-8 text-gray-600">
        <p>
          By becoming a member of the NOC Network, you will gain access to a
          range of unique benefits that will allow you to play a key role in the
          scientific development of your region and country, while connecting
          your community to the world of science. Here are some of the benefits
          you will enjoy:
        </p>

        <ul className="list-decimal ml-4">
          <li>
            <b>Impact on your community and country:</b> You will be actively
            involved in scientific projects that contribute to the progress of
            your environment, helping to develop and apply knowledge for the
            direct benefit of society.
          </li>
          <li>
            <b>International network of science communicators:</b> You will
            become part of a global network spanning over 120 countries, working
            together to promote astronomy and science in general, creating
            opportunities for collaboration and mutual learning.
          </li>
          <li>
            <b>Access to exclusive resources:</b> As an associate member of the
            IAU (International Astronomical Union), you will gain access to
            valuable academic and educational resources that will enhance your
            scientific knowledge and capabilities.
          </li>
          <li>
            <b>Opportunities for funding:</b> The NOC Network will provide you
            with access to funding opportunities for your outreach projects,
            enabling you to implement initiatives that benefit your country and
            promote astronomy in your region.
          </li>
        </ul>
        <p>
          By joining the NOC Network, you will not only contribute to the
          advancement of science but also become a leader within the global
          astronomical community, connecting and collaborating with people from
          all over the world.
        </p>
      </div>
    ),
  },
];

export default function FAQList() {
  return (
    <div className="w-full">
      <ul className="space-y-4">
        {faqs.map((faq, index) => (
          <li key={index} className="shadow-md rounded-lg bg-white p-8">
            <details className="w-full group" open>
              <summary className="text-h5 text-primary-main font-semibold cursor-pointer list-none flex justify-between items-center">
                {faq.question}
                <svg
                  className="w-5 h-5 transition-transform transform group-open:rotate-180"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </summary>
              {faq.answer}
            </details>
          </li>
        ))}
      </ul>
    </div>
  );
}
