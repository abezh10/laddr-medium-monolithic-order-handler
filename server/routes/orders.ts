export const ordersRoute = {
  path: "/orders",
  method: "GET",
};

export function handleOrders() {
  return {
    ok: true,
    route: "orders",
    message: "Starter route for Monolithic Order Handler",
  };
}
