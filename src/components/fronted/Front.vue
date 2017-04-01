<template lang="html">
  <div>
    <vhead></vhead>
    <section id="main">
      <router-view></router-view>
    </section>
    <ApolloFooter></ApolloFooter>
  </div>
</template>

<script>
  import vhead from './vheader'
  import ApolloFooter from './ApolloFooter'
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
      vhead,
      ApolloFooter
    }
  }
</script>

<style lang="css" type="text/css" scoped>
  @import "../../assets/css/main.css";
</style>
