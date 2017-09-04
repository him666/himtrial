import React from 'react';
import { Route } from 'react-router-dom'

import AppContainer from './containers/app'
import AboutContainer from './containers/about'
 const Routes = () => (
  <div>
    <main>
      <Route exact path="/" component={AppContainer} />
      <Route exact path="/details" component={AboutContainer} />
    </main>
  </div>
)
export default Routes
