# Mini Shopping Cart

A small Vue 3 shopping page built with the Composition API, for Session 3
homework.

## What it does

- Browse a hard-coded product list, each with a name, price, and
  "Add to Cart" button.
- View the cart: each line shows product name, price, quantity, and line
  total.
- Increase/decrease quantity or remove an item from the cart.
- A summary shows total item count and total price, updating automatically
  as the cart changes.

## Install

```bash
npm install
```

## Run

```bash
npm run dev
```

## Component structure

```text
App
├── ProductList
│   └── ProductItem   (per product, emits add-to-cart)
└── ShoppingCart
    ├── CartItem       (per cart line, emits increase/decrease/remove)
    └── CartSummary    (item count + total)
```

`ProductItem` and `CartItem` are presentational: they receive data via
props and emit events, with no knowledge of where the cart lives. That
keeps them easy to reason about and reusable on their own.

## Where state lives, and why

- **Product data** (`src/data/products.js`) — a plain, non-reactive JS
  module. It's hard-coded and never changes at runtime, so it doesn't need
  to be `ref`/`reactive` at all; wrapping static data in reactivity would
  just be overhead with no benefit.

- **Cart items and quantities** (`src/composables/useCart.js`) — a single
  `ref` array, defined at module scope inside the composable rather than
  inside a component. `ProductList` (which adds items) and `ShoppingCart`
  (which displays and mutates them) are siblings under `App`, so without a
  shared source of truth this state would have to live in `App.vue` and be
  passed down/up through props and emits on both branches. A module-scoped
  composable gives both components direct access to the same reactive
  state without that prop-drilling, while staying much lighter than
  pulling in Pinia for an app this size.

- **Cart total / item count** — `computed` values inside the same
  composable, derived from `cartItems`. They're never stored directly, so
  they can never drift out of sync with the actual cart contents — adding,
  changing quantity, or removing an item recalculates them automatically.

- **Selected product / "add to cart" trigger** — not stored as state at
  all. Clicking "Add to Cart" is a one-shot action (`emit` → `addToCart`),
  not a value that needs to persist anywhere.

- **UI state** — none needed for this app; there's no modal, tab, or
  loading state to track.

## Constraints followed

- Vue 3, Composition API, `<script setup>` only.
- No backend/API — products are hard-coded.
- Minimal styling — functionality was prioritized over CSS.
