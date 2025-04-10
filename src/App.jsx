import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import { engageRequest } from 'src/store/actions/global.actions';

export default function App() {
    const dispatch = useDispatch();

    // start: redux state --------------------------
    const globalState = useSelector((state) => {
        return state.global;
    });

    const { messages } = globalState;
    // end: redux state -----------------------------

    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = (event) => {
        if (event?.preventDefault) {
            event.preventDefault();
        }

        dispatch(engageRequest());

    };

    return (
        <Container maxWidth="sm">
            <Box sx={{ my: 4 }}>
                <Typography variant="h5" component="h1" gutterBottom>
                    Vite React MUI Redux Starter Project
                </Typography>
            </Box>
            <Box sx={{ my: 4 }}>

                <Button
                    type="button"
                    variant="contained"
                    fullWidth
                    color="primary"
                    className="w-full mx-auto"
                    aria-label="Warp factor 6. Engage!"
                    startIcon={
                        isSubmitting ? <CircularProgress size="1rem" /> : null
                    }
                    value="legacy"
                    onClick={handleSubmit}
                    sx={{
                        marginTop: 8,
                    }}
                >
                    Engage!
                </Button>
            </Box>
            <Box sx={{ my: 4 }}>

                {messages.map((msg, index) => (
                    <Typography key={index} variant="h6" component="h6" gutterBottom>
                        {msg}
                    </Typography>
                ))}

            </Box>
        </Container>
    );
}

