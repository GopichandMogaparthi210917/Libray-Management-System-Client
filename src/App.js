import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavigationBar from './components/Navbar';
import LoginForm from './components/Loginform';
import RegisterForm from './components/RegisterForm';
import Profile from './components/Profile';

function App() {
  return (
    <Router>
      <div className="App">
        <NavigationBar />
        <Switch>
          <Route path="/login" component={LoginForm} />
          <Route path="/register" component={RegisterForm} />
          <Route path="/profile" component={Profile} />
          <Route path="/" exact component={() => <div>Home Page</div>} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
