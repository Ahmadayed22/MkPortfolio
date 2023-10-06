import React from 'react';
import Structure from './Structure';
import image1 from '../assets/Bottom2/Image_1.JPG';
import image2 from '../assets/Bottom2/Image_2.JPG';
import image3 from '../assets/Bottom2/Image_3.gif';
import image4 from '../assets/Bottom2/Image_4.jpeg';
import image5 from '../assets/Bottom2/Image_5.gif';
import gif from '../assets/Bottom2/Image_6.gif';

const Bottom2 = () => {
    const H2 = 'Botim Brand Film - Breakdown';
    const P =
        "I had the privilege of being part of an extraordinary team that meticulously planned and flawlessly executed the production of this commercial project. This captivating project made its grand debut at the Museum of the Future in the UAE during an event that marked the unveiling of Botim's new identity and its incredibly ambitious vision. In my role as a CG Artist, I utilized Houdini and Unreal Engine - City Sample to create the phone city featured in the video. If you're eager to experience the full video, you can watch it by following this link: [Insert Link Here]";
    const url = 'https://www.youtube.com/embed/NvP6LRB1g6o?si=dgRx4w8Txn8DERJj';

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

export default Bottom2;
