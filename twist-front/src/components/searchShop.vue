<template>
  <div>
    <v-container>
      <div class="row">
        <div class="row text-center">
          <div
            class="col-md-3 col-sm-6 col-xs-12"
            :key="pro.id"
            v-for="pro in products"
          >
            <v-hover v-slot:default="{ hover }">
              <v-card class="mx-auto" color="grey lighten-4" max-width="600">
                <v-img
                  class="white--text align-end"
                  :aspect-ratio="16 / 9"
                  height="200px"
                  :src="apiUrl + pro.img"
                >
                  <v-card-title>{{ pro.category }} </v-card-title>
                  <v-expand-transition>
                    <div
                      v-if="hover"
                      class="d-flex transition-fast-in-fast-out white darken-2 v-card--reveal display-3 white--text"
                      style="height: 100%;"
                    >
                      <v-btn
                        v-if="hover"
                        href="'/product-:'+pro.category+'/shopid:'"
                        class=""
                        outlined
                        >VIEW</v-btn
                      >
                    </div>
                  </v-expand-transition>
                </v-img>
                <v-card-text class="text--primary">
                  <div>
                    <a href="/product" style="text-decoration: none">{{
                      pro.title
                    }}</a>
                  </div>
                  <div>${{ pro.money }}</div>
                </v-card-text>
              </v-card>
            </v-hover>
          </div>
        </div>
      </div>
      <div class="text-center">
        <v-pagination v-model="page" :length="total_page"></v-pagination>
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
    Product: "",
    totalProducts: [],
    products: [],
    sum: "",
    total_page: 0,
    id: "",
    apiUrl: ""
  }),
  created: async function() {
    this.apiUrl = process.env.VUE_APP_API_URL;
    this.Product = this.$route.query.product;
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
        Search: this.Product
      };

      const res = await this.$http.post("/figurine/front_search.php ", input);
      console.log(res.data);
      this.totalProducts = res.data.Search;
      console.log(this.totalProducts.length);
      if (this.totalProducts.length > 0) {
        this.total_page = Math.ceil(this.totalProducts.length / 12);

        this.setPage(page);
      }
    },
    setPage: async function(_page) {
      _page--;
      this.products = this.totalProducts.slice(0 + _page * 12, _page * 12 + 12);
    }
  }
};
</script>
