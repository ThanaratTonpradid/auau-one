<template>
  <b-navbar toggleable="lg" type="dark" variant="primary">
    <b-navbar-brand class="text-uppercase" :to="{ name: 'home' }">auau.one</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item :to="{ name: 'about' }">
          About
        </b-nav-item>
      </b-navbar-nav>
      <b-navbar-nav class="ml-auto">
        <b-button
          href="https://github.com/ThanaratTonpradid"
          class="m-2"
          rel="publisher"
          target="_blank"
          variant="outline-light"
          pill
        >
          <i class="fa fa-github"></i>
        </b-button>
        <b-button
          href="https://www.facebook.com/auau.one/"
          class="m-2"
          target="_blank"
          variant="outline-light"
          pill
        >
          <i class="fa fa-facebook-square"></i>
        </b-button>
        <b-button
          href="https://twitter.com/AJ_AUAUON"
          class="m-2"
          target="_blank"
          variant="outline-light"
          pill
        >
          <i class="fa fa-twitter"></i>
        </b-button>
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
