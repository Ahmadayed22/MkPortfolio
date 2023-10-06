import React from 'react';
import Structure from './Structure';

import image1 from '../assets/Beabee/Image_1.gif';
import image2 from '../assets/Beabee/Image_2.gif';
import image3 from '../assets/Beabee/Image_3.gif';
import image4 from '../assets/Beabee/Image_4.JPG';
import image5 from '../assets/Beabee/Image_5.JPG';
import gif from '../assets/Beabee/Image_6.jpg';

const Beabee = () => {
    const H2 = 'BeABee Community';
    const P =
        "Imagine a realm where buzzing bees not only gather nectar from vibrant flowers but also impart the art of English fluency to their fellow bees. In this captivating motion graphics video, we invite you to explore this unique concept, where nature and language unite in a harmonious dance of growth and learning. Watch as flowers bloom with English letters, and let the magic of Beabee Community inspire you on a journey of language education like no other.";
    const url = 'https://www.youtube.com/embed/d42l1k8F81k?si=HjZvMXjZcV9VbgkV';

    const images = {
        image1,
        image2,
        image3,
        image4,
        image5,
        gif,
    };

    return (
        <div className='Bottom2'>
            <Structure H2Header={H2} Paragraph={P} url={url} images={images} />
        </div>
    );
};

export default Beabee;
