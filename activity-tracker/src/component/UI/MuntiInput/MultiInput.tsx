import { ChangeEvent } from "react";

interface MultiInputInterface {
    name: string;
    label: string;
    value: string;
    onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
}

const MultiInput: React.FC<MultiInputInterface> = ({
    name,
    label,
    value,
    onChange,
}) => {
    return (
        <div className='flex gap-2 text-gray-600 items-start'>
            <label htmlFor={name} className='label'>
                {label}
            </label>
            <textarea
                className='input'
                rows={3}
                id={name}
                name={name}
                value={value}
                onChange={onChange}
            ></textarea>
        </div>
    );
};

export default MultiInput;
