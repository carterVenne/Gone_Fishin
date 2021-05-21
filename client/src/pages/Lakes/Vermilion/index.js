import React, { Component } from 'react';
import { withGoogleMap, GoogleMap } from 'react-google-maps';


class Vermilion extends Component {
   render() {
   const GoogleMapExample = withGoogleMap(props => (
      <GoogleMap
        defaultCenter = { { lat: 47.854741581, lng: -92.2930988276 } }
        defaultZoom = { 13 }
      >
      </GoogleMap>
   ));
   return(
      <div>
        <GoogleMapExample
          containerElement={ <div style={{ height: `500px`, width: '500px' }} /> }
          mapElement={ <div style={{ height: `100%` }} /> }
        />
      </div>
   );
   }
};
export default Vermilion;