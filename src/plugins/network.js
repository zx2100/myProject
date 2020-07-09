import axios from 'axios';

export function request(config){
  const instance = axios.create({
    baseURL: "http://127.0.0.1:8000",
    // timeout: ,
  })
  instance.defaults.timeout = 4000;
  instance.interceptors.request.use(config =>{
    // 尝试获取token
    let token = window.sessionStorage.getItem("token")
    if (token){
      config.headers.Authorization = "Bearer " + token
    }
    
    
    return config
  })
  instance.interceptors.response.use(res => {
    return res.data
  })
  return instance(config)
}