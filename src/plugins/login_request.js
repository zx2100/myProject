import {request} from './network'

export function Login(username, passwd){
  return request({
    url: '/user/login',
    method: 'post',
    data: {
      username,
      passwd
    }
  })
}
