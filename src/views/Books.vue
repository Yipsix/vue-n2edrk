<template>
  <q-page padding>
    <div class="container">
        <q-table
            title="Books"
            :rows="books"
            :columns="columns"
            row-key="id"
            @row-click="rowClick"
            :rows-per-page-options="[]"
            :pagination="{
                rowsPerPage: 10,
            }"
        />
      </div>
      <book-dialog v-model:show="showDialog" :book="bookPicked"/>
  </q-page>
</template>

<script lang="ts">
import { ref } from "vue";
import dataService from "@/services/dataService";
import bookDialog from "@/components/TheBookDialog.vue";

export default {
  components: { bookDialog },
  async setup() {
    const books = await dataService.getAllBooks();
    const columns = [
        {name: 'author', label: 'Author',  field: 'author', align: 'left'},
        {name: 'name', label: 'Book name',  field: 'bookName', align: 'left'},
        {name: 'date', label: 'Published',  field: 'publishedDate', align: 'left'},
        {name: 'about', label: 'About',  field: 'about', align: 'left'},
    ]
    const showDialog = ref(false);
    const bookPicked = ref({});
    const rowClick = (evt: Event, row: Book) => {
        showDialog.value = true;
        bookPicked.value = row;
    }
    return { books, columns, rowClick, showDialog, bookPicked }
}};
</script>

<style scoped>
.container {
  background-color: lightgrey;
  max-width: 1312px;
  width: 100%;
  height: 100%;
  padding-right: 16px !important;
  padding-left: 16px !important;
  margin-right: auto;
  margin-left: auto;
}
</style>