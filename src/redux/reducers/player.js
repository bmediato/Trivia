import { CLEAR_SCORE, SAVE_PLAYER, SAVE_POINTS } from '../actions';

const INIT_STATE = {
  name: '',
  assertions: 0,
  score: 0,
  gravatarEmail: '',
};

const player = (state = INIT_STATE, action) => {
  switch (action.type) {
  case SAVE_PLAYER:
    return {
      ...state,
      name: action.payload.name,
      gravatarEmail: action.payload.email,
    };

  case SAVE_POINTS:
    return {
      ...state,
      score: action.payload.score,
      assertions: action.payload.assertions,
    };
  case CLEAR_SCORE:
    return {
      ...state,
      assertions: 0,
      score: 0,
    };
  default:
    return state;
  }
};

export default player;
