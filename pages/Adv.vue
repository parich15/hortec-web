<template>
  <div class="Adv">
    <b-container class="cabecera-peque clear-filter" filter-color="black" fluid>
      <div class="imagenCabeceraPeque advImg" />
      <b-row class="contenido-cab d-flex">
        <b-col class="col-md-12 tit-cop ">
          <h1 class="text-focus-in">
            {{ $t('Adv.tit') }}<span>Defensa Vegetal</span>
          </h1>
        </b-col>
      </b-row>
    </b-container>
    <b-container fluid class="seccion1">
      <b-row class="fila1">
        <b-col class="col-12 col-md-5 imagen1">
          <div class="imagen">
            <img src="/img/Adv/Adv1.jpg" alt="">
          </div>
        </b-col>
        <b-col class="col-12 col-md-7 texto1">
          <div class="txtAdv1" data-aos="fade-up">
            <h3>{{ $t('Adv.tit2') }}</h3>
            <hr>
            <p>
              {{ $t('Adv.txtAdv') }}
            </p>
          </div>
        </b-col>
      </b-row>
      <b-row class="Cta my-3 my-sm-5 ">
        <b-col class="col-12 col-md-7 colCta">
          <div class="CtaAdv" data-aos="zoom-in">
            <h5>
              {{ $t('Adv.cta') }}
            </h5>
          </div>
        </b-col>
      </b-row>
      <b-row class="fila2">
        <b-col class="col-12 col-md-5 imagen2">
          <div class="imagen" data-aos="fade-in">
            <img src="/img/Adv/Adv2.jpg" alt="">
          </div>
        </b-col>
        <b-col class="col-12 col-md-7 texto2">
          <div class="txtAdv2" data-aos="fade-up">
            <h3>{{ $t('Adv.tit3') }}</h3>
            <hr>
            <p>
              {{ $t('Adv.txtAdv2') }}
            </p>
          </div>
        </b-col>
      </b-row>
    </b-container>
    <b-container fluid class="seccionFaq">
      <b-row class="rowFaq">
        <b-col class="col-12 titFaq">
          <h3>{{ $t('Adv.faq1') }} <span>{{ $t('Adv.faq2') }}</span></h3>
        </b-col>
        <b-col class="col-12 colFaq">
          <div class="container d-flex">
            <faq />
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Faq from '../components/Adv/Faq.vue'
export default {
  name: 'Adv',
  components: {
    Faq
  }
}
</script>

<style lang="scss" scoped>

</style>
