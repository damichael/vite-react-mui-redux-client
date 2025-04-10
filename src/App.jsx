import * as React from 'react';
import { useSelector } from 'react-redux';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export default function App() {
    // start: redux state --------------------------
    const globalState = useSelector((state) => {
        return state.global;
    });

    const { message } = globalState;
    // end: redux state -----------------------------

    return (
        <Container maxWidth="sm">
            <Box sx={{ my: 4 }}>
                <Typography variant="h5" component="h1" gutterBottom>
                    Vite React MUI Redux Starter Project
                </Typography>
            </Box>
            <Box sx={{ my: 4 }}>
                <Typography variant="h6" component="h6" gutterBottom>
                    {message}
                </Typography>
            </Box>
        </Container>
    );
}

