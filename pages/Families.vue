<template>
  <div class="families">
    <b-container class="cabecera-peque clear-filter" filter-color="black" fluid>
      <div class="imagenCabeceraPeque familiesImg" />
      <b-row class="contenido-cab d-flex">
        <b-col class="col-md-12 tit-cop ">
          <h1 class="text-focus-in">
            Families de <span>Productes</span>
          </h1>
        </b-col>
      </b-row>
    </b-container>

    <b-container class="Families-1" fluid>
      <b-row class="fila-1 d-flex">
        <b-col class="col-12 col-md-6 d-flex columna-intro mt-5">
          <div class="introFam d-flex slide-in-blurred-bottom">
            <h2>Productes <span class="dest">100% Ecològics</span></h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam perspiciatis labore harum, officia tenetur excepturi temporibus velit pariatur doloribus quae natus minima. Ipsum qui vitae illo exercitationem sapiente. Nesciunt, quasi!</p>
          </div>
        </b-col>
      </b-row>

      <b-row class="fila-2 d-flex famProd">
        <b-col class="col-12 col-md-10 d-flex famProd">
          <info-fam />
        </b-col>
        <b-col class="col-12 ctaFam d-flex">
          <div class="textoCta">
            <h4 class="titCta">
              Vols saber més de les nostres families?
            </h4>
          </div>
          <div class="btnsCta d-flex">
            <div data-aos="fade-right" data-aos-delay="700">
              <b-button type="button" size="lg" pill class="btn-informacio">
                Més Informació
              </b-button>
            </div>
            <div data-aos="fade-left" data-aos-delay="700">
              <b-button
                type="button"
                size="lg"
                pill
                variant="outline-warning"
                class="btn-botiga"
                @click="botiga"
              >
                Botiga
              </b-button>
            </div>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import InfoFam from '~/components/Families/InfoFam.vue'
export default {
  scrollToTop: true,
  name: 'Families',
  components: {
    InfoFam
  },
  mounted () {
    const target = document.querySelector('.titCta')
    function handleIntersection (entries) {
      entries.map((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('text-focus-in')
        } else {
          entry.target.classList.remove('text-focus-in')
        }
      })
    }
    const observer = new IntersectionObserver(handleIntersection)
    observer.observe(target)
  },
  methods: {
    botiga () {
      window.open('https://botiga.hortec.org/login', '_blank')
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
