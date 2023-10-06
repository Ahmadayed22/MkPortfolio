import React from 'react'
import Structure from './Structure'
// import image
import image2 from '../assets/Bottom/Image_1.gif';
import image1 from '../assets/Bottom/Image_2.gif';
import image3 from '../assets/Bottom/Image_3.gif';
import image4 from '../assets/Bottom/Image_4.JPG';
import image5 from '../assets/Bottom/Image_5.png';
import gif from '../assets/Bottom/Image_6.gif';
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