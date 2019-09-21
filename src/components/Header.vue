<template>
  <div class="head">
    <div class="head-top">
      <div class="menubt">
        <i v-show="!isdown" class="iconfont icon-caidan" @click="isdown=!isdown"></i>
        <i v-show="isdown" class="iconfont icon-chacha" @click="isdown=!isdown"></i>
      </div>
      <ul class="bigul">
        <li>主页</li>
        <li>关于</li>
        <li>相册</li>
        <li>日志</li>
      </ul>
    </div>
    <div class="head-small">
     <ul class="smallul" v-show="isdown">
        <li>主页</li>
        <li>关于</li>
        <li>相册</li>
        <li>日志</li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      isdown: false
    }
  }
}
</script>
<style lang="less" scoped>
.head {
  width: 100%;
  height: 54px;
  background: #ffffff;
  display: flex;
  justify-content: center;
}
.head-top {
  width: 80%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.bigul {
  width: 80%;
  display: flex;
  justify-content: space-around;
}
.smallul{
    display: none;
}
.menubt {
  display: none;
}
@media screen and (max-width: 765px) {
  .head {
    width: 100%;
    height: 54px;
    background: #ffffff;
  }
  .head-top {
    width: 95%;
    height: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    position: relative;
  }
  .head-small{
      width: 100%;
      display: block;
      position: absolute;
      top: 54px;
      overflow: hidden;
  }
  .bigul{
    display: none;
  }
  .smallul{
      display: block;
  }
  .smallul li{
       line-height: 49px;
       height: 49px;
       width: 100%;
       background: #F2F2F2;
       padding-left: 5%;
       border: 1px solid #E6E6E6;
  }
  .menubt {
    display: block;
  }
}
</style>
