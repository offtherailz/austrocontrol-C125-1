/*
 * Copyright 2018, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

const expect = require('expect');
const dateFilter = require('../dateFilter');
const { setEffectiveDates } = require('../../actions/dateFilter');
const { getEffectiveDates, getEffectiveDatesURL } = require('../../selectors/dateFilter');

describe('dateFilter reducer', () => {
    it('setEffectiveDates sets dates', () => {
        const DATES = [{
            value: '01/04/2018',
            label: '4 Jan 2018',
            code: 'AR 190'
        },
        {
            value: '02/01/2018',
            label: '1 Feb 2018',
            code: 'AR 191'
        },
        {
            value: '03/01/2018',
            label: '1 Mar 2018',
            code: 'AR 192'
        }];
        const action = setEffectiveDates(DATES);
        const state = dateFilter( {}, action);
        expect(state).toExist();
        expect(getEffectiveDates({dateFilter: state})).toBe(DATES);
    });
    it('default value for effectiveDatesURL ', () => {

        const state = dateFilter(undefined, {type: "NOTHING"});
        expect(state).toExist();
        expect(getEffectiveDatesURL({ dateFilter: state })).toBe('assets/config/effectiveDates.json');
    });
});
