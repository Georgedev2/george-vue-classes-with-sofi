<script setup>
import { ref, reactive, computed, watch } from 'vue'

const CATEGORIES = ['Food', 'Transport', 'Entertainment', 'Bills', 'Other']
const STORAGE_KEY = 'expense-tracker-expenses'

function loadExpenses() {
  const saved = localStorage.getItem(STORAGE_KEY)
  return saved ? JSON.parse(saved) : []
}

const expenses = ref(loadExpenses())

const form = reactive({
  description: '',
  amount: '',
  category: CATEGORIES[0],
  date: '',
})

const activeFilter = ref('All')

// Persist to localStorage any time the expenses list changes.
watch(
  expenses,
  (value) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(value))
  },
  { deep: true },
)

const total = computed(() =>
  expenses.value.reduce((sum, expense) => sum + expense.amount, 0),
)

const filteredExpenses = computed(() => {
  if (activeFilter.value === 'All') return expenses.value
  return expenses.value.filter((expense) => expense.category === activeFilter.value)
})

function addExpense() {
  if (!form.description || !form.amount || !form.date) return

  expenses.value.push({
    id: crypto.randomUUID(),
    description: form.description,
    amount: Number(form.amount),
    category: form.category,
    date: form.date,
  })

  form.description = ''
  form.amount = ''
  form.category = CATEGORIES[0]
  form.date = ''
}

function deleteExpense(id) {
  expenses.value = expenses.value.filter((expense) => expense.id !== id)
}
</script>

<template>
  <div class="tracker">
    <h1>Expense Tracker</h1>

    <form class="expense-form" @submit.prevent="addExpense">
      <input v-model="form.description" type="text" placeholder="Description" required />
      <input v-model="form.amount" type="number" step="0.01" min="0" placeholder="Amount" required />
      <select v-model="form.category">
        <option v-for="category in CATEGORIES" :key="category" :value="category">
          {{ category }}
        </option>
      </select>
      <input v-model="form.date" type="date" required />
      <button type="submit">Add Expense</button>
    </form>

    <div class="total">Total: ${{ total.toFixed(2) }}</div>

    <div class="filters">
      <button
        v-for="option in ['All', ...CATEGORIES]"
        :key="option"
        :class="{ active: activeFilter === option }"
        @click="activeFilter = option"
      >
        {{ option }}
      </button>
    </div>

    <table class="expense-table">
      <thead>
        <tr>
          <th>Description</th>
          <th>Amount</th>
          <th>Category</th>
          <th>Date</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-if="filteredExpenses.length === 0">
          <td colspan="5" class="empty">No expenses to show.</td>
        </tr>
        <tr v-for="expense in filteredExpenses" :key="expense.id">
          <td>{{ expense.description }}</td>
          <td>${{ expense.amount.toFixed(2) }}</td>
          <td>{{ expense.category }}</td>
          <td>{{ expense.date }}</td>
          <td><button @click="deleteExpense(expense.id)">Delete</button></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
.tracker {
  max-width: 720px;
  margin: 0 auto;
  padding: 2rem;
  text-align: left;
}

.expense-form {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  margin-bottom: 1rem;
}

.expense-form input,
.expense-form select {
  flex: 1;
  min-width: 120px;
}

.total {
  font-size: 1.25rem;
  font-weight: bold;
  margin-bottom: 1rem;
}

.filters {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  margin-bottom: 1rem;
}

.filters button.active {
  background-color: #42b883;
  color: white;
}

.expense-table {
  width: 100%;
  border-collapse: collapse;
}

.expense-table th,
.expense-table td {
  border: 1px solid #444;
  padding: 0.5rem;
  text-align: left;
}

.empty {
  text-align: center;
  color: #888;
}
</style>
