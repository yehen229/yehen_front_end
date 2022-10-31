<template>
  <h1>首页</h1>
  <p>{{ $store.state.count }}</p>
</template>

<script setup lang="ts">
import { useStore } from 'vuex';

const store = useStore()

// console.log(store.state.count);

</script>

