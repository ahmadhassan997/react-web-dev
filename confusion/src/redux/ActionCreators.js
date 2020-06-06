import * as ActionTypes from './ActionTypes';
import {DISHES} from '../shared/dishes';

export const addComment = (dishId, rating, author, comment) => ({
    type: ActionTypes.ADD_COMMENT,
    payload: {
        dishId: dishId,
        rating: rating,
        author: author,
        comment: comment
    }
});

// fetchDishes is a thunk because it is going to
// be returning an inner function. This function first tries
// to fetch the dishes by first setting isLoading to True so
// that spinner can be displayed and after a period of time
// when the dishes are fetched it will add it into application
export const fetchDishes = () => (dispatch) => {
    dispatch(dishesLoading(true));

    setTimeout(() => {
        dispatch(addDishes(DISHES));
    }, 2000);
}

// this function will inform that dishes are going
// to be loaded and you need to wait
export const dishesLoading = () => ({
    type: ActionTypes.DISHES_LOADING
});

export const dishesFailed = (errmess) => ({
    type: ActionTypes.DISHES_FAILED,
    payload: errmess
});

export const addDishes = (dishes) => ({
    type: ActionTypes.ADD_DISHES,
    payload: dishes
});