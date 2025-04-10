import {
    useDispatch as useReduxDispatch,
    useSelector as useReduxSelector
} from 'react-redux';

import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga'

import rootReducer from './rootReducer';
import rootSaga from './rootSaga';

// create the saga middleware
const sagaMiddleware = createSagaMiddleware()

const store = configureStore({
    reducer: rootReducer,
    devTools: true,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export const useSelector = useReduxSelector;

export const useDispatch = () => useReduxDispatch();

export default store;