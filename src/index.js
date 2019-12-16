//引入react
import React from 'react'
//引入reactDom
import ReactDOM from 'react-dom'

//引入App.jsx
import App from './App.jsx'
//引入重置的样式文件
import './static/css/reset.css'

//
import './mock/mock-server.js'

//渲染组件
ReactDOM.render(<App />, document.getElementById('root'))