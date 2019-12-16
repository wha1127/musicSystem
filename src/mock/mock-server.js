// 引入Mock
import Mock from 'mockjs'
// 引入data数据
import data from './datas/datas.json'

// 拦截地址,产生数据

//接口地址:  '/goods'   '/ratings'   '/info'

Mock.mock('/musicList', { code: 0, data: data.songList })
Mock.mock('/singerList', { code: 0, data: data.singerList })