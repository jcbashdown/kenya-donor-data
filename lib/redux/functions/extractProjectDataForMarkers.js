const extractProjectDataForMarkers = (projectsWithKeys) => {
    return projectsWithKeys.reduce((projects, project) => {
        var projectLocation = _getLocation(project);
        if(projectLocation) {
            projects.push({
                'location': _getLocation(project),
                'title': project['Project Title'],
                'description': project['Project Description'],
                'objectives': project['Project Objectives'],
                // used as key for react
                'id': project['id']
            });
        }
        return projects;
    }, []);
};

//not sure what's going on with this data type - array with 5 elements?, nevertheless this works!
const _getLocation = (project) => {
    var firstLocation = project['Location2_Secondary'];
    var secondLocation = project['Location1_EProMIS'];
    if(firstLocation[1] && firstLocation[2]) {
        return [parseFloat(firstLocation[1]), parseFloat(firstLocation[2])];
    } else if (secondLocation[1] && secondLocation[2]) {
        return [parseFloat(secondLocation[1]), parseFloat(secondLocation[2])];
    } else {
        return null;
    }
};

export default extractProjectDataForMarkers;
