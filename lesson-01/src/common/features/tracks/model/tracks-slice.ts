import { createAppSlice } from '@/common/utils/createAppSlice';
import type { Track, TrackDetails } from '../TracksTypes';
import { tracksApi } from '../api/tracksApi';
import { setStatusAC } from '@/app/app-slice';
import type { RequestStatus } from '@/common/types';

export type TracksState = {
    tracks: Track[];
    selectedTrackId: string | null;
    trackDetails: TrackDetails | null;
    entityStatus: RequestStatus;
};

const initialState: TracksState = {
    tracks: [],
    selectedTrackId: null,
    trackDetails: null,
    entityStatus: 'idle',
};

export const tracksSlice = createAppSlice({
    name: 'tracks',
    initialState,
    reducers: (create) => ({
        fetchTracksTC: create.asyncThunk(
            async (_args, { rejectWithValue, dispatch }) => {
                try {
                    dispatch(setStatusAC({ status: 'loading' }));
                    const res = await tracksApi.fetchTracks();
                    console.log('Response:', res.data);
                    const newTracks = res.data.data;
                    dispatch(setStatusAC({ status: 'succeeded' }));
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
            async (
                args: { trackId: string },
                { rejectWithValue, dispatch },
            ) => {
                try {
                    dispatch(setStatusAC({ status: 'loading' }));
                    const res = await tracksApi.getTrackDetails(args);
                    console.log('Response:', res.data);
                    const trackDetails = res.data.data;
                    dispatch(setStatusAC({ status: 'succeeded' }));
                    return { trackDetails };
                } catch (error) {
                    return rejectWithValue(null);
                }
            },
            {
                fulfilled: (state, action) => {
                    if (state.selectedTrackId !== action.meta.arg.trackId) {
                        return;
                    }
                    state.trackDetails = action.payload.trackDetails;
                },
            },
        ),
        setSelectedTrackIdAC: create.reducer<{ trackId: string | null}>(
            (state, action) => {
                state.selectedTrackId = action.payload.trackId;
                state.trackDetails = null;
            },
        ),
    }),

    selectors: {
        selectTracks: (state) => state.tracks,
        selectTrackDetails: (state) => state.trackDetails,
        selectedTrackIdIsSelected: (state, trackId: string) => {
            return state.selectedTrackId === trackId;
        },
    },
});

export const { fetchTracksTC, getTrackDetailsTC, setSelectedTrackIdAC } =
    tracksSlice.actions;
export const tracksReducer = tracksSlice.reducer;
export const { selectTracks, selectTrackDetails, selectedTrackIdIsSelected } =
    tracksSlice.selectors;
