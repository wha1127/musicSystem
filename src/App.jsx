import React, { Component } from 'react'
import Header from '../src/components/Header/Header'
import MySong from './pages/MySong/MySong'
export default class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <MySong/>
      </div>
    )
  }
}
