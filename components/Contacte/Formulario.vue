<template>
  <div>
    <ValidationObserver v-slot="{ pristine, invalid, passed }">
      <b-form v-if="show" @submit.prevent="onSubmit" @reset="onReset">
        <ValidationProvider
          v-slot="{ errors }"
          name="Username"
          rules="required|txtmin:2|txtmax:20"
        >
          <b-form-group
            id="nom-contacto"
            label="Com et dius?"
            label-for="nombre"
          >
            <b-form-input
              id="nombre"
              v-model="formulario.nom"
              required
              placeholder="Digan's el teu nom"
            />
            <span class="input-invalid-message">
              {{ errors[0] }}
            </span>
          </b-form-group>
        </ValidationProvider>

        <ValidationProvider v-slot="{errors}" rules="required|txtmax:30">
          <b-form-group
            id="email-contacto"
            label="Quin es el teu correu?:"
            label-for="email"
          >
            <b-form-input
              id="email"
              v-model="formulario.email"
              type="email"
              required
              placeholder="Digan's el teu email"
            />
            <span class="input-invalid-message">
              {{ errors[0] }}
            </span>
          </b-form-group>
        </ValidationProvider>

        <ValidationProvider v-slot="{ errors }" rules="minmax:9,9|required">
          <b-form-group
            id="telefon-contacte"
            label="El teu numero de telèfon:"
            label-for="telf"
            description="Mai compartirem les teves dades amb ningú"
          >
            <b-form-input
              id="telf"
              v-model="formulario.tlf"
              required
              placeholder="Per últim, el teu telèfon"
              type="number"
            />
            <span class="input-invalid-message">
              {{ errors[0] }}
            </span>
          </b-form-group>
        </ValidationProvider>

        <ValidationProvider v-slot="{ errors }" rules="cp:5,5|required">
          <b-form-group
            id="codi-postal"
            label="Codi Postal"
            label-for="CP"
          >
            <b-form-input
              id="CP"
              v-model="formulario.cp"
              required
              placeholder="D'on ets?"
              type="number"
            />
            <span class="input-invalid-message">
              {{ errors[0] }}
            </span>
          </b-form-group>
        </ValidationProvider>

        <ValidationProvider v-slot="{errors}" rules="required">
          <b-form-group id="preguntes">
            <b-form-radio-group id="radiobuttons" v-model="formulario.seleccion">
              <b-form-radio value="Informació">
                Vull més Informació
              </b-form-radio>
              <b-form-radio value="Sol·liciutd d'alta">
                Vull fer me client
              </b-form-radio>
            </b-form-radio-group>
            <span class="input-invalid-message">
              {{ errors[0] }}
            </span>
          </b-form-group>
        </ValidationProvider>
        <!-- <div>
          <select id="ciudades" v-model="regionSeleccionada" name="Ciudad">
            <option v-for="region in regiones[0]" :key="region.isoCode" :value="region.name">
              {{ region.name }}
            </option>
          </select>
        </div> -->
        <b-button type="submit" variant="primary" :class="{'disabled':pristine || invalid || !passed }" :disabled="pristine|| invalid || !passed">
          Enviar
        </b-button>
        <b-button type="reset" variant="outline-danger">
          Esborra
        </b-button>
      </b-form>
    </ValidationObserver>

    <b-card class="mt-3" header="Form Data Result">
      <pre class="m-0">{{ formulario }}</pre>
    </b-card>
  </div>
</template>

<script>
export default {
  name: 'Formulario',
  data () {
    return {
      formulario: {
        nom: '',
        email: '',
        tlf: '',
        cp: '',
        seleccion: []
      },
      // regionSeleccionada: '',
      // regiones: [],
      show: true,
      errors: []
    }
  },
  // mounted () {
  //   const axios = require('axios')
  //   axios({
  //     method: 'GET',
  //     url: 'https://wft-geo-db.p.rapidapi.com/v1/geo/countries/Q29/regions',
  //     headers: {
  //       'content-type': 'application/octet-stream',
  //       'x-rapidapi-host': 'wft-geo-db.p.rapidapi.com',
  //       'x-rapidapi-key': '8f4726da60mshd8f49a12fcd415dp17ffdbjsna3fea89eebcf',
  //       useQueryString: true
  //     }
  //   })
  //     .then((response) => {
  //       console.log(response.data.data)
  //       this.regiones.push(response.data.data)
  //       console.log(this.regiones)
  //     })
  //     .catch((error) => {
  //       console.log(error)
  //     })
  // },

  methods: {
    onSubmit (evt) {
      evt.preventDefault()
      alert(JSON.stringify(this.formulario))
    },
    onReset (evt) {
      evt.preventDefault()
      // Reset our formulario values
      this.formulario.email = ''
      this.formulario.nom = ''
      this.formulario.tlf = ''
      this.formulario.seleccion = []
      this.formulario.cp = ''
      // Trick to reset/clear native browser form validation state
      this.show = false
      this.$nextTick(() => {
        this.show = true
      })
    }
  }
}
</script>
