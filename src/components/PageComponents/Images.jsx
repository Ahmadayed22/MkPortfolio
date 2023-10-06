import React from 'react'
import { motion } from 'framer-motion'
import '../../Css/PageCssCompnents/imgaes.css'
import Animation from '../Animation'
const Images = ({ imgs }) => {
  return (
    <Animation>
      <motion.div className='image2'>
        <img src={imgs} alt='not work' />
      </motion.div>


    </Animation>
  )
}

export default Images