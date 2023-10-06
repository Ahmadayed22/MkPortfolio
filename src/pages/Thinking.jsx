import React from 'react';
import Structure from './Structure';


let image1, image2, image3, image4, image5, gif;

try {
    image1 = require('../assets/Thinking/Image_1.png');
    image2 = require('../assets/Thinking/Image_2.png');
    image3 = require('../assets/Thinking/Image_3.png');
    image4 = require('../assets/Thinking/Image_4.gif');
    image5 = require('../assets/Thinking/Image_5.gif');
    gif = require('../assets/Thinking/Image_6.gif');
} catch (error) {
    console.error('Error importing images:',);
}

const Thinking = () => {
    const H2 = ' Who is Thinking About You?';
    const P =
        "Personal project experimenting Orbit - a plug in for After Effects by Video Copilot.";
    const url = 'https://www.youtube.com/embed/gBjha8SKPbk?si=aV5xVCDj-T7N2St1';

    const images = {
        image1,
        image2,
        image3,
        image4,
        image5,
        gif,
    };

    return (
        <div className='Thinking'>
            <Structure H2Header={H2} Paragraph={P} url={url} images={images} />
        </div>
    );
};

export default Thinking;
