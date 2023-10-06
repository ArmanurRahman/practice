import React, { ChangeEvent } from "react";

interface InputInterface {
    name: string;
    label: string;
    value: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputInterface> = ({ name, label, value, onChange }) => {
    return (
        <div className='flex  text-gray-600 gap-2 items-start'>
            <label htmlFor={name} className='label'>
                {label}
            </label>
            <input
                className=' input'
                id={name}
                name={name}
                type='text'
                value={value}
                onChange={onChange}
            ></input>
        </div>
    );
};

export default Input;
