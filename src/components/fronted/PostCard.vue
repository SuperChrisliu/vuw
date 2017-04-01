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

<style lang="scss" type="text/scss" >
</style>
