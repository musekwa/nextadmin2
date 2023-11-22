import React from 'react'
import styles from './rightbar.module.css'
import Image from 'next/image'
import { MdPlayCircleFilled } from 'react-icons/md'
function Rightbar() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.bgContainer}>
          <Image 
            src="/astronaut.png"
            alt=""
            fill
            className={styles.bg}
          />
        </div>
        <div className={styles.texts}>
          <span className={styles.notification}>
          🔥Available Now
          </span>
          <h6>How to use the new version of the admin dashboard?</h6>
          <span className={styles.subtitle}>Takes 4 minutes to learn</span>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit eius libero perspiciatis recusandae possimus.
          </p>
          <button className={styles.button}>
            <MdPlayCircleFilled />
            Watch
          </button>
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.bgContainer}>
          {/* <Image 
            src="/astronaut.png"
            alt=""
            fill
          /> */}
        </div>
        <div className={styles.texts}>
          <span className={styles.notification}>
          🔥Available Now
          </span>
          <h6>How to use the new version of the admin dashboard?</h6>
          <span className={styles.subtitle}>Takes 4 minutes to learn</span>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit eius libero perspiciatis recusandae possimus.
          </p>
          <button className={styles.button}>
            <MdPlayCircleFilled />
            Watch
          </button>
        </div>
      </div>
    </div>
  )
}

export default Rightbar