import * as Icons from "../UI/Icons/Icons";
import * as types from "../../types/types";
import React, { useState } from "react";

interface ActivityCardInterface {
    id?: string;
    title: string;
    from: string;
    to: string;
    description: string;
    category: types.Category;
    onDelete: (id?: string) => void;
}

const ActivityCard: React.FC<ActivityCardInterface> = ({
    id,
    title,
    from,
    to,
    description,
    category,
    onDelete,
}) => {
    const [isOptionOpen, setIsOptionOpen] = useState<boolean>(false);
    let icon: React.ReactNode = null;
    switch (category) {
        case "diet":
            icon = (
                <Icons.IconDiet classes='text-white bg-green-600  p-2 rounded-full h-10 w-10' />
            );
            break;
        case "education":
            icon = (
                <Icons.IconEducation classes='text-white bg-indigo-600  p-2 rounded-full h-10 w-10' />
            );
            break;
        case "exercise":
            icon = (
                <Icons.IconExercise classes='text-white bg-blue-600  p-2 rounded-full h-10 w-10' />
            );
            break;
        case "favourite":
            icon = (
                <Icons.IconFavourite classes='text-white bg-red-600  p-2 rounded-full h-10 w-10' />
            );
            break;
        case "work":
            icon = (
                <Icons.IconWork classes='text-white bg-yellow-600  p-2 rounded-full h-10 w-10' />
            );
            break;
        case "other":
            icon = (
                <Icons.IconOther classes='text-white bg-yellow-600  p-2 rounded-full h-10 w-10' />
            );
            break;
    }

    return (
        <React.Fragment>
            <div
                className='w-56 h-56 rounded-lg p-4 flex flex-col gap-2 
    transform transition duration-500 hover:scale-110 bg-white hover:shadow-md relative '
                onMouseLeave={() => setIsOptionOpen(false)}
            >
                {isOptionOpen && (
                    <button
                        className='fixed inset-0 w-full h-full z-30 cursor-default'
                        onClick={() => setIsOptionOpen(false)}
                    ></button>
                )}

                <div className='flex justify-between'>
                    {icon}

                    <button
                        onClick={() =>
                            setIsOptionOpen((prevState) => !prevState)
                        }
                    >
                        <i>
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                className='h-6 w-6'
                                fill='none'
                                viewBox='0 0 24 24'
                                stroke='currentColor'
                            >
                                <path
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    strokeWidth={2}
                                    d='M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z'
                                />
                            </svg>
                        </i>
                    </button>
                    <ul
                        className='w-20 absolute bg-gray-100 py-1 shadow-lg rounded-sm  right-0 top-12 text-xs z-40'
                        style={{ display: isOptionOpen ? "block" : "none" }}
                    >
                        <li className='bg-white px-2 py-1 hover:bg-gray-50 cursor-pointer'>
                            View
                        </li>
                        <li
                            className='bg-white px-2 py-1 hover:bg-gray-50 cursor-pointer text-red-600 hover:text-red-700'
                            onClick={() => onDelete(id)}
                        >
                            Delete
                        </li>
                    </ul>
                </div>

                <h2 className=''>{title}</h2>
                <p className='text-2xl text-gray-600 font-semibold'>{`${from}-${to}`}</p>
                <p className='text-xs text-gray-400 '>{description}</p>
            </div>
        </React.Fragment>
    );
};

export default ActivityCard;
