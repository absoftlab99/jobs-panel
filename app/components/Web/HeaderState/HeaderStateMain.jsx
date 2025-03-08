import React from 'react';
import HeaderState from './HeaderState';
import HeroImage from './HeroImage';

const HeaderStateMain = () => {
    return (
        <div className='grid grid-cols-12 gap-5'>
            <div className="col-span-12 md:col-span-7">
                <HeaderState/>
            </div>
            <div className="col-span-12 md:col-span-5">
                <HeroImage/>
            </div>
        </div>
    );
};

export default HeaderStateMain;