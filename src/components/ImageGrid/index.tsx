import Image from "next/image";
import Link from "next/link";
import clsx from "classnames"; // Usamos 'clsx' para manejar las clases de manera más eficiente

// Definimos la interfaz para los elementos del JSON
interface ImageGridItem {
  title: string;
  link: string;
  image: string;
  alt?: string;
}

interface ImageGridProps {
  items: ImageGridItem[];
  title: string;
  description?: string;
}

const ImageGrid: React.FC<ImageGridProps> = ({ items, title, description }) => {
  // Clases comunes reutilizables
  const baseClasses = clsx(
    "relative",
    "bg-gray-400",
    "rounded-lg",
    "focus:outline-none",
    "focus:ring-4",
    "focus:ring-blue-300",
    "transition-transform",
    "duration-300",
    "hover:scale-105"
  );

  const maskClasses = clsx(
    "absolute",
    "inset-0",
    "bg-black",
    "bg-opacity-40",
    "rounded-lg"
  );

  const textClasses = clsx(
    "absolute",
    "inset-0",
    "flex",
    "items-center",
    "justify-center",
    "text-white",
    "text-lg",
    "font-bold",
    "text-center",
    "p-4"
  );

  return (
    <section
      className="flex flex-wrap gap-6"
      role="region"
      aria-labelledby={`${title}-title`}
    >
      <h2 id={`${title}-title`} className="text-h2 font-bold text-body w-full">
        {title}
      </h2>
      {description && (
        <p className="text-gray-800 w-full mb-4">{description}</p>
      )}

      {/* Primera parte: Cuadrado */}
      {items.slice(0, 1).map((item, index) => (
        <Link
          href={item.link}
          key={index}
          className={clsx(
            baseClasses,
            "w-full",
            "md:w-1/2",
            "md:aspect-square",
            "aspect-auto",
            "shadow-lg"
          )}
          role="link"
          aria-label={item.title}
        >
          <Image
            src={item.image}
            alt={item?.alt ?? item.title}
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
          <div className={maskClasses}></div>
          <div className={textClasses}>
            <h5 className="text-h5">{item.title}</h5>
          </div>
        </Link>
      ))}

      {/* Segunda parte: Dividida en 2x2 */}
      <div className="flex flex-1 w-full">
        <div className="grid grid-cols-2 w-full gap-6">
          {items.slice(1, 3).map((item, index) => (
            <Link
              href={item.link}
              key={index}
              className={clsx(baseClasses, "aspect-square")}
              role="link"
              aria-label={item.title}
            >
              <Image
                src={item.image}
                alt={item?.alt ?? item.title}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
              <div className={maskClasses}></div>
              <div className={textClasses}>
                <h5 className="text-h5">{item.title}</h5>
              </div>
            </Link>
          ))}
          <Link
            href={items[3].link}
            className={clsx(baseClasses, "col-span-2", "aspect-auto")}
            role="link"
            aria-label={items[3].title}
          >
            <Image
              src={items[3].image}
              alt={items[3]?.alt ?? items[3].title}
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
            <div className={maskClasses}></div>
            <div className={textClasses}>
              <h5 className="text-h5">{items[3].title}</h5>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ImageGrid;
