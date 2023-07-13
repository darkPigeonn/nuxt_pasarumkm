<template>
  <v-parallax
  height="500"
  :src="require('@/assets/images/bg1.jpg')">
  <v-card
    class="mx-auto"
    max-width="600"
  >
    <v-card-text>
      <p class="text-h2 text--primary">
        PASAR UMKM
      </p>
      <div class="text--primary">
        Belanja barang keseharian dengan produk yang terjamin
      </div>
    </v-card-text>


  </v-card>

  </v-parallax>
</template>

<script>
export default {
  props: {
    sale_items: Array,
  },
};
</script>

<style></style>
