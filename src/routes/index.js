import MusicHall from '../pages/MusicHall/MusicHall.jsx'
import Singers from '../pages/Singers/Singers.jsx'

export default [
  {
    exact:true,
    path: "/musicHall",
    component: MusicHall
  },
  {
    exact:true,
    path: "/singers",
    component: Singers
  }
]