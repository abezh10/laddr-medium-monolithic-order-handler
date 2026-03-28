# Monolithic Order Handler

- Category: Refactor
- Topic: Refactor
- Difficulty: Medium

## Overview
This sample repository is set up for a medium refactor exercise in the refactor track. The starter code is intentionally lightweight: it gives Sandpack something meaningful to render or inspect, but it still leaves the real evaluation work in place so a candidate has to improve the internal structure without changing the expected behavior.

## Exercise Summary
The order route mixes validation, pricing, persistence, and notifications. Refactor it into cleaner service boundaries while preserving behavior and response shape.

## Starter State
The current scaffold keeps the requested folder layout intact and includes small task-adjacent starter implementations. Frontend files render simple placeholder UI, while routes, services, hooks, utilities, and data files expose minimal sample data or placeholder behavior without solving the exercise for the learner.

## Repo Files
- `package.json`
- `server/routes/orders.ts`
- `server/services/ordersService.ts`
- `server/services/pricingService.ts`
- `tests/orders.test.ts`

## Likely Change Areas
- `server/routes`
- `server/services`
- `tests`

## Sandbox Notes
These files are intentionally small and preview-friendly. They should render a lightweight surface where that makes sense, while still leaving the real build, debug, refactor, security, or migration work undone.
