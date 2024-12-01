import React from 'react';

const TechNodule = ({ text, children, color }) => {
  const shadowColorClass = `shadow-${color}`;

  return (
    <div className="group flex gap-2 items-center cursor-pointer">
      <div className={`hover-pop shadow-md rounded-md border-t-[1px] border-atomgreyb/20 p-2 dark:${shadowColorClass} shadow-atomblack`}>
        {children}
      </div>
      <span className="hidden group-hover:block text-sm">{text}</span>
    </div>
  );
};

export default TechNodule;