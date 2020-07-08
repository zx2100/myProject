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
