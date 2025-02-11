import { useState } from "react";

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
          <li>Be committed to the OAO motto: Astronomy for Everyone.</li>
        </ul>
      </div>
    ),
  },
  {
    question: "How can I become a NOC for your country?",
    answer: (
      <div className="flex flex-col gap-4 mt-8 text-gray-600">
        <ul className="list-disc ml-4">
          <li>Get in touch with your local NOC</li>
          <li>
            If there is no NOC for your country, you can write to us
            public@oao.iau.org
          </li>
        </ul>
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
