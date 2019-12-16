import React, { Component } from 'react'
import { BrowserRouter as Router,HashRouter, Switch, Route ,Redirect} from 'react-router-dom'


import routes from './routes'

// import Grabble from './components/Grabble/Grabble.jsx'
class App extends Component {
  render () {
    return (
      <Router>

        <Switch>
          {
            routes.map((route, index) => (<Route key={index} {...route} />))
          }
        </Switch>
        <Redirect to='/musicHall'></Redirect>
      </Router>
    )
  }
}

export default App