import axios from 'axios';

import {FETCH_ANSWER} from './types';

export default() => {
  const promise = axios.get('https://yesno.wtf/api');
  return {type: FETCH_ANSWER, payload: promise};
}
