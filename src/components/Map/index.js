/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { GoogleApiWrapper, Map, Marker } from 'google-maps-react';

const MapContainer = ({ google, name, lng, lat }) => {
    return (
        <div className="map-placeholder">
            <Map
                style={{ width: '100%', height: '100%', position: 'static !important' }}
                google={google}
                zoom={15}
                initialCenter={{
                    lat,
                    lng
                }}
            >
                <Marker title={name} name={name} position={{ lat, lng }} />
            </Map>
        </div>
    );
};

MapContainer.propTypes = {
    google: PropTypes.any.isRequired,
    name: PropTypes.string.isRequired,
    lat: PropTypes.number.isRequired,
    lng: PropTypes.number.isRequired
};

export default GoogleApiWrapper({
    apiKey: process.env.GATSBY_GOOGLE_MAPS_API_KEY,
    language: 'sv-SE',
    LoadingContainer: () => <div>Laddar...</div>
})(MapContainer);
