<template>
  <div>
    <b-container id="Footer" fluid>
      <b-row class="row-Footer ">
        <b-col class="col-12 col-md-4 d-flex primerSector">
          <div>
            <p>Politica de Privacitat i Cookies</p>
          </div>
        </b-col>
        <b-col class="col-12 col-md-4 d-flex logo">
          <div>
            <logoHortec />
          </div>
        </b-col>
        <b-col class="col-12 col-md-4 d-flex segundoSector">
          <div>
            <p>Hortec Sccl - {{ new Date().getFullYear() }} </p>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import LogoHortec from '../components/LogoHortec'
export default {
  name: 'Footer',
  components: {
    LogoHortec
  }
}
</script>

<style lang="scss" scoped>

</style>
