import TaskShort from "../Task/TaskShort";

const QuickProfile: React.FC = () => {
    return (
        <div className='w-full bg-white h-screen rounded-lg flex-col flex  py-4 px-8 '>
            <div className=' space-y-1 flex flex-col items-center gap-4 w-full '>
                <div
                    className='text-5xl font-bold block text-white 
                bg-green-600 p-4 rounded-full w-20 h-20 text-center '
                >
                    U
                </div>
                <p className='text-gray-500 text-lg'>User Name</p>
                <div className='flex w-full justify-between'>
                    <div>
                        <p className=' text-xs font-light'>Weight</p>
                        <p className='text-sm font-semibold'>65 kg</p>
                    </div>
                    <div>
                        <p className='text-xs font-light'>Height</p>
                        <p className='text-sm font-semibold'>170 cm</p>
                    </div>
                    <div>
                        <p className='text-xs font-light'>Age</p>
                        <p className='text-sm font-semibold'>26 years</p>
                    </div>
                </div>
            </div>
            <p className='mt-16 text-lg font-semibold'>Monthly Progress</p>
            <div className='flex items-center justify-center w-32 h-32 rounded-full bg-white mx-auto relative mt-4'>
                <div className='text-green-600 h-20 w-20 bg-gray-50 rounded-full flex items-center justify-center shadow-lg'>
                    <div>
                        <span className='text-2xl font-black'>72</span>
                        <span className='font-bold'>%</span>
                    </div>
                </div>
                <div className='absolute w-36 text-green-600'>
                    <svg viewBox='0 0 36 36' stroke='currentColor'>
                        <path
                            d='M18 2.0845
      a 15.9155 15.9155 0 0 1 0 31.831
      a 15.9155 15.9155 0 0 1 0 -31.831'
                            fill='none'
                            strokeWidth='1'
                            strokeDasharray='72, 100'
                            strokeLinecap='round'
                        />
                    </svg>
                </div>
            </div>
            <p className='mt-16 text-lg font-semibold mb-4'>Upcoming Task</p>
            <div className='space-y-3'>
                <TaskShort />
                <TaskShort />
            </div>
        </div>
    );
};

export default QuickProfile;
