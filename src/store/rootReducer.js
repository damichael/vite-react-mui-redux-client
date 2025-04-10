import { combineReducers } from '@reduxjs/toolkit';

import global from './reducers/global.reducer';

const rootReducer = combineReducers({
    global,
});

export default rootReducer;
