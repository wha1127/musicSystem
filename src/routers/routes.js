import Drawer from "../pages/Drawer/Drawer.jsx"
import Discovery from "../pages/Discovery/index.jsx"
import Searchdetails from "../pages/Grabble/Searchdetails/Searchdetails.jsx"
import MusicHall from "../pages/MusicHall/MusicHall.jsx"
import MyPage from '../pages/MyPage/MyPage.jsx'
//引入 组件
import ManageSong from '../components/ManageSong/ManageSong.jsx'
import DrawerBody from "../pages/Grabble/DrawerBody/DrawerBody.jsx"
import NewSong from '../components/NewSong/NewSong'
export default [
  {
    path: '/drawer',
    component: Drawer
  },
  {
    path: '/discovery',
    component: Discovery
  },
  {
    path: '/musicHall',
    component: MusicHall
  },
  {
    path: '/searchdetails',
    component: Searchdetails
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
  },
  {
    path: '/drawerbody',
    component: DrawerBody
  },
  {
    path:'/newsong',
    component:NewSong
  }
]