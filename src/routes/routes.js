import PostCards from '../components/fronted/PostCard'
import Front from '../components/fronted/Front'
import Post from '../components/fronted/Post'

export default [
  {
    path: '/',
    component: Front, // 这是文章页
    children: [
      {path: '', component: PostCards},
      {path: '/post-list', component: PostCards},
      {path: '/post/:postId', component: Post, name: 'post'}
    ]
  }
  // {path:'/404',component:NotFound}
]
