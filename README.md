# 🗺️ Vue.js Interview Preparation Roadmap

**Student:** Sofia
**Target:** Mid-Senior Vue.js Role
**Duration:** ~7 weeks
**Sessions:** 15
**Mock Interview:** September

This repository contains the lessons, exercises, homework, projects, and checkpoints for the Vue.js interview preparation plan.

The roadmap is adaptive. Topics that are already strong will be reviewed briefly or skipped, allowing more time to be spent on areas that need improvement.

---

## 📋 Roadmap

### Phase 0 — Basics Diagnostic

**Session 1 — Baseline Assessment**

Goal: Establish Sofia's current level before starting the deeper technical topics.

#### Topics

* JavaScript fundamentals

  * `this`
  * Closures
  * `async/await`
  * Promises
* Vue fundamentals

  * `v-if` vs `v-show`
  * Lifecycle hooks
* TypeScript fundamentals

  * `interface` vs `type`
  * Generics
* Testing experience
* Git and development tooling

  * Git workflow
  * npm/yarn
  * Browser developer tools

**Outcome:** Identify strengths and gaps so the remaining sessions can be adjusted accordingly.

---

# Phase 1 — Foundations

**Weeks 1–2**

Goal: Build a strong foundation in Vue 3 and TypeScript.

### Session 2 — Vue 3 + Composition API

#### Topics

* `ref`
* `reactive`
* `computed`
* `watch`
* `watchEffect`
* Composition API

#### Exercise

* Refactor an Options API component into Composition API.

---

### Session 3 — TypeScript in Vue

#### Topics

* Typed props
* Typed emits
* Generics in composables
* Avoiding `any`

#### Exercise

* Build and properly type a form component.

---

### Session 4 — Component Structure

#### Topics

* Feature-based folder structure
* Component responsibilities
* Breaking down large components
* Separation of concerns

#### Exercise

* Take one large component and split it into three smaller components.

---

### Session 5 — State Management

#### Topics

* Local state
* Global state
* Pinia
* Deciding where state should live

#### Exercise

Analyze five scenarios and decide whether state should be local or global.

### ✅ Checkpoint

Build a small typed Vue component independently with correctly placed state.

---

# Phase 2 — Core Technical Depth

**Weeks 3–4**

Goal: Build confidence in the technical areas most likely to appear during the interview.

### Session 6 — API Integration & UX Metrics

#### Topics

* API integration
* Loading states
* Error states
* Success states
* Typed API responses
* Retry logic
* User feedback
* Analytics metrics

#### Exercise

* Build a `useFetch` composable.

#### Discussion

* How analytics and user feedback can help identify which user flows should be optimized.

---

### Session 7 — Testing with Vitest

#### Topics

* Unit testing
* Testing composables
* Testing Vue components
* Testing behaviour rather than implementation details

#### Exercise

* Unit test a composable.
* Unit test a Vue component.

---

### Session 8 — Testing with Playwright

#### Topics

* End-to-end testing
* Browser automation
* Testing user flows

#### Exercise

Write one E2E test for a simple flow such as:

* Login
* Form submission

---

### Session 9 — Performance Basics

#### Topics

* `computed` vs `watch`
* Common `watch` misuse
* Lazy-loading routes
* Lazy-loading components
* Avoiding unnecessary re-renders

### ✅ Checkpoint

**Live coding:** Build a small feature with a test within a defined time limit.

---

# Phase 3 — Production & Team Practices

**Week 5**

Goal: Cover senior-level practices specifically relevant to the target role.

### Session 10 — Reusable UI & Storybook

#### Topics

* Reusable components
* Component variants
* Shared UI components
* Storybook
* When to promote a component into a shared library

#### Exercise

Build a reusable component such as:

* `Button`
* `Input`

Document its variants in Storybook.

---

### Session 11 — CI/CD & Tooling

#### Topics

* Vite configuration basics
* CI pipelines
* Linting
* Automated tests
* Accessibility checks
* Browser developer tools

#### Exercise

* Add linting, testing, and accessibility checks to a CI pipeline.
* Use browser developer tools to debug a rendering issue.

---

### Session 12 — Resilience & Observability

#### Topics

* Client-server resilience patterns
* Retries
* Timeouts
* Fallback UI
* Core Web Vitals
* Monitoring dashboards
* Grafana

#### Exercise

Explain:

1. How you would instrument and monitor a new feature after release.
2. What you would do if an important metric regressed.

### ✅ Checkpoint

Explain how you would instrument and monitor a newly released feature and respond to a metric regression.

---

# Phase 4 — Accessibility & Architecture Polish

**Week 6**

Goal: Cover areas that often differentiate mid-level candidates from senior candidates.

### Session 13 — Accessibility

#### Topics

* Labels
* ARIA
* Keyboard navigation
* Focus management

#### Exercise

Review a flawed component and identify its accessibility issues.

---

### Session 14 — Architecture at Scale

#### Topics

* Folder structures
* Separation of concerns
* Component boundaries
* When and why to split components

#### Exercise

* Review real portfolio examples.
* Identify architectural problems.
* Propose improvements.

### ✅ Checkpoint

Review a flawed component or architecture **cold** and independently identify the issues.

---

# Phase 5 — Communication & Mock Interview

**Week 7**

Goal: Demonstrate the ability to explain technical decisions clearly, not just write code.

### Session 15 — Mentoring Practice + Full Mock Interview

#### Activities

1. Review another developer's code.
2. Provide constructive feedback.
3. Practice mentoring.
4. Explain technical decisions clearly.
5. Complete a full mock interview.
6. Receive feedback immediately after the interview.

Mentoring practice is included because mentoring is part of the target role.

---

# 📝 Homework

Each session will have **1–2 small coding tasks** designed to reinforce the concepts covered during that session.

Homework will be stored under:

```text
homework/
├── session-01/
├── session-02/
├── session-03/
└── ...
```

---

# 📊 Progress Tracker

A running **1–5 score** will be maintained for each major topic to track progress throughout the preparation.

| Area                   | Score | Status |
| ---------------------- | ----: | ------ |
| JavaScript             |   —/5 | ⬜      |
| Vue 3                  |   —/5 | ⬜      |
| Composition API        |   —/5 | ⬜      |
| TypeScript             |   —/5 | ⬜      |
| Component Architecture |   —/5 | ⬜      |
| State Management       |   —/5 | ⬜      |
| API Integration        |   —/5 | ⬜      |
| Vitest                 |   —/5 | ⬜      |
| Playwright             |   —/5 | ⬜      |
| Performance            |   —/5 | ⬜      |
| Storybook              |   —/5 | ⬜      |
| CI/CD                  |   —/5 | ⬜      |
| Observability          |   —/5 | ⬜      |
| Accessibility          |   —/5 | ⬜      |
| Architecture           |   —/5 | ⬜      |
| Communication          |   —/5 | ⬜      |

### Score Guide

| Score | Meaning                       |
| ----: | ----------------------------- |
|   1/5 | Needs significant improvement |
|   2/5 | Basic understanding           |
|   3/5 | Comfortable                   |
|   4/5 | Strong                        |
|   5/5 | Interview-ready               |

---

# 💬 End-of-Session Communication Check

At the end of every session, summarize what you learned **in your own words**.

The goal is to practice explaining technical concepts clearly, not just implementing them.

---

# 🎯 Final Goal

By the end of this roadmap, you should be able to:

* Build Vue 3 applications confidently.
* Use the Composition API effectively.
* Write strongly typed Vue/TypeScript code.
* Make sound component and state-management decisions.
* Integrate APIs and handle real-world UX states.
* Write unit and E2E tests.
* Identify and address performance issues.
* Build reusable components with Storybook.
* Understand CI/CD practices.
* Discuss resilience and observability.
* Build accessible interfaces.
* Reason about architecture at scale.
* Review code and provide constructive feedback.
* Clearly explain your technical decisions during an interview.
* Perform confidently in a full mock interview.

> **The roadmap is adaptive.** If a diagnostic or checkpoint shows that a topic is already strong, that time will be reallocated to areas that are more likely to come up in the actual interview.
