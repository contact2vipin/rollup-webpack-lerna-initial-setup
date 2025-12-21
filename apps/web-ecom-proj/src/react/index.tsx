import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import EComProjApp from './features/app/components/EComProjApp';
import store from './store';

const container = document.getElementById('app')!;
console.log(store);

const root = ReactDOM.createRoot(container);
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <EComProjApp />
        </Provider>
    </React.StrictMode>
);