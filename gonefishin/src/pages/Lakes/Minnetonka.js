import React, { Component } from 'react';
import CatchCardContainer from "../../components/CatchCardContainer";
import AddCatchForm from "../../components/AddCatchForm";
import AddCatchBtn from "../../components/AddCatchBtn";


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
        zoom={12}
        style={mapStyles}
        initialCenter=
        {{
            lat:  44.9149628,
            lng: -93.6413485
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