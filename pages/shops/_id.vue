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
            <v-rating
            readonly
            v-model="rating"
            hover
            half-increments
          ></v-rating>

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
          <br />

          <hr/>

          <div class="mt-5 mb-7" v-html="product.description">
          </div>
          <hr />
          <span>Harga</span>
          <h3>{{ product.price | currency }}</h3>
          <hr />
          <v-btn
            :href='link'
            target="_blank"
            min-height="45"
            min-width="170"
            class="text-capitalize"
            color="primary"
            >Beli</v-btn
          >
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
      link: 'https://api.whatsapp.com/send?phone=6285735071598&text=Halo! Saya tertarik dengan produk Anda di Pasar PSE https://pasar.keuskupansurabaya.org' + this.$route.fullPath
    };
  },
};
</script>

<style></style>
