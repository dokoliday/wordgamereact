import axios from 'axios';
import {takeLatest, call, put} from 'redux-saga/effects';
import {fetchGifSuccess, fetchGifRequest} from '../reducers/gifExempleReducer';

export function* getGifExempleSaga() {
  yield takeLatest(
    fetchGifRequest,
    function* ({payload}: ReturnType<typeof fetchGifRequest>) {
      let response;
      yield call(async () => {
        console.log('log data');

        response = await axios.get(
          `https://api.giphy.com/v1/gifs/search?api_key=bE364rLRlcu5aRRhpQtUqksJOJLzbrqv&q=${payload}&limit=25&offset=0&rating=g&lang=fr`
        );
      });
      console.log('call success');
      yield put(
        fetchGifSuccess(
          response.data.data[Math.floor(Math.random() * 24)].images.original.url
        )
      );
    }
  );
}
