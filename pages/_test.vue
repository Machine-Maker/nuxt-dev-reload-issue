<template>
  <div class="container">
    {{ thing.title }}
      <NuxtChild />
    {{ thing.userId }}
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import {Context} from "@nuxt/types";

@Component
export default class Test extends Vue {
  testArr!: number[];
  async asyncData(ctx: Context) {
    console.log('_test.vue asyncData');
    await new Promise<void>((resolve, reject) => {
      setTimeout(() => {
        resolve()
      }, 400)
    })
    return { testArr: [5, 4, 3, 2, 1], t: 't' }
  }

  get thing() {
    return this.$store.state.data;
  }

  created() {
    console.log('_test.vue created');
  }

  mounted() {
    console.log('_test.vue mounted');
  }
}
</script>
