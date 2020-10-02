<template>
  <div class="Inicio">
    <div class="cabecera clear-filter" filter-color="black">
      <parallax
        class="imagen-cabecera"
        style="background-image:url('/img/header.jpg')"
      />
      <div class="container-cabecera">
        <div class="content-center">
          <h1 class="tituloInicio text-focus-in">
            HORTEC
          </h1>
          <h3 class="subtInicio tracking-in-expand">
            Fruites i Verdures de Conreu Ecològic
          </h3>
        </div>
      </div>
    </div>
    <b-container class="MainPresentacion" fluid>
      <b-row class="fila1">
        <b-col class="col-12 presentacion" data-aos="fade-up">
          <div>
            <h2>Benvingut a <span>Hortec</span></h2>

            <p>Som la primera cooperativa catalana compromesa amb <strong>l’agricultura ecològica</strong></p>
          </div>
        </b-col>
        <b-col class="col-12 presentacion2" data-aos="fade-up">
          <div class="txtPre">
            <p>
              Treballem amb estima i dedicació perquè
              l’alimentació amb producte de <strong>conreu ecològic</strong>
              sigui una realitat per a tothom.
            </p>
          </div>
        </b-col>
      </b-row>
    </b-container>
    <b-container class="Principal" fluid>
      <b-row class="cooperativa">
        <b-col class="col-12 col-md-6 txtCop" data-aos="fade-right">
          <h3>La Cooperativa</h3>
          <p class="mr-5">
            HORTEC, Societat Cooperativa Catalana Limitada es va crear el 1991
            entre varis pagesos que practicaven Agricultura Ecològica (AE) a
            Catalunya, amb la finalitat de cobrir les necessitats de distribució
            de les fruites i verdures procedents dels seus cultius, conreats sense
            fer servir productes químics de síntesi, i d’acord amb les normatives
            establertes en aquells moments pel Consejo Regulador de la Agricultura
            Ecològica (CRAE), d’àmbit estatal.
          </p>
          <div class="btnCop d-flex">
            <b-button variant="outline-warning" to="/Cooperativa">
              Més Informació
            </b-button>
          </div>
        </b-col>
        <b-col class="col-12 col-md-6 imgCop" data-aos="fade-left">
          <div class="espacio" />
          <!--<b-img src="img/cooperativa.jpg" rounded width="300" height="300" />-->
        </b-col>
      </b-row>
    </b-container>
    <b-container class="families" fluid>
      <b-row class="rowFamilies d-flex">
        <b-col class="col-12col-lg-6 colImg d-flex my-5">
          <div data-aos="fade-up">
            <div class="contenedorImg my-3">
              <b-img src="img/families.jpg" width="500" height="500" />
            </div>
          </div>
        </b-col>
        <b-col class="col-12 col-lg-6 colTxt d-flex">
          <div data-aos="fade-up">
            <h3>Famílies</h3>
            <h6>Coneix els nostres productes</h6>
            <p>
              La base de l’oferta d’HORTEC son la fruita i la verdura fresca. Amb el pas del temps i sovint a demanda
              de la clientela, l’oferta s’ha anat ampliant amb ous, làctics, pasta i llegums, patés, oli, etc.
              Els factors de mercat (poder oferir una oferta variada al llarg de l’any, satisfer la creixent
              demanda de producte) i de producció de la cooperativa (limitada capacitat productiva dels socis,
              baix ritme d’incorporació de nous socis) fan que s’hagi de recórrer a proveïdors externs per poder
              mantenir les demandes dels nostres clients.
            </p>
            <div class="d-flex btnFam">
              <b-button variant="outline-warning" to="/Families">
                Més Informació
              </b-button>
            </div>
          </div>
        </b-col>
      </b-row>
    </b-container>
    <b-container class="advContainer" fluid>
      <ADV />
    </b-container>
    <b-container class="tarjetasInicio" fluid>
      <tarjetas />
    </b-container>
    <b-container class="empresasHortec" fluid>
      <b-row class="rowEmpresas">
        <b-col class="col-12 col-md-5">
          <div data-aos="fade-right">
            <div class="d-flex contEmpresa m-3">
              <div class="cabeceraEmpresa">
                <h4>Productors que confien en nosaltres</h4>
                <h6>Avançant i creixent junts</h6>
              </div>
              <div class="bodyEmpresas">
                <p>
                  En aquests moments, la cooperativa HORTEC està formada per 18 socis actius amb les seves famílies i/o treballadors.
                  La majoria som empreses familiars agràries. Les terres que conreen estan distribuïdes per diverses comarques del territori català.
                </p>
              </div>
            </div>
          </div>
        </b-col>
        <b-col class="col-md-7 d-flex container-logo-empresa">
          <div class="logoEmpresa">
            <b-img src="img/cooperativa.jpg" rounded width="50" height="50" />
          </div>
          <div class="logoEmpresa">
            <b-img src="img/cooperativa.jpg" rounded width="50" height="50" />
          </div>
          <div class="logoEmpresa">
            <b-img src="img/cooperativa.jpg" rounded width="50" height="50" />
          </div>
          <div class="logoEmpresa">
            <b-img src="img/cooperativa.jpg" rounded width="50" height="50" />
          </div>
          <div class="logoEmpresa">
            <b-img src="img/cooperativa.jpg" rounded width="50" height="50" />
          </div>
          <div class="logoEmpresa">
            <b-img src="img/cooperativa.jpg" rounded width="50" height="50" />
          </div>
        </b-col>
      </b-row>
      <b-row class="contacto d-flex">
        <b-col class="col-md-4 colMos">
          <div class="imagenMosaico d-flex">
            <div data-aos="fade-in" data-aos-duration="2000">
              <b-img src="img/mosaico.png" class="mosaico" />
            </div>
          </div>
        </b-col>
        <b-col class="col-md-6 col-con-txt">
          <div class="txtContacto" data-aos="fade-up">
            <h3>¿Vols que parlem?</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto tenetur porro unde suscipit dolor nihil quis. Maxime, architecto sint quas illo corrupti aliquam quisquam, error enim, neque dolorum totam porro. architecto sint quas illo corrupti aliquam quisquam, error enim, neque dolorum totam porro</p>
            <div class="botones-contacto d-flex">
              <b-button variant="outline-warning" to="/Contacte">
                Sol·licitar informació
              </b-button>
            </div>
          </div>
        </b-col>
      </b-row>
    </b-container>
    <b-container class="Localizacion" fluid>
      <localizacion />
    </b-container>
  </div>
</template>

<script>
import Parallax from '../components/Parallax.vue'
import ADV from '../components/Inici/ADV.vue'
import Tarjetas from '../components/Inici/Tarjetas.vue'
import Localizacion from '../components/Inici/Localizacion.vue'
export default {
  scrollToTop: true,
  components: {
    Parallax,
    ADV,
    Tarjetas,
    Localizacion
  }
}
</script>

<style lang="scss" scoped>

</style>
