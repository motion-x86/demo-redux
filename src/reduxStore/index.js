import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

const ACTION_ONE = "ACTION_ONE";
const ACTION_TWO = "ACTION_TWO";

export const actionOne = propOne => ({
  type: ACTION_ONE,
  propOne
});

export const actionTwo = propTwo => ({
  type: ACTION_TWO,
  propTwo
});

function reducerOne(state = {}, action) {
  console.log("reducerOne", action);
  if (!action) {
    return state;
  }
  switch (action.type) {
    case ACTION_ONE:
      return { ...state, propOne: action.propOne };
    default:
      return state;
  }
}

function reducerTwo(state = {}, action) {
  if (!action) {
    return state;
  }
  switch (action.type) {
    case ACTION_TWO:
      return { ...state, propTwo: action.propTwo };
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  reducerOne,
  reducerTwo
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
