import React from 'react';
import Structure from './Structure';


let image1, image2, image3, image4, image5, gif;

try {
    image1 = require('../assets/LOGO/Image_1.gif');
    image2 = require('../assets/LOGO/Image_2.gif');
    image3 = require('../assets/LOGO/Image_3.gif');
    image4 = require('../assets/LOGO/Image_4.gif');
    image5 = require('../assets/LOGO/Image_5.gif');
    gif = require('../assets/LOGO/Image_6.gif');
} catch (error) {

    console.error('Error importing images:',);
}

const LogoAnim = () => {
    const H2 = ' Logo Animation';
    const P =
        "Works in logo animation";
    const url = 'https://www.youtube.com/embed/eg8hhQKhqTw?si=CzSEI4SwJFxpnNJH';

    const images = {
        image1,
        image2,
        image3,
        image4,
        image5,
        gif,
    };

    return (
        <div className='LogoAnim'>
            <Structure H2Header={H2} Paragraph={P} url={url} images={images} />
        </div>
    );
};

export default LogoAnim;
