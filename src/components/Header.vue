<template>
  <header>
    <div class="back-img" @click="back">
    </div>
    <slot></slot>
  </header>
</template>
<script>
  export default {
    methods: {
      back() {
        this.$router.go(-1)
      }
    }
  }
</script>
<style lang="scss" scoped>
@import '../common/scss/mixin.scss';
header {
  display:flex;
  height: 44px;
  justify-content: center;
  line-height: 44px;
  font-size: 18px;
  font-family: PingFang-SC-Medium;
  color: #323232;
  background-color: #ffffff;
  .back-img {
    width: 10px;
    height: 17px;
    background-image: url('../common/images/btn_back.png');
    background-size: 100% 100%;
    @include extend-click();
    position: absolute;
    top: 17px;
    left: 15px;
  }
}
</style>

