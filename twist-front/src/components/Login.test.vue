<template>
  <div id="app">
    <v-container fluid>
      <facebook-login
        class="button"
        appId="2777693628992543"
        @login="onLogin"
        @logout="onLogout"
        @get-initial-status="getUserData"
        @sdk-loaded="sdkLoaded"
      >
      </facebook-login>
      <div v-if="isConnected" class="information">
        <h1>My Facebook Information</h1>
        <div class="well">
          <div class="list-item">
            <img :src="picture" />
          </div>
          <div class="list-item">
            <i>{{ name }}</i>
          </div>
          <div class="list-item">
            <i>{{ email }}</i>
          </div>
          <div class="list-item">
            <i>{{ personalID }}</i>
          </div>
        </div>
      </div>
    </v-container>
  </div>
</template>

<script>
import facebookLogin from "facebook-login-vuejs";
import GoogleLogin from "vue-google-login";

export default {
  data: () => ({
    isConnected: false,
    name: "",
    email: "",
    personalID: "",
    picture: "",
    FB: undefined
  }),
  components: {
    facebookLogin
  },
  created: async function() {
    console.log("login");
  },
  watch: {
    email: async function(email) {
      console.log(123123123);
      console.log(this.email + 22222);
      let input = { Useremail: this.email };
      let res = await this.$http.post("/figurine/front_login.php", input);
      console.log(res.data);
      console.log(1);
    }
  },
  methods: {
    methods: {
      getUserData: async function() {
        this.FB.api("/me", "GET", { fields: "id,name,email,picture" }, user => {
          this.personalID = user.id;
          this.email = user.email;
          this.name = user.name;
          this.picture = user.picture.data.url;
        });
        console.log(this.email + 22222);
        let input = { Useremail: this.email };
        let res = await this.$http.post("/figurine/front_login.php", input);
        console.log(res.data);
        console.log(1);
      },
      sdkLoaded(payload) {
        this.isConnected = payload.isConnected;
        this.FB = payload.FB;
      },
      onLogin() {
        this.isConnected = true;
        this.getUserData();
      },
      onLogout() {
        this.isConnected = false;
      }
    }
  }
};
</script>
