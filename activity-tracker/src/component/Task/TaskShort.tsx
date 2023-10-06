import Checkbox from "../UI/Checkbox/Checkbox";

const TaskShort: React.FC = () => {
    const check = true;
    return (
        <div className='bg-green-50 p-4 rounded-lg'>
            <div className='flex gap-4'>
                <Checkbox id='Task Name' onChange={() => {}} checked={check} />
                <p className={`text-base ${check && "line-through"}`}>
                    Task Name
                </p>
            </div>
            <p className='ml-10 text-sm text-gray-400'>8.00 AM - 13.00 AM</p>
        </div>
    );
};

export default TaskShort;
