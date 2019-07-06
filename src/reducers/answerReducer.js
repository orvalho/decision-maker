import {FETCH_ANSWER, CLEAR_ANSWER} from '../actions/types';

export default(state = {}, action) => {
  switch (action.type) {
    case FETCH_ANSWER:
      return {answer: action.payload.data.answer, image: action.payload.data.image};
    case CLEAR_ANSWER:
      return {};
    default:
      return state;
  }
}
