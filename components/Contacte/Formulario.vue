<template>
  <div>
    <p v-if="errors.length">
      <b>Por favor, corrija el(los) siguiente(s) error(es):</b>
      <ul>
        <li v-for="error in errors" :key="error">
          {{ error }}
        </li>
      </ul>
    </p>
    <b-form v-if="show" @submit="onSubmit" @reset="onReset">
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
      </b-form-group>

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
      </b-form-group>

      <b-form-group
        id="telefon-contacte"
        label="El teu numero de telèfon:"
        label-for="telf"
        description="Mai compartirem les teves dades amb ningú"
      >
        <b-form-input
          id="telf"
          v-model="formulario.tlf"
          :state="validacionTelf"
          required
          placeholder="Per últim, el teu telèfon"
          type="number"
        />
        <b-form-invalid-feedback :state="validacionTelf">
          El telefono no es válido
        </b-form-invalid-feedback>
      </b-form-group>

      <b-form-group id="preguntes">
        <b-form-radio-group id="radiobuttons" v-model="formulario.seleccion">
          <b-form-radio value="Informació">
            Vull més Informació
          </b-form-radio>
          <b-form-radio value="Sol·liciutd d'alta">
            Vull fer me client
          </b-form-radio>
        </b-form-radio-group>
      </b-form-group>

      <b-button type="submit" variant="primary">
        Enviar
      </b-button>
      <b-button type="reset" variant="danger">
        Neteja
      </b-button>
    </b-form>
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
        email: '',
        nom: '',
        tlf: '',
        seleccion: []
      },
      show: true,
      errors: []
    }
  },
  computed: {
    validacionTelf () {
      return this.formulario.tlf.lengt > 8 || this.formulario.tlf.length < 10
    }
  },
  methods: {
    onSubmit (evt) {
      evt.preventDefault()
      alert(JSON.stringify(this.formulario))
    },
    onReset (evt) {
      evt.preventDefault()
      // Reset our formulario values
      this.formulario.email = ''
      this.formulario.name = ''
      this.formulario.tlf = ''
      this.formulario.checked = []
      // Trick to reset/clear native browser form validation state
      this.show = false
      this.$nextTick(() => {
        this.show = true
      })
    }
  }
}
</script>
