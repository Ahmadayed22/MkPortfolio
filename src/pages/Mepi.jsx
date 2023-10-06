import React from 'react';
import Structure from './Structure';


let image1, image2, image3, image4, image5, gif;

try {
    image1 = require('../assets/MEPI/Image_1.gif');
    image2 = require('../assets/MEPI/Image_2.gif');
    image3 = require('../assets/MEPI/Image_3.gif');
    image4 = require('../assets/MEPI/Image_4.gif');
    image5 = require('../assets/MEPI/Image_5.gif');
    gif = require('../assets/MEPI/Image_6.gif');
} catch (error) {

    console.error('Error importing images:',);
}

const Mepi = () => {
    const H2 = 'Mepi Explainer Motion Graphics';
    const P =
        "Motion graphics video for MEPI, one of the leading suppliers in the Middle East, Far East Asia, South East Asia, and European markets, specializing in the supply of various types of plastic raw materials.";
    const url = 'https://www.youtube.com/embed/tgB7phXho_c?si=vZg4MrpYvJyOoQwZ';

    const images = {
        image1,
        image2,
        image3,
        image4,
        image5,
        gif,
    };

    return (
        <div className='Mepi'>
            <Structure H2Header={H2} Paragraph={P} url={url} images={images} />
        </div>
    );
};

export default Mepi;
