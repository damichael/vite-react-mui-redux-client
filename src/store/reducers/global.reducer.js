import * as Actions from '../actions/global.actions';

const initialState = {
    message: '',
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

        case Actions.ENGAGE_REQUEST: {
            return {
                ...state,
            };
        }

        case Actions.ENGAGE_SUCCESS: {

            let msg = 'unknown';
            if (action && action.payload && action.payload.message) {
                msg = action.payload.message;
            }

            return {
                ...state,
                message: msg
            };
        }

        case Actions.ENGAGE_FAILURE: {
            return {
                ...state,
                error: action.payload,
            };
        }

        default: {
            return state;
        }
    }
};

export default globalReducer;
