import React from "react";
import Link from "next/link";

interface HeroCardProps {
  title: string;
  link?: string; // Optional link property
  description?: string; // Optional description property
  linkName?: string; // Optional link name property
  colSpan: string; // Optional column span property
  rowSpan: string; // Optional row span property
  color?: string; // Optional color property
}

const HeroCard: React.FC<HeroCardProps> = ({
  title,
  link,
  description,
  linkName,
  color,
  colSpan,
  rowSpan,
}) => {
  const cardContent = (
    <div className=" group flex flex-col justify-between h-full">
      <div>
        <div className="text-xl md:text-3xl mb-2 ">{title}</div>
        {description && <div className="text-md ">{description}</div>}
      </div>

      <div className="text-sm md:text-md self-end group-hover:underline">{linkName}</div>
    </div>
  );

  return link ? (
    <Link
      href={link}
      className={`block ${colSpan} ${rowSpan}  bg-atomblack border-[2px] ${color}  p-4 lg:p-8 transition-colors duration-[1s] hover-pop hover:cursor-pointer relative shadow-lg text-atomwhite hover:text-atomwhite rounded-lg`}
    >
      {cardContent}
    </Link>
  ) : (
    <div
      className={`block ${colSpan} ${rowSpan} bg-atomblack border-[2px] ${color}  p-4 lg:p-8 transition-colors duration-[1s] hover-pop hover:cursor-pointer relative shadow-lg text-atomwhite hover:text-atomwhite rounded-lg`}
    >
      {cardContent}
    </div>
  );
};

export default HeroCard;
