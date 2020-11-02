<template>
  <b-navbar toggleable="lg" type="dark" variant="primary">
    <b-navbar-brand class="text-uppercase" href="/">auau.one</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item @click="goAbout">About</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>
<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

@Component
export default class Navbar extends Vue {
  goAbout() {
    this.$router.push({
      name: 'about',
    });
  }
}
</script>
