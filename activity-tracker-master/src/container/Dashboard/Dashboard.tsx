import QuickProfile from "../../component/QuickProfile/QuickProfile";
import Statistics from "../../component/Statistics/Statistics";
import Card from "../../component/UI/Card/Card";

const Dashboard: React.FC = () => {
    return (
        <div className='w-full flex gap-4'>
            <div className='w-3/4'>
                <Card />
                <Statistics />
            </div>
            <div className='w-1/4'>
                <QuickProfile />
            </div>
        </div>
    );
};

export default Dashboard;
