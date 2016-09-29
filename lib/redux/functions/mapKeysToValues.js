const mapKeysToValues = (rawData) => {
    return rawData['data'].map((project) => {
        return project.reduce((projectData, dataPoint, i) => {
            projectData[_getColumnName(rawData, i)] = dataPoint;
            return projectData;
        }, {});
    });
};

const _getColumnName = (rawData, i) => {
    return rawData['meta']['new']['columns'][i]['name'];
};

export default mapKeysToValues;
