<template>
  <div id="app">
    <Home></Home>
    <Header></Header>
  </div>
</template>
<script>
import Home from '@/views/Home'
export default {
  components: {
    Home
  }
}
</script>
<style lang='less'>
body,li,ul,h3,p{
  padding: 0;
  margin: 0;
}
li,ul{
  padding: 0;
  margin: 0;
  list-style: none;
}
[data-dpr="1"] div{
    font-size: 16px;
}
[data-dpr="2"] div{
    font-size: 32px;
}
[data-dpr="3"] div{
    font-size: 64px;
}
</style>
