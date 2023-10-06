import React from 'react';
import Structure from './Structure';


let image1, image2, image3, image4, image5, gif;

try {
    image1 = require('../assets/MASS/Image_1.gif');
    image2 = require('../assets/MASS/Image_2.gif');
    image3 = require('../assets/MASS/Image_3.gif');
    image4 = require('../assets/MASS/Image_4.gif');
    image5 = require('../assets/MASS/Image_5.gif');
    gif = require('../assets/MASS/Image_6.gif');
} catch (error) {

    console.error('Error importing images:',);
}

const Mass = () => {
    const H2 = ' Mass Servieces';
    const P =
        "Explainer video for Mass - Maintenance and Calibration. For the first shot, I drew inspiration from the legendary opening of 'Avatar' as an experiment, incorporating elements outside of traditional motion graphics as a reference.";
    const url = 'https://www.youtube.com/embed/AfbtqGwRQ8Q?si=_WVVr_ShgXJUfLy2';

    const images = {
        image1,
        image2,
        image3,
        image4,
        image5,
        gif,
    };

    return (
        <div className='Mass'>
            <Structure H2Header={H2} Paragraph={P} url={url} images={images} />
        </div>
    );
};

export default Mass;
