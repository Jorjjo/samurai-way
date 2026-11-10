import type { Track } from '../../TracksTypes';
import styles from './TrackItem.module.css';

type Props = {
    track: Track;
};
export function TrackItem({ track }: Props) {
    return (
        <li
            className={styles.trackItem}
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
            <audio controls src={track.attributes.attachments[0].url}></audio>
        </li>
    );
}
