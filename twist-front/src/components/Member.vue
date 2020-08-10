<template>
  <div id="app">
    <v-app id="inspire">
      <v-card>
        <v-tabs show-arrows>
          <v-tab>會員資訊</v-tab>
          <v-tab>消費紀錄</v-tab>
          <v-tab>購買代幣</v-tab>
          <v-tab>編輯會員資料</v-tab>

          <v-tab-item>
            <v-card flat>
              <v-row justify="center">
                <v-col cols="12" md="6" sm="12">
                  <p class="headline">會員資訊</p>
                  <v-simple-table>
                    <template v-slot:default>
                      <v-container fluid>
                        <v-row justify="center">
                          <v-subheader style="font-size:20px;"
                            >會員編號:</v-subheader
                          >
                          <v-col cols="8">
                            <span style="font-size:20px;"
                              >{{ currentUser.Username }}
                            </span>
                          </v-col>
                        </v-row>

                        <v-row justify="center">
                          <v-subheader style="font-size:20px;"
                            >連絡電話:</v-subheader
                          >
                          <v-col cols="8">
                            <span style="font-size:20px;">
                              {{ currentUser.Phone }}
                            </span>
                          </v-col>
                        </v-row>

                        <v-row justify="center">
                          <v-subheader style="font-size:20px;"
                            >連絡信箱:</v-subheader
                          >
                          <v-col cols="8">
                            <span style="font-size:20px;">
                              {{ currentUser.Email }}
                            </span>
                          </v-col>
                        </v-row>

                        <v-row justify="center">
                          <v-subheader style="font-size:20px;"
                            >持有代幣:</v-subheader
                          >
                          <v-col cols="8">
                            <span style="font-size:20px; color: red;"
                              >${{ currentUser.Point }}</span
                            >
                          </v-col>
                        </v-row>

                        <v-row justify="center">
                          <v-subheader style="font-size:20px;"
                            >紅利:</v-subheader
                          >
                          <v-col cols="8">
                            <span style="font-size:20px; color: red;"
                              >${{ currentUser.Bonus }}</span
                            >
                          </v-col>
                        </v-row>

                        <v-row justify="center">
                          <v-subheader style="font-size:20px;"
                            >註冊時間:</v-subheader
                          >
                          <v-col cols="8">
                            <span style="font-size:20px;">{{
                              currentUser.RegistTime
                            }}</span>
                          </v-col>
                        </v-row>
                      </v-container>
                    </template>
                  </v-simple-table>
                </v-col>
              </v-row>
            </v-card>
          </v-tab-item>
          <v-tab-item>
            <v-card flat>
              <v-card-text>
                <template>
                  <v-data-table
                    :headers="headers"
                    :items="desserts"
                    :expanded.sync="expanded"
                    item-key="ordernum"
                    show-expand
                    class="elevation-1"
                  >
                    <template v-slot:top>
                      <v-toolbar flat>
                        <v-toolbar-title>消費紀錄</v-toolbar-title>
                        <v-spacer></v-spacer>
                      </v-toolbar>
                    </template>
                    <template v-slot:expanded-item="{ headers, item }">
                      <td :colspan="headers.length">
                        More info about {{ item.ordernum }}
                      </td>
                    </template>
                  </v-data-table>
                </template>
              </v-card-text>
            </v-card>
          </v-tab-item>
          <v-tab-item>
            <div class="row text-center">
              <div
                class="col-md-4 col-sm-6 col-xs-12"
                :key="pro.id"
                v-for="pro in products"
              >
                <v-hover v-slot:default="{ hover }">
                  <v-card
                    class="mx-auto"
                    color="grey lighten-4"
                    max-width="350"
                  >
                    <v-img
                      class="white--text align-end"
                      aspect-ratio="1"
                      :src="pro.src"
                    >
                      <v-card-title>{{ pro.type }}</v-card-title>
                      <v-expand-transition>
                        <div
                          v-if="hover"
                          class="d-flex transition-fast-in-fast-out white darken-2 v-card--reveal display-3 white--text"
                          style="height: 100%;"
                        >
                          <v-btn v-if="hover" href="/product" class outlined
                            >VIEW</v-btn
                          >
                        </div>
                      </v-expand-transition>
                    </v-img>
                    <v-card-text class="text--primary">
                      <div>
                        <a href="/product" style="text-decoration: none">{{
                          pro.name
                        }}</a>
                      </div>
                      <div>${{ pro.price }}</div>
                    </v-card-text>
                  </v-card>
                </v-hover>
              </div>
            </div>
          </v-tab-item>
          <v-tab-item>
            <v-card flat>
              <v-card-text>
                <v-row justify="center">
                  <v-col cols="12" md="6" sm="12">
                    <v-subheader style="font-size:18px;">姓名:</v-subheader>
                    <v-text-field dense label="name" outlined></v-text-field>

                    <v-subheader style="font-size:18px;">電子信箱:</v-subheader>
                    <v-text-field dense label="email" outlined></v-text-field>

                    <v-subheader style="font-size:18px;">連絡電話:</v-subheader>
                    <v-text-field dense label="phone" outlined></v-text-field>

                    <v-row justify="start">
                      <v-subheader style="font-size:18px;"
                        >寄件地址:</v-subheader
                      >
                      <v-col cols="6" md="2">
                        <v-select
                          v-model="select1"
                          :items="items1"
                          :rules="[v => !!v || 'Item is required']"
                          label="縣市"
                          required
                        ></v-select>
                      </v-col>
                      <v-col cols="6" md="4">
                        <v-select
                          v-model="select2"
                          :items="items2"
                          :rules="[v => !!v || 'Item is required']"
                          label="鄉鎮區"
                          required
                        ></v-select>
                      </v-col>
                      <v-col cols="6" md="4">
                        <v-text-field label="地址"></v-text-field>
                      </v-col>
                    </v-row>

                    <v-subheader style="font-size:18px;"
                      >身分證字號:</v-subheader
                    >
                    <v-text-field
                      dense
                      label="identity card"
                      outlined
                    ></v-text-field>

                    <v-row justify="start">
                      <v-subheader style="font-size:18px;"
                        >出生年月日:</v-subheader
                      >
                      <v-col cols="6" md="6">
                        <template>
                          <v-menu
                            ref="menu"
                            v-model="menu"
                            :close-on-content-click="false"
                            transition="scale-transition"
                            offset-y
                            min-width="290px"
                          >
                            <template v-slot:activator="{ on }">
                              <v-text-field
                                v-model="date"
                                label="Birthday date"
                                readonly
                                v-on="on"
                                outlined
                              ></v-text-field>
                            </template>
                            <v-date-picker
                              ref="picker"
                              v-model="date"
                              :max="new Date().toISOString().substr(0, 10)"
                              min="1950-01-01"
                              @change="save"
                            ></v-date-picker>
                          </v-menu>
                        </template>
                      </v-col>
                    </v-row>
                    <div class="my-2">
                      <v-btn large>送出</v-btn>
                    </div>
                  </v-col>
                </v-row>
              </v-card-text>
            </v-card>
          </v-tab-item>
        </v-tabs>
      </v-card>
    </v-app>
  </div>
</template>
<script>
import { mapState, mapGetters } from "vuex";

export default {
  data: () => ({
    data: {},
    select: null,
    select1: "",
    select2: "",
    items1: ["台北市", "桃園市", "台中市", "高雄市"],
    items2: ["110 信義區", "330 桃園區", "402 南區", "881 楠梓區"],
    date: null,
    menu: false,
    products: [
      {
        id: 1,
        name: "樂園代幣100點",
        type: "代幣",
        price: "100",
        src: require("../assets/img/01.jpg")
      },
      {
        id: 2,
        name: "樂園代幣300點",
        type: "代幣",
        price: "300",
        src: require("../assets/img/01.jpg")
      },
      {
        id: 3,
        name: "樂園代幣500點",
        type: "代幣",
        price: "1000",
        src: require("../assets/img/01.jpg")
      },
      {
        id: 4,
        name: "樂園代幣1000點",
        type: "代幣",
        price: "1000",
        src: require("../assets/img/01.jpg")
      },
      {
        id: 5,
        name: "樂園代幣3000點",
        type: "代幣",
        price: "3000",
        src: require("../assets/img/01.jpg")
      },
      {
        id: 6,
        name: "樂園代幣5000點",
        type: "代幣",
        price: "5000",
        src: require("../assets/img/01.jpg")
      }
    ],
    expanded: [],
    singleExpand: false,
    headers: [
      {
        text: "訂單編號",
        align: "start",
        sortable: false,
        value: "ordernum"
      },
      { text: "訂單日期", value: "orderdate" },
      { text: "訂單狀態", value: "orderstatus" },
      { text: "詳細", value: "data-table-expand" }
    ],
    desserts: [
      {
        ordernum: "159159151",
        orderdate: "2020-05-27",
        orderstatus: "處理中"
      },
      {
        ordernum: "159159191",
        orderdate: "2020-05-27",
        orderstatus: "處理中"
      },
      {
        ordernum: "159159181",
        orderdate: "2020-05-27",
        orderstatus: "處理中"
      },
      {
        ordernum: "159159141",
        orderdate: "2020-05-27",
        orderstatus: "處理中"
      },
      {
        ordernum: "159159131",
        orderdate: "2020-05-27",
        orderstatus: "處理中"
      },
      {
        ordernum: "159159101",
        orderdate: "2020-05-27",
        orderstatus: "處理中"
      },
      {
        ordernum: "159159951",
        orderdate: "2020-05-27",
        orderstatus: "處理中"
      },
      {
        ordernum: "159149151",
        orderdate: "2020-05-27",
        orderstatus: "處理中"
      },
      {
        ordernum: "159559151",
        orderdate: "2020-05-27",
        orderstatus: "處理中"
      },
      {
        ordernum: "159199151",
        orderdate: "2020-05-27",
        orderstatus: "處理中"
      }
    ]
  }),
  created: async function() {
    // console.log(this.$store.state);
    // this.data = this.itemmm.currentUser;
    // console.log(this.data);
  },
  computed: {
    ...mapState(["currentUser", "isAuthenticated"]),
    ...mapGetters(["userInfo", "isLogin"])
    //取得state物件中的 currentUser
  },
  watch: {
    menu(val) {
      val && setTimeout(() => (this.$refs.picker.activePicker = "YEAR"));
    }
  },
  methods: {
    save(date) {
      this.$refs.menu.save(date);
    }
  }
};
</script>

<style>
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: 0.8;
  position: absolute;
  width: 100%;
}
</style>
