import React from "react";

interface Scientist {
  name: string;
  years: string;
  description: string;
  link: string;
}

interface Activity {
  title: string;
  suggestions: (string | { text: string; link: string; href: string })[];
}

interface ActivityCardProps {
  id: string;
  title: string;
  scientist: Scientist;
  objective: string;
  activities: Activity[];
}

const ActivityCard: React.FC<ActivityCardProps> = ({
  id,
  title,
  scientist,
  objective,
  activities,
}) => {
  return (
    <article
      id={id}
      className="flex flex-col gap-6 p-8 border rounded-lg shadow-lg bg-white h-full"
    >
      {/* Título */}
      <h3 className="text-xl font-bold text-gray-900">{title}</h3>

      {/* Información del científico */}
      <div className="text-gray-600">
        <h4 className="font-semibold">
          <a
            href={scientist.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-main hover:underline"
          >
            {scientist.name} <span className="text-md">{scientist.years}</span>
          </a>
        </h4>
        <p className="text-sm text-gray-600">{scientist.description}</p>
      </div>

      {/* Objetivo */}
      <div className="border-l-4 border-primary-main pl-4">
        <p className="text-sm italic text-gray-600">{objective}</p>
      </div>

      {/* Actividades */}
      <div className="flex flex-col gap-4 text-gray-600">
        <ol className="list-decimal xl:text-p text-md ml-4 mt-4">
          {activities.map((activity, index) => (
            <li key={index} className="mb-4">
              <p className="xl:text-p text-md mb-2">{activity.title}</p>
              <ul className="list-disc ml-4">
                {activity.suggestions.map((suggestion, i) =>
                  typeof suggestion === "string" ? (
                    <li key={i} className="mb-4 text-xs">
                      {suggestion}
                    </li>
                  ) : (
                    <li key={i} className="mb-4 text-xs">
                      {suggestion.text}{" "}
                      <a
                        href={suggestion.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline"
                      >
                        {suggestion.link}
                      </a>
                    </li>
                  )
                )}
              </ul>
            </li>
          ))}
        </ol>
      </div>
    </article>
  );
};

export default ActivityCard;
