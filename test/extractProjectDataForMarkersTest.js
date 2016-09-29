import rawData from './test_data/testRawData.js';
import { expect } from 'chai';
import mapKeysToValues from '../lib/redux/functions/mapKeysToValues.js';
import extractProjectDataForMarkers from '../lib/redux/functions/extractProjectDataForMarkers.js';

var projectsWithKeys;
before(function() {
    projectsWithKeys = mapKeysToValues(rawData);
});

describe('extractProjectData', () => {
    it('extracts data per project in the expected format', () => {
        var result = extractProjectDataForMarkers(projectsWithKeys);
        var first_result = result[0];
        
        expect('location' in first_result).to.equal(true);
        expect(first_result.location[0]).to.equal(-4.43763300000);
        expect(first_result.location[1]).to.equal(39.51327200000);
        expect('title' in first_result).to.equal(true);
        expect('description' in first_result).to.equal(true);
        expect('objectives' in first_result).to.equal(true);
        expect('id' in first_result).to.equal(true);

        expect(result[1].location[0]).to.equal(8.965);
        expect(result[1].location[1]).to.equal(-37.998);

        expect(result.length).to.equal(2);
    });
});
