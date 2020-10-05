<template>
  <div class="Contacto">
    <b-container class="cabecera-peque clear-filter" filter-color="black" fluid>
      <div class="imagenCabeceraPeque contacteImg" />
      <b-row class="contenido-cab d-flex">
        <b-col class="col-md-12 tit-cop ">
          <h1 class="text-focus-in">
            {{ $t('Contacto.tit') }} <span>{{ $t('Contacto.tit2') }}</span>
          </h1>
        </b-col>
      </b-row>
    </b-container>
    <b-container class="seccion1" fluid>
      <b-row class="my-5">
        <b-col class="col-12 col-md-7 d-flex">
          <div class="container mx-auto my-auto txtCont" data-aos="fade-up">
            <h3><span>{{ $t('Contacto.tit3') }}</span>{{ $t('Contacto.tit4') }}</h3>
            <p>
              {{ $t('Contacto.txtCon') }}
            </p>
          </div>
        </b-col>
        <b-col class="col-12 col-md-5">
          <tarjeta-iconos />
        </b-col>
      </b-row>
    </b-container>
    <b-container class="seccion2" fluid>
      <b-row>
        <b-col class="col-12 col-md-6">
          <div class="container py-5" data-aos="fade-in">
            <h3>
              {{ $t('Contacto.form1') }} <span>{{ $t('Contacto.form2') }}</span>
            </h3>

            <div class="contForm py-3">
              <formulario />
            </div>
          </div>
        </b-col>
        <b-col class="col-12 col-md-6 colFoto">
          <div class="contenedorFoto" />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Formulario from '../components/Contacte/Formulario.vue'
import TarjetaIconos from '../components/Contacte/TarjetaIcono.vue'
export default {
  name: 'Contacte',
  components: {
    TarjetaIconos,
    Formulario
  }
}
</script>

<style lang="scss" scoped>

</style>
