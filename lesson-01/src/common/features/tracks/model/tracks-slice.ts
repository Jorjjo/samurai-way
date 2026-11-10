import { createAppSlice } from '@/common/utils/createAppSlice';
import type { GetTrackResponse, Track } from '../TracksTypes';
import { tracksApi } from '../api/tracksApi';

type TracksState = {
    tracks: Track[];
    selectedTrackId: string | null;
    trackDetails: GetTrackResponse['data'] | null;
};

const initialState: TracksState = {
    tracks: [],
    selectedTrackId: null,
    trackDetails: null,
};

export const tracksSlice = createAppSlice({
    name: 'tracks',
    initialState: initialState,
    reducers: (create) => ({
        fetchTracksTC: create.asyncThunk(
            async (_args, { rejectWithValue }) => {
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
                fulfilled: (state, action) => {
                    state.tracks = action.payload.tracks;
                },
            },
        ),
        getTrackDetailsTC: create.asyncThunk(
            async (args: { trackId: string }, { rejectWithValue }) => {
                try {
                    const res = await tracksApi.getTrackDetails(args);
                    console.log('Response:', res.data);
                    const trackDetails = res.data;
                    return { trackDetails };
                } catch (error) {
                    return rejectWithValue(null);
                }
            },
            {
                fulfilled: (state, action) => {
                    state.trackDetails = action.payload.trackDetails;
                },
            },
        ),
    }),
    selectors: {
        selectTracks: (state) => state.tracks,
        selectTrackDetails: (state) => state.trackDetails,
    },
});

export const { fetchTracksTC } = tracksSlice.actions;
export const tracksReducer = tracksSlice.reducer;
export const { selectTracks, selectTrackDetails } = tracksSlice.selectors;
