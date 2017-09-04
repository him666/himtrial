import React, { Component } from 'react';
import Home from '../home'
import Header from './header'
import Filter from './filter'


 const App = (titles) => (

  <div>

    <Header />
    <br/><br/>
    <Filter {...titles} />
     <Home {...titles}/>
  </div>
)
export default App 