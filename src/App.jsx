import React from 'react';
import { Nav, Navbar } from 'react-bootstrap'
import { Route, Switch } from 'react-router-dom'
import Home from './Components/Home'
import Category from './Components/Category'
import Products from './Components/Products'
import AboutUs from './Components/AboutUs'
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/">Web2Project</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/Category">Category</Nav.Link>
          <Nav.Link href="/AboutUs">About Us</Nav.Link>
        </Nav>
      </Navbar>
      <header className="App-header">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/Category" component={Category} />
          {/* <Route path="/Category/GamingPc" component={Products} /> */}
          <Route path="/AboutUs" component={AboutUs} />
        </Switch>
      </header>
    </div >
  );
}

export default App;
