import type { Track } from '../../../types/types';
import { createAppSlice } from '../../../utils/createAppSlice';
import { tracksApi } from '../api/tracksApi';

export const tracksSlice = createAppSlice({
    name: 'tracks',
    initialState: [] as Track[],
    reducers: (create) => ({
        fetchTracksTC: create.asyncThunk(
            async (_args, { rejectWithValue, dispatch }) => {
                try {
                    const res = await tracksApi.fetchTracks();
                    console.log('Response:', res.data);
                    const newTracks = res.data.data;
                    return { tracks: newTracks };
                } catch (error) {
                    return rejectWithValue(null);
                }
            },
            {
                fulfilled: (_state, action) => {
                    return action.payload.tracks;
                },
            },
        ),
    }),
    selectors: {
        selectTracks: (state) => state,
    },
});

export const { fetchTracksTC } = tracksSlice.actions;
export const tracksReducer = tracksSlice.reducer;
export const { selectTracks } = tracksSlice.selectors;
