// 引入React
import React from 'react'
import './DrawerBody.css'
import PropTypes from "prop-types"
export default class DrawersBody extends React.Component {
  static propTypes = {
    saveValue: PropTypes.func
  }
  acquire = (item) => {
    this.props.saveValue(item)
  }
  render () {
    const hot = ["邓紫棋", "全孝盛", "张靓颖", "周杰伦", "薛之谦"]
    const search = [
      {
        url: "./image/icon-record-recent.png",
        img: "./image/icon-record-close.png",
        text: "周杰伦"
      },
      {
        url: "./image/icon-record-recent.png",
        img: "./image/icon-record-close.png",
        text: "邓紫棋"
      },
      {
        url: "./image/icon-record-recent.png",
        img: "./image/icon-record-close.png",
        text: "张杰"
      }
    ]
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
                  <li key={index} onClick={() => (this.acquire(item.text))}>
                    <img src={item.url} alt="" />
                    <p>{item.text}</p>
                    <img src={item.img} alt="" />
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