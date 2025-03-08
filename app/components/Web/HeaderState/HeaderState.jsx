import Image from 'next/image';
import React from 'react';
import govt from '../../../assets/images/Government_Seal_of_Bangladesh.svg.png';
import privat from '../../../assets/images/private-jobs.png';
import Search from './Search';
import StateCard from './StateCard';

const HeaderState = () => {
    return (
        <div className='w-full'>
            <h1 className='text-[48px] text-accent font-semibold'>Alljobs by Teletalk</h1>
            <h4 className='text-3xl text-primary'>Bridging Aspirations with Excellence</h4>
            <div className="flex gap-5 py-5">
                <div className="cursor-pointer flex gap-3 border-2 rounded border-dotted border-primary p-3 bg-white hover:bg-green-100 transition-colors duration-500 w-[300px] sweet-shaddow">
                    <Image src={govt} height={60} width={60} alt='government logo' />
                    <div className="">
                        <p className='font-bold text-primary text-[20px]'>314</p>
                        <p className='text-[18px] uppercase text-primary'>Government Jobs</p>
                    </div>
                </div>
                <div className="cursor-pointer flex gap-3 border-2 rounded border-dotted border-primary p-3 bg-white hover:bg-green-100 transition-colors duration-500 w-[300px] sweet-shaddow">
                    <Image src={privat} height={60} width={60} alt='government logo' />
                    <div className="">
                        <p className='font-bold text-primary text-[20px]'>0</p>
                        <p className='text-[18px] uppercase text-primary'>Private Jobs</p>
                    </div>
                </div>
            </div>
            <div className='w-full'>
                <Search />
            </div>
            <div className="w-full">
                <StateCard/>
            </div>
        </div>
    );
};

export default HeaderState;