import React from 'react';
import Structure from './Structure';


let image1, image2, image3, image4, image5, gif;

try {
    image1 = require('../assets/STORY/Image_1.gif');
    image2 = require('../assets/STORY/Image_2.png');
    image3 = require('../assets/STORY/Image_3.png');
    image4 = require('../assets/STORY/Image_4.gif');
    image5 = require('../assets/STORY/Image_5.gif');
    gif = require('../assets/STORY/Image_6.gif');
} catch (error) {

    console.error('Error importing images:',);
}

const Story = () => {
    const H2 = '  Fox Story For Kids';
    const P =
        "Short story video featuring a fox. The stunning drawings were done by an amazing artist, and I was responsible for the animation. ";
    const url = 'https://www.youtube.com/embed/77npHZ1VwqQ?si=YT_W0e2q-x2tSeN1';

    const images = {
        image1,
        image2,
        image3,
        image4,
        image5,
        gif,
    };

    return (
        <div className='Story'>
            <Structure H2Header={H2} Paragraph={P} url={url} images={images} />
        </div>
    );
};

export default Story;
