import React from 'react';

const StateCard = () => {
    return (
        <div className='grid grid-cols-12 gap-5 my-5'>
            <div className="col-span-6 md:col-span-3 bg-primary rounded-md flex justify-between p-3 items-center sweet-shaddow">
                <p className='text-white font-bold text-[14px]'>Live<br></br>Jobs</p>
                <h3 className='text-white font-bold text-4xl'>314</h3>
            </div>
            <div className="col-span-6 md:col-span-3 bg-primary rounded-md flex justify-between p-3 items-center sweet-shaddow">
                <p className='text-white font-bold text-[14px]'>Posted<br></br>Today</p>
                <h3 className='text-white font-bold text-4xl'>0</h3>
            </div>
            <div className="col-span-6 md:col-span-3 bg-primary rounded-md flex justify-between p-3 items-center sweet-shaddow">
                <p className='text-white font-bold text-[14px]'>Deadline<br></br>Today</p>
                <h3 className='text-white font-bold text-4xl'>0</h3>
            </div>
            <div className="col-span-6 md:col-span-3 bg-primary rounded-md flex justify-between p-3 items-center sweet-shaddow">
                <p className='text-white font-bold text-[14px]'>Expires<br></br>in 3 days</p>
                <h3 className='text-white font-bold text-4xl'>0</h3>
            </div>
        </div>
    );
};

export default StateCard;