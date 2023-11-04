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
  const url = "https://player.vimeo.com/video/880268369?badge=0&amp;autopause=0&amp;quality_selector=1&amp;player_id=0&amp;app_id=58479"

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