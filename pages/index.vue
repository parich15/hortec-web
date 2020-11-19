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
            {{ $t('Inicio.subtitulo') }}
          </h3>
        </div>
      </div>
    </div>
    <b-container class="MainPresentacion" fluid>
      <b-row class="fila1">
        <b-col class="col-12 presentacion" data-aos="fade-up">
          <div>
            <h2>{{ $t('Inicio.presentacion') }}<span>Hortec</span></h2>

            <p> {{ $t('Inicio.subPres') }}</p>
          </div>
        </b-col>
        <b-col class="col-12 presentacion2" data-aos="fade-up">
          <div class="txtPre">
            <p>
              {{ $t('Inicio.cta1') }} <strong>{{ $t('Inicio.cta2') }}</strong>
              {{ $t('Inicio.cta3') }}
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
            {{ $t('Inicio.txtCop') }}
          </p>
          <div class="btnCop d-flex">
            <b-button variant="outline-warning" :to="localePath('/Cooperativa')">
              {{ $t('Inicio.txtBtn') }}
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
        <b-col class="col-12 col-lg-6 colImg d-flex my-5">
          <div data-aos="fade-up">
            <div class="contenedorImg my-3">
              <b-img src="img/families.jpg" width="500" height="500" />
            </div>
          </div>
        </b-col>
        <b-col class="col-12 col-lg-6 colTxt d-flex">
          <div data-aos="fade-up">
            <h3> {{ $t('Inicio.titFam') }}</h3>
            <h6> {{ $t('Inicio.subFam') }}</h6>
            <p>
              {{ $t('Inicio.txtFam') }}
            </p>
            <div class="d-flex btnFam">
              <b-button variant="outline-warning" :to="localePath('/Families')">
                {{ $t('Inicio.txtBtn') }}
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
        <b-col class="col-12 col-md-5 my-5">
          <div data-aos="fade-right">
            <div class="d-flex contEmpresa m-3">
              <div class="cabeceraEmpresa">
                <h4>{{ $t('Inicio.clients') }}</h4>
                <h6>{{ $t('Inicio.subCli') }}</h6>
              </div>
              <div class="bodyEmpresas">
                <p>
                  {{ $t('Inicio.txtCli') }}
                </p>
              </div>
            </div>
          </div>
        </b-col>
        <b-col class="col-md-7 d-flex container-logo-empresa">
          <div class="logoEmpresa">
            <a target="_blank" href="https://molsa.bio/">
              <b-img src="img/Logos/molsa.png" rounded width="auto" height="80" />
            </a>
          </div>
          <div class="logoEmpresa">
            <a target="_blank" href="https://www.ecocentro.es/">
              <b-img src="img/Logos/ecocentro.png" rounded width="auto" height="80" />
            </a>
          </div>
          <div class="logoEmpresa">
            <a target="_blank" href="https://www.lortiga.cat/">
              <b-img src="img/Logos/ortiga.png" rounded width="auto" height="80" />
            </a>
          </div>
          <div class="logoEmpresa">
            <a target="_blank" href="https://www.espacioorganico.com/">
              <b-img src="img/Logos/espacio.jpg" rounded width="auto" height="80" />
            </a>
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
            <h3>{{ $t('Inicio.contacte1') }}</h3>
            <p>{{ $t('Inicio.txtCon') }}</p>
            <div class="botones-contacto d-flex">
              <b-button variant="outline-warning" :to="localePath('/Contacte')">
                {{ $t('Inicio.btnCon') }}
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
