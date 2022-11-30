import React, { useState, useEffect } from 'react'
 import "./layout.css"
 import iconUpArrow from '../images/icon-upArrow.png'
 
 const ScrollToTop = ({showBelow}) => {

    const [show, setShow] = useState(showBelow ? false : true)

    const handleScroll = () => {
        if (window.pageYOffset > showBelow) {
            if (!show) setShow(true)
        } else {
            if (show) setShow(false)
        }
    }

    const handleClick = () => {
        window[`scrollTo`]({ top: 0, behavior: `smooth` })
    }

    useEffect(() => {
        if (showBelow) {
            window.addEventListener(`scroll`, handleScroll)
            return () => window.removeEventListener(`scroll`, handleScroll)
        }
    })

   return (
     <>
       <div className='textButton' style={styles.buttonText} onClick={handleClick}>
          Back to top 
          <img style={styles.icon} src={iconUpArrow} /> 
         </div>
     </>
   )

  }

  const styles = {
   buttonText: {
    display: 'flex',
     color: `var(--color-secondary)`,
     justifyContent: 'center',
     alignItems: 'center'
   },

   icon: {
    maxHeight: '14px',
    margin: '0 8px',
   }
  }
 
 export default ScrollToTop
 