<template>
  <v-app id="inspire" style="background-color:#bebfc1">
    <v-app-bar
      :clipped-left="$vuetify.breakpoint.lgAndUp"
      app
      color="#1d2041"
      dark
      height="90px"
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title class="ma-2 pa-2" align="left">
        <a href="/" class="white--text" style="text-decoration: none"
          ><img height="60px" src="../assets/LOGO7.png"
        /></a>
      </v-toolbar-title>
      <v-spacer />
      <v-text-field
        v-model="Search"
        flat
        solo-inverted
        hide-details
        prepend-inner-icon="mdi-magnify"
        class="hidden-sm-and-down pl-10 ml-4"
        v-on:keyup.enter="submit(Search)"
      />
      <v-spacer />
      <template v-slot:extension>
        <v-tabs grow show-arrows hide-slider background-color="#070d25">
          <v-tabs-slider></v-tabs-slider>
          <v-tab href="/shop-極運賞" class="primary--text">
            <img height="55px" width="220px" src="../assets/1.png" alt="" />
          </v-tab>
          <v-tab href="/shop-一番賞" class="primary--text">
            <img height="55px" width="220px" src="../assets/2.png" alt="" />
          </v-tab>
          <v-tab href="/shop-商城" class="primary--text" label="成員">
            <img height="55px" width="220px" src="../assets/3.png" alt="" />
          </v-tab>
          <v-tab href="/commonproblem" class="primary--text">
            <img height="55px" width="220px" src="../assets/4.png" alt="" />
          </v-tab>
          <v-tab href="/commonproblem" class="primary--text">
            <img height="55px" width="220px" src="../assets/5.png" alt="" />
          </v-tab>
          <v-tab href="/member" class="primary--text">
            <img height="55px" width="220px" src="../assets/6.png" alt="" />
          </v-tab>
          <v-tab href="/commonproblem" class="primary--text">
            <img height="55px" width="220px" src="../assets/7.png" alt="" />
          </v-tab>
        </v-tabs>
      </template>
      <v-spacer />
      <v-btn @click="dialog = true" icon>
        <v-icon v-if="!isConnected">mdi-account-circle</v-icon>
        <v-img
          v-if="isConnected"
          v-bind:src="usrPic"
          style="border-radius:50px"
        ></v-img>
      </v-btn>
      <v-btn href="/cart" icon>
        <v-icon>mdi-cart</v-icon>
      </v-btn>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" app fixed temporary>
      <v-card-title>
        商品分類
      </v-card-title>
      <v-divider dark></v-divider>
      <v-list nav dense>
        <v-list-item-group active-class="deep-purple--text text--accent-4">
          <v-list-item href="/shop-一番賞">
            <v-list-item-title>原廠一番賞</v-list-item-title>
          </v-list-item>

          <v-list-item href="/shop-極運賞">
            <v-list-item-title>極運賞</v-list-item-title>
          </v-list-item>

          <v-list-item href="/shop-商城">
            <v-list-item-title>網路商城</v-list-item-title>
          </v-list-item>

          <v-list-item href="/member">
            <v-list-item-title>會員專區</v-list-item-title>
          </v-list-item>
          <v-list-item href="/commonproblem">
            <v-list-item-title>常見問題</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <v-content> </v-content>
    <router-view />

    <v-footer :padless="true">
      <v-card
        flat
        tile
        width="100%"
        class="white--text text-center"
        color="#003060"
      >
        <v-card-text>
          <v-btn class="mx-4 white--text" icon>
            <v-icon size="24px">mdi-home</v-icon>
          </v-btn>
          <v-btn class="mx-4 white--text" icon>
            <v-icon size="24px">mdi-email</v-icon>
          </v-btn>
          <v-btn class="mx-4 white--text" icon>
            <v-icon size="24px">mdi-calendar</v-icon>
          </v-btn>
          <v-btn class="mx-4 white--text" icon>
            <v-icon size="24px">mdi-delete</v-icon>
          </v-btn>
        </v-card-text>

        <v-card-text class="white--text pt-0"></v-card-text>

        <v-divider></v-divider>

        <v-card-text class="white--text">
          ©{{ new Date().getFullYear() }} —
          <strong>N&X樂園</strong>
        </v-card-text>
      </v-card>
    </v-footer>
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
    links: [
      {
        name: "Home",
        routes: "/"
      },
      {
        name: "About Us",
        routes: "/cart"
      },
      {
        name: "Team",
        routes: "/cart"
      },
      {
        name: "Services",
        routes: "/cart"
      },
      {
        name: "Blog",
        routes: "/cart"
      },
      {
        name: "Contact Us",
        routes: "/cart"
      }
    ],
    activeBtn: 1,
    drawer: false,
    picsList: {},
    usrPic: "",
    isConnected: true,
    userid: "",
    phone: "",
    bonus: "",
    name: "",
    email: "",
    personalID: "",
    point: "",
    picture: "",
    FB: undefined,
    dialog: false,
    _currentUser: {},
    Search: ""
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
    //取得state物件中的 currentUser
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
            vm.isConnected = false;
          });
        } else {
          // do something
        }
      });
      let _currentUser = {
        Username: "",
        Email: "",
        UserId: ""
      };
      localStorage.setItem("token", "");
      this.$store.commit("setCurrentUser", _currentUser);
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
      this.usrPic = this.picture;

      let input = {
        Fb_id: this.personalID,
        Useremail: this.email,
        Username: this.name
      };

      let res = await this.$http.post("/figurine/front_join.php", input);

      this.userid = res.data.id;
      this.phone = res.data.phone;
      this.bonus = res.data.bonus;
      this.point = res.data.money;
      this.phone = res.data.phone;
      this.time = res.data.date;

      let _currentUser = {
        Username: this.name,
        Email: this.email,
        UserId: this.userid,
        Phone: this.phone,
        Bonus: this.bonus,
        Point: this.point,
        RegistTime: this.time
      };

      localStorage.setItem("token", "token");
      /* 將資料傳到 Vuex 中，這個對應 mutations 中的 setCurrentUser 方法 */
      this.$store.commit("setCurrentUser", _currentUser);
    },
    submit(search) {
      console.log(search);
      this.$router.replace({ path: "searchShop", query: { product: search } });
    }
  }
};
</script>
