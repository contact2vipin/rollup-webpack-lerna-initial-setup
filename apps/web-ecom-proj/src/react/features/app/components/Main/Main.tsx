import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { Button, ButtonType } from '@vk/react-ui-kit';
import { addToCart, emptyCart, removeFromCart } from '../../actions';
import styles from './Main.scss';
import { ProductView } from '../../../products/components/ProductView/ProductView';

interface IProps {

}

const Main: React.FC<IProps> = ({ }) => {
    const dispatch = useDispatch();
    
    const handleAddToCart = useCallback((product: any) => {
        dispatch(addToCart(product));
    }, []);

    const handleRemoveFromCart = useCallback((id:number) => {
        dispatch(removeFromCart(id));
    }, []);

    const handleEmptyCart = useCallback(() => {
        dispatch(emptyCart());
    }, []);

    return (
        <div className={styles.root}>
            <div className={styles.handler}>
                <Button type={ButtonType.SECONDARY} onClick={handleEmptyCart} value='Empty cart' />
            </div>
            <ProductView onAddToCart={handleAddToCart} />
        </div >
    )
}

export { Main };
