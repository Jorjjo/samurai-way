import { useAppDispatch, useAppSelector } from '@/common/hooks';
import {
    selectTrackDetails,
    setSelectedTrackIdAC,
} from '../../model/tracks-slice';

export function TrackDetails() {
    const trackDetails = useAppSelector(selectTrackDetails);
    const dispatch = useAppDispatch();

    const handleReset = () => {
        dispatch(setSelectedTrackIdAC({ trackId: null }));
    };
    return (
        <div>
            <h2>Details</h2>

            {trackDetails ? (
                <div>
                    <h3>{trackDetails.attributes.title}</h3>
                    <p>{trackDetails.attributes.lyrics ?? 'No lyrics'}</p>
                </div>
            ) : (
                <p>Track is not selected</p>
            )}

            <button onClick={handleReset}>Reset selection</button>
        </div>
    );
}
