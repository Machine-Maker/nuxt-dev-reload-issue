<template>
  <div>
    <Logo />
    <h1 class="title">
      nuxt-dev-reload-issue
    </h1>
    <div class="links">
      <a
        href="https://nuxtjs.org/"
        target="_blank"
        rel="noopener noreferrer"
        class="button--green"
      >
        Documentation
      </a>
      <a
        href="https://github.com/nuxt/nuxt.js"
        target="_blank"
        rel="noopener noreferrer"
        class="button--grey"
      >
        GitHub
      </a>
      {{ arr.join(', ') }}
    </div>
    <NuxtChild />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
import {Context} from "@nuxt/types";

@Component
export default class TestIndex extends Vue {
  arr!: number[];

  async asyncData(ctx: Context) {
    await fetch('http://localhost:3000/api/v1/projects/Machine_Maker/ProtocolLib');
    console.log('index.vue asyncData');
    return { arr: [1, 2, 3] }
  }

  created() {
    console.log('index.vue created');
  }

  mounted() {
    console.log('index.vue mounted');
  }
}
</script>
