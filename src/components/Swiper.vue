<template>
  <div class="head">
    <div class="head-top">
      <ul>
        <li>主页</li>
        <li>关于</li>
        <li>相册</li>
        <li>日志</li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {}
</script>
<style  scoped>
.head {
  width: 100%;
  height: 54px;
  line-height: 54px;
  background: #FFFFFF;
}
.head-top{
    text-align: center;
}

.head-top ul::after{
    content: "";
    clear: both;
    visibility: hidden;
    display: block;
    height: 0;
}
ul{
    display: inline-block;
}
li{
    /* display: inline; */
    float: left;
    padding: 0 20px;
}
</style>
