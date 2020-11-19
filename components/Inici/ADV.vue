<template>
  <div>
    <b-row class="adv d-flex">
      <b-col class="col-12 p-0 separador">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ffa726" fill-opacity="1" d="M0,192L80,192C160,192,320,192,480,170.7C640,149,800,107,960,106.7C1120,107,1280,149,1360,170.7L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z" /></svg>
      </b-col>
      <b-col class="col-12  d-flex containerAdv p-0 h-auto">
        <div class="contenido d-flex" data-aos="flip-up">
          <div>
            <h3 class="mb-2">
              {{ $t('Inicio.advHortec') }}
            </h3>
          </div>
          <div>
            <p class="mt-2">
              {{ $t('Inicio.txtAdv') }}
            </p>
          </div>
          <div class="d-flex justify-content-center">
            <b-button :to="localePath('/ADV')">
              {{ $t('Inicio.btnAdv') }}
            </b-button>
          </div>
        </div>
      </b-col>
      <b-col class="col-lg-12 separadorBottom p-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ffa726" fill-opacity="1" d="M0,192L80,192C160,192,320,192,480,170.7C640,149,800,107,960,106.7C1120,107,1280,149,1360,170.7L1440,192L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z" /></svg>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: 'Adv'
}
</script>
