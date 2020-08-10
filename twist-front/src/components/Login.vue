<template>
  <v-app>
    <v-dialog v-model="dialog" width="600px">
      <v-container>
        <v-card flat style="margin: 20 px">
          <div class="information">
            <v-container fluid>
              <div>
                <v-row justify="center" align="center">
                  <v-btn
                    x-large
                    v-on:click="!isConnected ? login() : logout()"
                    v-text="!isConnected ? '使用Facebook登入' : '登出'"
                  >
                  </v-btn
                ></v-row>
              </div>
              <div v-if="isConnected">
                <v-row justify="center">
                  <v-subheader style="font-size:20px;">會員編號:</v-subheader>
                  <v-col cols="8">
                    <span style="font-size:20px;">{{ userid }}</span>
                  </v-col>
                </v-row>

                <v-row justify="center">
                  <v-subheader style="font-size:20px;">連絡電話:</v-subheader>
                  <v-col cols="8">
                    <span style="font-size:20px;">{{ phone }}</span>
                  </v-col>
                </v-row>

                <v-row justify="center">
                  <v-subheader style="font-size:20px;">連絡信箱:</v-subheader>
                  <v-col cols="8">
                    <span style="font-size:20px;">{{ email }}</span>
                  </v-col>
                </v-row>

                <v-row justify="center">
                  <v-subheader style="font-size:20px;">持有代幣:</v-subheader>
                  <v-col cols="8">
                    <span style="font-size:20px; color: red;">{{ point }}</span>
                  </v-col>
                </v-row>

                <v-row justify="center">
                  <v-subheader style="font-size:20px;">紅利:</v-subheader>
                  <v-col cols="8">
                    <span style="font-size:20px;">{{ bonus }}</span>
                  </v-col>
                </v-row>
              </div>
            </v-container>
          </div>
        </v-card>
      </v-container>
    </v-dialog>
  </v-app>
</template>
<script>
import { mapState } from "vuex";
export default {
  data: () => ({
    isConnected: false,
    dialog: true,
    usrPic: "",
    userid: "",
    phone: "",
    bonus: "",
    name: "",
    email: "",
    name: "",
    email: "",
    personalID: "",
    picture: "",
    FB: undefined
  }),
  created: async function() {
    let vm = this;
    window.fbAsyncInit = function() {
      FB.init({
        appId: "2777693628992543",
        xfbml: true,
        version: "v7.0"
      });
      FB.getLoginStatus(function(response) {
        if (response.status === "connected") {
          // 獲取用戶個人資料
          vm.getUserData();
          vm.isConnected = true;
        } else {
          // 登入狀態 - 未登入
          vm.isConnected = false;
        }
      });
    };

    (function(d, s, id) {
      var js,
        fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {
        return;
      }
      js = d.createElement(s);
      js.id = id;
      js.src = "//connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    })(document, "script", "facebook-jssdk");
  },
  computed: {
    ...mapState(["currentUser", "isAuthenticated"])
    //取得state物件中的 currentUser 和 isAuthenticated
  },
  methods: {
    login() {
      const vm = this;
      // 檢查登入狀態
      FB.getLoginStatus(function(response) {
        // 登入狀態 - 已登入
        if (response.status === "connected") {
          // 獲取用戶個人資料
          vm.getUserData();
        } else {
          // 登入狀態 - 未登入
          // 用戶登入(確認授權)
          FB.login(
            function(res) {
              // 獲取用戶個人資料
              vm.getUserData();
            },
            // 授權 - 個人資料&Email
            { scope: "public_profile,email" }
          );
        }
        vm.isConnected = true;
      });
      console.log("Li");
    },
    logout() {
      let vm = this;
      // 檢查登入狀態
      FB.getLoginStatus(function(response) {
        // 檢查登入狀態
        if (response.status === "connected") {
          // 移除授權
          FB.api("/me/permissions", "DELETE", function(res) {
            // 用戶登出
            FB.logout();
            console.log("LO");
            vm.isConnected = false;
          });
        } else {
          // do something
          console.log("LOERR");
        }
      });
      let currentUser = {
        Username: "",
        Email: "",
        UserId: ""
      };
      localStorage.setItem("token", "");
      this.$store.commit("setCurrentUser", currentUser);
      console.log(this.$store.state);
    },
    getUserData: async function() {
      let _this = this;
      FB.api("/me", "GET", { fields: "id,name,email,picture" }, user => {
        this.isRegist(user);
      });
    },
    isRegist: async function(user) {
      this.personalID = user.id;
      this.email = user.email;
      this.name = user.name;
      this.picture = user.picture.data.url;
      let input = {
        Fb_id: this.personalID,
        Useremail: this.email,
        Username: this.name
      };

      let res = await this.$http.post("/figurine/front_join.php", input);
      console.log(res.data);

      this.userid = res.data.id;
      this.phone = res.data.phone;
      this.bonus = res.data.bonus;
      this.point = res.data.money;
      this.phone = res.data.phone;
      this.time = res.data.date;

      let currentUser = {
        Fb_id: this.personalID,
        Useremail: this.email,
        Username: this.name,
        Phone: this.phone,
        Bonus: this.bonus,
        Point: this.point,
        RegistTime: res.data.date
      };

      localStorage.setItem("token", "token");
      /* 將資料傳到 Vuex 中，這個對應 mutations 中的 setCurrentUser 方法 */
      this.$store.commit("setCurrentUser", currentUser);
      console.log(this.$store.state);
    }
  }
};
</script>
