# 📝 Homework — Expense Tracker

## Objective

Build a small **Personal Expense Tracker** using Vue 3 and the Composition API.

The goal of this assignment is to demonstrate your understanding of Vue's reactive state and the Composition API.

## Requirements

### 1. Add Expenses

Create a form that allows the user to add an expense with:

* Description
* Amount
* Category
* Date

### 2. Display Expenses

Display all expenses in a list or table.

Each expense should show:

* Description
* Amount
* Category
* Date

### 3. Calculate Total

Display the total amount of all expenses.

The total should update automatically whenever an expense is added or removed.

### 4. Filter Expenses

Allow the user to filter expenses by category.

The available filters should include:

* All
* Food
* Transport
* Entertainment
* Bills
* Other

### 5. Delete Expenses

Allow the user to delete an expense.

The total should update automatically after an expense is deleted.

### 6. Persist Data

Store the expenses in the browser's `localStorage`.

When the application is reopened, previously saved expenses should still be available.

## Vue Requirements

Use Vue 3 with:

```javascript
<script setup>
```

Use the Composition API throughout the application.

You should make appropriate use of:

* `ref`
* `reactive`
* `computed`
* `watch`
* `watchEffect`

Do not use the Options API.

### Important

You are not required to use each Composition API feature simply for the sake of using it.

Choose the appropriate tool based on the problem you are solving.

Be prepared to explain during our next session:

* Why you used `ref` or `reactive` for your state.
* Which values are `computed` and why.
* Where you used `watch` and why.
* Whether `watchEffect` was necessary and why.
* How your application keeps the UI synchronized with its state.

## README

Include a `README.md` explaining:

1. What the application does.
2. How to install it.
3. How to run it.
4. The main Vue concepts you used.
5. Any design or implementation decisions you made.

## Bonus ⭐

If you finish the core requirements, add one or more of the following:

* Edit an existing expense.
* Display expenses for a selected date range.
* Show the highest spending category.
* Display the number of expenses.
* Add a "Clear All" button.
* Add basic form validation.

## Submission

Push your completed project to the GitHub repository.

Create a branch named:

```bash
homework/session-02
```

Commit your changes and push the branch.

During our next lesson, be prepared to walk through your implementation and explain your decisions.
