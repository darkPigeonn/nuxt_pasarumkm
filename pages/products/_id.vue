<template>
  <div>
    <DesktopNav />
    <v-container v-if="product">
      <v-row justify="center">
        <v-col cols="11" md="7">
          <h2 class="text-center text-md-h4 font-weight-bold">
            {{ product.name }}
          </h2>
          <div class="mt-2 text-center">
            <!-- <v-rating
              readonly
              half-increments
              class="mb-2"
              color="yellow darken-2"
              background-color="grey lighten-1"
              :value="product.ratings"
              dense
              size="20"
            ></v-rating> -->
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
          <v-img
            width="100%"
            class="el rounded-lg"
            height="50vh"
            :src="product.images ? product.images[0] : require('@/assets/images/image_placeholder.jpeg')"
          ></v-img>
          <div class="mt-5 mb-7" v-html="product.description">

          </div>
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
      link: 'https://api.whatsapp.com/send?phone=6285735071598&text=Halo! Saya tertarik dengan produk Anda di Pasar UMKM https://pasar.keuskupansurabaya.org' + this.$route.fullPath
    };
  },
  head: {
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
  },
};
</script>

<style></style>
