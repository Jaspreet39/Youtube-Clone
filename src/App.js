import React from 'react';
import './App.css';
import Header from './Header';
import Recommended from './Recommended';
import Sidebar from './Sidebar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import SearchPage from './SearchPage';


function App() {
  return (
    <div className="app">
    <Router>
      <Switch>
        <Route path="/search/:searchTerm">
           <Header/>
           <div className="app_page">
           <Sidebar/>
           <SearchPage/>
         </div>
        </Route>
        <Route exact path="/">
        <Header/>
          <div className="app_page">
           <Sidebar/>
           <Recommended/> 
         </div>
        </Route>
      </Switch>
    </Router>
     
    </div>
  );
}

export default App;
