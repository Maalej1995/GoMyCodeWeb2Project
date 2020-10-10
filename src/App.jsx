import React from 'react';
import { Link, Route, Switch } from 'react-router-dom'
import Home from './Components/Home.jsx'
// import Category from './Components/Category.jsx'
// import Login from './Components/Login.jsx'
// import Products from './Components/Products.jsx'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav className="navbar navbar-light">
          <ul className="nav navbar-nav">
            <li><Link to="/">Home</Link></li>
            {/* <li><Link to="/category">Category</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/login">Login</Link></li> */}
          </ul>
        </nav>
        <Switch>
          <Route exact path="/" component={Home} />
          {/* <Route path="/category" component={Category} />
          <Route path="/login" component={Login} />
          <Route path="/products" component={Products} /> */}
        </Switch>
      </header>
    </div >
  );
}

export default App;
