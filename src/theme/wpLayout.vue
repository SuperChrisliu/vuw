<template lang="html">
  <div class="blog">
    <wpHeader></wpHeader>
    <section id="main">
      <router-view></router-view>
      <wpFooter></wpFooter>
    </section>
  </div>
</template>

<script>
  import wpHeader from './wpHeader'
  import wpFooter from './wpFooter'
  export default {
    data () {
      return {
        items: [
        ],
        loading2: false
      }
    },
    methods: {
    },
    components: {
      wpHeader,
      wpFooter
    }
  }
</script>

<style lang="scss" type="text/scss" scoped>
  #main {
    position: relative;
    z-index: 1;
    padding: 0 60px 30px;
    overflow-x: hidden;
  }
  @media screen and (max-width: 900px) {
    #main {
      padding: 2em 1.4em 0;
    }
  }
</style>
