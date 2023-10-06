import React, { useState, useEffect } from 'react';
import HeaderProject from '../components/PageComponents/HeaderProject';
import Video from '../components/PageComponents/Video'
import Images from '../components/PageComponents/Images';
import Gif from '../components/PageComponents/Gif';
import '../Css/PageCssCompnents/structure.css';

const Structure = ({ H2Header, Paragraph, url, images }) => {
    const { image1, image2, image3, image4, image5, gif } = images;
    const img = [image1, image2].filter((image) => image)
    const img2 = [image4, image5].filter((image) => image);

    return (
        <div className='Structure'>
            <HeaderProject h2={H2Header} p={Paragraph} />
            <Video url={url} />
            <div className='images2'>
                {img.map((image, i) => (
                    <Images key={i} imgs={image} />
                ))}
            </div>
            {image3 && <Gif img={image3} />}
            <div className='images2'>
                {img2.map((image, i) => (
                    <Images key={i} imgs={image} />
                ))}
            </div>
            {gif && <Gif img={gif} />}
        </div>
    );
}

export default Structure;
