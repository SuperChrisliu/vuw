/**
 * Created by Chris on 2017/3/23.
 * Site: www.chrisliu.top
 */
import axios from 'axios'

let instance = axios.create({
  baseURL: 'http://localhost/wordpress/wp-json/wp/v2'
})
export default instance
