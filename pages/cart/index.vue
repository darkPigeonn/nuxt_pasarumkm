<template>
  <div>
    <DesktopNav />
    <br />
    <div class="text-center" v-if="$store.state.cart.cart.length == 0">
      <v-img class="d-block mx-auto" src="/emptycart.svg" width="500"></v-img>
      <p>Belum ada produk yang masuk keranjang </p>
    </div>
    <v-container>
      <div class="mb-3 d-flex justify-content-end" v-if="$store.state.cart.cart.length > 0">
        <v-btn
          @click="buyOnWhatsApp"
          min-width="150"
          min-height="45"
          color="primary"
          >Beli</v-btn
        >
      </div>
      <v-row>
        <template v-for="(c, i) in $store.state.cart.cart">
          <v-col :key="`cartItem${i}`">
            <v-card color="surface" flat>
              <v-btn
                @click="$store.commit('cart/RemoveCartItem', i)"
                absolute
                top
                right
                icon
              >
                <v-icon size="18">mdi-delete</v-icon>
              </v-btn>

              <v-row dense>
                <v-col md="3">
                  <v-img
                    class="rounded-lg"
                    height="220"
                    :src="c.product.images[0]"
                  ></v-img>
                </v-col>
                <v-col class="pl-5 pt-2" md="9">
                  <h2 class="text-md-h6 font-weight-bold">
                    {{ c.product.name }} x {{ c.quantity }}
                  </h2>
                  <p class="primary--text mt-2">
                    {{ c.product.price | currency }}
                  </p>
                  <v-btn
                    @click="$store.commit('cart/IncreaseItemCount', i)"
                    icon
                  >
                    <v-icon size="20">mdi-plus-circle</v-icon>
                  </v-btn>
                  <span class="mx-2">{{ c.quantity }}</span>
                  <v-btn
                    @click="$store.commit('cart/DecreaseItemCount', i)"
                    icon
                  >
                    <v-icon size="20">mdi-minus-circle</v-icon>
                  </v-btn>
                </v-col>
              </v-row>
            </v-card>
          </v-col>
        </template>
      </v-row>
      <br/>
      <div class="mb-3 d-flex justify-content-end" v-if="$store.state.cart.cart.length > 0">
        <v-btn
          @click="buyOnWhatsApp"
          min-width="150"
          min-height="45"
          color="primary"
          >Beli</v-btn
        >
      </div>
    </v-container>
    <br /><br />
    <Footer />
    <ScrollTop />
  </div>
</template>

<script>

export default {
  methods: {
    buyOnWhatsApp() {
      // Gantilah dengan pesan atau tautan yang ingin Anda bagikan
      const cart = this.$store.state.cart.cart;
      const cartNew = [];

            // Mengisi cartNew dengan data yang diinginkan
      for (let index = 0; index < cart.length; index++) {
        const element = cart[index];
        const dataNew = {
          'Nama Produk': element.product.name,
          'Jumlah': element.quantity,
        };
        cartNew.push(dataNew);
      }

      // Membuat pesan untuk WhatsApp
      const messageToShare = `Halo! Saya tertarik dengan produk Anda di Pasar PSE. Berikut produk yang ingin saya beli: ${generateCartMessage(cartNew)}`;


      const encodedMessage = encodeURIComponent(messageToShare);
      // Membuka tautan ke WhatsApp
      const whatsappLink =  `https://api.whatsapp.com/send?phone=6285733081830&text=${encodedMessage}`;
      window.location.href = whatsappLink;

      // Fungsi untuk menghasilkan pesan keranjang belanja
      function generateCartMessage(cartData) {
        if (cartData.length === 0) {
          return 'Tidak ada produk yang dipilih.';
        }

        let message = '';
        cartData.forEach((item, index) => {
          message += `\n${index + 1}. ${item['Nama Produk']} (${item['Jumlah']} pcs)`;
        });

        return message;
      }

    },
  },
};
</script>

<style></style>
