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
        <div class="container contenedorBlog">
          <nuxt-content :document="articulo" />
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
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
.articulo{
    .imgTit{
    padding: 0;
    overflow: hidden;
    .contenedor{
      position: relative;
      .imagen{
        width: 100%;
        height: 65vh;
        object-fit: cover;
        position: relative;
        z-index: -1;
        //filter: contrast(60%);
      }
      .tituloBlog{
        position: absolute;
        left: 0;
        right: 0;
        margin-left: auto;
        margin-right: auto;
        bottom: 45%;
        text-align: center;
          .TituloHero{
            color: white;
            font-family: 'Montserrat';
            font-size: calc(2vw + 2vh + 1vmin);
          }
          .descHero{
              font-size: calc(0.5vw + 0.5vh + 1vmin);
              font-family: Montserrat;
              color: wheat;
              animation-delay: 1s;
          }
      }
    }
  }
  .BlogContent{
      .colBlog{
        margin: 3em 0;
        .contenedorBlog{
          .nuxt-content h1{
            font-family: 'Montserrat';
          }
        }
      }
  }
}
</style>
