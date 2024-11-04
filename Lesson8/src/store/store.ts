import { configureStore } from '@reduxjs/toolkit';
import exhibitsReducer from '~/store/slices/exhibitsSlice';

const store = configureStore({
  reducer: {
    exhibits: exhibitsReducer,
  },
});

type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

export { store };
export type { RootState, AppDispatch };
