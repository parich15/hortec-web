<template>
  <b-container class="articulo" fluid>
    <b-row class="clear-filter" filter-color="black">
      <b-col class="col-12 imgTit">
        <div class="contenedor clear-filter" filter-color="blog">
          <img :src="articulo.Imagen" :alt="articulo.alt" class="imagen">
          <div class="tituloBlog">
            <h1 class="TituloHero text-focus-in">
              {{ articulo.Titulo }}
            </h1>
            <p class="descHero tracking-in-expand">
              {{ articulo.Descripcion }}
            </p>
          </div>
        </div>
      </b-col>
    </b-row>
    <b-row class="BlogContent">
      <b-col class="col-12 colBlog">
        <div class="container contenedorBlog" data-aos="fade-up" data-aos-delay="1300">
          <nuxt-content :document="articulo" />
          <small v-if="formatearFecha(articulo.createdAt) === formatearFecha(articulo.updatedAt)" class="escrit mb-4">Escrit el {{ formatearFecha(articulo.createdAt) }}</small>
          <small v-else class="modif">Modificat el {{ formatearFecha(articulo.updatedAt) }}</small>
        </div>
      </b-col>
    </b-row>
    <botonBack />
  </b-container>
</template>

<script>
import BotonBack from '~/components/Blog/BotonBack.vue'
export default {
  components: {
    BotonBack
  },
  async asyncData ({ $content, params }) {
    const articulo = await $content('articles', params.slug).fetch()
    return { articulo }
  },
  methods: {
    formatearFecha (date) {
      const opciones = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleString('es', opciones)
    }
  }
}
</script>

<style lang="scss">
.escrit, .modif {
color:gray
}
</style>
