import rawData from './test_data/testRawData.js';
import countyData from '../public/counties.js';
import { expect } from 'chai';
import mapKeysToValues from '../lib/redux/functions/mapKeysToValues.js';
import CountyData from '../lib/redux/functions/CountyData.js';

var projectsWithKeys,
    CountyDataInstance;
before(function() {
    projectsWithKeys = mapKeysToValues(rawData);
    CountyDataInstance = new CountyData(projectsWithKeys, countyData);
});

// later this return arrays of projects keyed off county so we can sum other things
// for now this is just a count
describe('CountyData', () => {
    it('maps the projects to counties and can return the number in each', () => {
        // 0 for everything without a project
        expect(CountyDataInstance.projectsInCountyCount('TURKANA')).to.equal(0);

        expect(CountyDataInstance.projectsInCountyCount('NAIROBI')).to.equal(2);
        expect(CountyDataInstance.projectsInCountyCount('MOMBASA')).to.equal(1);
    });
    it('returns an object keyed of county of opacities based on the range of the number of the projects per county and the specific number of a specific county', () => {
        // 0.1 for everything without a project
        expect(CountyDataInstance.opacitiesObject['TURKANA']).to.equal('.1');

        expect(CountyDataInstance.opacitiesObject['NAIROBI']).to.equal('.9');
        expect(CountyDataInstance.opacitiesObject['MOMBASA']).to.equal('.5');
        // this result is rounded as it seems only single increments are accepted
    });
});
