import NewSong from '../components/NewSong/NewSong.jsx'
import MyPage from '../pages/MyPage/MyPage.jsx'
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
  }
]