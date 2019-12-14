import React, { Component } from 'react'
//import { Button, WhiteSpace, WingBlank } from 'antd-mobile'
import './App.css'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
//引入路由组件
import routes from './routers/routes.js'
class App extends Component {
  render() {
    //console.log(this.state.activeTab)

    return (
      <Router>
        <Switch>
          {routes.map((route, index) => (
            <Route key={index} {...route}></Route>
          ))}
        </Switch>
      </Router>
    )
  }
}

export default App
