import React, { useCallback, useRef } from 'react';
import { Button, ButtonType, TickMark } from '@vk/react-ui-kit';
import { CheckIcon, CloseIcon } from '@vk/icons';
import styles from './App.scss';

const App: React.FC = () => {

    const iconRef = useRef<SVGSVGElement>(null);
    
    const handleClick = useCallback(() => {
        console.log("Clicked!!!");

    }, []);

    return (
        <div className={styles.root}>
            <h1>Welcome {new Date().toString()} 2025</h1>
            <Button type={ButtonType.PRIMARY} onClick={handleClick} />
            <Button type={ButtonType.SECONDARY} onClick={handleClick} />
            <TickMark />
            {/* Basic Usage */}
            <CheckIcon className={styles.checkIcon} left={-3} top={-3} />

            {/* Usage with custom props (color, className, etc.) */}
            <CloseIcon
                color="red"
                className="my-custom-class"
                onClick={() => console.log('Closed!')}
            />

            {/* Usage with a ref */}
            <CheckIcon className={styles.test} ref={iconRef} />
        </div>
    )
}

export { App };