/**
 * Created by Chris on 2017/3/21.
 * Site: www.chrisliu.top
 */
import instance from './instance'

export default {
  getSinglePost (id, params) {
    return instance.get('/posts/' + id, { params })
  },
  getPostCards (params) {
    return instance.get('/posts', { params })
  }
}
