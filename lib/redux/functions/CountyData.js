class CountyData {
    constructor(projectsWithKeys, countyData) {
        this.countyData = countyData;
        this.projectMap = this._initialiseProjectMap();
        this.projectsByCounty = this.getProjectsPerCounty(projectsWithKeys);
        this.opacitiesObject = this._calculateOpacities();
    }
    _initialiseProjectMap() {
        return this.countyData.reduce((projectMap, county) => {
            projectMap[county.properties['COUNTY_NAM']] = []; 
            return projectMap;
        }, {});
    }
    _calculateOpacities() {
        var largestProjectCount = 0;
        var smallestProjectCount;
        Object.keys(this.projectMap).forEach((countyName) => {
            if(this.projectMap[countyName].length > largestProjectCount) {
                largestProjectCount = this.projectMap[countyName].length;
            }
            if(smallestProjectCount === undefined) {
                smallestProjectCount = this.projectMap[countyName].length;
            } else if(this.projectMap[countyName].length < smallestProjectCount) {
                smallestProjectCount = this.projectMap[countyName].length;
            }
        });
        var countRange = largestProjectCount - smallestProjectCount;
        return Object.keys(this.projectMap).reduce((opacitiesObject, countyName) => {
            opacitiesObject[countyName] = '.' + Math.round( 1 + (this.projectMap[countyName].length - smallestProjectCount) / (countRange / 8) );
            return opacitiesObject;
        }, {});
    }
    getProjectsPerCounty(projectsWithKeys) {
        return projectsWithKeys.reduce((projectMap, project) => {
            if(projectMap[project['County']]) {
                projectMap[project['County']].push(project);
            } else {
                projectMap[project['County']] = [];
                projectMap[project['County']].push(project);
            }
            return projectMap;
        }, this.projectMap);
    }
    //I think the way we will actually use this class is by setting the computed data as static properties on the state but I'm leaving this here for now anyway.
    projectsInCountyCount(countyName) {
        if(countyName in this.projectsByCounty) {
            return this.projectsByCounty[countyName].length;
        } else {
            return 0;
        }
    }
}

export default CountyData;
