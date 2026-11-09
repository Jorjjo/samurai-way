import { useEffect } from 'react';
import { useAppDispatch } from '../../../hooks/useAppDispatch';
import { useAppSelector } from '../../../hooks/useAppSelector';
import { fetchTracksTC, selectTracks } from '../model/tracks-slice';

export function TracksList() {
    const tracks = useAppSelector(selectTracks);
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(fetchTracksTC());
    }, []);

    if (!tracks) {
        return (
            <div>
                <h1>Musicfun player</h1>
                <span>Loading...</span>
            </div>
        );
    }
    if (tracks.length === 0) {
        return (
            <div>
                <h1>Musicfun player</h1>
                <span>No tracks</span>
            </div>
        );
    }
    return (
        <ul>
            {tracks.map((track) => (
                <li
                    key={track.id}
                    // style={{
                    //     border:
                    //         track.id === selectedTrack?.id
                    //             ? '1px solid orange'
                    //             : 'none',
                    // }}
                >
                    <h3
                    // onClick={() => {
                    //     setSelectedTrackId(track.id);
                    // }}
                    >
                        {track.attributes.title}
                    </h3>
                    <audio
                        controls
                        src={track.attributes.attachments[0].url}
                    ></audio>
                </li>
            ))}
        </ul>
    );
}
