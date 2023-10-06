import React from 'react';
import Structure from './Structure';
//gif,JPG,jpg,png
import image1 from '../assets/ShammetZout/Capture 2.JPG';
import image2 from '../assets/ShammetZout/Capture.JPG';
import image3 from '../assets/ShammetZout/Shammet.gif';


const Shammetzout = () => {
    const H2 = ' Shammet Zout';
    const P = "In Al-Quds, a resilient elderly man steadfastly declines Israel's offer to purchase his land near Al-Aqsa. His refusal is a testament to his deep-rooted connection to the sacred land, preserving both his heritage and history. I’m very proud that i made this video for Ummet "

    const url = "https://www.youtube.com/embed/Ju8zsQjUZWk?si=xOqB_UGGxn4sI8k6";

    const images = {
        image1,
        image2,
        image3,

    };

    return (
        <div className='Shammetzout'>
            <Structure H2Header={H2} Paragraph={P} url={url} images={images} />
        </div>
    );
};

export default Shammetzout;
