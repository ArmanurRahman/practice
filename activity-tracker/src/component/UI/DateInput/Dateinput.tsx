import React, { ChangeEvent } from "react";

interface DateInputInterface {
    name: string;
    label: string;
    value: string;
    type: "date" | "time";
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const DateInput: React.FC<DateInputInterface> = ({
    name,
    label,
    value,
    onChange,
    type,
}) => {
    return (
        <div className='flex gap-2 text-gray-600 items-start'>
            <label htmlFor={name} className='label'>
                {label}
            </label>
            <input
                className=' input'
                id={name}
                name={name}
                type={type}
                value={value}
                onChange={onChange}
            ></input>
        </div>
    );
};

export default DateInput;
