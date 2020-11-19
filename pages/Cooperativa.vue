<template>
  <div class="cooperativa">
    <b-container class="cabecera-peque clear-filter" filter-color="black" fluid>
      <div class="imagenCabeceraPeque cooperativaImg" />
      <b-row class="contenido-cab d-flex">
        <b-col class="col-md-12 tit-cop">
          <h1 class="text-focus-in">
            La <span>Cooperativa</span>
          </h1>
        </b-col>
      </b-row>
    </b-container>
    <b-container class="BodyCoop" fluid>
      <b-row class="contenido1 d-flex">
        <b-col class="col-12 col-md-6 mt-5">
          <div data-aos="fade-up">
            <div class="texto1">
              <h2>{{ $t('Coop.tit') }}</h2>
              <p>
                {{ $t('Coop.txt1') }}
              </p>
              <p>
                {{ $t('Coop.txt2') }}
              </p>
              <p>
                {{ $t('Coop.txt3') }}
              </p>
            </div>
          </div>
        </b-col>
        <b-col class="col-12 col-md-6 d-flex">
          <div class="contenedorCarousel my-3">
            <carousel />
          </div>
        </b-col>
      </b-row>
      <b-row class="contenido2 d-flex">
        <b-col class="col-12 col-md-4 d-flex colCont2" data-aos="fade-in">
          <b-img class="iconosCoop" src="/img/imagenCoop.png" />
        </b-col>
        <b-col class="col-12 col-md-8 d-flex colCont3">
          <div data-aos="fade-in">
            <p class="textoEnf">
              {{ $t('Coop.cta1') }}
              <span class="subrallado">{{ $t('Coop.cta2') }}</span> {{ $t('Coop.cta3') }}
              <span class="subrallado">{{ $t('Coop.cta4') }}</span>.
            </p>
          </div>
        </b-col>
      </b-row>
      <b-row class="contenido3 d-flex">
        <b-col class="col-12 col-md-5 mt-4">
          <div class="actualitat act-1 d-flex">
            <div data-aos="fade-up">
              <h3>{{ $t('Coop.tit2') }}</h3>
              <p>
                {{ $t('Coop.txtf1') }}
              </p>
            </div>
          </div>
        </b-col>
        <b-col class="col-12 col-md-5 mt-4">
          <div class="actualitat act-2 d-flex">
            <div data-aos="fade-up">
              <h3>{{ $t('Coop.tit3') }}</h3>
              <p>
                {{ $t('Coop.txtf2') }}
              </p>
            </div>
          </div>
        </b-col>
      </b-row>
    </b-container>
    <b-container class="mapaProductors" fluid>
      <b-row class="containerMapa">
        <b-col class="col-12 col-md-6 d-flex anchoTotal ">
          <div class="productoresMapa d-flex">
            <h3>{{ $t('Coop.tit') }}</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse id
              labore eaque sint corporis quis perferendis enim sunt, ipsum
              ducimus. Voluptatibus sequi doloribus quae magnam nostrum, nisi
              minus vero consequuntur.
            </p>
            <div class="contadores d-flex mt-2">
              <contador :numero="15" :titulo="$t('Coop.cont1')" />
              <contador :numero="30" :titulo="$t('Coop.cont2')" />
              <contador :numero="82" :titulo="$t('Coop.cont3')" />
            </div>1
          </div>
        </b-col>
        <b-col class="col-12 col-md-6 d-flex anchoTotal divMapa">
          <div class="mapa">
            <iframe
              src="https://www.google.com/maps/d/embed?mid=1p1NqZdGSm_wTKwLJJtfy4rkYFomVb8a5"
              width="100vw"
              height="100vh"
            />
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Carousel from '~/components/Cooperativa/Carousel.vue'
import Contador from '~/components/Contador.vue'

export default {
  scrollToTop: true,
  name: 'Cooperativa',
  components: {
    Carousel,
    Contador

  }
}
</script>

<style></style>
