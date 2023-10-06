import { useEffect, useState } from "react";
import {
    IconDiet,
    IconEducation,
    IconExercise,
    IconFavourite,
    IconWork,
    IconOther,
} from "../Icons/Icons";
import * as types from "../../../types/types";

interface Option {
    value: types.Category;
    label: string;
    Icon: React.ReactElement;
}

interface SelectInterface {
    name: string;
    label: string;
    value: types.Category;
    onChange: (value: types.Category) => void;
}

const options: Option[] = [
    { value: "education", label: "Education", Icon: <IconEducation /> },
    { value: "work", label: "Work", Icon: <IconWork /> },
    { value: "diet", label: "Diet", Icon: <IconDiet /> },
    { value: "favourite", label: "Favourite", Icon: <IconFavourite /> },
    { value: "exercise", label: "Exercise", Icon: <IconExercise /> },
    { value: "other", label: "Other", Icon: <IconOther /> },
];

const CategorySelect: React.FC<SelectInterface> = ({
    name,
    label,
    value,
    onChange,
}) => {
    const [selectedOption, setSelectedOption] = useState<Option | undefined>();

    useEffect(() => {
        setSelectedOption(options.find((item) => item.value === value));
    }, [value]);

    const [open, setOpen] = useState<boolean>(false);

    const categoryChangeHandler = (value: types.Category) => {
        setOpen(false);
        onChange(value);
    };

    return (
        <div className='flex gap-2 text-gray-600 items-start'>
            <label htmlFor={name} className='label'>
                {label}
            </label>
            <div className='mt-1 relative'>
                <button
                    type='button'
                    className='input relative  bg-white border border-gray-300 rounded-md shadow-sm pl-3 pr-10 
                    py-2 text-left cursor-default focus:outline-none focus:ring-1 sm:text-sm h-10'
                    aria-haspopup='listbox'
                    aria-expanded='true'
                    aria-labelledby='listbox-label'
                    onClick={() => setOpen((prevState) => !prevState)}
                >
                    <span className='flex items-center'>
                        {selectedOption?.Icon}
                        <span className='ml-3 block truncate'>
                            {selectedOption?.label}
                        </span>
                    </span>
                    <span className='ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none'>
                        <svg
                            className='h-5 w-5 text-gray-400'
                            xmlns='http://www.w3.org/2000/svg'
                            viewBox='0 0 20 20'
                            fill='currentColor'
                            aria-hidden='true'
                        >
                            <path
                                fillRule='evenodd'
                                d='M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z'
                                clipRule='evenodd'
                            />
                        </svg>
                    </span>
                </button>
                {open && (
                    <ul
                        className='absolute z-10 mt-1 w-full bg-white shadow-lg max-h-56 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm'
                        tabIndex={-1}
                        role='listbox'
                        aria-labelledby='listbox-label'
                        aria-activedescendant='listbox-option-3'
                    >
                        {options.map((item) => (
                            <li
                                key={item.value}
                                className={`text-gray-900 cursor-pointer select-none relative py-2 pl-3 pr-9 hover:bg-green-200
                                ${
                                    selectedOption?.value === item.value &&
                                    "bg-green-400"
                                } 
                                `}
                                id='listbox-option-0'
                                role='option'
                                aria-selected='true'
                                onClick={() =>
                                    categoryChangeHandler(item.value)
                                }
                            >
                                <div className='flex items-center'>
                                    {item.Icon}

                                    <span className='font-normal ml-3 block truncate'>
                                        {item.label}
                                    </span>
                                </div>
                                {selectedOption?.value === item.value && (
                                    <span className='text-green-600 absolute inset-y-0 right-0 flex items-center pr-4'>
                                        <svg
                                            className='h-5 w-5'
                                            xmlns='http://www.w3.org/2000/svg'
                                            viewBox='0 0 20 20'
                                            fill='currentColor'
                                            aria-hidden='true'
                                        >
                                            <path
                                                fillRule='evenodd'
                                                d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                                                clipRule='evenodd'
                                            />
                                        </svg>
                                    </span>
                                )}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default CategorySelect;
