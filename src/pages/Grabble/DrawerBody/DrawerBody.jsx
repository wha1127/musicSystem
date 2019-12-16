// 引入React
import React from 'react'
import './DrawerBody.css'
import PropTypes from "prop-types"
import PubSub from 'pubsub-js'
export default class DrawersBody extends React.Component {
  state = {
    search: ["周杰伦", "邓紫棋", "张杰"]
  }
  static propTypes = {
    saveValue: PropTypes.func
  }
  acquire = (item) => {
    this.props.saveValue(item)
  }
  deleteSearch = (index) => {
    const search = this.state.search
    search.splice(index, 1)
    this.setState({
      search
    })
  }
  componentDidMount () {
    // 订阅消息
    PubSub.subscribe('addSearch', (msg, data) => {
      const search = this.state.search
      console.log(111)
      search.push(data)
      this.setState({
        search
      })
    })
  }
  render () {
    const hot = ["邓紫棋", "全孝盛", "张靓颖", "周杰伦", "薛之谦"]
    const search = this.state.search
    return (
      <div>
        <div className="DrawersBodyTop">
          <h4>热门搜索</h4>
          <ul>
            {
              hot.map((item, index) => {
                return (
                  <li key={index} onClick={() => (this.acquire(item))}>{item}</li>
                )
              })
            }
          </ul>
        </div>
        <div className="DrawersBodyBottom">
          <h4>搜索历史</h4>
          <ul>
            {
              search.map((item, index) => {
                return (
                  <li key={index}>
                    <img src='./image/icon-record-recent.png' alt="" />
                    <p onClick={() => (this.acquire(item))}>{item}</p>
                    <img src="./image/icon-record-close.png" alt="" onClick={() => (this.deleteSearch(index))} />
                  </li>
                )
              })
            }
          </ul>
        </div>
      </div>
    )
  }
}