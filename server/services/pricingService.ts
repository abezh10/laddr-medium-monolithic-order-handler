export const starterpricingServiceItems = [
  { id: "starter-1", label: "Sample pricing service record", status: "draft" },
  { id: "starter-2", label: "Another pricing service record", status: "ready" },
];

export async function loadpricingServicePreview() {
  return Promise.resolve(starterpricingServiceItems);
}

export async function savepricingServicePreview() {
  return Promise.resolve({
    ok: false,
    message: "The pricing service workflow is intentionally unfinished in Monolithic Order Handler.",
  });
}
