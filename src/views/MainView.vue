<template>
  <block-container class="q-pa-sm">
    <p>{{ routeKey }}</p>
    <p v-for="wish in wishes" :key="wish">
      {{ wish }}
    </p>
    <p v-for="note in notes" :key="note">
      {{ note }}
    </p>
  </block-container>
</template>

<script setup lang="js">
import { computed } from 'vue'
import { useRoute } from 'vue-router'

import BlockContainer from '@/components/BlockContainer.vue'
import { useWishes } from '@/composables/useWishes'

const route = useRoute()
const routeKey = computed(() => String(route.params.key || ''))

const { wishes, notes } = useWishes(routeKey)
</script>
