import React from 'react';
import Structure from './Structure';


let image1, image2, image3, image4, image5, gif;

try {
    image1 = require('../assets/ATLANTIC/Image_1.gif');
    image2 = require('../assets/ATLANTIC/Image_2.png');
    image3 = require('../assets/ATLANTIC/Image_3.gif');
    image4 = require('../assets/ATLANTIC/Image_4.gif');
    image5 = require('../assets/ATLANTIC/Image_5.gif');
    gif = require('../assets/ATLANTIC/Image_6.gif');
} catch (error) {

    console.error('Error importing images:',);
}

const Atlantic = () => {
    const H2 = 'Atlantic Dishwasher';
    const P =
        "Motion graphics video for Arab Distributors Company (ADC) to showcase their new Atlantic dishwasher.";
    const url = 'https://www.youtube.com/embed/G2N_r9fQH28?si=Pgy8v-uTxtR_q2u8';

    const images = {
        image1,
        image2,
        image3,
        image4,
        image5,
        gif,
    };

    return (
        <div className='Atlantic'>
            <Structure H2Header={H2} Paragraph={P} url={url} images={images} />
        </div>
    );
};

export default Atlantic;
