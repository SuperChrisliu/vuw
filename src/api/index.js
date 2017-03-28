/**
 * Created by Chris on 2017/3/21.
 * Site: www.chrisliu.top
 */

import axios from 'axios';
// axios.defaults.headers.common['Authorization'] = 'dailu';
axios.defaults.headers.post['Content-Type'] = 'application/json'

const instance = axios.create({
  baseURL: 'http://localhost/wordpress/wp-json/wp/v2'
});
instance.defaults.headers.post['Content-Type'] = 'application/json'
if(localStorage.getItem('jwt')){
  /* localStorage.getItem('jwt')是带引号的字符串
    Bearer token(通过Authorization头部字段发送到服务端便于验证)的格式：Bearer XXXXXXXXXX
  */
  instance.defaults.headers.common['Authorization'] = "Bearer "+localStorage.getItem('jwt').replace(/(^\")|(\"$)/g,'')
}
// axios拦截请求
axios.interceptors.request.use = instance.interceptors.request.use
export default {
}
