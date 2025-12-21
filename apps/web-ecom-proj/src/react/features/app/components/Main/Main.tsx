import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { Button, ButtonType } from '@vk/react-ui-kit';
import { addToCart, emptyCart, productList, removeFromCart } from '../../actions';
import styles from './Main.scss';

interface IProps {

}

const Main: React.FC<IProps> = ({ }) => {
    const dispatch = useDispatch();

    const product = {
        "id": 1,
        "name": "Tomato Basil Soup",
        "price": 3.49,
        "brand": "alcatel"
    };

    const handleAddToCart = useCallback(() => {
        dispatch(addToCart(product));
    }, []);

    const handleRemoveFromCart = useCallback(() => {
        dispatch(removeFromCart(product.name));
    }, [product]);

    const handleEmptyCart = useCallback(() => {
        dispatch(emptyCart());
    }, []);

    const handleGetProductList = useCallback(() => {
        dispatch(productList());
    }, []);

    return (
        <div className={styles.root}>
            <Button type={ButtonType.PRIMARY} onClick={handleAddToCart} value='Add to cart' />
            <Button type={ButtonType.SECONDARY} onClick={handleRemoveFromCart} value='Remove from cart' />
            <Button type={ButtonType.SECONDARY} onClick={handleEmptyCart} value='Empty cart'/>
            <Button type={ButtonType.SECONDARY} onClick={handleGetProductList} value='Call product list'/>
        </div >
    )
}

export { Main };
