import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

const mapStyles = {
  width: '50%',
  height: '50%',
  border: '5px solid black'
};

export class MapContainer extends Component {
  render() {
    return (
      <div className="map-area">
      <Map
        google={this.props.google}
        zoom={10}
        style={mapStyles}
        initialCenter=
        {{
            lat:  47.87249651,
            lng:-95.016833266
          }}>
      <Marker key="marker_1"
        position={{
          lat: 44.9149628,
          lng: -93.6413485
        }}
      />
      </Map>
</div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyAoGlAtYj-gG0Nx7EA3EPiRY0tmyOJNpZ4'
})(MapContainer);