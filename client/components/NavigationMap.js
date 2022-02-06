import React from 'react'
import { GoogleMap, useJsApiLoader, Marker, Polyline } from '@react-google-maps/api';
import { API_KEY } from '../api_keys';
import { Button } from '@mui/material';

const containerStyle = {
  width: '400px',
  height: '400px'
};

function NavigationMap(props) {
  const [center, setCenter] = React.useState()
  const [destination, setDestination] = React.useState()
  const [addDestination, setAddDestionation] = React.useState(false)
  const [otherPoints, setOtherPoints] = React.useState([])
  const [seconds, setSeconds] = React.useState(0)

  React.useEffect(() => {
    setCenter({ lat: props.lat, lng: props.lng })
  }, [])

  React.useEffect(() => {

    let interval = setInterval(
      () => {
        setSeconds(seconds => seconds + 1)
        navigator.geolocation.getCurrentPosition(
          (position) => {
            if (position) {
              setOtherPoints([...otherPoints, {
                lat: position.coords.latitude,
                lng: position.coords.longitude
              }])
            }
          }
        )
      }, 3000
    )
    return () => clearInterval(interval)

  }, [seconds])

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: API_KEY
  })

  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds();
    if (center) {
      map.fitBounds(bounds);
      setMap(map)
    }
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  const onClick = (e) => {
    if (addDestination) {
      setDestination(e.latLng)
      console.log(destination)
    }
  }

  const lineOptions = {
    strokeColor: '#FF0000',
    strokeWeight: 2,
    fillColor: '#FF0000',
  }

  return (isLoaded ? (
    <>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={17}
        onClick={onClick}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        {otherPoints.length > 1 ?
          otherPoints.map((position) => {
            <Marker position={position} />
          })
          :
          null
        }
        <Marker position={destination} />
        {
          destination ?
            <Polyline path={[center, destination]} options={lineOptions} />
            : null
        }
        <Marker position={center} />
        <></>
      </GoogleMap>
      <Button variant='contained' onClick={() => setAddDestionation(!addDestination)}>
        {
          addDestination ? 'Keep Destination' : 'Add Destination'
        }
      </Button>
      <Button color='error' onClick={() => setDestination()}>Remove Destination</Button>
    </>
  ) : <>
  </>)
}

export default React.memo(NavigationMap)