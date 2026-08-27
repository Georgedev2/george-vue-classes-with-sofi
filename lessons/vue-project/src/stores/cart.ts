import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export type Product = {
  name: string;
  id: number;
  price: number;
  qty: number;
  currency: string;
};

export const useCartStore = defineStore('cart', () => {

  const carts = ref<Product[]>([])
  /* The difference is purely for TypeScript: now it knows every item 
  in carts.value has .id, .qty, .price, etc., and 
  can catch mistakes (like typos or wrong types) as you write code.*/


  const totalItems = computed(() =>
    carts.value.reduce(
      (total, item) => total + item.qty,
      0
    )
  )

  const totalPrice = computed(() =>
    carts.value.reduce(
      (total, item) => total + item.price * item.qty,
      0
    )
  )

  //removed addproduct because is not the one being used in the ProductList component

  const addProductToCart = (product: Product) => {

    const foundProduct = carts.value.find((cartItem) => cartItem.id == product.id)// null

    if (foundProduct) {

      foundProduct.qty++;
    } else {
      carts.value.push({
        ...product,
        qty: 1
      })
    }


  }


  function removeProduct(product: Product) {
    const existingProduct = carts.value.find(
      item => item.id === product.id
    )

    if (existingProduct && existingProduct.qty > 1) {
      existingProduct.qty--
    } else {
      carts.value = carts.value.filter(
        item => item.id !== product.id
      )
    }
  }

  return {
    carts,
    totalItems,
    totalPrice,
    removeProduct, addProductToCart
  }
})