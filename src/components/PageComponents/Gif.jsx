import React from 'react'
import Animation from '../Animation'
import '../../Css/PageCssCompnents/gif.css'
const Gif = ({img}) => {
    return (
      <Animation >
            
      <div className='Gif'>
          <img src={img} alt='Not work'/>
    </div>
      </Animation>
  )
}

export default Gif