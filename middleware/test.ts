import {Context} from "@nuxt/types";

export default async ({ store }: Context) => {
  console.log('middleware start');
  await new Promise<void>(resolve => {
    setTimeout(() => {
      resolve()
    }, 100);
  })
  store.commit('SET_DATA', {
    "userId": 4,
    "id": 1,
    "title": "this sucks",
    "completed": true
  });
  console.log('middleware end');
}
