import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import contactsReducer from './phonebook/contactsReducer';

const todosPersistConfig = {
  key: 'contacts',
  storage,
  blacklist: ['filter'],
};

const middleware = (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }).concat(logger);

export const store = configureStore({
  reducer: {
    contacts: persistReducer(todosPersistConfig, contactsReducer),
  },
  middleware,
  devTools: process.env.NODE_ENV !== 'production',
});

export const persistor = persistStore(store);
