import { IconButton, Button } from '@mui/material';
import { styled } from '@mui/styles'
import React, { useState } from 'react'
import NavigationMap from '../components/NavigationMap';
import Image from 'next/image'
import styles from "../styles/Home.module.css"
import { AiOutlineDownCircle } from "react-icons/ai";

export default function Home() {

  const scrollRef = React.useRef()


  return (
    <div>
      <div className={styles.homepage}>
        <h1>Safe Track</h1>
        <h3>The safer location tracker</h3>
        <IconButton style={{
          color: '#232946',
          fontSize: 48
        }} onClick={() => {
          if (scrollRef) {
            scrollRef.current.scrollIntoView({
              behavior: "smooth",
            });
          }
        }}>
          <AiOutlineDownCircle />
        </IconButton>
      </div>

      <div ref={scrollRef} className={styles.info_page}>
        <section className={styles.section1}>
          <h3>What We Do</h3>
          <p>We take your location data at times when its really important and keep our influence out of the rest of your life.</p>
        </section>

        <section className={styles.section2}>
          <h3>Guidance</h3>
          <p>We help provide information in order to allow you to choose where you want to go at night, giving you real power to follow more metrics other then your gps.</p>
        </section>
      </div>
      <div className={styles.footer}>
        <h3>Sign Up</h3>
        <div className={styles.buttonContainer}>

          <input placeholder="Email" className={styles.input} />
          <Button style={{
            padding: "15px",
            width: "25%",
            color: 'white',
            background: "#232946"
          }}>
            Submit
          </Button>
        </div>
      </div>
    </div >
  )
}
