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
<style>
body,li,ul{
  padding: 0;
  margin: 0;
}
li,ul{
  padding: 0;
  margin: 0;
  list-style: none;
}
[data-dpr="1"] div{
    font-size: 12px;
}
[data-dpr="2"] div{
    font-size: 24px;
}
[data-dpr="3"] div{
    font-size: 36px;
}
</style>
