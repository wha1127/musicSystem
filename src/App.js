// 引入React
import React from 'react'
import './App.css'
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom"
import routes from "./routers/routes"
import Drawer from "./pages/Drawer/Drawer.jsx"
import Bandstand from './components/Bandstand/Bandstand'
import PlayDetail from './components/PlayDetail/PlayDetail'
export default class App extends React.Component {

  render () {
    return (
      <Router>
        <Drawer />
        <Redirect to="/musicHall"></Redirect>
        <Bandstand/>
        <PlayDetail/>
      </Router>
    )
  }
}