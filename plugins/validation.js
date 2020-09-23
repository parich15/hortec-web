import Vue from 'vue'
import { ValidationProvider, ValidationObserver, extend } from 'vee-validate'
import { required } from 'vee-validate/dist/rules'

Vue.component('ValidationProvider', ValidationProvider)
Vue.component('ValidationObserver', ValidationObserver)

extend('required', {
  ...required,
  message: 'Aquest camp es obligatori'
})

extend('txtmin', {
  validate (value, args) {
    return value.length >= args.length
  },
  params: ['length'],
  message: 'El text es massa curt'
})

extend('txtmax', {
  validate (value, args) {
    return value.length <= args.length
  },
  params: ['length'],
  message: 'El text es massa llarg ( limit 20 caracters )'
})

extend('minmax', {
  validate (value, args) {
    const length = value.length
    return length >= args.min && length <= args.max
  },
  params: ['min', 'max'],
  message: 'El número de telefon ha de ser de 9 números'
})

extend('cp', {
  validate (value, args) {
    const length = value.length
    return length >= args.min && length <= args.max
  },
  params: ['min', 'max'],
  message: 'El Codi Postal només pot tenir 5 números'
})
