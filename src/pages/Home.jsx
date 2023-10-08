import React from 'react'
import images from '../LoopCom/images'
import text from '../LoopCom/Textspan'
import textH3 from '../LoopCom/Pargraph'
import route from '../LoopCom/Route'
import '../Css/Home.css'
import Cardimage from '../components/Cardimage'
import { FaAngleDoubleUp } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Video from '../components/PageComponents/Video'

const Home = ({ headerRef }) => {


  const handleUP = () => {
    headerRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    })
  }
  const url = 'https://www.youtube.com/embed/9No_sCcgPj4?si=TWwsLBBW_VZbwN9J '

  return (
    <div className=' home' >
      <Video url={url} />

      <div className='page'>
        <div className='images'>
          {
            images.map((img, i) => {
              const Route = route[i].charAt(0).toUpperCase() + route[i].slice(1).toLowerCase()
              return <Cardimage route={Route} key={img} imgs={img} text={text[i]} h2={textH3[i]} />
            })
          }

        </div >
        <motion.div >

          <Link className='up-down' onClick={handleUP} > <FaAngleDoubleUp /> </Link>
        </motion.div>
      </div>
    </div>
  )
}

export default Home;