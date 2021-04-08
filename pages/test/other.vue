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
      {{ test.hey.there }}
    </div>
    <NuxtChild />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
import {Context} from "@nuxt/types";

@Component
export default class OtherPage extends Vue {
  arr!: number[];
  test: any = {};

  async asyncData(ctx: Context) {
    console.log('async start');
    await new Promise<void>(resolve => {
      setTimeout(() => {
        resolve()
      }, 300);
    })
    console.log('async end');
    return { arr: [1, 2, 3], test: { hey: { there: 'bud'/*, t: 't'*/ } } }
  }

  created() {
    console.log('other.vue created');
  }
}
</script>
