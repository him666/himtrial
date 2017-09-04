import React, { Component } from 'react';

import Header from './header'
import Filter from './filter'
import Home from '../home'

 const App = (titles) => (

  <div>

    <Header />
    <br/><br/>
    <Filter {...titles} />
    <Home {...titles} />
  </div>
)
export default App 