<template lang="html">
    <article class="content">
      <div v-if="currentPost">
        <h1 class="post-title">{{currentPost.title.rendered}}</h1>
        <div class="post-info">{{currentPost.date}}</div>
        <div v-html="currentPost.content.rendered"></div>
      </div>

      <div class="guide-links">
        <span>← <a href="<%- url_for(page.path) %>">page.title</a></span>
        <span style="float:right"><a href="<%- url_for(page.path) %>">age.title </a> →</span>
      </div>
      <div class="footer">
        发现错误？想参与编辑？
        <a href="https://github.com/vuejs/cn.vuejs.org/blob/master/src/<%- page.path.replace(/\.html$/, '.md') %>" target="_blank">
          在 Github 上编辑此页！
        </a>
      </div>
    </article>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  name: 'wp-post',
  computed: {
    ...mapState({
      currentPost: state => state.post.currentPost
    })
  },
  props: {
  },
  methods: {
    ...mapActions([
      'getSinglePost'
    ])
  },
  data () {
    return {
      oneArticle: {},
      loading: true
    }
  },
  mounted () {
    this.getSinglePost(this.$route.params.postId)
  }
}
</script>

<style lang="css" type="text/css" scoped>
  @import "../assets/css/post.css";
  @import "../assets/css/syntax.css";
  @import "../assets/css/markdown.css";

</style>
