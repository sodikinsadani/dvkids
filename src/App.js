import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import {Beranda, Produk, Penjualan, Tools} from './views'
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <ul>
            <li><Link to="/">Beranda</Link></li>
            <li><Link to="/produk">Produk</Link></li>
            <li><Link to="/penjualan">Penjualan</Link></li>
            <li><Link to="/tools">Tools</Link></li>
          </ul>
        </header>

        <Switch>
          <Route exact path="/">
            <Beranda/>
          </Route>
          <Route path="/produk">
            <Produk/>
          </Route>
          <Route path="/penjualan">
            <Penjualan/>
          </Route>
          <Route path="/tools">
            <Tools/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
