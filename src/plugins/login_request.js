import {request} from './network'

export function Login(username, password){
  return request({
    url: '/api/v1/user/auth',
    method: 'post',
    data: {
      username,
      password
    }
  })
}

export function getProfile(userid){
  return request({
    url: '/api/v1/user/profile/' + userid,
    method: 'get',
  })
}

export function getArticle(){
  return request({
    url: '/api/v1/article/all',
    method: 'get',
  })
}

