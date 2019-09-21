<template>
<div>
<Header></Header>
<Swiper></Swiper>
<Exhibit v-model="img"></Exhibit>
</div>
</template>
<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import Swiper from '@/components/Swiper.vue'
import Exhibit from '@/components/Exhibit.vue'
export default {
  name: 'home',
  components: {
    Header, Swiper, Exhibit
  },
  data () {
    return {
     img: [require('../assets/img/3.jpg'), require('../assets/img/4.jpg'),require('../assets/img/5.jpg'),require('../assets/img/6.jpg')]
    }
  }
}
</script>
