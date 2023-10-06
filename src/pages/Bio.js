import React from 'react';
import BioImg from '../assets/Bio_Page/Bio.jpg';
import '../Css/bio.css';
import Animation from '../components/Animation';
import { BiLogoGmail } from 'react-icons/bi';
import { AiOutlineWhatsApp } from 'react-icons/ai';
import { Link } from 'react-router-dom';
const Bio = () => {
  const icon = [<BiLogoGmail />, <AiOutlineWhatsApp />];
  const Gp = [' mohammadalkhawaldeh2020@gmail.com', ' +962 799067921'];
  const to = [
    'mailto:mohammadalkhawaldeh2020@gmail.com',
    'https://api.whatsapp.com/send?phone=962799067921',
  ];
  return (
    <Animation>
      <div className="Bio container">
        <div className="image">
          <img src={BioImg} />
        </div>
        <div className=" info">
          <div className="name">
            <h2>Mohammad Alkhawaldeh</h2>
            <p>Jordan based freelance motion designer</p>
          </div>
          <div className="aboutMe">
            <p>
              I'm Mohammad Alkhawaldeh, a freelancer motion designer, animator
              and a recent computer engineering graduate from the University of
              Jordan. Despite my technical background, my true passion lies in
              animation, motion design, and visual effects. I studied computer
              engineering in university because I see a harmonious connection
              between art and technology, which is why I embraced Sidefx
              Houdini—a tool that fuses artistry with mathematics and
              automation. In the creative realm, I wear multiple hats, including
              Animator, Motion Designer, VFX Artist, and 2D/3D Motion Graphic
              Artist. My portfolio boasts collaborations with diverse clients
              such as Botim, AlHasaad ALTarbawi schools, Transparency
              International-Jordan, and ÜmmetVakfı. in 2022, I achieved with my
              team third place in The Crown Prince Award for Best Government
              Service Application, showcasing my dedication to excellence and
              innovation. I'm always eager to tackle fresh creative challenges
              and collaborate, so if you seek a motion designer who seamlessly
              melds technical expertise with artistic ingenuity, let's connect.
              Your vision can become a reality with my skills. Thank you for
              visiting my website, and I look forward to the possibility of
              working together.
            </p>
          </div>
          <div className="contact">
            <h2>Contact</h2>
            <div className="icons">
              {icon.map((icons, i) => (
                <div key={i} className="icon">
                  <span> {icons}</span>
                  <Link to={to[i]} target="_blank">
                    {' '}
                    {Gp[i]}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Animation>
  );
};

export default Bio;
