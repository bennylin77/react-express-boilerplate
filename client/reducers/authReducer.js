import { authTypes } from 'actions/authActions';

export default function(state={}, action) {
  switch(action.type) {
    case authTypes.AUTHENTICATED:
      return { ...state, authenticated: true };
    case authTypes.UNAUTHENTICATED:
      return { ...state, authenticated: false };
    case authTypes.AUTHENTICATION_ERROR:
      return { ...state, error: action.payload };
  }
  return state;
}
