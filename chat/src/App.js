import React from 'react';
import { Switch, Route } from 'react-router';

import Feed from './Routes/Feed/Feed';

const App = () => {
  return (
    <Switch>
      <Route path='/' component={Feed} />
    </Switch>
  );
}

export default App;
