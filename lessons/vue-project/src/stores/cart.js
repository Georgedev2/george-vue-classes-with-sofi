import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useCartStore = defineStore('cart', () => {

  const carts = ref([])

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

  function addProduct(product) {
    const existingProduct = carts.value.find(
      item => item.id === product.id
    )

    if (existingProduct) {
      existingProduct.qty++
    } else {
      carts.value.push({
        ...product,
        qty: 1
      })
    }
  }

  const addProductToCart =(product)=>{

   const foundProduct= carts.value.find((cartItem)=> cartItem.id==product.id)// null

   if(foundProduct){

    foundProduct.qty++;
   }else{
    carts.value.push({
        ...product,
        qty:1
    })
   }
   

}


  function removeProduct(product) {
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
    addProduct,
    removeProduct, addProductToCart
  }
})