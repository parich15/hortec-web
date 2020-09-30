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
    <b-container fluid>
      <b-row>
        <div v-for="articulo in articulos" :key="articulo.slug" class="col-6 col-md-3 entrada ">
          <h3>
            <nuxt-link :to="'/Articles/' + articulo.slug">
              {{ articulo.Titulo }}
            </nuxt-link>
          </h3>
          <div>
            {{ articulo.Descripcion }}
          </div>
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
  }
}
</script>

<style lang="scss" scoped>

</style>
