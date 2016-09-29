import rawData from './test_data/testRawData.js';
import { expect } from 'chai';
import mapKeysToValues from '../lib/redux/functions/mapKeysToValues.js';

describe('mapKeysToValues', () => {
    it('map the keys of project attributes to values per project', () => {
        var result = mapKeysToValues(rawData)[0];

        expect(Object.keys(result).length).to.equal(rawData['meta']['new']['columns'].length);
        expect(Object.keys(result)[0]).to.equal(rawData['meta']['new']['columns'][0]['name']);
        expect(Object.keys(result).slice(-1)[0]).to.equal(rawData['meta']['new']['columns'].slice(-1)[0]['name']);
        expect(result[Object.keys(result)[0]]).to.equal(rawData['data'][0][0]);
        expect(result[Object.keys(result).slice(-1)[0]]).to.equal(rawData['data'][0].slice(-1)[0]);
    });
});
