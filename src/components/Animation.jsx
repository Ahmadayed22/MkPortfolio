import React, { useEffect, useRef } from 'react'
import { motion,useInView,useAnimation } from 'framer-motion'
const Animation = ({ children, width = 'fit-content' }) => {
    let ref = useRef(null)
    let isInView = useInView(ref, { once: true })
    const mainControls = useAnimation()
    const slideControls  = useAnimation()
    useEffect(() => {
        if (isInView) {
            mainControls.start('visible')
            slideControls.start('visible')
        }
    },[isInView])
    const variants = {
          hidden: { opacity: 0, y: 75},
        visible: { opacity: 1, y:0 },
    }
    return (
      <div ref={ref} style={{ overflow:'hidden' }}>
            
      <motion.div variants={variants} initial='hidden' animate={mainControls}  transition={{ duration: 0.5, delay: 0.25 }}>
          {children}
        </motion.div>
            
  
                
        
      </div>
  )
}

export default Animation