<template>
  <div>
    <v-container>
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
              :key="pro.id"
              v-for="pro in _products"
            >
              <v-hover v-slot:default="{ hover }">
                <v-card class="mx-auto" color="grey lighten-4" max-width="600">
                  <v-img
                    class="white--text align-end"
                    :aspect-ratio="16 / 9"
                    height="200px"
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
                    <div>{{ pro.series.title }}-{{ pro.series.parent }}</div>
                    <div>${{ pro.money }}</div>
                  </v-card-text>
                </v-card>
              </v-hover>
            </div>
          </div>
          <div class="text-center mt-12">
            <v-pagination v-model="page" :length="total_page"></v-pagination>
          </div>
        </div>
      </div>
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
    _products: [],
    total_page: 0,
    id: "",
    apiUrl: ""
  }),
  created: async function() {
    this.apiUrl = process.env.VUE_APP_API_URL;
    this.Cat = this.$route.params.id;
    this.getProducts(this.page);
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
      this.total_page = Math.ceil(res.data.Total.sum / 12);
      this.totalProducts = res.data.ItemList;
      console.log(this.totalProducts[0].series.title);
      console.log(123123123);
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
      this._products = this.totalProducts.slice(
        0 + _page * 12,
        _page * 12 + 12
      );
    }
  }
};
</script>
