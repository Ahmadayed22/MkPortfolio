import Animation from './Animation';
import { motion } from 'framer-motion';
import '../Css/cardimage.css'
// import gift from '../WalkingCycle.gif'
import { Link } from 'react-router-dom';
const Cardimage = ({ imgs, text, h2 ,route}) => {
  return (
    <Animation>

    <motion.div  className='image'>
      <Link to= {route}> <img src={imgs} alt='not work' /> </Link>
      <span>{text} </span>
      <h2>{h2}</h2>
      </motion.div>
      
    </Animation>
  )
}



export default Cardimage;