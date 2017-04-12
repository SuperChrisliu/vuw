<template lang="html">
  <footer>
    <div class="footer-container">
      <span class="copyright">Copyright &copy; 2014- Evan You</span>
    </div>
  </footer>
</template>

<script>
export default {
}
</script>

<style lang="scss" type="text/scss">
  .footer-container {
    max-width: 800px;
    margin: 0 auto;
    border-top: 1px solid rgba(0,0,0,.15);
    height: 25px;
  }
  .copyright {
    float: right;
    padding-top: 20px;
    right: 10px;
    font-size: 17px;
    color: rgba(0,0,0,.44);
    font-weight: 400;
    fill: rgba(0,0,0,.44);
  }
</style>
