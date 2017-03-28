<template lang="html">
  <ul class="home post-list">
    <li class="post-list-item" v-for="postCard in currentPostCards">
    <article class="post-block">
      <header>
        <h2 class="post-title">
          <router-link :to="{ name: 'post', params: { postId: postCard.id }}" class="post-title-link">
            {{postCard.title.rendered}}
          </router-link>
        </h2>
      </header>
      <div class="post-info">{{postCard.date}}</div>
      <section v-html="postCard.content.rendered" class="post-content"></section>
      <footer>
        <router-link :to="{ name: 'post', params: { postId: postCard.id }}" class="read-more">...more</router-link>
      </footer>
    </article>
    </li>
  </ul>
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
  .home.post-list {
    margin: 2em 0;
    .post-list-item {
      padding: 1em 0 2em;
      border-bottom: 1px solid #ddd;
      &:last-child {
        border-bottom: 0px;
      }
    }
    .post-content{
      h2, h3, h4, h5, h6 {
        &:before {
          content: '';
        }
      }
      & > ul {
        list-style: initial;
      }
    }
    .read-more {
      color: #42b983;
    }
  }

  .archive {
    max-width: 500px;
    margin: 5em auto;
    .post-item {
      padding: 2px 0 0 50px;
    }
    .post-time,
    .post-title-link {
      font-size: 1rem;
    }
    .post-title-link {
      display: block;
      margin-left: 125px;
      color: #42b983;
      word-break: break-all;
      &:hover {
        border-bottom: 0;
        color: #267B54;
      }
    }
    .post-info {
      float: left;
      width: 125px;
      color: #7f8c8d;
    }
  }
</style>
