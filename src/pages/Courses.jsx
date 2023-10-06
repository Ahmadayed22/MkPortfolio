import React from 'react';
import Structure from './Structure';
import '../Css/courses.css'
import CardHim from '../components/PageComponents/CardHim'
//gif,JPG,jpg,png
const Courses = () => {
    const H2 = 'Hemmotion';
    const P = " Hemmotion is a motion graphics course I created in 2020, and it's completely free. Within this course, you will acquire fundamental knowledge about the motion graphics industry through over 12 hours of valuable educational content.Hemmotion is a motion graphics course I created in 2023, and it's completely free. Within this course, you will acquire fundamental knowledge about the motion graphics industry through over 11 hours of valuable educational content."
    const url = "https://www.youtube.com/embed/IK1i9_pWFeQ?si=L7HlNox3rnr5-fWq";
    const links = ["https://www.youtube.com/playlist?list=PLbltrVgVJ1hKKBV7--x_ZyaNgLWupdb5P",
        "https://drive.google.com/drive/folders/1fmYFpdhzp9AIVBuMjSI74rWyYB9lwJHf?usp=sharing"]
    const p1 = ["youtube", "Drive"]
    const p2 = ["Hemmotion Course", "course materiales  "]
    const images = {};


    return (
        <div className='Courses'>
            <Structure H2Header={H2} Paragraph={P} url={url} images={images} />
            <div className='cards'>
                {
                    links.map((link, i) => (
                        <CardHim link={link} p1={p1[i]} p2={p2[i]} />
                    ))
                }
            </div>
        </div>
    );
};

export default Courses;
