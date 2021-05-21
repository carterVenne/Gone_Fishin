import React, { Component } from 'react';
import { withGoogleMap, GoogleMap } from 'react-google-maps';


class Bemidji extends Component {
   render() {
   const GoogleMapExample = withGoogleMap(props => (
      <GoogleMap
        defaultCenter = { { lat: 47.47356, lng: -94.88028 } }
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
export default Bemidji;