import React from 'react';
import Structure from './Structure';
//gif,JPG,jpg,png
import image1 from '../assets/Ummat/Image_1.png';
import image2 from '../assets/Ummat/Image_2.JPG';
import image3 from '../assets/Ummat/Image_3.JPG';


const Ummat = () => {
    const H2 = 'Ummat Waqf Intro';
    const P = "Ummet waqf is an independent developmental Turkish association, aims to improve Al-Quds citizens abilities, to preserve their heritage and identity, and to revive their culture, through strategic allocation of his needs and priorities. Seeking to find the best and proper methods in order to maximize the impact and benefit of the available fund resources. It was an honor to make this outro for this great association."

    const url = "https://www.youtube.com/embed/BDXxadxlrPE?si=-0920jrPYPxJL3cW";

    const images = {
        image1,
        image2,
        image3,

    };

    return (
        <div className='Ummat'>
            <Structure H2Header={H2} Paragraph={P} url={url} images={images} />
        </div>
    );
};

export default Ummat;
