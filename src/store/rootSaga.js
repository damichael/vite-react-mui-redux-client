/**
 * @file rootSaga.js
 * @description grand root saga
 *
 * @copyright veriome labs, llc.  - all rights reserved.
 * This file is subject to the terms and conditions defined in
 * file 'LICENSE.md', which is part of this source code package.
 *
 * @author don michael
 * @since Jul 23, 2019 21:13
 */
import { all } from 'redux-saga/effects';

/**
 * register all sagas
 */
export default function* rootSaga() {
    yield all([
    ]);
}
