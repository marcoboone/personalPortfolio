
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const MiscCard = ({ date, title, imageSrc }) => {
    return (
        <div className="col-span-1 p-4 flex flex-col gap-4">
            <div className="aspect-square rounded-md relative">
                <Image
                    src={imageSrc}
                    className="rounded-md bg-black"
                    layout="fill"
                    objectFit="cover"
                    objectPosition="middle right"
                    alt="Image"
                />
            </div>
            <div className="flex flex-col ">
                <span className="text-sm text-[#d7be96] tacking-widest font-semibold">
                    {date}
                </span>
                <h2 className="text-xl">{title}</h2>
                <div className="mt-4">
                    <Link
                        href="/"
                        className="text-xs text-white font-bold tracking-widest border-[1px] border-white rounded-md p-2"
                    >
                        LOREM
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default MiscCard;