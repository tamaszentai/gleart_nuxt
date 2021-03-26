export const state = () => ({
  sidedrawer: false
})

export const mutations = {
  setSidedrawer (state) {
    state.sidedrawer = !state.sidedrawer
  }
}

export const getters = {
  getSidedrawer: (state) => {
    return state.sidedrawer
  }
}
