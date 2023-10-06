import React from 'react';
import Structure from './Structure';
//gif,JPG,jpg,png
import image1 from '../assets/VSmedia/Image_1.JPG';
import image2 from '../assets/VSmedia/Image_2.png';
import image3 from '../assets/VSmedia/Image_3.gif';
import image4 from '../assets/VSmedia/Image_4.png';
import image5 from '../assets/VSmedia/Image_5.png';
import gif from '../assets/VSmedia/Image_6.gif';

const Vsmedia = () => {
    const H2 = 'Game Of Vs';
    const P =
        "Introducing our 3D video project: \"Game Of Vs\". Inspired by the competitive spirit within the VS Media Facebook community, this video takes cues from the Game of Thrones opening sequence. We've transformed each competition winner into a kingdom within our realm. Using the power of procedurality in Houdini, I meticulously crafted the map and kingdoms. Join us as we relive the \"King of Burger,\" \"King of Shawarma,\" and \"King of Social Media\" contests, celebrating Firefly Burger, Shanab Shawarma, and Joe Hattab as the champions.";
    const url = 'https://www.youtube.com/embed/n9nNW5fVGT4?si=70tupp5-9a_tZG6A';

    const images = {
        image1,
        image2,
        image3,
        image4,
        image5,
        gif,
    };

    return (
        <div className='Vsmedia'>
            <Structure H2Header={H2} Paragraph={P} url={url} images={images} />
        </div>
    );
};

export default Vsmedia;
