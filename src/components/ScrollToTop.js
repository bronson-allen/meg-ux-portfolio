import * as React from 'react'
 import "./layout.css"
 import iconUpArrow from '../images/icon-upArrow.png'
 
 const ScrollToTop = () => {

    const handleClick = () => {
        window.scrollTo({top: 0, behavior: 'smooth'})
    }

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
     alignItems: 'center',
     fontWeight: 'bold',
     fontSize: `var(--font-xlg)`
   },

   icon: {
    maxHeight: '14px',
    margin: '0 8px',
   }
  }
 
 export default ScrollToTop
 