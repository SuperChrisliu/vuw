<template lang="html">
  <footer>
    <div class="paginator">
      <a href="/page/2/" class="next">NEXT</a>
    </div>
    <div class="copyright">
      <p>© 2015 - 2016
        <a href="http://pinggod.com">pinggod</a>, powered by
        <a href="https://hexo.io/" target="_blank">Hexo</a> and
        <a href="https://github.com/pinggod/hexo-theme-apollo" target="_blank">hexo-theme-apollo</a>.</p>
    </div>
  </footer>
</template>

<script>
export default {
}
</script>

<style lang="scss" type="text/scss">
  .paginator {
    margin: 4em 0;
    text-align: center;
    .prev, .next {
      display: inline-block;
      margin: 0 4px;
      padding: 4px 12px;
      border-radius: 4px;
      border-bottom: 4px solid #3aa373;
      font-size: 14px;
      color: #fff;
      background-color: #4fc08d;
      &:hover {
        background-color: #22bd77;
      }
    }
  }

  .ds-thread,
  #disqus_thread {
    margin-bottom: 2em;
  }
  footer {
    padding-bottom: 1px;
    .copyright {
      margin: 4em 0;
      border-top: 1px solid #ddd;
      text-align: center;
      p, a {
        color: #aaa;
        font-size: 14px;
        font-weight: 100;
      }
      a:hover {
        color: #888;
      }
    }
  }
</style>
