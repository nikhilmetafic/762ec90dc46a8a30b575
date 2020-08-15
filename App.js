import React from 'react';
import {Provider} from 'react-redux';
import {configureStore} from 'src/store';
import {Root} from 'native-base';

import Containers from './src/Container';

console.disableYellowBox = true;
const store = configureStore();


const App: () => React$Node = () => {
    return (
        <Provider store={store}>
            <Root>
                <Containers/>
            </Root>
        </Provider>
    );
};

export default App;
