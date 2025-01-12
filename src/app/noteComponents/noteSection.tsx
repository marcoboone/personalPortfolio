import React from 'react';

interface NoteSectionProps {
    children: React.ReactNode;
}

const NoteSection: React.FC<NoteSectionProps> = ({ children }) => {
    return (
        <div className="col-span-1 md:col-span-1 row-span-1 shadow-md rounded-md border-t-[1px] border-atomgreyb/20 p-6 flex flex-col gap-4">
            {children}
        </div>
    );
};

export default NoteSection;