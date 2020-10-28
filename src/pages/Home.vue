<template>
  <div class="container">
    <div class="home d-flex justify-content-center align-items-center">
      <h1 class="font-weight-bold text-uppercase">auau.one</h1>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

@Component
export default class Home extends Vue {}
</script>
<style scoped>
.home {
  height: calc(100vh - 56px);
}
</style>
