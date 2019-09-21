<template>
  <div class="swiper">
    <div class="swiper-content">
      <img :src="img" />
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      img: require('../assets/img/1.jpg'),
      imgUrl: [require('../assets/img/1.jpg'), require('../assets/img/2.jpg')]
    }
  },
  mounted () {
      this.sniper();
  },
  methods: {
      sniper:function () {
          let that = this
          let i = 0;
          setInterval(
              function() {
                if(i === 2) {
                    i = 0;
                }
                that.img = that.imgUrl[i];
                i++;
              },2000
          )
      }
  }
}
</script>
<style scoped>
.swiper {
  height: 484px;
  width: 100%;
}
.swiper-content {
  margin: auto;
  width: 90%;
  height: 100%;
}
.swiper-content img {
  width: 100%;
  height: 100%;
}
@media screen and (max-width: 1085px) {
  .swiper-content {
    width: 100%;
  }
}
@media screen and (max-width: 765px) {
}
@media screen and (max-width: 530px) {
}
</style>
