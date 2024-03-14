import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './app/store';
import { AdaptivityProvider, ConfigProvider } from '@vkontakte/vkui';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <ConfigProvider>
        <AdaptivityProvider>
            <Provider store={store}>
                <App />
            </Provider>
        </AdaptivityProvider>
    </ConfigProvider>
);
