import React from 'react';
import Structure from './Structure';
//gif,JPG,jpg,png
import image1 from '../assets/KOALAD4D2/Image_1.gif';
import image2 from '../assets/KOALAD4D2/Image_2.gif';
import image3 from '../assets/KOALAD4D2/Image_3.gif';
import image4 from '../assets/KOALAD4D2/Image_4.gif';
import image5 from '../assets/KOALAD4D2/Image_5.gif';
import gif from '../assets/KOALAD4D2/Image_6.gif';

const Koalad4d2 = () => {
    const H2 = 'Pieces Puzzle Game Animation';
    const P =
        "Few projects provide rewards upfront, but this one came with substantial challenges, greatly enhancing my character animation skills. I animated over 23 characters with 70+ unique movements for the \"Pieces Puzzle\" game, made possible by the expertise of Koala4d's programmers and designers—a true honor to collaborate with them.";
    const url = 'https://www.youtube.com/embed/TJwPRQfhcgA?si=yzOFWByAE_mKFz14';

    const images = {
        image1,
        image2,
        image3,
        image4,
        image5,
        gif,
    };

    return (
        <div className='Koalad4d2'>
            <Structure H2Header={H2} Paragraph={P} url={url} images={images} />
        </div>
    );
};

export default Koalad4d2;
