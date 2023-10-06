const Card: React.FC = () => {
    return (
        <div
            className='w-56 h-56 rounded-lg p-4 flex flex-col gap-2 
            transform transition duration-500 hover:scale-110 bg-white hover:shadow-md '
        >
            <div className='flex justify-between'>
                <i>
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='h-10 w-10 text-white bg-green-600  p-2 rounded-full'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                    >
                        <path d='M12 14l9-5-9-5-9 5 9 5z' />
                        <path d='M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z' />
                        <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={2}
                            d='M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222'
                        />
                    </svg>
                </i>

                <button>
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
            </div>

            <h2 className=''>Title</h2>
            <p className='text-2xl text-gray-600 font-semibold'>Value</p>
            <p className='text-xs text-gray-400 '>Description</p>
        </div>
    );
};

export default Card;
