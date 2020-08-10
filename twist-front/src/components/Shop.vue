<template>
  <div id="app" style="margin: 40px">
    <v-container fluid>
      <div class="row">
        <div class="col-md-3 col-sm-3 col-xs-12">
          <v-card outlined>
            <v-card-title>商品列表</v-card-title>
            <v-divider></v-divider>
            <template>
              <v-treeview
                :items="items"
                :open="[1]"
                :active="[5]"
                :selected-color="'#fff'"
                activatable
                open-on-click
                dense
              ></v-treeview>
            </template>
            <v-divider></v-divider>
          </v-card>
        </div>
        <div class="col-md-9 col-sm-9 col-xs-12">
          <v-row dense>
            <v-col cols="12" sm="8" class="pl-6 pt-6">
              <small>Showing {{ totalProducts.length }} products</small>
            </v-col>
            <v-col cols="12" sm="4">
              <v-select
                class="pa-0"
                v-model="select"
                :items="options"
                style="margin-bottom: -20px;"
                outlined
                dense
              ></v-select>
            </v-col>
          </v-row>

          <v-divider></v-divider>

          <div class="row text-center">
            <div
              class="col-md-3 col-sm-6 col-xs-12"
              v-for="(pro, index) in Products"
              :key="index"
            >
              <v-hover v-slot:default="{ hover }">
                <v-card class="mx-auto" color="grey lighten-4" max-width="600">
                  <v-img
                    class="white--text align-end"
                    aspect-ratio="0.85"
                    :src="apiUrl + pro.image"
                  >
                    <v-card-title>{{ pro.type }}</v-card-title>
                    <v-expand-transition>
                      <div
                        v-if="hover"
                        class="d-flex transition-fast-in-fast-out white darken-2 v-card--reveal display-3 white--text"
                        style="height: 100%;"
                      >
                        <v-btn
                          v-if="hover"
                          :href="'/shop-' + Cat + '/product' + pro.id"
                          class
                          outlined
                          >VIEW</v-btn
                        >
                      </div>
                    </v-expand-transition>
                  </v-img>
                  <v-card-text class="text--primary">
                    <div>
                      <a
                        :href="'/shop-' + Cat + '/product' + pro.id"
                        style="text-decoration: none"
                        >{{ pro.title }}</a
                      >
                    </div>
                    <div>
                      {{ pro.series[0].title }}-{{ pro.series[0].parent }}
                    </div>
                    <div>${{ pro.money }}</div>
                  </v-card-text>
                </v-card>
              </v-hover>
            </div>
          </div>
          <v-pagination v-model="page" :length="total_page"></v-pagination>
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
                      v-bind:src="apiUrl + item.image"
                      aspect-ratio="1.5"
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
  </div>
</template>
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
<script>
function setRecommend(params) {
  const recommendPicList = params.recommend;
  recommendPicList.forEach(function(item) {
    const _series = item.series;
    item.series = _series[0].title + "-" + _series[0].parent;
  });

  return recommendPicList;
}
function setItem(array) {
  const series = [];
  array.forEach(function(element) {
    const _series = [];
    element.parent.forEach(element => _series.push({ name: element.title }));
    const _element = { id: element.id, name: element.title, children: _series };

    series.push(_element);
  });
  return series;
}
export default {
  data: () => ({
    select: "Deafault",
    options: ["Default", "Price: Low to High", "Price: High to Low"],
    page: 1,
    min: 0,
    max: 10000,
    items: [],
    Cat: "",
    totalProducts: [],
    Products: [],
    total_page: 0,
    id: "",
    apiUrl: "",
    recommendList: []
  }),
  created: async function() {
    this.apiUrl = process.env.VUE_APP_API_URL;
    this.Cat = this.$route.params.id;
    this.getProducts(this.page);
    const res = await this.$http.post("/figurine/front_get_home_img.php");
    this.recommendList = setRecommend(res.data);
  },
  watch: {
    page: function(page) {
      this.setPage(page);
    }
  },
  methods: {
    getProducts: async function(page) {
      const input = {
        Category: this.Cat
      };
      const res = await this.$http.post("/figurine/front_get_item.php", input);
      console.log(res.data.Total.sum);
      this.total_page = Math.ceil(res.data.Total.sum / 12);
      this.totalProducts = res.data.ItemList;
      this.setPage(page);
      this.setSeria();
    },
    setSeria: async function() {
      // let input ={
      // }
      const res = await this.$http.post("/figurine/front_get_series.php");
      this.items = setItem(res.data);
    },
    setPage: async function(_page) {
      _page--;
      this.Products = this.totalProducts.slice(0 + _page * 12, _page * 12 + 12);
    }
  }
};
</script>
