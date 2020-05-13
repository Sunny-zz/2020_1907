<template>
  <Swiper class="swiper" :options="swiperOption">
    <SwiperSlide>Slide 1</SwiperSlide>
    <SwiperSlide>Slide 2</SwiperSlide>
    <SwiperSlide>Slide 3</SwiperSlide>
    <SwiperSlide>Slide 4</SwiperSlide>
    <SwiperSlide>Slide 5</SwiperSlide>
    <SwiperSlide>Slide 6</SwiperSlide>
    <SwiperSlide>Slide 7</SwiperSlide>
    <SwiperSlide>Slide 8</SwiperSlide>
    <SwiperSlide>Slide 9</SwiperSlide>
    <SwiperSlide>Slide 10</SwiperSlide>
    <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div>
  </Swiper>
</template>
<script>
export default {
  name: 'VueSwiper',
  data () {
    return {
      swiperOption: {
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        direction: 'vertical',
        // autoplay: {
        //   delay: 1000,
        //   stopOnLastSlide: false,
        //   disableOnInteraction: true,
        // },
      }
    }
  }
}
</script>

<style>
.swiper {
  width: 600px;
  height: 300px;
}
</style>