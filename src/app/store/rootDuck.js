import { all } from "redux-saga/effects";
import { combineReducers } from "redux";
import * as news from "./ducks/news.duck";
import * as tabs from "./ducks/tabs.duck";
import * as auth from "./ducks/auth.duck";
import { metronic } from "../../_metronic";

export const rootReducer = combineReducers({
  tabs: tabs.reducer,
  auth: auth.reducer,
  news: news.reducer,
  i18n: metronic.i18n.reducer,
  builder: metronic.builder.reducer
});

export function* rootSaga() {
  yield all([auth.saga(),news.sagaNews()]);
}
