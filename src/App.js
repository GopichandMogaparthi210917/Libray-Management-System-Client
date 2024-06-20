import logo from './logo.svg';
import './App.css';
import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from './components/Navbar';
import LoginForm from './components/Loginform';
import RegisterForm from './components/Registerform';

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <div className="forms-container">
        <LoginForm />
        <RegisterForm />
      </div>
    </div>
  );
}


export default App;
