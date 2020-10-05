<template>
  <div class="Equip">
    <b-container class="cabecera-peque clear-filter" filter-color="black" fluid>
      <div class="imagenCabeceraPeque equipImg" />
      <b-row class="contenido-cab d-flex">
        <b-col class="col-md-12 tit-cop ">
          <h1 class="text-focus-in">
            {{ $t('Equipo.titulo') }}<span>Hortec</span>
          </h1>
        </b-col>
      </b-row>
    </b-container>
    <b-container class="seccion1" fluid>
      <b-row class="mb-3 mb-md-5">
        <b-col class="col-12 col-md-10 my-3 my-md-5 titEq mx-auto">
          <h3 class="text-focus-in">
            La filosofia <span>Hortec</span>
          </h3>
        </b-col>
        <b-col class="col-12 col-md-6 txtEq">
          <div class="txtFilo" data-aos="fade-in">
            <p>
              {{ $t('Equipo.txtEquip') }}
            </p>
          </div>
        </b-col>
        <b-col class="col-12 col-md-6 imgEq">
          <div class="imgFilo" />
        </b-col>
      </b-row>
      <b-row class="comerciales mt-2 mt-md-5">
        <b-col class="col-12 col-md-7 txtComerciales">
          <div class="text d-flex flex-column justify-content-center my-3" data-aos="fade-right">
            <h3>
              {{ $t('Equipo.titCom') }} <span>Comercial</span>
            </h3>
            <hr>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam corrupti vitae, veniam dignissimos doloremque optio sapiente nisi voluptatum ea fugit nostrum neque iure aliquid quaerat cum animi inventore culpa esse. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod, est expedita rerum perspiciatis quae illo omnis minima corrupti impedit soluta temporibus ab placeat reprehenderit? Incidunt vitae sit iusto tempora ipsa?
            </p>
          </div>
        </b-col>
        <b-col class="col-12 col-md-5 imgCo">
          <div class="imgComerciales" />
        </b-col>
      </b-row>
    </b-container>
    <b-container class="trabajadoresComerciales" fluid>
      <b-row class="seccionComerciales">
        <b-col class="col-12 col-md-11 mx-auto">
          <div class="container d-flex my-5 justify-content-between">
            <trabajador
              nombre="Jalila Chalbat"
              rol="Coordinadora"
              :imagen="'https://via.placeholder.com/150x150'"
            />
            <trabajador
              nombre="Encarna Garcia"
              rol="Especialista Ventas"
              :imagen="'https://via.placeholder.com/150x150'"
              :delay="200"
            />
            <trabajador
              nombre="Laura Llobera"
              rol="Atención al Cliente"
              :imagen="'https://via.placeholder.com/150x150'"
              :delay="400"
            />
          </div>
        </b-col>
      </b-row>
    </b-container>
    <b-container class="seccion2" fluid>
      <b-row class="almacen mt-2 mt-md-5">
        <b-col class="col-12 col-md-7 txtAlmacen">
          <div class="text d-flex flex-column justify-content-center my-3" data-aos="fade-right">
            <h3>
              {{ $t('Equipo.titMag') }} <span> {{ $t('Equipo.titMag2') }}</span>
            </h3>
            <hr>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam corrupti vitae, veniam dignissimos doloremque optio sapiente nisi voluptatum ea fugit nostrum neque iure aliquid quaerat cum animi inventore culpa esse. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod, est expedita rerum perspiciatis quae illo omnis minima corrupti impedit soluta temporibus ab placeat reprehenderit? Incidunt vitae sit iusto tempora ipsa?
            </p>
          </div>
        </b-col>
        <b-col class="col-12 col-md-5 imgCo">
          <div class="imgMagatzem" />
        </b-col>
      </b-row>
      <b-row class="seccionMagatzem">
        <b-col class="col-12 col-md-11 mx-auto">
          <div class="container  my-5">
            <div class="almacen1 d-flex justify-content-between mb-5">
              <trabajador
                nombre="Moises Lopez"
                rol="Coordinador"
                :imagen="'https://via.placeholder.com/150x150'"
              />
              <trabajador
                nombre="Alba Cantí"
                rol="Coordinadora"
                :imagen="'https://via.placeholder.com/150x150'"
                :delay="200"
              />
              <trabajador
                nombre="Richard Cordoba"
                rol="Coordinador"
                :imagen="'https://via.placeholder.com/150x150'"
                :delay="400"
              />
              <trabajador
                nombre="Miguel Angel Revilla"
                rol="Coordinador"
                :imagen="'https://via.placeholder.com/150x150'"
                :delay="600"
              />
            </div>
            <div class="almacen2 d-flex justify-content-between">
              <trabajador
                nombre="Alejandro Moreno"
                rol="Mosso de Magatzem"
                :imagen="'https://via.placeholder.com/150x150'"
                :delay="600"
              />
              <trabajador
                nombre="Antonio Villegas"
                rol="Picking i Loading"
                :imagen="'https://via.placeholder.com/150x150'"
                :delay="400"
              />
              <trabajador
                nombre="Noemí Cordes"
                rol="Mossa de Magatzem"
                :imagen="'https://via.placeholder.com/150x150'"
                :delay="200"
              />
              <trabajador
                nombre="Carles Estruch"
                rol="Técnic de Magatzem"
                :imagen="'https://via.placeholder.com/150x150'"
                :delay="0"
              />
            </div>
          </div>
        </b-col>
      </b-row>
    </b-container>
    <b-container class="seccion3" fluid>
      <b-row class="Transport mt-2 mt-md-5">
        <b-col class="col-12 col-md-7 txtTransport">
          <div class="text d-flex flex-column justify-content-center my-3" data-aos="fade-right">
            <h3>
              {{ $t('Equipo.titTrans') }} <span> {{ $t('Equipo.titTrans2') }}</span>
            </h3>
            <hr>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam corrupti vitae, veniam dignissimos doloremque optio sapiente nisi voluptatum ea fugit nostrum neque iure aliquid quaerat cum animi inventore culpa esse. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod, est expedita rerum perspiciatis quae illo omnis minima corrupti impedit soluta temporibus ab placeat reprehenderit? Incidunt vitae sit iusto tempora ipsa?
            </p>
          </div>
        </b-col>
        <b-col class="col-12 col-md-5 imgCo">
          <div class="imgTrans" />
        </b-col>
      </b-row>
      <b-row class="seccionTrans">
        <b-col class="col-12 col-md-11 mx-auto">
          <div class="container  my-5">
            <div class="transportistas1 d-flex justify-content-between mb-5">
              <trabajador
                nombre="Ramón Acab"
                rol="Cap de Rutes"
                :imagen="'https://via.placeholder.com/150x150'"
              />
              <trabajador
                nombre="Toni Chopa"
                rol="Subcap de rutes"
                :imagen="'https://via.placeholder.com/150x150'"
                :delay="200"
              />
              <trabajador
                nombre="Ricard Darder"
                rol="Transportista"
                :imagen="'https://via.placeholder.com/150x150'"
                :delay="400"
              />
              <trabajador
                nombre="Gabriel Chachi"
                rol="Transportista"
                :imagen="'https://via.placeholder.com/150x150'"
                :delay="600"
              />
            </div>
            <div class="transportistas2 d-flex justify-content-between">
              <trabajador
                nombre="Luis Olmedo"
                rol="Transportista"
                :imagen="'https://via.placeholder.com/150x150'"
                :delay="600"
              />
              <trabajador
                nombre="Ignasi Delavie"
                rol="Transportista"
                :imagen="'https://via.placeholder.com/150x150'"
                :delay="400"
              />
              <trabajador
                nombre="Marta Tarragona"
                rol="Transportista"
                :imagen="'https://via.placeholder.com/150x150'"
                :delay="200"
              />
              <trabajador
                nombre="Francis Drake"
                rol="Transportista"
                :imagen="'https://via.placeholder.com/150x150'"
                :delay="0"
              />
            </div>
          </div>
        </b-col>
      </b-row>
    </b-container>
    <b-container class="seccion4" fluid>
      <b-row class="Administracio mt-2 mt-md-5">
        <b-col class="col-12 col-md-7 txtAdmin">
          <div class="text d-flex flex-column justify-content-center my-3" data-aos="fade-right">
            <h3>
              {{ $t('Equipo.titAdm') }} <span> {{ $t('Equipo.titAdm2') }}</span>
            </h3>
            <hr>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam corrupti vitae, veniam dignissimos doloremque optio sapiente nisi voluptatum ea fugit nostrum neque iure aliquid quaerat cum animi inventore culpa esse. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod, est expedita rerum perspiciatis quae illo omnis minima corrupti impedit soluta temporibus ab placeat reprehenderit? Incidunt vitae sit iusto tempora ipsa?
            </p>
          </div>
        </b-col>
        <b-col class="col-12 col-md-5 imgCo">
          <div class="imgAdmin" />
        </b-col>
      </b-row>
      <b-row class="seccionAdmin">
        <b-col class="col-12 col-md-11 mx-auto">
          <div class="container  my-5">
            <div class="adm1 d-flex justify-content-between mb-5">
              <trabajador
                nombre="Nuria Canti"
                rol="Boss of bosses"
                :imagen="'https://via.placeholder.com/150x150'"
              />
              <trabajador
                nombre="Mireia Deola"
                rol="Cap de Compres"
                :imagen="'https://via.placeholder.com/150x150'"
                :delay="200"
              />
              <trabajador
                nombre="Meritxell Guay"
                rol="Cap de Qualitat"
                :imagen="'https://via.placeholder.com/150x150'"
                :delay="400"
              />
              <trabajador
                nombre="Montse Money"
                rol="Contabilitat i Finançes"
                :imagen="'https://via.placeholder.com/150x150'"
                :delay="200"
              />
              <trabajador
                nombre="Sheila Pérez"
                rol="Dpt Incidències"
                :imagen="'https://via.placeholder.com/150x150'"
              />
            </div>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Trabajador from '../components/Equip/Trabajador.vue'
export default {
  name: 'Equip',
  components: {
    Trabajador
  }
}
</script>

<style lang="scss" scoped>

</style>
