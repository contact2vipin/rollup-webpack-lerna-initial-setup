import React, { useCallback } from 'react';
import { Button, ButtonType, TickMark } from '@vk/react-ui-kit';
import styles from './App.scss';

const App: React.FC = () => {
    const handleClick = useCallback(() => {
        console.log("Clicked!!!");

    }, []);
    return (
        <div className={styles.root}>
            <h1>Welcome {new Date().toString()} 2025</h1>
            <Button type={ButtonType.PRIMARY} onClick={handleClick} />
            <Button type={ButtonType.SECONDARY} onClick={handleClick} />
            <TickMark />
        </div>
    )
}

export { App };