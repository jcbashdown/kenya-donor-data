import countyData from '../../public/counties.js';

import rawData from '../../public/data.js';
import mapKeysToValues from './functions/mapKeysToValues.js';
import extractProjectDataForMarkers from './functions/extractProjectDataForMarkers.js';
//should be called utils not functions now
import CountyData from './functions/CountyData.js';

const mappedData = mapKeysToValues(rawData);
const CountyDataInstance = new CountyData(mappedData, countyData);

var initialState = {
    //projects: [{
        //location: [1.2, -38.4]
        //title: '',
        //description: '',
        //objectives: ''
        //id: ''
    //}]
    projects: extractProjectDataForMarkers(mappedData),
    //GeoJSON:
    counties: countyData,
    //opacities keyed off county name
    countyOpacities: CountyDataInstance.opacitiesObject
};

export default initialState;
