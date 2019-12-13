import React, { Component } from 'react'

import MusicHall from './pages/MusicHall/MusicHall.jsx'
import Drawer from './components/Drawer/Drawer.jsx'

// import Grabble from './components/Grabble/Grabble.jsx'
class App extends Component {
  render () {
    return (
      <div>
        <Drawer />
        <MusicHall />
      </div>
    )
  }
}

export default App