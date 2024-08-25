import { configureStore } from '@reduxjs/toolkit';
import appReducer from './slices/appSlice';
import userReducer from './slices/userSlice';
// import middleware from './middleware';

const store = configureStore({
  reducer: {
    app: appReducer,
    user: userReducer,
  },
//   middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(middleware),
});

export default store;
