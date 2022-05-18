import {configureStore, combineReducers} from "@reduxjs/toolkit";
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER
} from "redux-persist";
import storage from 'redux-persist/lib/storage'

import tasksSlice from "./tasksSlice";
import filtersSlice from "./filtersSlice";
import calendarSlice from './calendarSlice'

const persistConfig = {
    key: 'root',
    storage
}

const rootReducer = combineReducers({
    tasksSlice,
    filtersSlice,
    calendarSlice
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
})

export const persistor = persistStore(store)
export default store