import { useEffect, useState } from "react";
import ActivityCard from "../../component/Activity/ActivityCard";
import AddActivity from "../../component/Activity/AddActivity";
import Modal from "../../component/Modal/Modal";
import * as interfaceses from "../../interface/interface";

const Activity: React.FC = () => {
    const [isAdd, setIsAdd] = useState<boolean>(false);
    const [activities, setActivities] = useState<interfaceses.ActivityForm[]>();
    const [refresh, setRefresh] = useState<boolean>(false);

    useEffect(() => {
        fetch(
            'https://activity-tracker-55d23-default-rtdb.firebaseio.com/activity.json?orderBy="createdAt"',
            {
                method: "GET",
            }
        )
            .then((response) => response.json())
            .then((data) => {
                const activities: interfaceses.ActivityForm[] = [];
                for (let key in data) {
                    activities.push({ ...data[key], id: key });
                }
                setActivities(activities);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [refresh]);

    const deleteHandler = (id?: string) => {
        if (!id) {
            return;
        }
        fetch(
            `https://activity-tracker-55d23-default-rtdb.firebaseio.com/activity/${id}.json?`,
            { method: "DELETE" }
        )
            .then((response) => {
                //console.log(response.json());
                setRefresh((prevState) => !prevState);
            })

            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <div className='w-full h-full flex gap-8 flex-wrap'>
            <div className='w-56 h-56 bg-white rounded-lg'>
                <div
                    className='flex items-center justify-center h-full text-green-600 cursor-pointer'
                    onClick={() => setIsAdd(true)}
                >
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
                            d='M12 4v16m8-8H4'
                        />
                    </svg>
                </div>
            </div>
            {activities?.map((item) => (
                <ActivityCard
                    id={item.id}
                    key={item.id}
                    title={item.name}
                    category={item.category}
                    from={item.from}
                    to={item.to}
                    description={item.description}
                    onDelete={(id) => deleteHandler(id)}
                />
            ))}

            {isAdd && (
                <Modal onClose={() => setIsAdd(false)}>
                    <AddActivity
                        onFetch={() => setRefresh((prevState) => !prevState)}
                        onClose={() => setIsAdd(false)}
                    />
                </Modal>
            )}
        </div>
    );
};

export default Activity;
