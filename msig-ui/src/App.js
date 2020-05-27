import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <div class="login-box">
          <img class="avatar" src="D:\dev\MSIG\msig-ui\src\media" alt="logo de login"/>
          <h1>Login Here</h1>
          <form>

            <label for="username">username</label>
            <input type="text" placeholder="Enter username"/><br/>

            <label for="password">password</label>
            <input type="password" placeholder="Enter password"/><br/>

            <input type="submit" value="Continue"/><br/>

            <a href="#">lost you password?</a><br/>
            <a href="#">don´t have a account?</a>

          </form>
        </div>
        
      </header>
    </div>
  );
}

export default App;
