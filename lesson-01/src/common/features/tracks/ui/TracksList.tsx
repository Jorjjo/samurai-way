import { useAppSelector } from '@/common/hooks';
import styles from './TrackList.module.css';
import { selectTracks } from '../model/tracks-slice';
import { TrackItem } from './Tracks/TrackItem';

export function TracksList() {
    const tracks = useAppSelector(selectTracks);
    if (tracks.length === 0) {
        return (
                <span>No tracks</span>
        );
    }
    return (
        <ul className={styles.dfasfs}>
            {tracks.map((track) => (
                <TrackItem key={track.id} track={track} />
            ))}
        </ul>
    );
}
