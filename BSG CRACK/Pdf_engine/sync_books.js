// sync_books.js
export async function loadBookList() {
  const res = await fetch('./bsg_books.json');
  if (!res.ok) {
    console.error("Failed to load book list");
    return [];
  }
  return await res.json();
}