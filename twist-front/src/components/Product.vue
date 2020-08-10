<template>
  <div id="app" style="margin: 40px" v-if="!pay">
    <v-container fluid>
      <div class="row">
        <div class="col-md-5 col-sm-5 col-xs-12">
          <v-carousel>
            <v-carousel-item
              v-for="(item, index) in productPicList"
              :key="index"
              v-bind:src="apiUrl + item"
              aspect-ratio="2"
            ></v-carousel-item>
          </v-carousel>
        </div>
        <div class="col-md-7 col-sm-7 col-xs-12">
          <div class="pl-6">
            <p class="display-1 mb-0">
              {{ product.title }}
            </p>
            <v-card-actions class="pa-0">
              <p class="headline font-weight-light pt-3">
                NT${{ product.money }}
                <del style="" class="subtitle-1 font-weight-thin"> </del>
              </p>
              <v-spacer />
            </v-card-actions>
            <p class="subtitle-1 font-weight-thin">
              紅&ensp;&ensp;&ensp;利:&ensp;&ensp;&ensp;<span
                style="color:red; font-size:25px;"
                >/??????/</span
              >
            </p>
            <p class="subtitle-1 font-weight-thin">
              種&ensp;&ensp;&ensp;類:&ensp;&ensp;&ensp;<span
                style="font-size:20px;"
                >{{
                  product.series && product.series.length > 0
                    ? product.series[0].title
                    : ""
                }}
                -
                {{
                  product.series && product.series.length > 0
                    ? product.series[0].parent
                    : ""
                }}</span
              >
            </p>
            <p class="subtitle-1 font-weight-thin">
              國際條碼:<span style="font-size:15px;"
                >&ensp; {{ product.gtin }}</span
              >
            </p>
            <p class="subtitle-1 font-weight-thin" v-if="isGashapon">
              商品機率:<span href="/" style="font-size:15px;"
                >&ensp;查看到貨原始配率</span
              >
            </p>
            <p class="title">數量:</p>

            <v-text-field
              outlined
              style="width:100px"
              :value="1"
              dense
            ></v-text-field>

            <v-dialog
              v-model="dialog"
              persistent
              max-width="500"
              max-height="800"
            >
              <template v-slot:activator="{ on }">
                <v-btn
                  color="primary"
                  dark
                  v-on="on"
                  v-on:click="purchase"
                  style="margin:10px"
                  >直接購買</v-btn
                >
                <v-btn
                  color="primary"
                  dark
                  v-on="on"
                  style="margin:10px"
                  v-on:click="addInCart"
                  ><v-icon>mdi-cart</v-icon>加入購物車</v-btn
                >
              </template>
              <v-card v-if="isGashapon">
                <v-card-title class="headline" justify="center"
                  >一番賞剩餘數量</v-card-title
                >
                <v-simple-table fixed-header height="300px">
                  <template v-slot:default>
                    <thead>
                      <tr>
                        <th class="text-left">獎項</th>
                        <th class="text-left">原始數量</th>
                        <th class="text-left">剩餘數量</th>
                      </tr>
                    </thead>

                    <tbody>
                      <tr v-for="(item, index) in desserts" :key="index">
                        <td>{{ item.name }}</td>
                        <td>{{ item.calories }}</td>
                        <td>{{ item.last }}</td>
                      </tr>
                    </tbody>
                  </template>
                </v-simple-table>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="green darken-1" text @click="dialog = false"
                    >確認</v-btn
                  >
                  <v-btn color="green darken-1" text @click="dialog = false"
                    >取消</v-btn
                  >
                </v-card-actions>
              </v-card>
            </v-dialog>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-sm-12 col-xs-12 col-md-12">
          <v-tabs>
            <v-tab>購買前請閱讀</v-tab>
            <v-tab v-if="isGashapon">商品獎項剩餘數量</v-tab>
            <!-- <v-tab>REVIEWS</v-tab> -->
            <v-tab-item>
              <v-spacer class="pt-10 subtitle-1 font-weight-thin">
                <li>購買方式僅提供『代幣單抽』</li>
                <li>剩餘數量、剩餘抽數請自行刷新頁面更新。</li>
                <li>如遇買家全包，系統會暫時鎖定無法購買。</li>
                <li>介意盒損者請勿購買。</li>
                <li>無退換貨服務。</li>
                <li>無紅利重抽服務。</li>
                <li>取貨方式僅提供『宅配』、『親自取貨』</li>
                <li>法規毛巾不能進口，故代理版無毛巾獎項。</li>
                <li>無免運優惠。</li>
              </v-spacer>
            </v-tab-item>

            <v-tab-item v-if="isGashapon">
              <v-simple-table fixed-header height="300px">
                <template v-slot:default>
                  <thead>
                    <tr>
                      <th class="text-left">獎項</th>
                      <th class="text-left">原始數量</th>
                      <th class="text-left">剩餘數量</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(item, index) in desserts" :key="index">
                      <td>{{ item.name }}</td>
                      <td>{{ item.calories }}</td>
                      <td>{{ item.last }}</td>
                    </tr>
                  </tbody>
                </template>
              </v-simple-table>
            </v-tab-item>
            <v-tab-item>
              <v-list three-line="true" avatar="true">
                <v-list-item-group v-model="item" color="primary">
                  <v-list-item
                    v-for="(item, i) in items"
                    :key="i"
                    inactive="true"
                  >
                    <v-list-item-avatar>
                      <v-img :src="item.avatar"></v-img>
                    </v-list-item-avatar>
                    <v-list-item-content>
                      <v-list-item-title v-html="item.title"></v-list-item-title
                      ><v-rating
                        v-model="rating"
                        class=""
                        background-color="warning lighten-3"
                        color="warning"
                        dense
                      ></v-rating>
                      <v-list-item-subtitle
                        v-html="item.subtitle"
                      ></v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>
                </v-list-item-group>
              </v-list>
            </v-tab-item>
          </v-tabs>
        </div>
      </div>
    </v-container>
    <v-container fluid>
      <v-row no-gutters>
        <v-col :cols="12">
          <v-card-text class="" tile outlined>
            <v-card-title class="subheading ">推薦商品</v-card-title>
            <v-divider></v-divider>
            <div class="row">
              <div
                class="col-12 col-md-3 col-sm-6 col-xs-6 text-center"
                v-for="(item, index) in recommendList"
                :key="index"
              >
                <v-hover v-slot:default="{ hover }" open-delay="200">
                  <v-card :elevation="hover ? 16 : 2">
                    <v-img
                      class="white--text align-end"
                      height="200px"
                      v-bind:src="apiUrl + item.image"
                    >
                      <v-card-title></v-card-title>
                    </v-img>
                    <br />
                    <div class="sep2" style="color: #e98b2a;">
                      <span>{{ item.series }}</span>
                      <br />
                      <span style="color: red"> {{ item.title }} </span>
                      <br />
                      <span style="color: black">${{ item.money }} </span>
                    </div>
                    <div class="text-center">
                      <v-btn
                        :href="'/shop-' + item.category + '/product' + item.id"
                        class="ma-2"
                        outlined
                        color="info"
                      >
                        進入
                      </v-btn>
                    </div>
                  </v-card>
                </v-hover>
              </div>
            </div>
          </v-card-text>
        </v-col>
      </v-row>
      <v-spacer />
    </v-container>
    <v-content></v-content>
    <v-content></v-content>
  </div>
  <div v-else v-html="html"></div>
</template>
<script>
import mapState from "vuex";
import outerHtml from "./OuterHTML";

function setRecommend(params) {
  const recommendPicList = params.recommend;
  recommendPicList.forEach(function(item) {
    const _series = item.series;
    item.series = _series[0].title + "-" + _series[0].parent;
  });

  return recommendPicList;
}
export default {
  name: "Product",
  components: {
    outerHtml
  },
  data: () => ({
    isGashapon: false,
    Cat: "",
    productId: "",
    productPicList: [],
    product: {},
    prize: [],
    apiUrl: "",
    // items: [],
    desserts: [],
    dialog: false,
    rating: 4.5,
    item: 5,
    items: [],
    desserts: [
      {
        name: "A賞",
        calories: 4,
        last: 0
      },
      {
        name: "B賞",
        calories: 2,
        last: 0
      },
      {
        name: "C賞",
        calories: 2,
        last: 0
      },
      {
        name: "D賞",
        calories: 2,
        last: 0
      },
      {
        name: "E賞",
        calories: 34,
        last: 1
      },
      {
        name: "F賞",
        calories: 36,
        last: 4
      }
    ],
    recommendList: [],
    user: {},
    html: "",
    pay: false
  }),
  created: async function() {
    this.apiUrl = process.env.VUE_APP_API_URL;
    this.Cat = this.$route.params.id;
    this.productId = this.$route.params.pid;
    this.setProductInfo();
    const res = await this.$http.post("/figurine/front_get_home_img.php");
    this.recommendList = setRecommend(res.data);
  },
  computed: {
    ...mapState[("currentUser", "isAuthenticated")],
    compiledhtml: function() {
      return this.html;
    }
  },
  watch: {
    currentUser: function(state) {
      this.user = state.currentUser;
    },
    Cat: function(Cat) {
      this.isGashapon = Cat == "極運賞" || Cat == "一番賞" ? true : false;
    }
  },
  methods: {
    setProductInfo: async function() {
      const input = {
        Shopid: this.productId
      };
      const res = await this.$http.post(
        "/figurine/front_get_prize_quantity.php",
        input
      );
      console.log(res.data);
      this.setProductPic(res.data.Img);
      this.prize = res.data.ItemList;
      this.product = res.data.Info[0];
    },
    setProductPic: async function(Piclist) {
      Piclist.forEach(element => this.productPicList.push(element.imgpic));
      console.log(this.productPicList);
    },
    purchase: async function() {
      let res = await this.$http.post("/API/local/example/sample_CvsMap.php");

      console.log(typeof res.data);
      this.html = res.data;
      this.$refs.innerHTML = this.html;
      this.pay = true;
      console.log(this.html);
      var runHtml = this.html;
      if (runHtml) {
        var win = window.open("", "執行視窗");
        win.document.open();
        win.document.write(runHtml);
        win.document.close();
      } else {
        alert("請輸入!");
      }
    },
    addInCart: async function() {
      let input = {
        Userid: this.user.UserId,
        Shopid: this.productId,
        Prizeid: 0,
        Qat: 2
      };
    }
  }
};
</script>
