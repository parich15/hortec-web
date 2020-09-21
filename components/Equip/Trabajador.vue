<template>
  <div class="trabajador d-flex flex-column align-items-center" data-aos="fade-up" :data-aos-delay="delay">
    <div class="imagenPerfil mb-3">
      <img :src="imagen" alt="">
    </div>
    <div class="informacion">
      <h4>{{ nombre }}</h4>
      <span>{{ rol }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Trabajador',
  props: {
    imagen: {
      default: '',
      type: String
    },
    nombre: {
      default: 'Trabajador',
      type: String
    },
    rol: {
      default: 'Posicion',
      type: String
    },
    delay: {
      default: 0,
      type: Number
    }

  }
}
</script>

<style lang="scss" scoped>

</style>
