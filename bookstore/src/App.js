import React, { 
  Component
} from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter} from 'react-router-dom'
import Test from './components/test'
import MainRouter from './components/router-header'
import Button from 'antd/lib/button'
import Index from './components/INDEX'



class App extends Component {
  render() {
    return (
      <div className="App">

        <BrowserRouter>
          {/* <MainRouter /> */}
          <Index />
        </BrowserRouter>
        <Button type="primary">Button</Button>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">this is a title</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      
      <Test/>
      </div>
    );
  }
  
}



export default App;
