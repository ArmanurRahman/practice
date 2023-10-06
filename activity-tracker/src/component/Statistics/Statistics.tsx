import { useEffect, useState } from "react";
import * as types from "../../types/types";

interface Stat {
    month: types.Months;
    target: number;
    achived: number;
}
const stat: Stat[] = [
    {
        month: "Jan",
        target: 10,
        achived: 7,
    },
    {
        month: "Feb",
        target: 21,
        achived: 14,
    },
    {
        month: "Mar",
        target: 5,
        achived: 4,
    },
    {
        month: "Apr",
        target: 10,
        achived: 10,
    },
    {
        month: "May",
        target: 9,
        achived: 7,
    },
    {
        month: "Jun",
        target: 22,
        achived: 15,
    },
    {
        month: "Jul",
        target: 19,
        achived: 14,
    },
    {
        month: "Aug",
        target: 15,
        achived: 11,
    },
    {
        month: "Sep",
        target: 11,
        achived: 10,
    },
    {
        month: "Oct",
        target: 8,
        achived: 4,
    },
    {
        month: "Nov",
        target: 21,
        achived: 14,
    },
    {
        month: "Dec",
        target: 0,
        achived: 0,
    },
];

const Statistics: React.FC = () => {
    const [column, setColumn] = useState<number[]>([]);
    const [maxColumn, setMaxColumn] = useState<number>(0);

    useEffect(() => {
        let maxTarget = 0;
        stat.forEach((item) => {
            if (item.target > maxTarget) {
                maxTarget = item.target;
            }
        });
        const offset = maxTarget % 4;
        const maxCol = maxTarget + (4 - offset);

        const increment = Math.ceil(maxCol / 4);
        const cols = [];
        for (let i = maxCol; i > 0; i -= increment) {
            cols.push(i);
        }
        cols.push(0);
        for (let i = 0; i <= maxCol; i += increment) {
            if (i !== 0) {
                cols.push(i);
            }
        }
        setMaxColumn(maxCol);
        setColumn(cols);
    }, []);

    return (
        <div className='mt-4 lg:mt-10'>
            <div className='bg-white rounded-xl p-4 lg:p-10'>
                <div className='flex justify-between items-center mb-10 '>
                    <h3 className='text-lg font-semibold text-gray-700'>
                        Statistics
                    </h3>
                    <div className='flex items-center gap-3'>
                        <div className='flex items-center gap-1'>
                            <span className='w-3 h-3 bg-green-400 block rounded-full'></span>
                            <span className='text-sm'>Target Activity</span>
                        </div>
                        <div className='flex items-center gap-1'>
                            <span className='w-3 h-3 bg-red-400 block rounded-full'></span>
                            <span className='text-sm'>Achives Activity</span>
                        </div>
                        <button className='bg-white text-green-800 space-x-3 flex items-center px-4 py-2 rounded-full font-semibold focus:outline-none'>
                            <span>2021</span>
                            <span className='block w-4 pt-1'>
                                <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    className='h-5 w-5'
                                    viewBox='0 0 20 20'
                                    fill='currentColor'
                                >
                                    <path
                                        fillRule='evenodd'
                                        d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
                                        clipRule='evenodd'
                                    />
                                </svg>
                            </span>
                        </button>
                    </div>
                </div>

                <div className='w-full h-96 relative'>
                    <div
                        className='absolute h-full w-4 left-0 flex flex-col justify-between items-start 
                        text-gray-400 pb-6'
                    >
                        {column.map((col, index) => (
                            <span key={index}>{col}</span>
                        ))}
                    </div>
                    <div className='relative h-full ml-6 overflow-x-auto overflow-y-hidden'>
                        <div className='pb-8 flex justify-between h-full w-max md:w-auto relative'>
                            {stat.map((item) => (
                                <div
                                    key={item.month}
                                    className='relative w-10 h-full inline-block'
                                >
                                    {maxColumn && (
                                        <div
                                            className='inline-block absolute left-1/2 w-2 bg-red-400 rounded-b-lg'
                                            style={{
                                                height: `${
                                                    (item.achived / maxColumn) *
                                                    50
                                                }%`,
                                                top: "50%",
                                            }}
                                        ></div>
                                    )}
                                    {maxColumn && (
                                        <div
                                            className='inline-block absolute left-1/2 w-2 bg-green-400 rounded-t-lg'
                                            style={{
                                                height: `${
                                                    (item.target / maxColumn) *
                                                    50
                                                }%`,
                                                bottom: "50%",
                                            }}
                                        ></div>
                                    )}
                                </div>
                            ))}
                            {/*candles.map((candle) => (
                                <div
                                    key={candle.id}
                                    className='relative w-10 h-full inline-block'
                                >
                                    <div
                                        className=' border border-indigo-200 inline-block absolute left-1/2'
                                        style={{
                                            height: candle.thinHeight,
                                            top: candle.thinTop,
                                        }}
                                    >
                                        <div className='w-full h-full relative'>
                                            <div
                                                className='w-2 absolute transform -translate-x-1/2 bg-blue-800 rounded-full'
                                                style={{
                                                    height: candle.wideHeight,
                                                    top: candle.wideTop,
                                                }}
                                            ></div>
                                        </div>
                                    </div>
                                </div>
                                            ))*/}
                            <div className='absolute bottom-0 w-full flex justify-between text-gray-400'>
                                <span>Jan</span>
                                <span>Feb</span>
                                <span>Mar</span>
                                <span>Apr</span>
                                <span>May</span>
                                <span>Jun</span>
                                <span>Jul</span>
                                <span>Aug</span>
                                <span>Sep</span>
                                <span>Oct</span>
                                <span>Nov</span>
                                <span>Dec</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Statistics;
