export const state = () => ({
  data: {
    "userId": 1,
    "id": 1,
    "title": "delectus aut autem",
    "completed": false
  },
});

export type RootState = ReturnType<typeof state>;

export const mutations = {
  SET_DATA: (state: RootState, payload: RootState['data']) => {
    state.data = payload;
  }
}
