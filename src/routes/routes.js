import vuwpPostCard from '../components/vuwpPostCard'
import wpLayout from '../theme/wpLayout'
import vuwpPost from '../components/vuwpPost'

export default [
  {
    path: '/',
    component: wpLayout, // 这是文章页
    children: [
      {path: '', component: vuwpPostCard},
      {path: '/post-list', component: vuwpPostCard},
      {path: '/post/:postId', component: vuwpPost, name: 'post'}
    ]
  }
  // {path:'/404',component:NotFound}
]
