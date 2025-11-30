export async function getArticles() {
  const res = await fetch('/api/articles');
  const data = await res.json();
  return data;
}

