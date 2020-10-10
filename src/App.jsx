import React from 'react';
import './App.css';
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import importedStore from './redux/store'
import PcList from './Components/pcList';
import PcContainer from './Components/pcContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Provider store={importedStore}>
            <PcContainer>
              <PcList />
            </PcContainer>
          </Provider>
        </Router>
      </header>
    </div>
  );
}

export default App;
