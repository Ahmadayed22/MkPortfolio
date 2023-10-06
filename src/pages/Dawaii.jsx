import React from 'react';
import Structure from './Structure';


let image1, image2, image3, image4, image5, gif;

try {
    image1 = require('../assets/Dawaii/Image_1.JPG');
    image2 = require('../assets/Dawaii/Image_2.png');
    image3 = require('../assets/Dawaii/Image_3.png');
    image4 = require('../assets/Dawaii/Image_4.gif');
    image5 = require('../assets/Dawaii/Image_5.gif');
    gif = require('../assets/Dawaii/Image_6.gif');
} catch (error) {

    console.error('Error importing images:',);
}

const Dawaii = () => {
    const H2 = ' Dawaii';
    const P =
        "In 2021, as a combination of computer engineering and motion graphics, we were very proud to have won third place in The Crown Prince Award for Best Government Service Application - second edition. I was responsible of making an explainer video for our app 'Dawaii,' which serves as a digital pharmacy.";
    const url = 'https://www.youtube.com/embed/fvKz5nKFahQ?si=7viI3uTAiGi21bcN';

    const images = {
        image1,
        image2,
        image3,
        image4,
        image5,
        gif,
    };

    return (
        <div className='Dawaii'>
            <Structure H2Header={H2} Paragraph={P} url={url} images={images} />
        </div>
    );
};

export default Dawaii;
