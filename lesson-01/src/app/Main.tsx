import { Container } from '@mui/material';
import { useEffect } from 'react';
import './Main.css';
import { useAppDispatch } from '@/common/hooks';
import { TracksList } from '@/common/features/tracks/ui/TracksList';
import { fetchTracksTC } from '@/common/features/tracks/model/tracks-slice';
import { TrackDetails } from '@/common/features/tracks/ui/Tracks/TrackDetails';

export function Main() {
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(fetchTracksTC());
    }, []);
    return (
        <Container>
            <div className={'tracksContainer'}>
                <TracksList />
                <TrackDetails />
            </div>
        </Container>
    );
}
