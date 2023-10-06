import React from 'react';
import Structure from './Structure';
//gif,JPG,jpg,png
import image1 from '../assets/HASADSchool/Image_1.gif';
import image2 from '../assets/HASADSchool/Image_2.png';
import image3 from '../assets/HASADSchool/Image_3.png';


const Hasadschool = () => {
    const H2 = ' Iqra for Learning Finance';
    const P = ""

    const url = "https://www.youtube.com/embed/4fU1isYiQX0?si=hEL1uYc-baomUKM1";

    const images = {
        image1,
        image2,
        image3,

    };

    return (
        <div className='Hasadschool'>
            <Structure H2Header={H2} Paragraph={P} url={url} images={images} />
        </div>
    );
};

export default Hasadschool;
