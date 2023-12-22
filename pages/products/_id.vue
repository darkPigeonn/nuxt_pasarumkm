<template>
  <div>
    <DesktopNav />
    <v-container v-if="product">
      <v-row class="mx-5 my-5">
        <v-col cols="12" sm="6">
          <v-img
          class="el rounded-lg"
          cover
          height="500"
          :src="product.images ? product.images[0] : require('@/assets/images/image_placeholder.jpeg')"
        >
        <template v-slot:placeholder>
          <div class="d-flex align-center justify-center fill-height">
            <v-progress-circular
              color="grey-lighten-4"
              indeterminate
            ></v-progress-circular>
          </div>
        </template>
      </v-img>
        </v-col>
        <v-col cols="12" sm="6">
          <h2 class="text-md-h4 font-weight-bold">
            {{ product.name }}
          </h2>
          <div>
            <div class="d-flex flex-row">

              <v-icon class="yellow--text" style="align-items: baseline;">mdi-star</v-icon>
              <p>4.5</p>
            </div>
            <span>Harga</span>
            <h3 class="font-weight-bold">Rp. {{ product.price | currency }}</h3>

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
              :href='whatsappShareLink'
              target="_blank"

              class="text-capitalize d-flex align-center mx-2"
              color="primary"
              >Bagikan</v-btn
            >
            <v-btn
            @click="$store.commit('cart/AddToCart', product)"
            class="text-capitalize"
            color="primary"
            >+ Keranjang</v-btn>
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

  async fetch() {
    const response = await this.$axios.$get('/pse/shops/products/view/'+this.$route.params.id);
    this.product = response;
  },
  data() {
    return {
      product: {},
      link: 'https://api.whatsapp.com/send?phone=6285733081830&text=Halo! Saya tertarik dengan produk Anda di Pasar PSE https://pasar.keuskupansurabaya.org' + this.$route.fullPath
    };
  },
  computed: {
    whatsappShareLink() {
      // Gantilah dengan pesan yang ingin Anda bagikan
      const messageToShare = "Hallo, ada produk menarik ni di Toko kami : https://pasar.keuskupansurabaya.org"+ this.$route.fullPath;
      // Encode pesan dengan encodeURIComponent
      const encodedMessage = encodeURIComponent(messageToShare);
      return `https://api.whatsapp.com/send?text=${encodedMessage}`;
    },
  },
  head() {
    return  {
    title: 'Pasar UMKM',
          meta: [
              {
              hid: 'og:image',
              property: 'og:image',
              content: this.product.images[0]
              },
              {
              hid: 'description',
              property: 'description',
              content: this.product.description
              },
              {
              hid: 'og:description',
              property: 'og:description',
              content: this.product.description
              },
              {
              hid: 'og:title',
              property: 'og:title',
              content: this.product.name
              },
              {
              hid: 'og:url',
              name: 'og:url',
              content: `https://pasar.keuskupansurabaya.org/products/${this.product.id}`
              }
          ]
            }
  }
};
</script>

<style>
.v-icon.theme--light.yellow--text {
  color: yellow;
}
</style>
