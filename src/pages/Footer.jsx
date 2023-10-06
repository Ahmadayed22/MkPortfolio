
import { Link } from 'react-router-dom'
import '../Css/footer.css'
import icon from '../LoopCom/Icon'
import { motion, } from 'framer-motion'
import Animation from '../components/Animation'
const Footer = () => {



    return (

        <motion.div className='footer' >
            <Animation>

                <div className='info' >
                    <div className='info_name'>
                        <h2>Mohammad Alkhawaldeh</h2>
                        <span>Freelance 2D&3D Motion Designer</span>
                    </div>
                    <nav>
                        <ul>
                            <li> <Link>Jordan / Amman </Link> </li>
                            <li> <Link>mohammadalkhawaldeh2020@gmail.com </Link> </li>
                            <li> <Link>+962799067921 </Link> </li>
                        </ul>
                    </nav>
                </div>
            </Animation>
            <Animation>
                <div className='social'  >
                    <h2>Follow</h2>
                    <nav>
                        <ul>

                            <li><Link to='https://www.linkedin.com/in/mohammad-alkhawalkdeh-520119243' target='_blank'>LinkedIn</Link></li>
                            <li><Link to='https://instagram.com/abu_shadiii?igshid=MWZjMTM2ODFkZg==' target='_blank'>Instagram</Link></li>
                            <li><Link to='https://www.facebook.com/AbuShadiii' target='_blank'>Facebook</Link></li>

                        </ul>
                    </nav>
                </div>
            </Animation>
            <Animation>

                <div className='icons' >
                    {
                        icon.map((icon, i) => (
                            <div key={i} className='icon'> {icon}</div>
                        ))
                    }
                </div>
            </Animation>
            <p className='ahmad' >Developed By <Link to="https://www.linkedin.com/in/ahmad-ayed-67b74a272/" target='_blank' >Ahmad Ayed</Link></p>
        </motion.div>
    )
}

export default Footer