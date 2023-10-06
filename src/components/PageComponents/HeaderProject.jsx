import React from 'react'
import '../../Css/PageCssCompnents/headerProject.css'
import Animation from '../Animation'
const HeaderProject = ({ h2, p }) => {

  return (
    <Animation>
      <div className='info_Project' >
        <h2>{h2}</h2>
        <p>{p}</p>
        <hr />
      </div>
    </Animation>
  )
}

export default HeaderProject