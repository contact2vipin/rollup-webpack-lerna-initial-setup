import React from 'react';
import { Header } from '../Header';
import { Main } from '../Main';
import styles from './EComProjApp.scss';

const EComProjApp: React.FC = () => (
    <div className={styles.root}>
        <Header />
        <Main />
    </div>
)

export { EComProjApp };