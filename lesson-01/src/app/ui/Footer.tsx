import { Box, Container, Link, Stack, Typography } from '@mui/material';

export function Footer() {
    return (
        <Box
            component='footer'
            sx={{ mt: 4, py: 2, borderTop: 1, borderColor: 'divider', bgcolor: 'grey.900', color: 'common.white' }}
        >
            <Container>
                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent='space-between'>
                    <Typography>MusicFun</Typography>
                    <Stack
                        component='nav'
                        aria-label='Footer navigation'
                        direction='row'
                        spacing={2}
                        sx={{ '& a': { color: 'inherit' }, '& a:hover': { color: 'primary.main' } }}
                    >
                        <Link href='#' underline='none'>About</Link>
                        <Link href='#' underline='none'>Contact</Link>
                    </Stack>
                </Stack>
            </Container>
        </Box>
    );
}
