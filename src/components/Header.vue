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
ul {
  width: 80%;
  display: flex;
  justify-content: space-around
}
li {
}
</style>
