<template>
  <q-page padding>
    <div class="container q-pa-lg shadow-1">
      <div class="q-pa-lg">
        <div class="text-h3 q-pb-md">3 latest books</div>
        <span v-for="n in top3" :key="n">
            Book by {{ n.author }} named {{ n.bookName }} published the
            {{ n.publishedDate }} <br>
        </span>
      </div>
    </div>
    <div class="container q-pa-lg q-mt-lg shadow-1">
      <div class="q-pa-lg">
        <q-input class="q-pb-md" label="Search for name of book" v-model="text"/> 
        <span v-for="n in searchResults" :key="n">
            Book by {{ n.author }} named <b>{{ n.bookName }}</b> published the
            {{ n.publishedDate }} <br>
        </span>
      </div>
    </div>
  </q-page>
</template>

<script lang="ts">
import { ref, watch } from "vue";
import dataService from "@/services/dataService";
import { stringToDate } from "@/utils/formatting";
import { useRouter, useRoute } from 'vue-router';

export default {
  async setup() {
    const router = useRouter();
    const route = useRoute();
    const books = await dataService.getAllBooks();
    const top3 = books.sort((a: Book, b: Book) => {
        if (stringToDate(a.publishedDate) < stringToDate(b.publishedDate)) {
            return 1;
        }
        if (stringToDate(a.publishedDate) > stringToDate(b.publishedDate)) {
            return -1;
        }
        return 0;
      }).slice(0, 3);

    const searchResults = ref<Book[]>([]);
    const text = ref('');
    watch(text, async (text) => {
        searchResults.value = await dataService.getBookName(text);
        router.push({query: { q: text }});
    })
    text.value = route.query.q?.toString() ? route.query.q.toString() : '';
    
    return {
        top3,
        searchResults,
        text
    };
  },
};
</script>

<style scoped>
.container {
  background-color: white;
  max-width: 1312px;
  width: 100%;
  height: 100%;
  padding-right: 16px !important;
  padding-left: 16px !important;
  margin-right: auto;
  margin-left: auto;
}
</style>