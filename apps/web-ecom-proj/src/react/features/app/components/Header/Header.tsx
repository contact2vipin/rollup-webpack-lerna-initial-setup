import React from 'react';
import { useSelector } from 'react-redux';
import { Cart } from '@vk/icons';
import styles from './Header.scss';

interface IProps {

}

const Header: React.FC<IProps> = ({ }) => {
    const productsInCart = useSelector((state: any) => state.features.app.productsInCart);
    console.log(productsInCart);
    
    return (
        <div className={styles.root}>
            <div className={styles.cart}>
                <span>{productsInCart?.length ?? 0}</span>
                <Cart/>
            </div>
        </div>
    )
}

export { Header };
