import * as Actions from '../actions/global.actions';

const initialState = {
    message: 'Hello from Redux',
    dataLoading: false,
};

const globalReducer = (state = initialState, action) => {

    switch (action.type) {
        // -------------------------------------------------------------------
        // common to all forms
        // -------------------------------------------------------------------
        case Actions.DATA_LOADING_SET: {
            return {
                ...state,
                dataLoading: action.payload,
            };
        }

        default: {
            return state;
        }
    }
};

export default globalReducer;
