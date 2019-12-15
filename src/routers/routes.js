import NewSong from '../components/NewSong/NewSong.jsx'
import MyPage from '../pages/MyPage/MyPage.jsx'
//引入 组件
import ManageSong from '../components/ManageSong/ManageSong.jsx'
export default [
  {
    exact: true,
    path: '/newsong',
    component: NewSong
  },
  {
    exact: true,
    path: '/mypage',
    component: MyPage
  },
  {
    exact: true,
    path: '/manageSong',
    component: ManageSong
  }
]