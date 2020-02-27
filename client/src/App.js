import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

/** PAGES **/
import SequenceMaker from './pages/SequenceMaker';
import AllSequences from './pages/AllSequences';

function App() {
  return (
    <div id="app">
      <Router>
        <Switch>
          <Route path="/" exact component={SequenceMaker}/>
          <Route path="/all-sequences" exact component={AllSequences}/>
        </Switch>
      </Router>
    </div>
  )
}

export default App
