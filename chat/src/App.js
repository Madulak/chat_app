import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router';

import Feed from './Routes/Feed/Feed';
import Photos from './Routes/Photos/Photos';
import Videos from './Routes/Videos/Videos';

import * as authActions from './store/actions/auth';
import { useDispatch } from 'react-redux';

const App = () => {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(authActions.authCheckState());
  },[dispatch])

  return (
    <Switch>
      <Route exact path='/photos' component={Photos} />
      <Route exact path='/videos' component={Videos} />
      <Route path='/' component={Feed} />
    </Switch>
  );
}

export default App;
