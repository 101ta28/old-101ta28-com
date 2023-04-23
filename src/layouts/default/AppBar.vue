<template>
  <v-app-bar flat color="primary">
    <v-app-bar-nav-icon @click="drawer = !drawer" v-if="isMobile"></v-app-bar-nav-icon>
    <!-- <v-app-bar-title>
      101ta28
    </v-app-bar-title> -->
    <!-- 押したらホーム画面 -->
    <v-btn link color="white" class="text-capitalize" to="/" :ripple="false">
      101ta28
    </v-btn>
    <v-spacer></v-spacer>
    <div v-if="isDesktop">
      <v-btn v-for="link in links" :key="link.text" link color="white" :to="link.pageLink" class="text-capitalize" :ripple="false">{{ link.text }}</v-btn>
    </div>
  </v-app-bar>
  <v-navigation-drawer v-model="drawer" color="primary" disable-resize-watcher app>
    <v-list dense>
      <v-list-item v-for="link in links" :key="link.text" link :to="link.pageLink">
        <v-icon>{{ link.icon }}</v-icon>
        <v-list-item-title>{{ link.text }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script setup>
import { computed, ref } from 'vue';
import { useDisplay } from 'vuetify/lib/framework.mjs';

const display = useDisplay()

const drawer = ref(false)

const links = ref([
  { icon: 'mdi-code-tags', text: 'Work', pageLink: "/work" },
  { icon: 'mdi-rss', text: 'Contact', pageLink: "/contact" },
])

const isMobile = computed(() => display.mobile.value);
const isDesktop = computed(() => !display.mobile.value);

</script>
