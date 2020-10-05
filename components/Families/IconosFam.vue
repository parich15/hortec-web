<template>
  <div class="d-flex componente">
    <div v-for="(item,idx) in items" :key="idx" class="item" data-aos="fade-in">
      <div class="icono">
        <img :src="item.icono" alt="">
      </div>
      <div class="textoItem">
        <h4>{{ item.titulo }}</h4>
        <p>{{ item.texto }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IconosFam',
  data () {
    return {

      items: [
        { icono: '/img/fam/i1.png', titulo: this.$i18n.t('Fam.ico1'), texto: this.$i18n.t('Fam.desc1') },
        { icono: '/img/fam/i2.png', titulo: this.$i18n.t('Fam.ico2'), texto: this.$i18n.t('Fam.desc2') },
        { icono: '/img/fam/i3.png', titulo: this.$i18n.t('Fam.ico3'), texto: this.$i18n.t('Fam.desc3') },
        { icono: '/img/fam/i4.png', titulo: this.$i18n.t('Fam.ico4'), texto: this.$i18n.t('Fam.desc4') },
        { icono: '/img/fam/i5.png', titulo: this.$i18n.t('Fam.ico5'), texto: this.$i18n.t('Fam.desc5') },
        { icono: '/img/fam/i6.png', titulo: this.$i18n.t('Fam.ico6'), texto: this.$i18n.t('Fam.desc6') }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
