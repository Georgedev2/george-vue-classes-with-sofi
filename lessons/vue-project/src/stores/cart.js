import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
  state: () => ({
    carts: []
  }),

  getters: {
    cartCount: (state) => state.carts.length
  },

  actions: {
    addProduct(product) {
      const existingProduct = this.carts.find(
        item => item.id === product.id
      )

      if (existingProduct) {
        existingProduct.qty++
      } else {
        this.carts.push({
          ...product,
          qty: 1
        })
      }
    }
  }
})