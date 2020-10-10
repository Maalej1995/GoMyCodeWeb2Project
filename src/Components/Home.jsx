import React from 'react';
import { Provider } from 'react-redux'
import importedStore from '../redux/store'
import PcList from './pcList';
import PcContainer from './pcContainer';

export default function Home() {
    return (
        <Provider store={importedStore}>
            <PcContainer>
                <PcList />
            </PcContainer>
        </Provider>
    )
}
