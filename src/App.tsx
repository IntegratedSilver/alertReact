import React from 'react';
import Alert from './components/Alert';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Click Button For Alert</h1>
        <Alert message="Alert! Alert! Alert!" />
      </header>
    </div>
  );
}

export default App;