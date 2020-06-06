import * as ActionTypes from './ActionTypes';

export const Dishes = (state = {
        isLoading: true, // because the dishes is empty here
        errMess: null, // error message to be passed in case of DISHES_FAILED
        dishes: []
    }, action) => {
    switch(action.type) {
        case ActionTypes.ADD_DISHES:
            return {...state, isLoading: false, errMess: null, dishes: action.payload};

        case ActionTypes.DISHES_LOADING:
            return {...state, isLoading: true, errMess: null, dishes: []};

        case ActionTypes.DISHES_FAILED:
            return {...state, isLoading: false, errMess: action.payload, dishes: []};

        default:
            return state;
    }
}