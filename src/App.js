import React from 'react';
import './App.css';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
// import Navbar from "./components/navbar";
import Home from './pages/Home'
import Rooms from './pages/Rooms'
import SingleRoom from './pages/SingleRoom'
import NotFound from './pages/404'


function App() {
  return (
    <React.Fragment>
      <Router>
      {/* <Navbar /> */}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/rooms" component={Rooms} />
          <Route exact path="/room/:slug" component={SingleRoom} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
