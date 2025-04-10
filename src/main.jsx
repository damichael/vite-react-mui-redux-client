import * as React from 'react';
import { createRoot } from 'react-dom/client';

import { Provider } from 'react-redux'

import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';

import App from './App';
import store from './store';
import theme from './theme';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
]);

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <RouterProvider router={router} />
            </ThemeProvider>
        </Provider>
        ,
    </React.StrictMode>,
);
