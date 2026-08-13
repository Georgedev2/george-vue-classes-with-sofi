import { ref, computed } from 'vue'

// Module-level state: one shared cart instance for the whole app,
// so ProductList and ShoppingCart read/write the same source of truth
// without prop-drilling through App.vue.
const cartItems = ref([])

const itemCount = computed(() =>
  cartItems.value.reduce((sum, item) => sum + item.quantity, 0),
)

const cartTotal = computed(() =>
  cartItems.value.reduce((sum, item) => sum + item.price * item.quantity, 0),
)

function addToCart(product) {
  const existing = cartItems.value.find((item) => item.id === product.id)
  if (existing) {
    existing.quantity++
    return
  }
  cartItems.value.push({ ...product, quantity: 1 })
}

function increaseQuantity(id) {
  const item = cartItems.value.find((item) => item.id === id)
  if (item) item.quantity++
}

function decreaseQuantity(id) {
  const item = cartItems.value.find((item) => item.id === id)
  if (!item) return
  if (item.quantity <= 1) {
    removeFromCart(id)
    return
  }
  item.quantity--
}

function removeFromCart(id) {
  cartItems.value = cartItems.value.filter((item) => item.id !== id)
}

export function useCart() {
  return {
    cartItems,
    itemCount,
    cartTotal,
    addToCart,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
  }
}
