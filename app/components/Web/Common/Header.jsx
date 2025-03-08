import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import logo from '../../../assets/images/logo.png';
import { IconCross, IconMenu2, IconX } from '@tabler/icons-react';

const Header = () => {
    return (
        <div className='md:grid md:place-content-around bg-base-200 border-b-2 border-gray-200'>
            <div className="navbar shadow-sm w-full lg:w-[1200px] xl:w-[1440px]">
                <div className="navbar-start">
                    <Link href='/' className="">
                        <Image src={logo} height={60} width={120} alt='Logo' />
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link href='/'>Government Jobs</Link></li>
                        <li><Link href='/'>Private Jobs</Link></li>
                        <li><Link href='/'>Admit Card</Link></li>
                        <li><Link href='/'>Result</Link></li>
                        <li><Link href='/'>Notice</Link></li>
                        <li><Link href='/'>Contact Us</Link></li>
                    </ul>
                </div>
                <div className="navbar-end flex md:hidden text-end">
                    <div className="drawer drawer-end">
                        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
                        <div className="drawer-content">
                            {/* Page content here */}
                            <label htmlFor="my-drawer-4" className="drawer-button btn"><IconMenu2 /></label>
                        </div>
                        <div className="drawer-side bg-primary">
                            <div className='w-full'>
                                <div className="flex justify-between w-full p-5">
                                    <Link href='/' className="">
                                        <Image src={logo} height={60} width={120} alt='Logo' />
                                    </Link>
                                    <label htmlFor="my-drawer-4" aria-label="close sidebar" className='btn btn-circle btn-sm text-primary'><IconX /></label>
                                </div>
                                <div className='w-full'>
                                    <ul className="text-start text-white px-5">
                                        <li className='py-2'><Link href='/'>Government Jobs</Link></li>
                                        <li className='py-2'><Link href='/'>Private Jobs</Link></li>
                                        <li className='py-2'><Link href='/'>Admit Card</Link></li>
                                        <li className='py-2'><Link href='/'>Result</Link></li>
                                        <li className='py-2'><Link href='/'>Notice</Link></li>
                                        <li className='py-2'><Link href='/'>Contact Us</Link></li>
                                    </ul>
                                    <div className="p-5">
                                        <Link href='' className="btn btn-accent btn-block text-white">Become Premium</Link>
                                        <Link href='' className="btn btn-warning text-black btn-block mt-3">Sign in/ Sign Up</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="navbar-end hidden md:flex gap-2 ">
                    <Link href='' className="btn btn-primary text-white">Become Premium</Link>
                    <Link href='' className="btn btn-primary btn-outline">Sign in/ Sign Up</Link>
                </div>
            </div>
        </div>
    );
};

export default Header;