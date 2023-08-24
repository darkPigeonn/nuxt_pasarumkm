<template>
  <div>
    <DesktopNav />
    <v-container v-if="product">
      <v-row class="mx-5 my-5">
        <v-col>
          <v-img
          width="100%"
          class="el rounded-lg"
          height="50vh"
          :src="product.images ? product.images[0] : require('@/assets/images/image_placeholder.jpeg')"
        ></v-img>
        </v-col>
        <v-col>
          <h2 class="text-md-h4 font-weight-bold">
            {{ product.name }}
          </h2>
          <div>
            <div class="d-flex flex-row">

              <v-icon class="yellow--text" style="align-items: baseline;">mdi-star</v-icon>
              <p>4.5</p>
            </div>
            <span>Harga</span>
            <h3 class="font-weight-bold">{{ product.price | currency }}</h3>

            <v-chip
              small
              label
              outlined
              class="mr-1"
              v-for="(t, i) in product.tags"
              :key="`prod${product.id}-${i}`"
            >
              {{ t }}
            </v-chip>
          </div>

          <hr/>

          <div class="mb-7" v-html="product.description">
          </div>
          <hr />
          <div class="d-flex flex-row  justify-content-end">
            <v-btn
              :href='link'
              target="_blank"

              class="text-capitalize d-flex align-center mx-2"
              color="primary"
              >Beli</v-btn
            >
            <v-btn
              :href='link'
              target="_blank"

              class="text-capitalize d-flex align-center mx-2"
              color="primary"
              >Bagikan</v-btn
            >
          </div>
        </v-col>
      </v-row>
    </v-container>
    <br /><br />
    <Footer />
    <ScrollTop />
  </div>
</template>

<script>
export default {
  async created() {
    let d = await this.$content("products")
      .where({ id: parseInt(this.$route.params.id) })
      .limit(1)
      .fetch();
    this.product = d[0];
  },
  async fetch() {
    const response = await this.$axios.$get('/pse/shops/products/view/'+this.$route.params.id);
    this.product = response;
  },
  data() {
    return {
      product: null,
      link: 'https://api.whatsapp.com/send?phone=6285735071598&text=Halo! Saya tertarik dengan produk Anda di Pasar UMKM https://pasar.keuskupansurabaya.org' + this.$route.fullPath
    };
  },
};
</script>

<style>
.v-icon.theme--light.yellow--text {
  color: yellow;
}
</style>
