import React from 'react';
import {Switch,Route} from 'react-router-dom';
import './App.css';

import Homepage from './pages/homepage/homepage.component';
import Shoppage from './pages/shoppage/shop.comonent'

const HatsPage = () => (
  <div>
  <h1>Hats Page</h1>
  </div>
)


function App() {
  return (
    <div>
    <Switch>
       <Route exact path='/' component={Homepage}/>
       <Route exact path='/shop' component={Shoppage}/>

    </Switch>
   

    </div>
  );
}

export default App;
