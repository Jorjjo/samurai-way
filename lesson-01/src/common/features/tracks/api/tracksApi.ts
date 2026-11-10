import { instance } from '@/common/instance';
import type { GetTrackResponse, GetTracksResponse } from '../TracksTypes';

export const tracksApi = {
    fetchTracks() {
        return instance.get<GetTracksResponse>('/playlists/tracks');
    },
    getTrackDetails(payload: { trackId: string }) {
        const { trackId } = payload;
        return instance.get<GetTrackResponse['data']>(
            `/playlists/tracks/${trackId}`,
        );
    },
};
