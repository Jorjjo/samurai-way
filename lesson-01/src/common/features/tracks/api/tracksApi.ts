import { instance } from '../../../instance/instance';
import type { GetTracksResponse } from '../../../types/types';

export const tracksApi = {
    fetchTracks() {
        return instance.get<GetTracksResponse>('/playlists/tracks');
    },
};
