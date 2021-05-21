import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import Header from "../../components/Header"

const mapStyles = {
  width: '50%',
  height: '50%',
  border: '5px solid black'
};

export class MapContainer extends Component {
  render() {
    return (
      <div>
          <Header/>
      <div className="map-area object-center items-center">
        
      <Map
        google={this.props.google}
        zoom={7}
        style={mapStyles}
        initialCenter=
        {{
            lat: 46.392410,
            lng:  -94.636230
          }}>
      <Marker key="marker_1"
        position={{
          lat: 44.9149628,
          lng: -93.6413485
        }}
      />
      </Map>
     
</div>
</div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyAoGlAtYj-gG0Nx7EA3EPiRY0tmyOJNpZ4'
})(MapContainer);