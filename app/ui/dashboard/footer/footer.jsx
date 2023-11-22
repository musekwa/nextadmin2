import React from 'react'
import styles from './footer.module.css';

function Footer() {
  return (
    <div  className={styles.container}>
        <div className={styles.logo}>
          Logo
        </div>
        <div className={styles.text}>
          Admin Dashboard
        </div>
    </div>
  )
}

export default Footer