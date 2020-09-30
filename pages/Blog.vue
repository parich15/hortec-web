<template>
  <div class="BlogHome">
    <b-container class="cabecera-peque clear-filter" filter-color="black" fluid>
      <div class="imagenCabeceraPeque contacteImg" />
      <b-row class="contenido-cab d-flex">
        <b-col class="col-md-12 tit-cop ">
          <h1 class="text-focus-in">
            Blog <span>Corporatiu</span>
          </h1>
        </b-col>
      </b-row>
    </b-container>
    <b-container class="BlogPosts" fluid>
      <b-row class="Posts py-5">
        <div v-for="articulo in articulos" :key="articulo.slug" class="col-12 col-md-3 entrada py-3" data-aos="fade-up" data-aos-delay="300">
          <nuxt-link :to="'/Articles/' + articulo.slug">
            <img :src="articulo.Imagen" :alt="articulo.alt" class="thumbnail">
          </nuxt-link>
          <h3 class="titEnt">
            <nuxt-link :to="'/Articles/' + articulo.slug">
              {{ articulo.Titulo }}
            </nuxt-link>
          </h3>
          <p class="descEnt">
            {{ articulo.Descripcion }}
          </p>
          <small v-if="formatearFecha(articulo.createdAt) == formatearFecha(articulo.updatedAt)" class="escrit">Escrit el {{ formatearFecha(articulo.createdAt) }}</small>
          <small v-else class="modif">Modificat el {{ formatearFecha(articulo.updatedAt) }}</small>
        </div>
      </b-row>
    </b-container>
  </div>
</template>

<script>

export default {
  async asyncData ({ $content }) {
    const articulos = await $content('articles').sortBy('createdAt', 'desc').fetch()
    return { articulos }
  },
  methods: {
    formatearFecha (date) {
      const opciones = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleString('es', opciones)
    }
  }

}
</script>

<style lang="scss" scoped>

</style>
