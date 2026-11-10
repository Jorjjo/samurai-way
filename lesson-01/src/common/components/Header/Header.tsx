import { AppBar, Container, Toolbar } from '@mui/material';

export function Header() {
    return (
        <AppBar position='sticky' sx={{ mb: '30px' }} color='inherit'>
            <Toolbar>
                <Container>
                    <h2>MusicFun</h2>
                </Container>
            </Toolbar>
        </AppBar>
    );
}
