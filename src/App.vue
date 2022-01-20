<template>
  <q-layout view="lHh lpr lFf" style="background-color: lightgrey;">
      <q-header elevated>
        <q-toolbar>
          <q-avatar icon="menu_book" />
          <q-toolbar-title>book-app</q-toolbar-title>
        </q-toolbar>

        <q-tabs v-model="tab">
          <q-route-tab name="search" label="Landing page" to="/" exact/>
          <q-route-tab name="menu_book" label="books page" to="/books" exact/>
        </q-tabs>
      </q-header>

      <q-page-container>
        <q-page class="q-pa-md">
          <Suspense>
            <template #default>
               <router-view />
            </template>
            <template #fallback>
              loading...
            </template>
          </Suspense>
        </q-page>
      </q-page-container>
    </q-layout>
</template>

<script lang="ts">
import { ref } from "vue";
export default {
  setup() {
    return {
      tab: ref("search"),
    };
  },
};
</script>
