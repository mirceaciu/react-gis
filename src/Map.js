import React, { Component } from 'react';
// import { render } from 'react-dom';
import { Map, Marker, Popup, TileLayer, GeoJSON } from 'react-leaflet';
import {judete} from './judete.js'

class SoundMap extends Component {
  constructor() {
    super();
    this.state = {
      lat: 45.986,
      lng: 24.785,
      zoom: 7,
      open: false
    }
  };

  getStyle(feature, layer) {
    return {
      fillColor:feature.properties.POP2004 > 700000 ? '#800026' :
               feature.properties.POP2004 > 600000 ? '#BD0026' :
               feature.properties.POP2004 > 500000 ? '#E31A1C' :
               feature.properties.POP2004 > 400000 ? '#FC4E2A' :
               feature.properties.POP2004 > 300000 ? '#FD8D3C' :
               feature.properties.POP2004 > 200000 ? '#FEB24C' :
               feature.properties.POP2004 > 100000 ? '#FED976' :
              '#FFEDA0',
      weight: 2,
      opacity: 1,
      color: 'white',
      dashArray: '3',
      fillOpacity: 0.7
    }
  }

  render() {
    const position = [this.state.lat, this.state.lng];
    return (
      <Map center={position} zoom={this.state.zoom}>
          <TileLayer
            url='https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}'
            accessToken= 'pk.eyJ1IjoibWlyY2VhY2l1IiwiYSI6IjNkNGFiMTU5NjRlNGNkZTA1ZGExMDVkNjUxYzZmZDlhIn0.5E0fCQOJlyAJFjkEYX1NGg'
            attribution='Sing o map'
            id='mirceaciu.6caff4a4'
            maxZoom={7}
            minZoom= {6}
          />
          <GeoJSON data={getGeoJson()} style={this.getStyle} />
        </Map>
    )
  }
}

export default SoundMap;

function getGeoJson(){
  return judete
}
