import { configureStore } from '@reduxjs/toolkit';
import exhibitsReducer from '~/store/slices/exhibitsSlice';
import userReducer from '~/store/slices/userSlice';

const store = configureStore({
  reducer: {
    exhibits: exhibitsReducer,
    user: userReducer,
  },
});

type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

export { store };
export type { RootState, AppDispatch };
