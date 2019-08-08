<template>
  <div>
    <nav>
      <v-toolbar flat app>
        <v-toolbar-side-icon v-show="!drawer" @click="draw"></v-toolbar-side-icon>
        <v-icon large v-show="drawer" @click="draw">close</v-icon>
        <v-toolbar-title>
          <span class="pink--text font-weight-bold">Todo</span>
          <span class="text-uppercase grey--text">Ninjas</span>
        </v-toolbar-title>
      
        <v-spacer></v-spacer>

        <v-menu offset-y>
          <v-btn flat  color="grey" dark slot="activator">Menu</v-btn>
          <v-list>
            <v-list-tile v-for="item in links" :key="item.key"  router :to="item.route">
              <v-list-tile-title>{{ item.text }}</v-list-tile-title>
            </v-list-tile>
          </v-list>
        </v-menu>
        <v-btn flat  color="grey">
          <span>Sign Out</span>
          <v-icon right>exit_to_app</v-icon>
        </v-btn>
      </v-toolbar>

      <v-navigation-drawer app v-model="drawer" class="success darken-3">
        <v-layout column align-center>
          <v-flex class="mt-5">
            <v-avatar size="100">
              <img src="/img/avatar-1.png" alt="">
            </v-avatar>
            <p class="white--text subheading mt-1">Geek Maros</p>
          </v-flex>
          <v-flex >
            <Popup/>
          </v-flex>
        </v-layout>
        <v-list >
            <v-list-tile v-for="link in links" :key="link.text" router :to="link.route">
              <v-list-tile-action>
                <v-icon class="white--text">{{link.icon}}</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title class="white--text">{{link.text}}</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
        </v-list>
      </v-navigation-drawer>
    </nav>
  </div>
</template>

<script>
import Popup from '@/components/Popup.vue'

export default {
  data(){
    return{
      drawer: false,
      links: [
          {icon: 'dashboard', text: 'Dashboard', route: '/'},
          {icon: 'folder', text: 'My Project', route: '/project'},
          {icon: 'person', text: 'Team', route: '/team'},
      ]
    }
  },
  methods:{
    draw(){
      return this.drawer = !this.drawer
    }
  },
  components: {
    Popup,
  }
};
</script>

<style lang="scss" scoped>
</style>