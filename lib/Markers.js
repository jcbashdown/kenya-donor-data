import { connect } from 'react-redux';
import React from 'react';
import { Marker, Popup } from 'react-leaflet';

const Markers = ({ projects }) => { 
    var markers = projects.map((project) => {
        return (<Marker key={project.id} position={project.location}>
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

Markers.propTypes = {
    projects: React.PropTypes.array.isRequired,
};

const mapStateToProps = (state) => {
    return {
        projects: state.projects
    };
};

const MarkersContainer = connect(
  mapStateToProps
)(Markers);

export default MarkersContainer; 
