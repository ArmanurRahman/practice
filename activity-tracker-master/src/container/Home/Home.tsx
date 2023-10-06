import { useState } from "react";
import SideNavigation from "../../component/Navigation/SideNavigation";
import Activity from "../Activity/Activity";
import * as types from "../../types/types";
import Dashboard from "../Dashboard/Dashboard";

const Home: React.FC = () => {
    const [activeContent, setActiveContent] =
        useState<types.NavigationType>("dashboard");

    const changeContentHandler = (name: types.NavigationType) => {
        setActiveContent(name);
    };
    let content = null;
    if (activeContent === "dashboard") {
        content = <Dashboard />;
    } else if (activeContent === "activity") {
        content = <Activity />;
    }

    return (
        <div className='flex'>
            <div className='fixed lg:static bottom-0 w-full lg:w-24 lg:h-full z-10'>
                <div className=' relative lg:fixed w-full lg:w-24 h-full bg-green-600'>
                    <a
                        href='/#'
                        className='hidden absolute top-10 left-1/2 transform -translate-x-1/2 w-14 h-14 lg:flex lg:items-center lg:justify-center text-white rounded-xl hover:bg-white hover:bg-opacity-60'
                    >
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            className='h-8 w-8'
                            viewBox='0 0 24 24'
                            stroke='currentColor'
                        >
                            <g>
                                <path d='M0,0h24v24H0V0z' fill='none' />
                            </g>
                            <g>
                                <path d='M12,4.81L12,19c-3.31,0-6-2.63-6-5.87c0-1.56,0.62-3.03,1.75-4.14L12,4.81 M6.35,7.56L6.35,7.56C4.9,8.99,4,10.96,4,13.13 C4,17.48,7.58,21,12,21c4.42,0,8-3.52,8-7.87c0-2.17-0.9-4.14-2.35-5.57l0,0L12,2L6.35,7.56z' />
                            </g>
                        </svg>
                    </a>
                    <SideNavigation
                        currentContent={activeContent}
                        onContentChange={changeContentHandler}
                    />
                </div>
            </div>
            <div className='w-full p-4 lg:p-10 bg-green-50 h-full'>
                {content}
            </div>
        </div>
    );
};

export default Home;
