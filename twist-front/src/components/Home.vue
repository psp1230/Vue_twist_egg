<template>
  <div id="app">
    <v-row no-gutters>
      <v-col v-for="n in 2" :key="n" cols="12" sm="6">
        <v-carousel cycle interval="3000" v-if="carouselPicList" height="auto">
          <v-carousel-item
            v-for="(item, index) in carouselPicList"
            :key="index"
            v-bind:src="item.imgpic !== null ? apiUrl + item.imgpic : ''"
            aspect-ratio="2.5"
          >
            <v-row class="fill-height" align="center" justify="center">
              <div class="display-2 white--text pl-5 pr-5 hidden-sm-only">
                <strong></strong>
              </div>
              <br />
            </v-row>
          </v-carousel-item>
        </v-carousel>
      </v-col>
    </v-row>

    <div class="pl-4 pr-4 row">
      <div class="col-md-4 col-sm-4 col-xs-12">
        <v-card v-if="entryPicList">
          <v-img
            v-bind:src="
              entryPicList && entryPicList.length > 0
                ? apiUrl + entryPicList[0].imgpic
                : ''
            "
            class="white--text align-center"
            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
            aspect-ratio="1.33333333333"
          >
            <h1 class="text-center font-size">一番賞</h1>
            <div class="text-center">
              <v-btn href="/shop-一番賞" class="white--text " outlined
                >進入</v-btn
              >
            </div>
          </v-img>
        </v-card>
      </div>
      <div class="col-md-4 col-sm-4 col-xs-12">
        <v-card v-if="entryPicList">
          <v-img
            v-bind:src="
              entryPicList && entryPicList.length > 0
                ? apiUrl + entryPicList[1].imgpic
                : ''
            "
            class="white--text align-center"
            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
            aspect-ratio="1.33333333333"
          >
            <h1 class="text-center font-size">極運賞</h1>
            <div class="text-center">
              <v-btn href="/shop-極運賞" class="white--text" outlined
                >進入</v-btn
              >
            </div>
          </v-img>
        </v-card>
      </div>
      <div class="col-md-4 col-sm-4 col-xs-12">
        <v-card v-if="entryPicList">
          <v-img
            v-bind:src="
              entryPicList && entryPicList.length > 0
                ? apiUrl + entryPicList[2].imgpic
                : ''
            "
            class="white--text align-center"
            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
            aspect-ratio="1.33333333333"
          >
            <h1 class="text-center font-size">公仔商城</h1>
            <div class="text-center">
              <v-btn href="/shop-商城" class="white--text" outlined>進入</v-btn>
            </div>
          </v-img>
        </v-card>
      </div>
    </div>
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
                      aspect-ratio="1.33333333333"
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
  </div>
</template>
<script>
// 篩選圖
function setPicList(params) {
  const carouselPicList = params.imgPicList.filter(
    item => item.sequence == "輪播圖"
  );
  const entryPicList = params.imgPicList.filter(
    item => item.sequence.substr(0, 2) == "入口"
  );
  const recommendPicList = params.recommend;
  recommendPicList.forEach(function(item) {
    const _series = item.series;
    item.series = _series[0].title + "-" + _series[0].parent;
  });

  return {
    carousel: carouselPicList,
    entry: entryPicList,
    recommend: recommendPicList
  };
}
export default {
  data: () => ({
    items: [
      { title: "Click Me" },
      { title: "Click Me" },
      { title: "Click Me" },
      { title: "Click Me" }
    ],
    activeBtn: 1,
    colors: [
      "indigo",
      "warning",
      "pink darken-2",
      "red lighten-1",
      "deep-purple accent-4"
    ],
    slides: ["First", "Second", "Third", "Fourth", "Fifth"],
    picsList: {},
    entryPicList: [],
    carouselPicList: [],
    recommendList: [],
    apiUrl: ""
  }),
  created: async function() {
    const res = await this.$http.post("/figurine/front_get_home_img.php");
    // this.picsList = res.data;

    this.apiUrl = process.env.VUE_APP_API_URL;
    this.picsList = setPicList(res.data);

    this.entryPicList = this.picsList.entry;
    this.carouselPicList = this.picsList.carousel;
    this.recommendList = this.picsList.recommend;

    console.log(this.recommendList);
  }
};
</script>
<style>
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: 0.5;
  position: absolute;
  width: 100%;
}
</style>
