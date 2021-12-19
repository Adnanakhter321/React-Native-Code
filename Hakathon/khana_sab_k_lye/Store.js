import {createStore} from 'redux';

import {Data} from './src/reducers/index'

const Store = createStore(Data , window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
export default Store;
