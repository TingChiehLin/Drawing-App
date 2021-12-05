import {createStore} from "redux";

const selectorReducer = (state = {color:'black'}, action) => {

    if (action.type === 'blue') {
        return {
            color: 'blue'
        };
    }

    if (action.type === 'yellow') {
        return {
            color: 'yellow'
        };
    }

    if (action.type === 'purple') {
        return {
            color: 'purple'
        };
    }

    return state;
};

const store = createStore(selectorReducer);

export default store;

