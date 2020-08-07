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
              <h2>Una mica d’història</h2>
              <p>
                <strong>HORTEC</strong>, Societat Cooperativa Catalana Limitada
                es va crear el 1991 entre varis pagesos que practicaven
                <strong>Agricultura Ecològica</strong> (AE) a
                <strong>Catalunya</strong>, amb la finalitat de cobrir les
                necessitats de distribució de les fruites i verdures procedents
                dels seus cultius, conreats sense fer servir productes químics
                de síntesi, i d’acord amb les normatives establertes en aquells
                moments pel
                <strong>Consejo Regulador de la Agricultura Ecològica</strong>
                (CRAE), d’àmbit estatal.
              </p>
              <p>
                <strong>Va ser la primera i única cooperativa de Catalunya que va
                  reunir productors d’agricultura ecològica de manera
                  exclusiva</strong>. Té un àmbit territorial molt ampli ja que reuneix pagesos de
                10 comarques catalanes diferents. Això implica una logística
                complexa, però la possibilitat de conrear espècies diferents,
                aprofitant les avantatges de cada clima i tipus de sòl. La major
                part dels socis són pagesos mitjans i petits, amb sistemes de
                producció poc mecanitzats, però especialitzats i amb volums de
                producció relativament petits.&nbsp;
              </p>
              <p>
                Aviat vam arribar a la conclusió que el nostre mercat natural és
                el més proper, i per tant, vam centrar la nostra energia en el
                mercat interior. Això ens desmarca de la tendència majoritària
                del moment (mitjans dels 90), que mirava cap a l’exportació. Vam
                començar a crear rutes i teixits de distribució pròpia a
                <strong>Barcelona</strong> i comarques limítrofes; i vam
                augmentar la distribució a altres punts de
                <strong>Catalunya</strong> i <strong>Espanya</strong>,
                aprofitant les estructures logístiques que proporciona
                <strong>Mercabarna</strong>.
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
              Inicialment només es distribuïa el producte dels socis, però aviat
              la demanda dels clients i la necessitat de moure
              <span class="subrallado">més volum</span> per a ajudar a mantenir
              l’estructura creada, va empènyer a contactar amb pagesos d’altres
              zones per poder oferir
              <span class="subrallado">més varietat</span>.
            </p>
          </div>
        </b-col>
      </b-row>
      <b-row class="contenido3 d-flex">
        <b-col class="col-12 col-md-5 mt-4">
          <div class="actualitat act-1 d-flex">
            <div data-aos="fade-up">
              <h3>Hortec a la actualitat</h3>
              <p>
                HORTEC, s’ha convertit, sens dubte, en un referent en la
                distribució de fruita i verdura ecològica a Catalunya. Tenim 18
                socis actius que aporten regularment productes a la cooperativa.
                La superfície que conreen tots plegats està al voltant de les
                100 ha. Des de el nostre magatzem de Mercabarna distribuïm a més
                de 150 clients de Catalunya i Espanya. Fem repartiment setmanal
                per tota l’àrea metropolitana de Barcelona. Aquesta freqüència
                de servei ens permet oferir un producte fresc i de qualitat en
                tota aquesta àrea. Fem també repartiment setmanal per totes les
                comunitats de Catalunya i de la resta del Estat Espanyol.
              </p>
            </div>
          </div>
        </b-col>
        <b-col class="col-12 col-md-5 mt-4">
          <div class="actualitat act-2 d-flex">
            <div data-aos="fade-up">
              <h3>Els Nostres Productors</h3>
              <p>
                Des de fa un parell d’anys hem començat a treballar amb
                menjadors escolars de Barcelona i Girona. Volem ampliar i
                potenciar la relació amb les escoles per facilitar que arribi
                als menjadors el menú ecològic. En aquests moments, la
                cooperativa està formada per 18 socis actius amb les seves
                famílies i/o treballadors. La majoria som empreses familiars
                agràries. Les terres que conreen estan distribuïdes per diverses
                comarques. Podeu conèixer-los una mica fent clic als diferents
                punts del mapa.
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
            <h3>Consulta els nostres productors</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse id
              labore eaque sint corporis quis perferendis enim sunt, ipsum
              ducimus. Voluptatibus sequi doloribus quae magnam nostrum, nisi
              minus vero consequuntur.
            </p>
            <div class="contadores d-flex mt-2">
              <contador :numero="15" titulo="Productors" />
              <contador :numero="30" titulo="Anys d'Experiencia" />
              <contador :numero="82" titulo="Varietats de Collita" />
            </div>
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
