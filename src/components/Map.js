import React from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

const MyMapComponent = withScriptjs(withGoogleMap((props) =>
  <GoogleMap
    defaultZoom={8}
    defaultCenter={{ lat: 39.755926, lng: -105.002631 }}
  >
    {props.isMarkerShown && <Marker position={{ lat: 39.755926, lng: -105.002631 }} />}
  </GoogleMap>
))

  export default MyMapComponent