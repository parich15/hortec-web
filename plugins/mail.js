import Vue from 'vue'
import { MailSlurp } from 'mailslurp-client'

Vue.use(MailSlurp)
const mailslurp = new MailSlurp({ apiKey: 'c2a2a40105f1ac681475982e9483752bf8401e6fa70d25ae1b85a5fdfbd50ddd' })
const inbox = async function () {
  await mailslurp.createInbox()
}
console.log(inbox.emailAddress)
