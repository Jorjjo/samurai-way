import { configureStore } from '@reduxjs/toolkit';
import { appReducer } from './app-slice';
import { tracksReducer } from '@/common/features/tracks/model/tracks-slice';

export const store = configureStore({
    reducer: {
        tracks: tracksReducer,
        app: appReducer,
    },
});

// автоматическое определение типа всего объекта состояния
export type RootState = ReturnType<typeof store.getState>;
// автоматическое определение типа метода dispatch
export type AppDispatch = typeof store.dispatch;

// для возможности обращения к store в консоли браузера
// @ts-ignore
window.store = store;
