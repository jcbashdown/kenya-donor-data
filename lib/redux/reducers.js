import INITIAL_STATE from './INITIAL_STATE.js';

const getState = (state, action) => {
    switch (action.type) {
    default:
        return state;
    }
};

const donorDataReducer = (state = INITIAL_STATE, action) => {
    return getState(state, action);
};

export default donorDataReducer;
