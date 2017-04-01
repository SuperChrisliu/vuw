<template lang="html">
  <div>
    <div id="mobile-bar" class="top">
      <a class="menu-button"></a>
      <a class="logo" href="/"></a>
    </div>
    <header id="header">
      <a id="logo" href="/">
        <img src="/images/logo.png">
        <span>Vue.js</span>
      </a>
      <ul id="nav">
        <li>
          <form id="search-form">
            <input type="text" id="search-query-nav" class="search-query st-default-search-input">
          </form>
        </li>
        <li><a href="/v2/guide/" class="nav-link current">教程</a></li>
        <li><a href="/v2/api/" class="nav-link">API</a></li>
        <li><a href="/v2/examples/" class="nav-link">示例</a></li>
        <li><a href="/about/" class="nav-link">参与贡献</a></li>
      </ul>
    </header>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  data () {
    return {
      finalheadline: '',
      show_headline: true
    }
  },
  computed: mapState(['headline']),
  watch: {
    headline (val) {
      this.show_headline = false
      setTimeout(() => {
        this.show_headline = true
        this.finalheadline = val
      }, 200)
    }
  }
}
</script>

<style lang="css" type="text/css" scoped>
  @import "../../assets/css/header.css";
</style>
