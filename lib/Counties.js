import React from 'react';
import { GeoJSON } from 'react-leaflet';
import { connect } from 'react-redux';

const polygonStyle = (feature, countyOpacities) => {
    var opacity = countyOpacities[feature.properties['COUNTY_NAM']];
    var style = {
        fill: 'red',
        backgroundColor: 'red',
        color: 'red',
        fillOpacity: opacity 
    };
    return style;
};

//would like to do some onClick behaviour but not right now.
const Counties = ({counties, countyOpacities}) => {
    return (<div>
        <GeoJSON data={counties} style={(feature) => { return polygonStyle(feature, countyOpacities); }}/> 
    </div>);
};

Counties.propTypes = {
    counties: React.PropTypes.array.isRequired,
    countyOpacities: React.PropTypes.object.isRequired
};

const mapStateToProps = (state, ownProps) => {
    return Object.assign({}, ownProps, {
        counties: state.counties,
        countyOpacities: state.countyOpacities
    });
};

const CountiesContainer = connect(
  mapStateToProps
)(Counties);

export default CountiesContainer; 
