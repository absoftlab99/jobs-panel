import Image from 'next/image';
import React from 'react';
import heroImg from '../../../assets/images/banner.png';

const HeroImage = () => {
    return (
        <div>
            <Image src={heroImg} height={400} width={400} alt='hero image' />
        </div>
    );
};

export default HeroImage;