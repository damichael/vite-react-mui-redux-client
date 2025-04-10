/**
 * @file global.actions.js
 * @description general actions
 *
 * @copyright veriome labs, llc.  - all rights reserved.
 * This file is subject to the terms and conditions defined in
 * file 'LICENSE.md', which is part of this source code package.
 *
 * @author don michael
 * @since Jun 04, 2020 16:08
 */

export const DATA_LOADING_SET = 'DATA_LOADING_SET';
export function dataLoadingSet(value) {
    return {
        type: DATA_LOADING_SET,
        payload: value,
    };
}

export const ENGAGE_REQUEST = 'ENGAGE_REQUEST';
export function engageRequest() {
    return {
        type: ENGAGE_REQUEST,
    };
}

export const ENGAGE_SUCCESS = 'ENGAGE_SUCCESS';
export function engageSuccess(payload) {
    return {
        type: ENGAGE_SUCCESS,
        payload,
    };
}

export const ENGAGE_FAILURE = 'ENGAGE_FAILURE';
export function engageFailure(error) {
    return {
        type: ENGAGE_FAILURE,
        payload: JSON.stringify(error),
    };
}