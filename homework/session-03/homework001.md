# 🛒 Homework — Mini Shopping Cart

## Objective

Build a small Vue 3 shopping page where a user can browse products and
manage a shopping cart.

The application should be simple enough to complete within 20–30 minutes.

## Requirements

### 1. Product List

Display a list of products.

Each product should have:

* Name
* Price
* "Add to Cart" button

Example:

```text
Laptop ₦500,000 [Add to Cart]
Headphones ₦50,000 [Add to Cart]
Mouse ₦15,000 [Add to Cart]
```

You can use a hard-coded list of products. No API is required.

### 2. Shopping Cart

Display the current items in the cart.

For each item, show:

* Product name
* Price
* Quantity
* Total price

The user should be able to:

* Add a product
* Increase quantity
* Decrease quantity
* Remove a product

### 3. Cart Summary

Display:

```text
Items: 3
Total: ₦565,000
```

The values should automatically update when the cart changes.

### 4. Component Structure

You may organize the application into components in whatever way you think
is appropriate.

For example, you might have:

```text
ProductList
ProductItem
ShoppingCart
CartItem
CartSummary
```

You are free to choose a different structure if you think it is more
appropriate.

### 5. State

Decide where each piece of state should live.

Consider:

* Product data
* Cart items
* Selected product
* Quantities
* Cart total
* UI state

Use the approach you believe is most appropriate for the application.

Be prepared to explain why you chose where each piece of state lives.

## Constraints

* Use Vue 3.
* Use the Composition API.
* No backend or API is required.
* Use hard-coded product data.
* Focus on functionality rather than styling.
* Do not spend excessive time on CSS.

## ⏱️ Time Limit

20–30 minutes

Prioritize:

* Working functionality
* Appropriate state management
* Clean component structure
* Clear reasoning behind your decisions

You should be able to justify your decisions made in your implementation.
