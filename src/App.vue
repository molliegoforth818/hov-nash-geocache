
<template>
<v-app>
  <nav-bar/>
  <v-main>
    <router-view />
  </v-main>
      <v-welcome-message bottom right :value="welcomeMessage">{{
      wecomeMessage
    }}</v-welcome-message>
  </v-app>
</template>

<script>
import { mapMutations, mapState } from "vuex";
import { latLng } from "leaflet";
import { auth } from "./firebase";
import NavBar from "./components/NavBar"
export default {
  components: {
    NavBar
  },
  data() {
    return {
      user: auth.currentUser,
    };
  },
  mounted() {
    auth.onAuthStateChanged((user) => {
      this.user = user;
    });
    window.navigator.geolocation.getCurrentPosition(({ coords }) => {
      const userCoords = latLng(coords.latitude, coords.longitude);
      this.setUserCoords(userCoords);
    });
  },
  methods: {
    ...mapMutations(["setUser", "setUserCoords"])
  },
  computed: {
    ...mapState(["welcomeMessage"])
},
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}
#nav a {
  font-weight: bold;
  color: #2c3e50;
}
#nav a.router-link-exact-active {
  color: #42b983;
}
</style>