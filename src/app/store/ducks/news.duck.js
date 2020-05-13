import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { put, takeLatest } from "redux-saga/effects";
import { getNewsData } from "../../crud/news.crud";
import * as routerHelpers from "../../router/RouterHelpers";

export const actionTypes = {
    NewsLoading: "[NewsLoading]",
    NewsLoaded: "[NewsLoaded]",
    NewsError: "[NewsError]",
    NewsLoadFinish: "[News Load Finish]"
};

const initialAuthState = {
    data: [],
    loading: false,
    error: ''
};

export const reducer = persistReducer(
    { storage, key: "wol-auth", whitelist: ["data"] },
    (state = initialAuthState, action) => {
        switch (action.type) {

            // case actionTypes.NewsLoaded: {
            //      const { data } = action.payload;
            //     return { ...state, data };
            // }
            case actionTypes.NewsLoading: {
                return {
                    ...state,
                    loading: true,
                    error:''
                };
            }
            case actionTypes.NewsLoaded: {
                const { data } = action.payload;
                return {
                    ...state,
                    data: data,
                    loading: false
                }
            }
            case actionTypes.NewsLoadFinish: {
                return {
                    ...state,
                    loading: false
                }
            }
            case actionTypes.NewsError: {
                return {
                    ...state,
                    loading: false,
                    error: action.error
                };
            }

            default:
                return state;
        }
    }
);

export const actions = {
    newsLoading: data => ({ type: actionTypes.NewsLoading}),
    newsLoaded: data => ({ type: actionTypes.NewsLoaded, payload: { data } }),
    newsError: error => ({ type: actionTypes.NewsError, payload: { error } })
};


function* fetchUser() {
    try {
         console.log('called');
        const { data: news } = yield getNewsData();
        // console.log(news.data);
        yield put(actions.newsLoaded(news.data));
    } catch (e) {
        // yield put({type: LOAD_USERS_ERROR, error: e.message});
    }
 }

export function* sagaNews() {
    // yield takeLatest(actionTypes.NewsLoading,function* testtingSaga() {
    //     console.log('NewsLoading');
    //     yield put(actions.());
    //   });
    yield takeLatest(actionTypes.NewsLoading, function* newsRequested() {

        console.log('called NewsR');
        const { data: news } = yield getNewsData();
        // console.log(news.data);
        yield put(actions.newsLoaded(news.data));
    });
}
