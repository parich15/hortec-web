<template>
<!-- eslint-disable -->
  <div class="containerComponenteFaq">
    <div v-for="(pregunta,idx) in preguntas" :key="idx" class="faqItem" data-aos="fade-in" data-aos-delay="300">
      <b-button v-b-toggle="pregunta.id" block class="btnFaq">
        {{ pregunta.titulo }} - <b-icon-arrow-bar-down />
      </b-button>
      <b-collapse :id="pregunta.id" :key="idx" class="mt-2">
        <b-card class="bodyCard">
          <p class="cardFaq" v-html="pregunta.texto" />
        </b-card>
      </b-collapse>
    </div>
  </div>
  <!-- eslint-enable -->
</template>

<script>
export default {
  name: 'Faq',
  data () {
    return {
      preguntas: [
        { id: '1', titulo: this.$i18n.t('Adv.p1'), texto: this.$i18n.t('Adv.r1') },
        { id: '2', titulo: this.$i18n.t('Adv.p2'), texto: this.$i18n.t('Adv.r2') },
        { id: '3', titulo: this.$i18n.t('Adv.p3'), texto: this.$i18n.t('Adv.r3') },
        { id: '4', titulo: this.$i18n.t('Adv.p4'), texto: this.$i18n.t('Adv.r4') },
        { id: '5', titulo: this.$i18n.t('Adv.p5'), texto: this.$i18n.t('Adv.r5') },
        { id: '6', titulo: this.$i18n.t('Adv.p6'), texto: this.$i18n.t('Adv.r6') },
        { id: '7', titulo: this.$i18n.t('Adv.p7'), texto: this.$i18n.t('Adv.r7') },
        { id: '8', titulo: this.$i18n.t('Adv.p8'), texto: this.$i18n.t('Adv.r8') },
        { id: '9', titulo: this.$i18n.t('Adv.p9'), texto: this.$i18n.t('Adv.r9') },
        { id: '10', titulo: this.$i18n.t('Adv.p10'), texto: this.$i18n.t('Adv.r10') },
        { id: '11', titulo: this.$i18n.t('Adv.p11'), texto: this.$i18n.t('Adv.r11') },
        { id: '12', titulo: this.$i18n.t('Adv.p12'), texto: this.$i18n.t('Adv.r12') }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
