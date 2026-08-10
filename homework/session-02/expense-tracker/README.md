# Expense Tracker

A small personal expense tracker built with Vue 3 and the Composition API, as
part of Session 2 homework.

## What it does

- Add an expense with a description, amount, category, and date.
- View all expenses in a table.
- See a running total that updates automatically as expenses are added or
  removed.
- Filter the visible list by category (All, Food, Transport, Entertainment,
  Bills, Other).
- Delete an expense.
- Expenses persist in `localStorage`, so they're still there after a page
  reload.

## Install

```bash
npm install
```

## Run

```bash
npm run dev
```

Then open the URL Vite prints (usually `http://localhost:5173`).

## Vue concepts used

- **`ref`** for `expenses` (the list itself, since it's replaced/pushed to as
  a single reactive value) and `activeFilter` (a single primitive value).
- **`reactive`** for the `form` object, since it groups several related
  fields (description, amount, category, date) that are always read/written
  together.
- **`computed`** for `total` (derived from `expenses`) and
  `filteredExpenses` (derived from `expenses` + `activeFilter`). Both are
  pure derivations of existing state, so they update automatically without
  any manual recalculation.
- **`watch`** on `expenses` (with `{ deep: true }`) to persist to
  `localStorage` whenever the list changes. `watch` was the right fit here
  because the goal is a side effect tied to one specific source, not a
  general reactive computation.
- **`watchEffect`** was not needed. There's no case where I need to
  automatically track and react to *whichever* reactive values a function
  happens to touch — every side effect in this app has one clear, known
  dependency, which `watch` already expresses more explicitly.

## Design decisions

- The total reflects **all** expenses, not just the filtered subset — the
  filter only changes which rows are visible in the table.
- Each expense gets a `crypto.randomUUID()` id so deletes target the exact
  row regardless of list order.
- Form fields are grouped in one `reactive` object rather than four separate
  `ref`s, since they're always read and reset together on submit.
