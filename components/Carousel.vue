<template>
  <div id="containerCarousel" @contextmenu="noclick()">
    <b-carousel
      id="CarCoop"
      style="text-shadow: 0px 0px 10px #000"
      fade
      indicators
      img-width="1400"
      img-height="700"
    >
      <b-carousel-slide
        caption="Reunió Socis"
        img-src="/img/carousel2.jpg"
      />
      <b-carousel-slide
        caption="Creixent junts"
        img-src="/img/carousel1.jpg"
      />
      <b-carousel-slide
        caption="Menjar Cooperativa"
        img-src="/img/carousel3.jpg"
      />
      <b-carousel-slide
        caption="Pagesos de la terra"
        img-src="/img/carousel4.jpg"
      />
    </b-carousel>
  </div>
</template>

<script>
export default {
  name: 'Carousel',
  data () {
    return {
      nombre: 'Carousel'
    }
  },
  methods: {
    noclick () {
      document.getElementById('containerCarousel').addEventListener('contextmenu', function (e) {
        e.preventDefault()
      }, false)
    }
  }
}
</script>

<style>

</style>
