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

export function postArticles(data){
  // {
  //   "action": "post",
  //   "data": {
  //       "category": "基本分类",
  //       "title": "测试的",
  //       "brief": "文章简介文章简介",
  //       "content": "文章内容文章内容文章内容",
  //   }
  // }
  return request({
    url: 'api/v1/article/post',
    method: 'post',
    data
  })
}