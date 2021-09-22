import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter,Switch,Link,Route } from 'react-router-dom';
import India from './Components/India'
import World from './Components/World'
import Header from './Components/Header'

export default class App extends Component {
  render() {
    return (
      
      <div className="container">
        <BrowserRouter>
          <Header/>
          <Switch>
            <Route exact path="/">
                <India/>
            </Route>
            <Route exact path="/india">
                <India/>
            </Route>
            <Route exact path="/world">
                <World/>
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}
