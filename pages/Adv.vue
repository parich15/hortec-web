<template>
  <div class="Adv">
    <b-container class="cabecera-peque clear-filter" filter-color="black" fluid>
      <div class="imagenCabeceraPeque advImg" />
      <b-row class="contenido-cab d-flex">
        <b-col class="col-md-12 tit-cop ">
          <h1 class="text-focus-in">
            Agrupació de <span>Defensa Vegetal</span>
          </h1>
        </b-col>
      </b-row>
    </b-container>
    <b-container fluid class="seccion1">
      <b-row class="fila1">
        <b-col class="col-12 col-md-5 imagen1">
          <div class="imagen">
            <img src="/img/Adv/Adv1.jpg" alt="">
          </div>
        </b-col>
        <b-col class="col-12 col-md-7 texto1">
          <div class="txtAdv1" data-aos="fade-up">
            <h3>L'ADV d'Hortec</h3>
            <p>
              Les sigles ADV corresponen a <b>Agrupació de Defensa Vegetal</b>. Les Agrupacions de Defensa Vegetal (ADV) són associacions d’agricultors independents o prèviament integrats en algun sistema associatiu (cooperatives, SAT, etc) que es constitueixen amb l’objectiu de rebre assessorament en aspectes de la sanitat vegetal i tots aquells temes tècnics que intervenen en la producció agrícola (fertilització, control d’adventícies, etc).

              Un altre objectiu fonamental de les ADV es col·laborar amb l’Administració (de la que rep suport econòmic per desenvolupar la seva activitat) per exemple en el seguiment de plagues i malalties i en la comunicació immediata qualsevol aparició atípica d’organismes nocius en els cultius. En l’actualitat les ADV i els seus serveis tècnics conformen la principal xarxa d’assessorament tècnic a les empreses agrícoles que existeix a Catalunya.

              L’ADV Hortec es va constituir al 1993 com a secció de la cooperativa amb l’objectiu donar assessorament i suport tècnic sobre protecció de cultius, fertilització, materials vegetals i altres qüestions agronòmiques als socis de la cooperativa dins de l’àmbit de l’Agricultura Ecològica.

              Per aquest motiu es contracta una tècnica que desenvoluparà la seva activitat fins al 1997. Des de aquell any i fins al 2003 l’activitat de l’ADV queda en suspens al no donar-se les condicions per contractar un altre tècnic. Al 2003 es reinicia l’activitat de l’ADV contractant de un tècnic que fins al moment desenvolupa la seva tasca de suport als socis de la cooperativa.
            </p>
          </div>
        </b-col>
      </b-row>
      <b-row class="Cta">
        <b-col class="col-12 col-md-7 colCta">
          <div class="CtaAdv" data-aos="zoom-in">
            <h5>
              Hi ha dos aspectes que marquen el perfil de la nostre ADV: per una banda la nostre orientació específica a la Producció Ecològica i per altre la dispersió dels socis en el territori.
            </h5>
          </div>
        </b-col>
      </b-row>
      <b-row class="fila2">
        <b-col class="col-12 col-md-5 imagen2">
          <div class="imagen" data-aos="fade-in">
            <img src="/img/Adv/Adv2.jpg" alt="">
          </div>
        </b-col>
        <b-col class="col-12 col-md-7 texto2">
          <div class="txtAdv2" data-aos="fade-up">
            <h3>Què cal sapiguer de l’Agricultura Ecològica?</h3>
            <p>
              L’assessorament en Agricultura Ecològica esta encara molt poc desenvolupat a casa nostre: manquen experiències, coneixements, etc. Això es una limitant a l’hora de donar una bona resposta als problemes agronòmics que puguin plantejar els socis.

              La dispersió territorial dels nostres socis no facilita la tasca d’assessorament directe sobre el camp. Per tant el servei que presta l’ADV al pagès està més aviat centrat en donar suport en la distància atenent consultes telefòniques o via e-mail, sobre prevenció i control de plagues i malalties, material vegetal ecològic, etc.

              A continuació responem algunes preguntes amb la intenció d’aclarir dubtes que se li poden plantejar tant al que s’inicia en el consum com en la producció d’aliments ecològics. Si teniu més dubtes o voleu ampliar informació poseu-vos en contacte amb nosaltres e intentarem donar-vos una resposta adient.
            </p>
          </div>
        </b-col>
      </b-row>
    </b-container>
    <b-container fluid class="seccionFaq">
      <b-row class="rowFaq">
        <b-col class="col-12 titFaq">
          <h3>Preguntes <span>Frecuents</span></h3>
        </b-col>
        <b-col class="col-12 colFaq">
          <div class="container d-flex">
            <faq />
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Faq from '../components/Adv/Faq.vue'
export default {
  name: 'Adv',
  components: {
    Faq
  }
}
</script>

<style lang="scss" scoped>

</style>
