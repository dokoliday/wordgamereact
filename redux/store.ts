import {configureStore} from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import {fork, call, all} from 'redux-saga/effects';
import * as sagas from './sagas';
import {fetchGif} from './reducers/gifExempleReducer';

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

interface TWatcher {
  [key: string]: () => Generator<any, void, RootState>;
}

export function* rootSaga() {
  yield all([createRootSaga(sagas)]);
}

export function* createRootSaga(
  watchers: TWatcher,
  {context = {}}: {context?: any} = {}
) {
  yield all(
    Object.entries(watchers).map(([, watcherGenerator]) =>
      fork(function*() {
        while (true) {
          try {
            yield call({fn: watcherGenerator, context});
            break;
          } catch {
            // nothing to do
          }
        }
      })
    )
  );
}

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    gifExempleReducer: fetchGif.reducer
  },
  middleware: [sagaMiddleware],
  devTools: process.env.NODE_ENV !== 'production',
  enhancers: []
});

sagaMiddleware.run(rootSaga);

export default store;
