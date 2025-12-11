<template>
  <q-scroll-area class="fullscreen bg-grey-1" :thumb-style="thumbStyle">
    <router-view />
  </q-scroll-area>
</template>

<script setup>
import { getCssVar } from 'quasar'
import { computed } from 'vue'

const thumbStyle = computed(() => ({
  borderRadius: '0px',
  backgroundColor: getCssVar('primary'),
  width: '5px',
  opacity: '0.75'
}))
</script>
