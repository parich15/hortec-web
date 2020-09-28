<template>
  <div class="Contacto">
    <b-container class="cabecera-peque clear-filter" filter-color="black" fluid>
      <div class="imagenCabeceraPeque contacteImg" />
      <b-row class="contenido-cab d-flex">
        <b-col class="col-md-12 tit-cop ">
          <h1 class="text-focus-in">
            Posem'nos en <span>Contacte</span>
          </h1>
        </b-col>
      </b-row>
    </b-container>
    <b-container class="seccion1" fluid>
      <b-row class="my-5">
        <b-col class="col-12 col-md-7 d-flex">
          <div class="container mx-auto my-auto txtCont">
            <h3><span>Contacte</span> amb nosaltres</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt pariatur qui laborum est aliquid earum tenetur saepe beatae. Aspernatur consequatur dignissimos fugit corporis iure soluta temporibus exercitationem impedit molestiae nobis.
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore est neque tenetur animi necessitatibus, at ea numquam magnam earum tempore eius commodi consequuntur porro, laboriosam odit a? Dicta, libero nulla.
            </p>
          </div>
        </b-col>
        <b-col class="col-12 col-md-5">
          <tarjeta-iconos />
        </b-col>
      </b-row>
    </b-container>
    <b-container class="seccion2" fluid>
      <b-row class="py-4">
        <b-col class="col-12 col-md-6">
          <div class="container py-3">
            <h3>
              Formulari de <span>Contacte</span>
            </h3>

            <div class="contForm py-3">
              <formulario />
            </div>
          </div>
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
