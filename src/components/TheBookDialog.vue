<template>
  <q-dialog :model-value="show" @hide="$emit('update:show', false)">
      <q-card class="dialog-box">
        <q-card-section>
          <div class="text-h6">Book name: {{book.bookName}}</div>
          <div class="text-h6">Author: {{book.author}}</div>
        </q-card-section>
        <q-card-section class="q-pt-none">
          <span>{{book.about}}</span> <br>
          <span>Rating: <q-icon name="star" size="20px" v-for="index in book.rating" :key="index" /></span> 
        </q-card-section>
        <q-card-section>
          <div class="text-h6">Buy for low price of: {{book.price}}</div>
        </q-card-section>
        <q-card-actions align="right">
          <q-btn flat label="no thanks" color="primary" @click="$emit('update:show', false)"/>
        </q-card-actions>
      </q-card>
    </q-dialog>
</template>

<style>
</style>

<script lang="ts">
import { defineComponent, PropType, ref } from 'vue';

export default defineComponent({
    props: {
        show: Boolean,
        book: Object as PropType<Book>
    },
    emits: ['update:show'],
  });
</script>

<style scoped>
    .dialog-box {
        width: 800px; 
        max-width: 80vw;
    }
</style>