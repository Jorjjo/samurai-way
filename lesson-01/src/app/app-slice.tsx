import type { GlobalError, RequestStatus } from '@/common/types';
import { createSlice } from '@reduxjs/toolkit';



export const appSlice = createSlice({
    name: 'app',
    initialState: {
        status: 'idle' as RequestStatus,
        error: null as GlobalError,
    },
    reducers: (create) => ({
        setStatusAC: create.reducer<{ status: RequestStatus }>(
            (state, action) => {
                state.status = action.payload.status;
            },
        ),
        setErrorAC: create.reducer<{ error: GlobalError }>((state, action) => {
            state.error = action.payload.error;
        }),
    }),
    selectors: {
        selectStatus: (state) => state.status,
        selectError: (state) => state.error,
    },
});
// action creator достается из appSlice.actions
export const { setStatusAC, setErrorAC } = appSlice.actions;
// reducer достается из appSlice.reducer
export const appReducer = appSlice.reducer;

export const { selectStatus, selectError } = appSlice.selectors;
