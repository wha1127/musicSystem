import ajax from './ajax'

export const reqSongList = () => ajax.get('/musicList')
export const reqSingerList = () => ajax.get('/singerList')