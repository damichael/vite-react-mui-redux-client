import * as Actions from '../actions/global.actions';

const initialState = {
    message: '',
    messages: [],
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

            console.log('reducer.payload', action.payload)
            let msgs = [];
            if (action && action.payload && action.payload.messages) {
                action.payload.messages.forEach((message) => {
                    msgs.push(message);
                })
            }

            console.log('reducer.msgs', msgs)
            return {
                ...state,
                messages: msgs
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
