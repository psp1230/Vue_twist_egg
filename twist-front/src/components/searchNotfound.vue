<template>
  <v-app id="inspire" style="background-color:#bebfc1">
    <v-row justify="center">
      <v-card color="#bebfc1" flat>
        <v-card-title style="font-size:30px">查無此商品結果</v-card-title>
      </v-card>
    </v-row>
  </v-app>
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
// function setItem(array) {
//   const series = [];
//   array.forEach(function(element) {
//     const _series = [];
//     element.parent.forEach(element => _series.push({ name: element.title }));
//     const _element = { id: element.id, name: element.title, children: _series };

//     series.push(_element);
//   });
//   return series;
// }
export default {
  // data: () => ({
  //   select: "Deafault",
  //   options: ["Default", "Price: Low to High", "Price: High to Low"],
  //   page: 1,
  //   min: 0,
  //   max: 10000,
  //   items: [],
  //   Product: "",
  //   totalProducts: [],
  //   products: [],
  //   sum: "",
  //   total_page: 0,
  //   id: "",
  //   apiUrl: ""
  // }),
  // created: async function() {
  //   this.apiUrl = process.env.VUE_APP_API_URL;
  //   this.Product = this.$route.query.product;
  //   this.getProducts(this.page);
  // },
  // watch: {
  //   page: function(page) {
  //     this.setPage(page);
  //   }
  // },
  // methods: {
  //   getProducts: async function(page) {
  //     const input = {
  //       Search: this.Product
  //     };
  //     const res = await this.$http.post("/figurine/front_search.php ", input);
  //     console.log(res.data);
  //     this.totalProducts = res.data.Search;
  //     console.log(this.totalProducts.length);
  //     if (this.totalProducts.length > 0) {
  //       this.total_page = Math.ceil(this.totalProducts.length / 12);
  //       this.setPage(page);
  //     }
  //   },
  //   setPage: async function(_page) {
  //     _page--;
  //     this.products = this.totalProducts.slice(0 + _page * 12, _page * 12 + 12);
  //   }
  // }
};
</script>
