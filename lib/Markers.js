import { connect } from 'react-redux';
import React from 'react';
import { Popup, Marker } from 'react-leaflet';

import ClusterLayer from 'react-leaflet-cluster-layer';

const MarkersList = ({ projects }) => { 
    var markers = projects.map((project) => {
        return (<Marker key={project.id} position={project.position}>
          <Popup>
            <div>
              <h5>Project Title</h5>
              <p>{project.title}</p>
              <h5>Description</h5>
              <p>{project.description}</p>
              <h5>Objectives</h5>
              <p>{project.objectives}</p>
            </div>
          </Popup>
        </Marker>);
    });
    return (
        <div>{markers}</div>
    );
};

MarkersList.propTypes = {
    projects: React.PropTypes.array.isRequired,
};

class Cluster extends React.Component {
    render() {
        //using the style given in their example - https://github.com/OpenGov/react-leaflet-cluster-layer
        const style = {
            border: 'solid 2px darkgrey',
            borderRadius: '8px',
            backgroundColor: 'white',
            padding: '1em',
            textAlign: 'center'
        };
        const cluster = this.props.cluster;
     
        //tweaked, may not be perfect
        if (cluster.markers.length < 60) {
            return (
                 <MarkersList
                   projects={cluster.markers}/>
                );
        }
     
        return (
            <div style={style}>{cluster.markers.length} items</div>
        );
    }
}

const Markers = ({map, layerContainer, projects}) => {
    // gridSize tweaked - may not be perfect
    return (
        <ClusterLayer 
          map={map}
          gridSize={300}
          layerContainer={layerContainer}
          markers={projects}
          clusterComponent={Cluster}/>);
};

Cluster.propTypes = {
    cluster: React.PropTypes.object.isRequired,
};

Markers.propTypes = {
    projects: React.PropTypes.array.isRequired,
    map: React.PropTypes.object,
    layerContainer: React.PropTypes.object
};

const mapStateToProps = (state, ownProps) => {
    //must pass in ownProps - redux is a cost here
    return Object.assign({}, ownProps, {
        projects: state.projects
    });
};

const MarkersContainer = connect(
  mapStateToProps
)(Markers);

export default MarkersContainer; 
