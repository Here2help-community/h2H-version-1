import { RESTORE_TOKEN, SIGN_UP, SIGN_IN, SIGN_OUT, ONBOARD, HOME } from "./actionsList";

const initial_state = {
  isLoading: true,
}

export default function Reducer(state = initial_state, action) {

    if (action.type === ONBOARD) {
      return {
        ...state,
        type: ONBOARD,
        isSignedOut: true,
        isNewUser: true,
        isLoading: false,
        hasAccount: false,
      }
    }
    else if (action.type === SIGN_UP) {
      return {
        ...state,
        type: SIGN_UP,
        isSignedOut: true,
        isNewUser: false,
        isLoading: false,
        hasAccount: false,
      }
    }
    else if (action.type === SIGN_IN) {
      return {
        ...state,
        type: SIGN_IN,
        isSignedOut: true,
        isLoading: false,
        hasAccount: true,
        authType: action.authType,
      };
    }
    else if (action.type === SIGN_OUT) {
      return {
        ...state,
        type: SIGN_OUT,
        isSignedOut: true,
        isLoading: false,
      };
    }
    else if (action.type === HOME) {
      return {
        ...state,
        type: HOME,
        isSignedOut: false,
        isLoading: false,
        hasAccount: true,
      }
    }
    else if (action.type ==='showload') {
      return {
        ...state,
        isLoading: true,
      };
    }
   
    return state;
          
}