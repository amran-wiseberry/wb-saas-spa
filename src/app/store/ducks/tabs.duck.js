import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { put, takeLatest } from "redux-saga/effects";
import { getNewsData } from "../../crud/news.crud";
import * as routerHelpers from "../../router/RouterHelpers";

export const actionTypes = {
    TabsAdd: "[tabale add]",
    TabsLoaded: "[TabsLoaded]",
    TabsDelete: "[tabs Delete]",
    TabsError: "[TabsError]",
};

const initialTabsState = {
    tabs: []
};
//  initialTabsState.tabs = new Array();
// const initialTabsState = {
//     tabs: [],
//     loading: false,
//     error: ''
// };

export const reducer = persistReducer(
    { storage, key: "wol-auth", whitelist: ["tabs"] },
    (state = initialTabsState, action) => {
        switch (action.type) {

            case actionTypes.TabsLoaded: {
                console.log("a");
                 const  tabs = action.payload;
                return { ...state, tabs };
            }

            case actionTypes.TabsAdd: {
                console.log("b");
                const tabs = action.payload;
                console.log(tabs,state);

                // return [...state.tabs, tabs]
                return {...state, tabs: [...state.tabs,tabs ]};
                // return [...state, data];
                
            }
            case actionTypes.TabsDelete: {
                const tabs = action.payload;
                // console.log(...state.tabs.filter(tab => tab.name !== tabs));
                return {...state, tabs: [...state.tabs.filter(tab => tab.name !== tabs)]};
                // return [...state.filter(event => event.id !== action.payload)];
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
    tabsDelete: tabs => ({ type: actionTypes.TabsDelete, payload: tabs }),
    tabsLoaded: data => ({ type: actionTypes.TabsLoaded, payload: { data } }),
    tabsAdd: tabs => ({ type: actionTypes.TabsAdd, payload: tabs }),
    tabsError: error => ({ type: actionTypes.NewsError, payload: { error } })
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

export function* sagaTabs() {
    // yield takeLatest(actionTypes.NewsLoading,function* testtingSaga() {
    //     console.log('NewsLoading');
    //     yield put(actions.());
    //   });
    yield takeLatest(actionTypes.NewsError, function* tabsRequested() {

        // console.log('called NewsR');
        // const { data: news } = yield getNewsData();
        // // console.log(news.data);
        // yield put(actions.newsLoaded(news.data));
    });
}
