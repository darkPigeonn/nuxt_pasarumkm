<template>
  <div>
    <DesktopNav />
    <HomeCarousel :sale_items="sale_items" />
    <br /><br />
    <v-container>
      <h1 class="text-md-h4 text-h6">Kategori Produk UMKM</h1>
      <CategoryCard />
    </v-container>
    <v-container style="color: gray;">
      <h1 class="text-md-h4 text-h6">Daftar Produk</h1>
      <br />
      <ProductSlider :products="products" />
      <br />
      <hr>
      <br />
      <h1 class="text-md-h4 text-h6">Daftar Toko</h1>
      <br />
      <ShopSlider :shops="shops" />
      <br /><br /><br />

    </v-container>
    <br /><br />
    <hr />
    <Footer />
    <ScrollTop />
  </div>
</template>

<script>
export default {
  // async created() {
  //   this.sale_items = await this.$content("products")
  //     .where({ onSale: true })
  //     .fetch();
  //   this.products = await this.$content("products").fetch();
  // },
  async fetch() {
    const response = await this.$axios.$get('/pse/shops/products/get-all', {
        params: {
          limit: 3, // Nilai limit yang ingin Anda gunakan
        },
      });
    const response2 = await this.$axios.$get('/pse/shops/get-all', {
        params: {
          limit: 3, // Nilai limit yang ingin Anda gunakan
        },
    });
    this.products = response;
    this.shops = response2;
    console.log(this.products);
  },
  data() {
    return {
      products: null,
      shops: null,
      sale_items: null,
    };
  },
};
</script>

<style></style>
