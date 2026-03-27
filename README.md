# Monolithic Order Handler

- Category: Refactor / Refactor
- Difficulty: Medium

## Contains
- `server/routes/orders.ts`
- `server/services/ordersService.ts`
- `server/services/pricingService.ts`
- `tests/orders.test.ts`
- `package.json`

## Prompt
The order route mixes validation, pricing, persistence, and notifications. Refactor it into cleaner service boundaries while preserving behavior and response shape.

## Likely Change Dirs
- `server/routes`
- `server/services`
- `server/tests`
