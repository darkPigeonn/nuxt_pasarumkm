<template>
  <v-row>
    <v-col v-for="(p, i) in products" :key="`hotProduct-${i}`" cols="12" sm="2">
      <v-card
        nuxt
        :to="`/products/${p._id}`"
        color="surface"
        width="500"
        class="el card-product"
      >
        <v-img  :src="p.images ? p.images[0] : require('@/assets/images/image_placeholder.jpeg')" height="200">
          <template v-slot:placeholder>
            <div class="d-flex align-center justify-center fill-height">
              <v-progress-circular
                color="grey-lighten-4"
                indeterminate
              ></v-progress-circular>
            </div>
          </template>
        </v-img>
        <v-card-title class="text-md-body-1 font-weight-bold d-flex">
          <span>
            {{p.name}}
          </span>
        </v-card-title>
        <v-card-subtitle class="d-flex font-weight-bold text-h6">
          {{ p.price | currency }}
        </v-card-subtitle>

        <v-card-text>
          <v-chip
            x-small
            label
            outlined
          >
          {{p.shopName}}
          </v-chip>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import { formatCurrency } from '~/utils/formatCurrency';
export default {

  props: {
    products: Array,
  },
  computed: {
    formattedAmount() {
      return formatCurrency(this.amount);
    }
  }

};
</script>

<style></style>
