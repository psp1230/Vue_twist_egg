<template>
  <v-app id="inspire">
    <v-tabs>
      <v-tab>一番賞＆集運賞</v-tab>
      <v-tab>商城</v-tab>
      <v-tab-item>
        <v-content>{{ currentUser }}</v-content>
        <h2>gasha</h2>
        <v-container fluid>
          <v-stepper v-model="e1">
            <v-stepper-header>
              <v-stepper-step :complete="e1 > 1" step="1"
                >確認商品清單</v-stepper-step
              >

              <v-divider></v-divider>

              <v-stepper-step :complete="e1 > 2" step="2"
                >填寫個人寄送資料</v-stepper-step
              >

              <v-divider></v-divider>

              <v-stepper-step step="3">確認商品&寄送資料</v-stepper-step>
            </v-stepper-header>

            <v-stepper-items>
              <v-stepper-content step="1">
                <v-row justify="center">
                  <v-col :cols="12" md="10" sm="12">
                    <v-simple-table>
                      <template v-slot:default>
                        <thead>
                          <tr>
                            <th class="text-center">商品項目</th>
                            <th class="text-center">售價</th>
                            <th class="text-center">數量</th>
                            <th class="text-center">小計</th>
                            <th class="text-center"></th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr v-for="(item, index) in cart_gasha" :key="index">
                            <td>
                              <v-list-item key="1">
                                <v-list-item-avatar>
                                  <v-img
                                    :src="require('../assets/img/shop/1.jpg')"
                                  ></v-img>
                                </v-list-item-avatar>

                                <v-list-item-content>
                                  <v-list-item-title>Item 1</v-list-item-title>
                                  <v-list-item-subtitle
                                    >Lorem Ipsum</v-list-item-subtitle
                                  >
                                </v-list-item-content>
                              </v-list-item>
                            </td>
                            <td>$40.00</td>
                            <td>
                              <v-text-field
                                class="pt-10"
                                label="Outlined"
                                style="width: 80px;"
                                single-line
                                outlined
                                value="2"
                                type="number"
                              ></v-text-field>
                            </td>

                            <td>$80.00</td>
                            <td>
                              <a>X</a>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <v-list-item key="1">
                                <v-list-item-avatar>
                                  <v-img
                                    :src="require('../assets/img/shop/2.jpg')"
                                  ></v-img>
                                </v-list-item-avatar>

                                <v-list-item-content>
                                  <v-list-item-title>Item 2</v-list-item-title>
                                  <v-list-item-subtitle
                                    >Lorem Ipsum</v-list-item-subtitle
                                  >
                                </v-list-item-content>
                              </v-list-item>
                            </td>
                            <td>$40.00</td>
                            <td>
                              <v-text-field
                                class="pt-10"
                                label="Outlined"
                                style="width: 80px;"
                                single-line
                                outlined
                                value="2"
                                type="number"
                              ></v-text-field>
                            </td>
                            <td>$80.00</td>
                            <td>
                              <a>X</a>
                            </td>
                          </tr>
                        </tbody>
                      </template>
                    </v-simple-table>
                  </v-col>
                </v-row>
                <v-btn color="primary" @click="e1 = 2">Continue</v-btn>
              </v-stepper-content>

              <v-stepper-content step="2">
                <v-row justify="center">
                  <v-col
                    :cols="12"
                    md="6"
                    sm="12"
                    style="background-color: #FFFFFF"
                  >
                    <p class="headline">選擇寄送方式</p>
                    <p class="overline"></p>
                    <v-simple-table>
                      <template v-slot:default>
                        <v-container fluid>
                          <v-row>
                            <v-col cols="4">
                              <v-subheader>請填寫真實中文姓名。</v-subheader>
                            </v-col>
                            <v-col cols="8">
                              <v-text-field label="姓名" value></v-text-field>
                            </v-col>
                          </v-row>
                          <br />
                          <v-row>
                            <v-col cols="4">
                              <v-subheader
                                >請填寫您正確的手機號碼。</v-subheader
                              >
                            </v-col>
                            <v-col cols="8">
                              <v-text-field
                                label="電話號碼"
                                value
                              ></v-text-field>
                            </v-col>
                          </v-row>
                          <br />
                          <v-row>
                            <v-col cols="4">
                              <v-subheader
                                >寄送優惠訊息的連絡信箱。</v-subheader
                              >
                            </v-col>
                            <v-col cols="8">
                              <v-text-field
                                label="電子信箱"
                                value
                              ></v-text-field>
                            </v-col>
                          </v-row>
                          <br />
                          <v-row>
                            <v-col cols="4">
                              <v-subheader
                                >請填寫正確配送商品的地址。</v-subheader
                              >
                            </v-col>
                            <v-col cols="8">
                              <v-text-field
                                label="寄送地址"
                                value
                              ></v-text-field>
                            </v-col>
                          </v-row>
                        </v-container>
                      </template>
                    </v-simple-table>
                  </v-col>
                </v-row>

                <v-btn color="primary" @click="e1 = 3">Continue</v-btn>

                <v-btn @click="e1 = 1">Cancel</v-btn>
              </v-stepper-content>

              <v-stepper-content step="3">
                <v-row justify="center">
                  <v-card class="mb-12" color="#FFFFFF">
                    <v-list-item>
                      <v-list-item-content>
                        <v-list-item-title>Single-line item</v-list-item-title>
                        <v-list-item-subtitle
                          >Secondary text</v-list-item-subtitle
                        >
                      </v-list-item-content>
                    </v-list-item>

                    <v-list-item two-line>
                      <v-list-item-content>
                        <v-list-item-title>Two-line item</v-list-item-title>
                        <v-list-item-subtitle
                          >Secondary text</v-list-item-subtitle
                        >
                      </v-list-item-content>
                    </v-list-item>

                    <v-list-item three-line>
                      <v-list-item-content>
                        <v-list-item-title>Three-line item</v-list-item-title>
                        <v-list-item-subtitle
                          >Secondary line text Lorem ipsum dolor sit
                          amet,</v-list-item-subtitle
                        >
                        <v-list-item-subtitle
                          >consectetur adipiscing elit.</v-list-item-subtitle
                        >
                      </v-list-item-content>
                    </v-list-item>

                    <v-list-item three-line>
                      <v-list-item-content>
                        <v-list-item-title>Three-line item</v-list-item-title>
                        <v-list-item-subtitle
                          >Secondary line text Lorem ipsum dolor sit
                          amet,</v-list-item-subtitle
                        >
                        <v-list-item-subtitle
                          >consectetur adipiscing elit.</v-list-item-subtitle
                        >
                      </v-list-item-content>
                    </v-list-item>

                    <v-list-item three-line>
                      <v-list-item-content>
                        <v-list-item-title>Three-line item</v-list-item-title>
                        <v-list-item-subtitle
                          >Secondary line text Lorem ipsum dolor sit
                          amet,</v-list-item-subtitle
                        >
                        <v-list-item-subtitle
                          >consectetur adipiscing elit.</v-list-item-subtitle
                        >
                      </v-list-item-content>
                    </v-list-item>

                    <v-list-item three-line>
                      <v-list-item-content>
                        <v-list-item-title>Three-line item</v-list-item-title>
                        <v-list-item-subtitle
                          >Secondary line text Lorem ipsum dolor sit
                          amet,</v-list-item-subtitle
                        >
                        <v-list-item-subtitle
                          >consectetur adipiscing elit.</v-list-item-subtitle
                        >
                      </v-list-item-content>
                    </v-list-item>

                    <v-list-item three-line>
                      <v-list-item-content>
                        <v-list-item-title>Three-line item</v-list-item-title>
                        <v-list-item-subtitle
                          >Secondary line text Lorem ipsum dolor sit
                          amet,</v-list-item-subtitle
                        >
                        <v-list-item-subtitle
                          >consectetur adipiscing elit.</v-list-item-subtitle
                        >
                      </v-list-item-content>
                    </v-list-item>

                    <v-list-item three-line>
                      <v-list-item-content>
                        <v-list-item-title>Three-line item</v-list-item-title>
                        <v-list-item-subtitle
                          >Secondary line text Lorem ipsum dolor sit
                          amet,</v-list-item-subtitle
                        >
                        <v-list-item-subtitle
                          >consectetur adipiscing elit.</v-list-item-subtitle
                        >
                      </v-list-item-content>
                    </v-list-item>
                  </v-card>
                </v-row>
                <v-btn color="primary" @click="e1 = 1">Continue</v-btn>

                <v-btn @click="e1 = 2">Cancel</v-btn>
              </v-stepper-content>
            </v-stepper-items>
          </v-stepper>
        </v-container>
      </v-tab-item>
      <v-tab-item>
        <v-content>{{ currentUser }}</v-content>
        <h2>shop</h2>
        <v-container fluid>
          <v-stepper v-model="e1">
            <v-stepper-header>
              <v-stepper-step :complete="e1 > 1" step="1"
                >確認商品清單</v-stepper-step
              >

              <v-divider></v-divider>

              <v-stepper-step :complete="e1 > 2" step="2"
                >填寫個人寄送資料</v-stepper-step
              >

              <v-divider></v-divider>

              <v-stepper-step step="3">確認商品&寄送資料</v-stepper-step>
            </v-stepper-header>

            <v-stepper-items>
              <v-stepper-content step="1">
                <v-row justify="center">
                  <v-col :cols="12" md="10" sm="12">
                    <v-simple-table>
                      <template v-slot:default>
                        <thead>
                          <tr>
                            <th class="text-center">商品項目</th>
                            <th class="text-center">售價</th>
                            <th class="text-center">數量</th>
                            <th class="text-center">小計</th>
                            <th class="text-center"></th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr v-for="(item, index) in cart_shop" :key="index">
                            <td>
                              <v-list-item key="1">
                                <v-list-item-avatar>
                                  <v-img
                                    :src="require('../assets/img/shop/1.jpg')"
                                  ></v-img>
                                </v-list-item-avatar>

                                <v-list-item-content>
                                  <v-list-item-title>Item 1</v-list-item-title>
                                  <v-list-item-subtitle
                                    >Lorem Ipsum</v-list-item-subtitle
                                  >
                                </v-list-item-content>
                              </v-list-item>
                            </td>
                            <td>$40.00</td>
                            <td>
                              <v-text-field
                                class="pt-10"
                                label="Outlined"
                                style="width: 80px;"
                                single-line
                                outlined
                                value="2"
                                type="number"
                              ></v-text-field>
                            </td>

                            <td>$80.00</td>
                            <td>
                              <a>X</a>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <v-list-item key="1">
                                <v-list-item-avatar>
                                  <v-img
                                    :src="require('../assets/img/shop/2.jpg')"
                                  ></v-img>
                                </v-list-item-avatar>

                                <v-list-item-content>
                                  <v-list-item-title>Item 2</v-list-item-title>
                                  <v-list-item-subtitle
                                    >Lorem Ipsum</v-list-item-subtitle
                                  >
                                </v-list-item-content>
                              </v-list-item>
                            </td>
                            <td>$40.00</td>
                            <td>
                              <v-text-field
                                class="pt-10"
                                label="Outlined"
                                style="width: 80px;"
                                single-line
                                outlined
                                value="2"
                                type="number"
                              ></v-text-field>
                            </td>
                            <td>$80.00</td>
                            <td>
                              <a>X</a>
                            </td>
                          </tr>
                        </tbody>
                      </template>
                    </v-simple-table>
                  </v-col>
                </v-row>
                <v-btn color="primary" @click="e1 = 2">Continue</v-btn>
              </v-stepper-content>

              <v-stepper-content step="2">
                <v-row justify="center">
                  <v-col
                    :cols="12"
                    md="6"
                    sm="12"
                    style="background-color: #FFFFFF"
                  >
                    <p class="headline">選擇寄送方式</p>
                    <p class="overline"></p>
                    <v-simple-table>
                      <template v-slot:default>
                        <v-container fluid>
                          <v-row>
                            <v-col cols="4">
                              <v-subheader>請填寫真實中文姓名。</v-subheader>
                            </v-col>
                            <v-col cols="8">
                              <v-text-field label="姓名" value></v-text-field>
                            </v-col>
                          </v-row>
                          <br />
                          <v-row>
                            <v-col cols="4">
                              <v-subheader
                                >請填寫您正確的手機號碼。</v-subheader
                              >
                            </v-col>
                            <v-col cols="8">
                              <v-text-field
                                label="電話號碼"
                                value
                              ></v-text-field>
                            </v-col>
                          </v-row>
                          <br />
                          <v-row>
                            <v-col cols="4">
                              <v-subheader
                                >寄送優惠訊息的連絡信箱。</v-subheader
                              >
                            </v-col>
                            <v-col cols="8">
                              <v-text-field
                                label="電子信箱"
                                value
                              ></v-text-field>
                            </v-col>
                          </v-row>
                          <br />
                          <v-row>
                            <v-col cols="4">
                              <v-subheader
                                >請填寫正確配送商品的地址。</v-subheader
                              >
                            </v-col>
                            <v-col cols="8">
                              <v-text-field
                                label="寄送地址"
                                value
                              ></v-text-field>
                            </v-col>
                          </v-row>
                        </v-container>
                      </template>
                    </v-simple-table>
                  </v-col>
                </v-row>

                <v-btn color="primary" @click="e1 = 3">Continue</v-btn>

                <v-btn @click="e1 = 1">Cancel</v-btn>
              </v-stepper-content>

              <v-stepper-content step="3">
                <v-row justify="center">
                  <v-card class="mb-12" color="#FFFFFF">
                    <v-list-item>
                      <v-list-item-content>
                        <v-list-item-title>Single-line item</v-list-item-title>
                        <v-list-item-subtitle
                          >Secondary text</v-list-item-subtitle
                        >
                      </v-list-item-content>
                    </v-list-item>

                    <v-list-item two-line>
                      <v-list-item-content>
                        <v-list-item-title>Two-line item</v-list-item-title>
                        <v-list-item-subtitle
                          >Secondary text</v-list-item-subtitle
                        >
                      </v-list-item-content>
                    </v-list-item>

                    <v-list-item three-line>
                      <v-list-item-content>
                        <v-list-item-title>Three-line item</v-list-item-title>
                        <v-list-item-subtitle
                          >Secondary line text Lorem ipsum dolor sit
                          amet,</v-list-item-subtitle
                        >
                        <v-list-item-subtitle
                          >consectetur adipiscing elit.</v-list-item-subtitle
                        >
                      </v-list-item-content>
                    </v-list-item>

                    <v-list-item three-line>
                      <v-list-item-content>
                        <v-list-item-title>Three-line item</v-list-item-title>
                        <v-list-item-subtitle
                          >Secondary line text Lorem ipsum dolor sit
                          amet,</v-list-item-subtitle
                        >
                        <v-list-item-subtitle
                          >consectetur adipiscing elit.</v-list-item-subtitle
                        >
                      </v-list-item-content>
                    </v-list-item>

                    <v-list-item three-line>
                      <v-list-item-content>
                        <v-list-item-title>Three-line item</v-list-item-title>
                        <v-list-item-subtitle
                          >Secondary line text Lorem ipsum dolor sit
                          amet,</v-list-item-subtitle
                        >
                        <v-list-item-subtitle
                          >consectetur adipiscing elit.</v-list-item-subtitle
                        >
                      </v-list-item-content>
                    </v-list-item>

                    <v-list-item three-line>
                      <v-list-item-content>
                        <v-list-item-title>Three-line item</v-list-item-title>
                        <v-list-item-subtitle
                          >Secondary line text Lorem ipsum dolor sit
                          amet,</v-list-item-subtitle
                        >
                        <v-list-item-subtitle
                          >consectetur adipiscing elit.</v-list-item-subtitle
                        >
                      </v-list-item-content>
                    </v-list-item>

                    <v-list-item three-line>
                      <v-list-item-content>
                        <v-list-item-title>Three-line item</v-list-item-title>
                        <v-list-item-subtitle
                          >Secondary line text Lorem ipsum dolor sit
                          amet,</v-list-item-subtitle
                        >
                        <v-list-item-subtitle
                          >consectetur adipiscing elit.</v-list-item-subtitle
                        >
                      </v-list-item-content>
                    </v-list-item>

                    <v-list-item three-line>
                      <v-list-item-content>
                        <v-list-item-title>Three-line item</v-list-item-title>
                        <v-list-item-subtitle
                          >Secondary line text Lorem ipsum dolor sit
                          amet,</v-list-item-subtitle
                        >
                        <v-list-item-subtitle
                          >consectetur adipiscing elit.</v-list-item-subtitle
                        >
                      </v-list-item-content>
                    </v-list-item>
                  </v-card>
                </v-row>
                <v-btn color="primary" @click="e1 = 1">Continue</v-btn>

                <v-btn @click="e1 = 2">Cancel</v-btn>
              </v-stepper-content>
            </v-stepper-items>
          </v-stepper>
        </v-container>
      </v-tab-item>
    </v-tabs>
  </v-app>
</template>
<script>
import { mapState } from "vuex";
export default {
  data: () => ({
    e1: 1,
    rating: 4.5,
    rules: [
      value => !!value || "Required.",
      value => (value && value.length >= 3) || "Min 3 characters"
    ],
    items: [
      {
        text: "一番賞＆集運賞",
        disabled: false,
        href: ""
      },
      {
        text: "商城",
        disabled: true,
        href: "breadcrumbs_link_2"
      }
    ],
    User: {},
    cart: [],
    cart_gasha: [],
    cart_shop: [],
    id: ""
  }),
  created: async function() {
    this.id = this.$route.params.cid;
  },
  computed: {
    ...mapState(["currentUser", "isAuthenticated"])
  },
  watch: {
    currentUser: function(currentUser) {
      this.User = currentUser;
      this.getCart();
    }
  },
  methods: {
    getCart: async function() {
      let input = {
        Userid: this.User.UserId
      };
      let res = await this.$http.post("/figurine/front_get_cart.php", input);

      console.log(res.data);

      for (let i in res.data) {
        let _input = {
          Shopid: res.data[i].shopid
        };
        let _res = await this.$http.post(
          "/figurine/front_get_prize_quantity.php",
          _input
        );
        this.cart.push(_res.data);
      }
      console.log(this.cart);
    }
  }
};
</script>
