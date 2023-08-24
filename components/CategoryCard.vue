<template>
  <v-section class="shop-category-area">
    <v-container>

      <div class="shop-category-wrap">
        <v-row>
          <v-col cols="6" md="2">
            <v-card class="shop-category-single-item">
              <v-img
                src="https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e570738029a725e686_Furniture-min.png"
                alt="Furniture"
                loading="lazy"
                class="category-image"
              >
                <div class="category-text">Makanan</div>
              </v-img>
            </v-card>
          </v-col>
          <v-col cols="6" md="2">
            <v-card class="shop-category-single-item">
              <v-img
                src="https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e570738029a725e686_Furniture-min.png"
                alt="Furniture"
                loading="lazy"
                class="category-image"
              >
                <div class="category-text">Kerajinan Tangan </div>
              </v-img>
            </v-card>
          </v-col>
          <v-col cols="6" md="2">
            <v-card class="shop-category-single-item">
              <v-img
                src="https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e570738029a725e686_Furniture-min.png"
                alt="Furniture"
                loading="lazy"
                class="category-image"
              >
                <div class="category-text">Pakaian</div>
              </v-img>
            </v-card>
          </v-col>
          <v-col cols="6" md="2">
            <v-card class="shop-category-single-item">
              <v-img
                src="https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e570738029a725e686_Furniture-min.png"
                alt="Furniture"
                loading="lazy"
                class="category-image"
              >
                <div class="category-text">Jasa</div>
              </v-img>
            </v-card>
          </v-col>
          <v-col cols="6" md="2">
            <v-card class="shop-category-single-item">
              <v-img
                src="https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e570738029a725e686_Furniture-min.png"
                alt="Furniture"
                loading="lazy"
                class="category-image"
              >
                <div class="category-text">Benda Rohani</div>
              </v-img>
            </v-card>
          </v-col>
          <v-col cols="6" md="2">
            <v-card class="shop-category-single-item">
              <v-img
                src="https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e570738029a725e686_Furniture-min.png"
                alt="Furniture"
                loading="lazy"
                class="category-image"
              >
                <div class="category-text">Elektronik</div>
              </v-img>
            </v-card>
          </v-col>
          <!-- Add other categories here using the same structure -->
        </v-row>
      </div>
    </v-container>
  </v-section>
</template>

<script>
export default {
  name: "ShopCategory",
};
</script>

<style scoped>
.category-image {
  position: relative;
  overflow: hidden;
}

.category-text {
  position: absolute;
  top: 10%;
  left: 50%;
  text-align: center;
  transform: translate(-50%, -10%);
  color: white;
  font-weight: bold;
  font-size: 20px;
  border-radius: 5px;
}

.category-image {
  position: relative;
  overflow: hidden;
  transition: transform 0.3s;
}

.category-image:hover {
  transform: scale(1.1);
  cursor: pointer;
}
</style>
