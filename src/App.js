import React, {useState} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import { Homepage } from './components/Homepage';
import { Catalogue } from './components/Catalogue';
import { ProductPage } from './components/ProductPage';
import { Modal } from './components/Modal'
import './App.css';

import { ApiService } from './service/ApiService';
import { CartService } from './service/CartService';
import {ApiServiceContext} from './context/context';

const apiService = new ApiService();

const App = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL+'/'}>
      <Modal visible={showModal} hide={() => setShowModal(false)}></Modal>
      <CartService showModal={() => setShowModal(true)}>
        <ApiServiceContext.Provider value={apiService}>
          <Switch>
            <Route path='/catalogue' component={Catalogue}/>
            <Route path='/product' render={props => <ProductPage {...props}/>} />
            <Route path='/' exact component={Homepage}/>
          </Switch>
        </ApiServiceContext.Provider>
      </CartService>
    </BrowserRouter>
  );
}

export default App;
