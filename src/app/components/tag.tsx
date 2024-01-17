import React from "react";
import { ReactNode } from "react";

interface TagProps {
  children: ReactNode;
  end?: boolean;
  classNames?: string[];
}

const Tag: React.FC<TagProps> = ({
  children,
  end = false,
  classNames = [],
}) => {
  // Combine the default class and additional classes dynamically
  const combinedClassNames = ["text-gray-400", ...classNames].join(" ");

  return (
    <span className={combinedClassNames}>
      &lt;{end && "/"}
      <span className="text-primary">{children}</span>&gt;
    </span>
  );
};

export default Tag;
