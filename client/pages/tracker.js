import { Button } from '@mui/material';
import React from 'react';
import NavigationMap from '../components/NavigationMap';
import styles from "../styles/Tracker.module.css"
import Link from 'next/link'

export default function Tracker() {
  const [you, setYou] = React.useState()

  React.useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      console.log(position)
      if (position) {
        // setYou(you => [...you, {
        //   lat: position.coords.latitude,
        //   lng: position.coords.longitude
        // }])
        // console.dir(you)
        setYou({
          lat: position.coords.latitude,
          lng: position.coords.longitude
        })
      }
    })


  }, []);

  return (
    <main className={styles.main}>
      {you ?
        <>
          <h1 >
            View Routes
          </h1>
          <NavigationMap lat={you.lat} lng={you.lng} />
          <Link href="/form">
            <Button color="success">How was the walk?</Button>
          </Link>
          <Link href="/notify">
            <Button color="secondary">Find Friends</Button>
          </Link>

        </>
        :
        <h1>Finding you...</h1>
      }
    </main>

  )
}
