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
        { icono: './img/fam/i1.png', titulo: 'Productes Naturals', texto: 'Els nostres productes arriben del camp a la teva botiga, sempre garantint la màxima cualitat.' },
        { icono: './img/fam/i2.png', titulo: 'Collita Responsable', texto: 'Durant tot l´any servim gran varietat de productes sempre respectant les époques de collita.' },
        { icono: './img/fam/i3.png', titulo: 'Etiqueta CCPAE', texto: 'Tots els nostres productes venen amb el segell CCPAE que asegura l´origen ecològic' },
        { icono: './img/fam/i4.png', titulo: 'Gran Varietat', texto: 'A part de la gran selecció de fruites i verdures oferim un ampli catàleg de productes d´altres families' },
        { icono: './img/fam/i5.png', titulo: 'Rotació Setmanal', texto: 'Setmanalment innovem i portem nous productes de totes les families.' },
        { icono: './img/fam/i6.png', titulo: 'Fem Cooperativa', texto: 'A Hortec volem seguir creixent i fer que altres creixin amb nosaltres com una gran familia.' }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
