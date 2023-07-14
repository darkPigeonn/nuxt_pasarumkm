<template>
  <!-- <v-parallax
  height="500"

  :src="require('@/assets/images/bg1.jpg')"> -->
  <div class="hero">
    <div class="container col-xxl-8 px-4 py-3">
      <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
        <div class="col-12 col-sm-8 col-lg-6">
          <img :src='require("@/assets/images/bg2.jpg")' class="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy">
        </div>
        <div class="col-lg-6">
          <h1 class="display-5 fw-bold lh-1 mb-3">PASAR UMKM</h1>
          <p class="lead">Temukan produk menarik dan berkualitas di Pasar UMKM, serta membantu para UMKM untuk semakin tumbuh bersama dengan semangat komunio</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    sale_items: Array,
  },
};
</script>


<style scoped>
  .hero {

    color : rgb(0, 79, 17)
  }
  .hero-content {
    padding-top: 10vh;
    margin-inline-start: 20vh;
  }

</style>
