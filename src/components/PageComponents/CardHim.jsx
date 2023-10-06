import React from 'react'
import '../../Css/PageCssCompnents/cardhim.css'
import hemmotion from '../../assets/Hemmotion/Hemmotion.png'
import { Link } from 'react-router-dom';
import { HiExternalLink } from 'react-icons/hi'
const CardHim = ({ p1, p2, link }) => {
    return (
        <Link to={link} className='Hem-info  ' target='_blank'>
            <div className='you-drive'>
                <div className='img'>
                    <img src={hemmotion} alt="dose not wrok" />
                </div>
                <div className='name'>
                    <p>{p1}</p>
                    <p>{p2}</p>
                </div>
            </div>
            <div className='iconHem'>
                <HiExternalLink />
            </div>
        </Link>
    )
}

export default CardHim