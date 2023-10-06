import React from 'react';
import Structure from './Structure';
//gif,JPG,jpg,png
import image1 from '../assets/Nasheed/Image_1.JPG';
import image2 from '../assets/Nasheed/Image_2.JPG';
import image3 from '../assets/Nasheed/Image_3.gif';


const Nasheed = () => {
    const H2 = ' Nasheed Ummat Waqf';
    const P = "Ummet waqf is an independent developmental Turkish association, aims to improve Al-Quds citizens abilities, to preserve their heritage and identity, and to revive their culture, through strategic allocation of his needs and priorities. Seeking to find the best and proper methods in order to maximize the impact and benefit of the available fund resources. It was an honor to make this video for their official Nasheed."

    const url = "https://www.youtube.com/embed/kDNxDkAmv90?si=4SZArnLqWBdh3vsx";

    const images = {
        image1,
        image2,
        image3,

    };

    return (
        <div className='Nasheed'>
            <Structure H2Header={H2} Paragraph={P} url={url} images={images} />
        </div>
    );
};

export default Nasheed;
