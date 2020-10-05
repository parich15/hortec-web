<template>
  <b-navbar toggleable="lg" type="light" fixed="top" class="MenuNav" :class="{'solid':!transNavbar}">
    <b-navbar-brand tag="h1" class="mb-0 titulo" :to="localePath('/')">
      <logoHortec />
    </b-navbar-brand>
    <b-navbar-toggle target="nav-collapse">
      <template v-slot:default="{ expanded }">
        <b-icon v-if="expanded" icon="three-dots-vertical" />
        <b-icon v-else icon="three-dots" />
      </template>
    </b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="ml-auto">
        <b-navbar-nav class="my-auto linksMenu">
          <b-nav-item :to="localePath('/Cooperativa')">
            Cooperativa
          </b-nav-item>
          <b-nav-item :to="localePath('/Families')">
            {{ $t('Navbar.link2') }}
          </b-nav-item>
          <b-nav-item :to="localePath('/Adv')">
            ADV
          </b-nav-item>
          <b-nav-item :to="localePath('/Equip')">
            {{ $t('Navbar.link4') }}
          </b-nav-item>
          <b-nav-item :to="localePath('/Blog')">
            Blog
          </b-nav-item>
          <b-nav-item :to="localePath('/Contacte')">
            {{ $t('Navbar.link6') }}
          </b-nav-item>
        </b-navbar-nav>
        <b-navbar-nav class="my-auto botonCta">
          <b-nav-item>
            <b-button id="popoverBotiga" class="botiga" @click="modalTienda = !modalTienda">
              {{ $t('Navbar.botiga') }}
            </b-button>
            <b-modal v-model="modalTienda" centered title="Accés Botiga Web">
              <b-container fluid>
                <b-row class="rowModal d-flex">
                  <b-col class="colModal">
                    <div class="bodyModal d-flex">
                      <div class="logoHortec d-flex justify-content-center">
                        <logoHortec />
                      </div>
                      <div class="txtModal">
                        <h3>{{ $t('Modal.tit') }}</h3>
                        <p>
                          {{ $t('Modal.txt') }}
                          <br>
                          {{ $t('Modal.txt2') }}
                        </p>
                      </div>
                    </div>
                  </b-col>
                </b-row>
              </b-container>
              <template v-slot:modal-footer="{ cancel }">
                <b-button variant="warning" class="btnBotiga" @click="botiga()">
                  {{ $t('Modal.btn1') }}
                </b-button>
                <b-button variant="danger" class="btnCancelModal" @click="cancel()">
                  {{ $t('Modal.btn2') }}
                </b-button>
              </template>
            </b-modal>
          </b-nav-item>
        </b-navbar-nav>

        <b-navbar-nav class="my-auto idiomas">
          <div class="d-flex selector">
            <div class="esp">
              <nuxt-link :to="switchLocalePath('esp')">
                <img src="../static/spain.png" alt="">
              </nuxt-link>
            </div>
            <div class="cat">
              <nuxt-link :to="switchLocalePath('cat')">
                <img src="../static/catalonia.png" alt="">
              </nuxt-link>
            </div>
          </div>
        </b-navbar-nav>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
import LogoHortec from '../components/LogoHortec'
export default {
  name: 'Navbar',
  components: {
    LogoHortec
  },
  data () {
    return {
      modalTienda: false,
      transNavbar: true,
      lastScrollPosition: 0
    }
  },
  mounted () {
    window.addEventListener('scroll', this.onScroll)
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.onScroll)
  },
  methods: {
    onScroll () {
      const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop
      if (currentScrollPosition < 0) {
        return
      }

      if (Math.abs(currentScrollPosition - this.lastScrollPosition) < 60) {
        return
      }
      this.transNavbar = currentScrollPosition < 100
      this.lastScrollPosition = currentScrollPosition
    },

    botiga () {
      window.open('https://botiga.hortec.org/login', '_blank')
    }
  }

}
</script>
