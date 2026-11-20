import { useAppDispatch, useAppSelector } from '@/common/hooks';
import {
    getTrackDetailsTC,
    selectedTrackIdIsSelected,
    setSelectedTrackIdAC,
} from '../../model/tracks-slice';
import type { Track } from '../../TracksTypes';
import styles from './TrackItem.module.css';

type Props = {
    track: Track;
};
export function TrackItem({ track }: Props) {
    const isSelected = useAppSelector((state) => {
        return selectedTrackIdIsSelected(state, track.id);
    });

    const dispatch = useAppDispatch();
    const handleSelectTrack = () => {
        dispatch(setSelectedTrackIdAC({ trackId: track.id }));
        dispatch(getTrackDetailsTC({ trackId: track.id }));
    };

    return (
        <li
            className={styles.trackItem}
            style={{
                border: isSelected ? '1px solid orange' : 'none',
            }}
        >
            <h3 onClick={handleSelectTrack}>{track.attributes.title}</h3>
            <audio controls src={track.attributes.attachments[0].url}></audio>
        </li>
    );
}
