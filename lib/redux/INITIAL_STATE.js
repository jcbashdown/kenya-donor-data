import rawData from '../../public/data.js';
import mapKeysToValues from './functions/mapKeysToValues.js';
import extractProjectDataForMarkers from './functions/extractProjectDataForMarkers.js';

const mappedData = mapKeysToValues(rawData);

var initialState = {
    //projects: [{
        //location: [1.2, -38.4]
        //title: '',
        //description: '',
        //objectives: ''
        //id: ''
    //}]
    projects: extractProjectDataForMarkers(mappedData)
};

export default initialState;
