import { NavigationType } from "../../types/types";
interface SideNavigator {
    currentContent: NavigationType;
    onContentChange: (content: NavigationType) => void;
}

const MainNavigation: React.FC<SideNavigator> = ({
    currentContent,
    onContentChange,
}) => {
    return (
        <div
            className='flex lg:flex-col items-center justify-center h-full lg:space-y-4 space-x-4 
        lg:space-x-0 py-2 lg:py-4'
        >
            <a
                href='/#'
                className='group'
                onClick={() => onContentChange("dashboard")}
            >
                <div
                    className={`flex justify-center items-center w-10 h-10 lg:w-14 lg:h-14 
                text-white opacity-60 rounded-xl ${
                    currentContent === "dashboard"
                        ? "bg-white opacity-100 text-red-500 transform translate-x-8 lg:translate-y-0 -translate-y-8 duration-300 shadow-xl"
                        : "group-hover:bg-white group-hover:opacity-100 group-hover:text-red-500 transform lg:group-hover:translate-x-8 lg:group-hover:translate-y-0 group-hover:-translate-y-8 duration-300 group-hover:shadow-xl"
                }  
                
                 `}
                >
                    {" "}
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='h-6 w-6'
                        viewBox='0 0 20 20'
                        fill='currentColor'
                    >
                        <path d='M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z' />
                    </svg>
                </div>
            </a>
            <a href='/#' className='group'>
                <div
                    className='flex justify-center items-center w-10 h-10 lg:w-14 lg:h-14 
                text-white opacity-60 rounded-xl group-hover:bg-white group-hover:opacity-100
                 group-hover:text-red-500 transform lg:group-hover:translate-x-8 lg:group-hover:translate-y-0 
                  group-hover:-translate-y-8 duration-300 group-hover:shadow-xl'
                >
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='h-6 w-6'
                        viewBox='0 0 20 20'
                        fill='currentColor'
                    >
                        <path d='M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z' />
                        <path d='M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z' />
                    </svg>
                </div>
            </a>
            <a
                href='/#'
                className='group'
                onClick={() => onContentChange("activity")}
            >
                <div
                    className={`flex justify-center items-center w-10 h-10 lg:w-14 lg:h-14 
                text-white opacity-60 rounded-xl ${
                    currentContent === "activity"
                        ? "bg-white opacity-100 text-red-500 transform translate-x-8 lg:translate-y-0 -translate-y-8 duration-300 shadow-xl"
                        : "group-hover:bg-white group-hover:opacity-100 group-hover:text-red-500 transform lg:group-hover:translate-x-8 lg:group-hover:translate-y-0 group-hover:-translate-y-8 duration-300 group-hover:shadow-xl"
                }  
                
                 `}
                >
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='h-6 w-6'
                        viewBox='0 0 24 24'
                        fill='currentColor'
                    >
                        <path d='M0 0h24v24H0z' fill='none' />
                        <path d='M13.49 5.48c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm-3.6 13.9l1-4.4 2.1 2v6h2v-7.5l-2.1-2 .6-3c1.3 1.5 3.3 2.5 5.5 2.5v-2c-1.9 0-3.5-1-4.3-2.4l-1-1.6c-.4-.6-1-1-1.7-1-.3 0-.5.1-.8.1l-5.2 2.2v4.7h2v-3.4l1.8-.7-1.6 8.1-4.9-1-.4 2 7 1.4z' />
                    </svg>
                </div>
            </a>
            <a href='/#' className='group'>
                <div
                    className={`flex justify-center items-center w-10 h-10 lg:w-14 lg:h-14  text-white opacity-60 rounded-xl group-hover:bg-white group-hover:opacity-100 group-hover:text-red-500 transform lg:group-hover:translate-x-8 lg:group-hover:translate-y-0 group-hover:-translate-y-8 duration-300 group-hover:shadow-xl`}
                >
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='h-6 w-6'
                        viewBox='0 0 20 20'
                        fill='currentColor'
                    >
                        <path d='M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z' />
                        <path
                            fillRule='evenodd'
                            d='M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z'
                            clipRule='evenodd'
                        />
                    </svg>
                </div>
            </a>
        </div>
    );
};

export default MainNavigation;
