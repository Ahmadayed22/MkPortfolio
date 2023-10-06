import React from 'react';
import Structure from './Structure';
//gif,JPG,jpg,png
import image1 from '../assets/Koala4d/Image_1.gif';
import image2 from '../assets/Koala4d/Image_2.gif';
import image3 from '../assets/Koala4d/Image_3.JPG';
import image4 from '../assets/Koala4d/Image_4.gif';
import image5 from '../assets/Koala4d/Image_5.gif';
import gif from '../assets/Koala4d/Image_6.gif';

const Koala4d = () => {
    const H2 = 'Tamreen App Commercia';
    const P =
        "Welcome to the world of Tamreen, where learning math becomes an adventure. Explore our short story animation,a heartfelt project brought to life with gratitude to Koala4d for entrusting us with this opportunity.Join us in witnessing the transformation of a young student's academic journey through the Tamreen app";
    const url = 'https://www.youtube.com/embed/KPnhoJTbyHA?si=4WwlD5DpvCt16C8C';

    const images = {
        image1,
        image2,
        image3,
        image4,
        image5,
        gif,
    };

    return (
        <div className='Koala4d'>
            <Structure H2Header={H2} Paragraph={P} url={url} images={images} />
        </div>
    );
};

export default Koala4d;
