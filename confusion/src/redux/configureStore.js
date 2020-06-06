import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createForms } from 'react-redux-form';
import { Dishes } from './dishes';
import { Leaders } from './leaders';
import { Comments } from './comments';
import { Promotions } from './promotions';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { InitialFeedback } from './forms';



export const ConfigureStore = () => {
    const store = createStore(

        combineReducers({
            dishes: Dishes,
            comments: Comments,
            promotions: Promotions,
            leaders: Leaders,
            ...createForms({
                // we provide this feedback so we can reset the form to
                // its initial state after submiting the form
                feedback: InitialFeedback 
            })
        }),
        // enhancer
        applyMiddleware(thunk, logger)
    );

    return store;
}