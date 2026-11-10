


import { useAppSelector } from '@/common/hooks';
import { selectTrackDetails } from '../../model/tracks-slice';



export function TrackDetails() {
    const trackDetails = useAppSelector(selectTrackDetails);
    return (
        <div>
            <h4>Details</h4>

            {trackDetails ? (
                <div>
                    <h3>{trackDetails.attributes.title}</h3>
                    <p>{trackDetails.attributes.lyrics ?? 'No lyrics'}</p>
                </div>
            ) : (
                <p>Track is not selected</p>
            )}

            <button>Reset selection</button>
        </div>
    );
}
