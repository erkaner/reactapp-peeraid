import React from 'react';
import { BrowserRouter} from 'react-router-dom';
import { Provider } from 'react-redux';
import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { store, persistor } from './configureStore';
import reportWebVitals from './reportWebVitals';
import App from './App';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
    <StrictMode>
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <BrowserRouter >
                    <App/>
                </BrowserRouter >
            </PersistGate>
        </Provider>
    </StrictMode>
);

reportWebVitals();