import React from 'react';
import Structure from './Structure';
//gif,JPG,jpg,png
import image1 from '../assets/Sahem/Image_1.gif';
import image2 from '../assets/Sahem/Image_2.jpg';
import image3 from '../assets/Sahem/Image_3.gif';
import image4 from '../assets/Sahem/Image_4.JPG';
import image5 from '../assets/Sahem/Image_5.jpg';
import gif from '../assets/Sahem/Image_6.gif';

const Sahem = () => {
    const H2 = 'Sahem App';
    const P =
        "Sahem, the app that bridges the gap between those eager to contribute their skills and those seeking free services for their burgeoning startups. In this captivating visual journey, we delve into the heart of Sahem's mission, highlighting its role as the ultimate connector of people's aspirations and expertise.";
    const url = 'https://www.youtube.com/embed/ws6CFR50GNM?si=rUn2LAcVWY3bbhk1';

    const images = {
        image1,
        image2,
        image3,
        image4,
        image5,
        gif,
    };

    return (
        <div className='Sahem'>
            <Structure H2Header={H2} Paragraph={P} url={url} images={images} />
        </div>
    );
};

export default Sahem;
