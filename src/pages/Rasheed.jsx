import React from 'react';
import Structure from './Structure';
let image1, image2, image3, image4, image5, gif;
//gif,JPG,jpg,png
try {
    image1 = require('../assets/RASHEED/Image_1.jpg');
    image2 = require('../assets/RASHEED/Image_2.JPG');
    image3 = require('../assets/RASHEED/Image_3.gif');
    image4 = require('../assets/RASHEED/Image_4.jpg');
    image5 = require('../assets/RASHEED/Image_5.JPG');
    gif = require('../assets/RASHEED/Image_6.gif');
} catch (error) {

    console.error('Error importing images:',);
}

const Rasheed = () => {
    const H2 = ' Rasheed Explainer Videos';
    const P =
        "We've recently produced seven motion graphic videos, each covering various topics such as cybercrimes and media restrictions on journalists. These videos, totaling over thirty minutes in duration, owe their success to the exceptional illustrator, Mohammad Edrees. We were also privileged to work with voice-over artist Salah Hosam, who played a vital role both as the narrator and project manager. In this videos we used the Silhouette Art technique, which simplifies illustrations into basic forms, using two colors to represent light and darkness.";
    const url = 'https://www.youtube.com/embed/k9jwOpgKpZA?si=A_LFhsu__tNgl7w0';

    const images = {
        image1,
        image2,
        image3,
        image4,
        image5,
        gif,
    };

    return (
        <div className='Rasheed'>
            <Structure H2Header={H2} Paragraph={P} url={url} images={images} />
        </div>
    );
};

export default Rasheed;
