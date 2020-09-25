<template>
  <b-form
    class="formulario"
    name="contacto"
    method="post"
    data-netlify="true"
    data-netlify-honeypot="bot-field"
    enctype="application/x-www-form-urlencoded"
    @submit.prevent="handleSubmit"
    @reset="onReset"
  >
    <ValidationObserver v-slot="{ pristine, invalid, passed }">
      <input type="hidden" name="form-name" value="contacto">
      <ValidationProvider
        v-slot="{ errors }"
        name="Nombre"
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
            type="text"
            name="Nombre"
            required
            placeholder="Digan's el teu nom"
          />
          <span class="input-invalid-message">
            {{ errors[0] }}
          </span>
        </b-form-group>
      </ValidationProvider>

      <ValidationProvider v-slot="{errors}" rules="required|txtmax:30" name="email">
        <b-form-group
          id="email-contacto"
          label="Quin es el teu correu?:"
          label-for="email"
        >
          <b-form-input
            id="email"
            v-model="formulario.email"
            type="email"
            name="email"
            required
            placeholder="Digan's el teu email"
          />
          <span class="input-invalid-message">
            {{ errors[0] }}
          </span>
        </b-form-group>
      </ValidationProvider>

      <ValidationProvider v-slot="{ errors }" rules="minmax:9,9|required" name="telefono">
        <b-form-group
          id="telefon-contacte"
          label="El teu numero de telèfon:"
          label-for="telf"
          description="Mai compartirem les teves dades amb ningú"
        >
          <b-form-input
            id="telf"
            v-model="formulario.tlf"
            name="telefono"
            required
            placeholder="Per últim, el teu telèfon"
            type="number"
          />
          <span class="input-invalid-message">
            {{ errors[0] }}
          </span>
        </b-form-group>
      </ValidationProvider>

      <ValidationProvider v-slot="{ errors }" rules="cp:5,5|required" name="CP">
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
            name="CP"
          />
          <span class="input-invalid-message">
            {{ errors[0] }}
          </span>
        </b-form-group>
      </ValidationProvider>

      <ValidationProvider v-slot="{errors}" rules="required" name="preguntes">
        <b-form-group id="preguntes">
          <b-form-radio-group id="radiobuttons" v-model="formulario.seleccion" name="preguntes">
            <b-form-radio value="Informació" name="Info">
              Vull més Informació
            </b-form-radio>
            <b-form-radio value="Sol·liciutd d'alta" name="Client">
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
    </ValidationObserver>
  </b-form>
</template>

<script>
import axios from 'axios'
export default {

  name: 'Formulario',
  data () {
    return {
      formulario: {
        nom: null,
        email: null,
        tlf: null,
        cp: null,
        seleccion: []
      },
      // regionSeleccionada: '',
      // regiones: [],
      show: true,
      errors: []
    }
  },

  methods: {
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
    },
    encode (data) {
      return Object.keys(data)
        .map(
          key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
        )
        .join('&')
    },
    handleSubmit () {
      const axiosConfig = {
        header: { 'Content-Type': 'application/x-www-form-urlencoded' }
      }
      axios.post(
        '/Contacte',
        this.encode({
          'form-name': 'contacto',
          ...this.formulario
        }),
        axiosConfig
      )
    }
  }
}

</script>
