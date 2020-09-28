<template>
  <b-form
    class="Formulario"
    name="Contacto"
    method="post"
    data-netlify="true"
    data-netlify-honeypot="bot-field"
    enctype="application/x-www-form-urlencoded"
    @submit.prevent="handleSubmit"
    @reset="onReset"
  >
    <input type="hidden" name="form-name" value="Contacto">
    <ValidationObserver v-slot="{ pristine, invalid, passed }">
      <ValidationProvider
        v-slot="nombre"
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
            v-model="formulario.Nombre"
            type="text"
            name="Nombre"

            required
            placeholder="Digan's el teu nom"
          />
          <span v-show="errors" class="input-invalid-message">
            {{ nombre.errors[0] }}
          </span>
        </b-form-group>
      </ValidationProvider>

      <ValidationProvider v-slot="email" rules="required|txtmax:30" name="email">
        <b-form-group
          id="email-contacto"
          label="Quin es el teu correu?:"
          label-for="email"
        >
          <b-form-input
            id="email"
            v-model="formulario.Email"
            type="email"
            name="Email"
            required
            placeholder="Digan's el teu email"
          />
          <span v-show="errors" class="input-invalid-message">
            {{ email.errors[0] }}
          </span>
        </b-form-group>
      </ValidationProvider>

      <ValidationProvider v-slot="Telefono" rules="minmax:9,9|required" name="telefono">
        <b-form-group
          id="telefon-contacte"
          label="El teu numero de telèfon:"
          label-for="telf"
          description="Mai compartirem les teves dades amb ningú"
        >
          <b-form-input
            id="telf"
            v-model="formulario.Telefono"
            name="Telefono"
            required
            placeholder="Per últim, el teu telèfon"
            type="number"
          />
          <span v-show="errors" class="input-invalid-message">
            {{ Telefono.errors[0] }}
          </span>
        </b-form-group>
      </ValidationProvider>

      <ValidationProvider v-slot="codi" rules="cp:5,5|required" name="CP">
        <b-form-group
          id="codi-postal"
          label="Codi Postal"
          label-for="CP"
        >
          <b-form-input
            id="CP"
            v-model="formulario.CP"
            required
            placeholder="D'on ets?"
            type="number"
            name="CP"
          />
          <span v-show="errors" class="input-invalid-message">
            {{ codi.errors[0] }}
          </span>
        </b-form-group>
      </ValidationProvider>

      <ValidationProvider v-slot="pregunta" rules="required" name="preguntes">
        <b-form-group id="preguntes">
          <b-form-radio-group id="radiobuttons" v-model="formulario.Preguntas" name="Preguntas">
            <b-form-radio value="Informació">
              Vull més Informació
            </b-form-radio>
            <b-form-radio value="Sol·liciutd d'alta">
              Vull fer me client
            </b-form-radio>
          </b-form-radio-group>
          <span v-show="errors" class="input-invalid-message">
            {{ pregunta.errors[0] }}
          </span>
        </b-form-group>
      </ValidationProvider>
      <div class="d-flex justify-content-around contBtn">
        <b-button type="submit" variant="primary" :class="{'disabled':pristine || invalid || !passed }" :disabled="pristine|| invalid || !passed">
          Enviar
        </b-button>
        <b-button type="reset" variant="outline-danger">
          Esborra
        </b-button>
      </div>
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
        Nombre: null,
        Email: null,
        Telefono: null,
        CP: null,
        Preguntas: []
      },
      show: true,
      errors: []
    }
  },
  methods: {
    onReset (evt) {
      evt.preventDefault()
      // Reset our formulario values
      this.formulario.Email = null
      this.formulario.Nombre = null
      this.formulario.Telefono = null
      this.formulario.Preguntas = []
      this.formulario.CP = null
      // Trick to reset/clear native browser form validation state
      this.show = false
      this.$nextTick(() => {
        this.show = true
      })
    },
    encode (data) {
      const formData = new FormData()
      for (const key of Object.keys(data)) {
        formData.append(key, data[key])
      }
      return formData
    },
    handleSubmit (e) {
      const axiosConfig = {
        header: { 'Content-Type': 'application/x-www-form-urlencoded' }
      }
      axios.post(
        '/Contacte',
        this.encode({
          'form-name': e.target.getAttribute('name'),
          ...this.formulario
        }),
        axiosConfig
      )
        .then(
          alert("El formulario s'ha entregat correctament")
        )
    }
  }
}
</script>
