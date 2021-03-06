import { SIGN_IN, SIGN_OUT, CREATE_STREAM } from './types';
import streams from '../api/streams';

export const signIn = userId => {
  return {
    type: SIGN_IN,
    payload: userId,
  };
};

export const signOut = () => {
  return {
    type: SIGN_OUT,
  };
};

export const createStream = formValues => async dispatch => {
  const response = streams.post('/streams', formValues);
  await dispatch({ type: CREATE_STREAM, payload: response.data });
};
