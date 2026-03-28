export const starterordersServiceItems = [
  { id: "starter-1", label: "Sample orders service record", status: "draft" },
  { id: "starter-2", label: "Another orders service record", status: "ready" },
];

export async function loadordersServicePreview() {
  return Promise.resolve(starterordersServiceItems);
}

export async function saveordersServicePreview() {
  return Promise.resolve({
    ok: false,
    message: "The orders service workflow is intentionally unfinished in Monolithic Order Handler.",
  });
}
