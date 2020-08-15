import React from 'react';

import {Root} from 'native-base';

import Containers from './src/Container';

console.disableYellowBox = true;



const App: () => React$Node = () => {
    return (

            <Root>
                <Containers/>
            </Root>

    );
};

export default App;
