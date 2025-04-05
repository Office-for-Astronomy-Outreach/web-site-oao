import ImageCard from "@/components/ImageCard";
import { ImageGridProps } from "./types";

const ImageGridsSection: React.FC<ImageGridProps> = ({
  items,
  title,
  description,
}) => (
  <section
    className="flex flex-wrap gap-8"
    role="region"
    aria-labelledby={`${title}-title`}
  >
    <div className="flex flex-col gap-8 px-8">
      <h2 id={`${title}-title`} className="text-h2 font-bold md:w-1/2 w-full">
        {title}
      </h2>
      {description && (
        <p className="xl:text-h5 text-p text-gray-600">{description}</p>
      )}
    </div>
    <div className="grid md:grid-cols-2 grid-cols-1 w-full sm:gap-8 gap-4">
      {items.length > 0 && (
        <ImageCard
          item={items[0]}
          extraClasses="relative md:aspect-square aspect-video shadow-lg"
        />
      )}
      <div className="flex flex-1">
        <div className="grid grid-cols-2 w-full sm:gap-8 gap-4">
          {items.slice(1, 3).map((item, index) => (
            <ImageCard
              key={index}
              item={item}
              extraClasses="relative md:aspect-auto aspect-square"
            />
          ))}
          {items[3] && (
            <ImageCard
              item={items[3]}
              extraClasses="relative col-span-2 md:aspect-auto aspect-video"
            />
          )}
        </div>
      </div>
    </div>
  </section>
);

export default ImageGridsSection;
