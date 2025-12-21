import React, { useCallback } from 'react'
import { useDispatch } from 'react-redux';
import { Button, ButtonType } from '@vk/react-ui-kit';
import { addToCart1 } from '../../actions';

export const AddToCart:React.FC = () => {
    const dispatch = useDispatch();
    const product = {
            "id": 100,
            "name": "Test Tomato Basil Soup",
            "price": 3.49,
            "brand": "alcatel"
        };
    const handleClick = useCallback(() => {
        dispatch(addToCart1(product));
    }, []);
  return (<>
    <div>AddToCart</div>
    <Button type={ButtonType.PRIMARY} onClick={handleClick} />
  </>
  )
}
