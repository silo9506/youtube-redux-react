import { combineReducers, configureStore } from "@reduxjs/toolkit";
import detailSlice from "./slice/detailSlice";
import popularSlice from "./slice/popularSlice";
import searchSlice from "./slice/searchSlice";
import storageSession from "redux-persist/es/storage/session";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist";
import handleSlice from "./slice/handleSlice";

const persistConfig = {
  key: "root",
  storage: storageSession,
  whitelist: ["popularSlice"],
};

const rootReducer = combineReducers({
  popularSlice,
  detailSlice,
  searchSlice,
  handleSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
export default store;
