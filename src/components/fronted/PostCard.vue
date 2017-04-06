<template lang="html">
  <div class="postCard">
    <div class="post-list-item" v-for="postCard in currentPostCards">
      <article class="post-block">
        <div class="">
          <a class="avatar" href="https://medium.com/@youyuxi">
            <img src="../../assets/av.jpeg" class="" alt="">
          </a>
          <div class="post-meta">
            <a class="auth" href="">Evan You</a>
            <br>
            <div class="postMetaInlineSupplemental">
              <time datetime="2016-11-03T14:27:47.933Z">{{postCard.date}}</time>
              <span class="middotDivider"></span>
              <span class="" title="2 min read">100 read</span>
            </div>
          </div>
        </div>

        <header>
          <h2 class="post-title">
            <router-link :to="{ name: 'post', params: { postId: postCard.id }}" class="post-title-link">
              {{postCard.title.rendered}}
            </router-link>
          </h2>
        </header>
        <section v-html="postCard.content.rendered" class="post-content"></section>
        <footer>
          <router-link :to="{ name: 'post', params: { postId: postCard.id }}" class="read-more">Read more...</router-link>
          <div class="padding-top">
            <div class="like">
              <svg class="like-svg" width="25" height="25" viewBox="0 0 25 25"><path d="M12.5 21a.492.492 0 0 1-.327-.122c-.278-.24-.61-.517-.978-.826-2.99-2.5-7.995-6.684-7.995-10.565C3.2 6.462 5.578 4 8.5 4c1.55 0 3 .695 4 1.89a5.21 5.21 0 0 1 4-1.89c2.923 0 5.3 2.462 5.3 5.487 0 3.97-4.923 8.035-7.865 10.464-.42.35-.798.66-1.108.93a.503.503 0 0 1-.327.12zM8.428 4.866c-2.414 0-4.378 2.05-4.378 4.568 0 3.475 5.057 7.704 7.774 9.975.243.2.47.39.676.56.245-.21.52-.43.813-.68 2.856-2.36 7.637-6.31 7.637-9.87 0-2.52-1.964-4.57-4.377-4.57-1.466 0-2.828.76-3.644 2.04-.1.14-.26.23-.43.23-.18 0-.34-.09-.43-.24-.82-1.27-2.18-2.03-3.65-2.03z" fill-rule="evenodd"></path></svg>
              <span>128</span>
            </div>

            <div class="buttonSet">
              <span>18 response</span>
              <svg class="response-svg" width="25" height="25" viewBox="0 0 25 25"><path d="M19 6c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v14.66h.012c.01.103.045.204.12.285a.5.5 0 0 0 .706.03L12.5 16.85l5.662 4.126a.508.508 0 0 0 .708-.03.5.5 0 0 0 .118-.285H19V6zm-6.838 9.97L7 19.636V6c0-.55.45-1 1-1h9c.55 0 1 .45 1 1v13.637l-5.162-3.668a.49.49 0 0 0-.676 0z" fill-rule="evenodd"></path></svg>
            </div>
          </div>
        </footer>
      </article>
    </div>
  </div>
</template>

<script>
  import { mapActions, mapState } from 'vuex'

  export default {
    name: 'wp-post-card',
    computed: {
      // 使用对象展开运算符将此对象混入到外部对象中
      ...mapState({
        currentPostCards: state => state.post.currentPostCards
      })
    },
    props: {
    },
    data () {
      return {
        offset: 0,
        limit: 10
      }
    },
    methods: {
      ...mapActions([
        'getPostCards' // 映射 this.getPostCards() 为 this.$store.dispatch('getPostCards')
      ])
    },
    created () {
      this.getPostCards({offset: this.offset, per_page: this.limit})
    }
  }
</script>

<style lang="scss" type="text/scss">
  .postCard {
    position: relative;
    padding: 2.2em 0;
    max-width: 800px;
    margin: 0 auto;
  }
  .post-list-item {
    border-bottom: 1px solid rgba(0,0,0,.0785);
    padding-top: 20px;
    padding-bottom: 25px;
  }
  .avatar {
    display: inline-block;
  }
  .avatar img {
    border-radius: 100%;
    width: 36px;
    height: 36px;
  }
  .post-meta {
    padding-left: 10px;
    display: inline-block;
    left: 10px;
    vertical-align: top;
  }
  .post-meta .auth {
    font-size: 14px;
    line-height: 1.4;
    text-rendering: auto;
    color: #287954;
  }
  .read-more, .postMetaInlineSupplemental {
    font-size: 13px;
    color: rgba(0,0,0,.44);
    font-weight: 400;
    fill: rgba(0,0,0,.44);
  }
  .postMetaInlineSupplemental time {

  }
  .middotDivider {
    padding-right: .45em;
    padding-left: .45em;
  }
  .middotDivider:after {
    content: '·';
  }
  h2 {
    margin: 10px 0 0;
  }
  section {
    font-size: 17px;
  }
  .padding-top {
    padding-top: 10px;
    font-size: 17px;
    color: rgba(0,0,0,.44);
    font-weight: 400;
    fill: rgba(0,0,0,.44);
  }
  .padding-top .like-svg, .padding-top .response-svg {
    color: #189C68;
    fill: #189C68;
  }
  .like-svg {
    display: inline-block;
  }
  .buttonSet {
    display: inline-block;
    position: absolute;
    right: 1px;
  }
  .buttonSet a {
    line-height: 28px;
    color: rgba(0,0,0,.44);
  }
  .padding-top span {
    vertical-align: top;
  }
  .like {
    display: inline-block;
  }
</style>
