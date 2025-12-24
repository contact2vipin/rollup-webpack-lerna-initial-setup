import {put} from 'redux-saga/effects';
import { setProductList } from '../../actions';

export function* getProducts(): Generator {
    console.log('getProducts get called!!');

    try {
        let data: any = yield fetch('http://localhost:3000/products') as any
        data = yield data.json();

        console.log('fetched data: ', data);

        yield put(setProductList(data));

    } catch(err) {
        console.warn(err);
    }    
}