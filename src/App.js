import React from 'react';
import ReactGA from 'react-ga';

import './assets/App.scss';

ReactGA.initialize('ID');
ReactGA.pageview(window.location.pathname + window.location.search);

function App() {
  return (
    <div className="App">
      Sixstripes
    </div>
  );
}

export default App;
