interface CheckboxInterface {
    id: string;
    checked: boolean;
    onChange: () => void;
    label?: string;
}

const Checkbox: React.FC<CheckboxInterface> = ({
    id,
    checked,
    onChange,
    label,
}) => {
    return (
        <div className='flex items-center gap-1 text-gray-600 cursor-pointer'>
            <label className=' flex cursor-pointer relative gap-1' htmlFor={id}>
                <input
                    className=' appearance-none h-6 w-6 rounded-lg ring-green-400  ring-1 cursor-pointer'
                    type='checkbox'
                    id={id}
                    checked={checked}
                    onChange={onChange}
                />
                <div className=' cursor-pointer text-green-400  absolute top-0 left-0 '>
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='h-6 w-6 hidden'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                    >
                        <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={2}
                            d='M5 13l4 4L19 7'
                        />
                    </svg>
                </div>
                {label}
            </label>
        </div>
    );
};

export default Checkbox;
