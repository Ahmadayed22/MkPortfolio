import React from 'react';
import Structure from './Structure';
//gif,JPG,jpg,png


let image1, image2, image3, image4, image5, gif;

try {
    image1 = require('../assets/Hemam/Image_1.gif');
    image2 = require('../assets/Hemam/Image_2.gif');
    image3 = require('../assets/Hemam/Image_3.gif');
    image4 = require('../assets/Hemam/Image_4.gif');
    image5 = require('../assets/Hemam/Image_5.gif');
    gif = require('../assets/Hemam/Image_6.gif');
} catch (error) {

    console.error('Error importing images:',);
}
const Hemam = () => {
    const H2 = 'Women Rights In Jordan Lawp';
    const P = "Motion Graphics video for Hemam"

    const url = "https://www.youtube.com/embed/4D6W_0CdOsw?si=-7z1fPpfcQDw0Ynr";

    const images = {
        image1,
        image2,
        image3,

    };

    return (
        <div className='Hemam'>
            <Structure H2Header={H2} Paragraph={P} url={url} images={images} />
        </div>
    );
};

export default Hemam;
