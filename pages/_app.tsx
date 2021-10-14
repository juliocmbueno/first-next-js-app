import { AppProps } from 'next/app';

import '../styles/globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

import React from 'react';
import Layout from '@my-app/components/layout';

import PrimeReact from 'primereact/api';
PrimeReact.appendTo = 'self'; // Default value is null(document.body).

function App({ Component, pageProps }: AppProps) {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    );
}

export default App;