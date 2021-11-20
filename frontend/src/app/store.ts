import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import gameReducer from '../features/gameScreen/gameSlice';
import { WSMiddleware } from '../middlewares/WS.middleware';

export const store = configureStore({
  reducer: {
    game: gameReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(WSMiddleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
