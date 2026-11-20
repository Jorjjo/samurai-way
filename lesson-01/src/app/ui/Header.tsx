import { selectStatus } from '@/app/app-slice';
import { useAppSelector } from '@/common/hooks';
import { AppBar, Container, LinearProgress, Toolbar } from '@mui/material';

export function Header() {
    const status = useAppSelector(selectStatus);
    return (
        <AppBar position='sticky' sx={{ mb: '30px' }} color='inherit'>
            <Toolbar>
                <Container>
                    <h2>MusicFun</h2>
                </Container>
            </Toolbar>
            {status === 'loading' && <LinearProgress />}
        </AppBar>
    );
}
