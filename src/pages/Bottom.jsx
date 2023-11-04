import React from 'react'
import Structure from './Structure'
// import image

let image1, image2, image3, image4, image5, gif;
try {
  image2 = require('../assets/Bottom/Image_1.gif');
  image1 = require('../assets/Bottom/Image_2.gif');
  image3 = require('../assets/Bottom/Image_3.gif');
  image4 = require('../assets/Bottom/Image_4.JPG');
  image5 = require('../assets/Bottom/Image_5.png');
  gif = require('../assets/Bottom/Image_6.gif');
} catch (error) {
  console.error('Error importing images:',);
}

const Bottom = () => {
  const H2 = ' botim prepaid cards';
  const P = 'This project was a collaborative effort, with creative direction provided by Abdullah Alashqar. Using Houdini and Cinema 4D, our team worked tirelessly to bring this stunning visual experience to life. Thank you, Botim, for the opportunity to work on this exciting project!';
  const url = "https://www.youtube.com/embed/3SAL4nFpIjE?si=A6hhTDaeE9RvBU0h";
  const images = { image1, image2, image3, image4, image5, gif };
  return (
    <div className='bottom'>
      <Structure H2Header={H2} Paragraph={P} url={url} images={images} />
    </div>
  )
}

export default Bottom