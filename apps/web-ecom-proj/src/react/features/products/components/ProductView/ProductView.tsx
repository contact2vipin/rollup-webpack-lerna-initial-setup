import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { Button, ButtonType } from '@vk/react-ui-kit';
import { productList } from '../../actions';
import styles from './ProductView.scss';
import { useSelector } from 'react-redux';

interface IProps {
  onAddToCart: (product: any) => void;
}

export const ProductView: React.FC<IProps> = ({ onAddToCart }) => {
  const dispatch = useDispatch();

  const products = useSelector((state: any) => state.features.productApp.products);

  useEffect(() => {
    dispatch(productList());
  }, []);

  return (<>
    <div className={styles.root}>
      <div className={styles.productList}>
        {
          products.map((product: any) => {
            return (
              <div key={product.id} className={styles.productItem}>
                <div className={styles.productDetails}>
                  <div>Name: {product.name}</div>
                  <div>Brand: {product.brand}</div>
                  <div>Price: Rs. {product.price}</div>
                </div>
                <div className={styles.actions}>
                  <Button type={ButtonType.PRIMARY} onClick={() => onAddToCart(product)} value='Add to cart' />
                </div>
              </div>
            );
          })
        }
      </div>
    </div>
  </>
  )
}
