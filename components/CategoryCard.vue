<template>
  <div>
    <v-container fluid>
      <v-row>
        <v-col v-for="(category, index) in categories" :key="index">
          <a href="#" style="text-decoration: none;">
            <v-card class="mx-auto" max-width="200" color="#ddd">
              <v-card-text class="text-center text-category-product">{{ category.name }}</v-card-text>
            </v-card>
          </a>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      categories: [
        {
          id: 1,
          name: 'Elektronik',
        },
        {
          id: 2,
          name: 'Pakaian',
        },
        {
          id: 1,
          name: 'Elektronik',
        },
        {
          id: 2,
          name: 'Pakaian',
        },
        // Tambahkan kategori lainnya sesuai kebutuhan
      ],
    };
  },
};
</script>

<style>
/* Gaya tampilan tambahan sesuai kebutuhan */
</style>
