export async function getServerSideProps() {
  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL ||
    (process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : "http://localhost:3000");

  const res = await fetch(`${baseUrl}/api/articles`);
  const articles = await res.json();

  return {
    props: { articles },
  };
}

export default function Home({ articles }) {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Central IA Brasil</h1>
      <p>Bem-vindo ao portal!</p>

      <h2>Artigos:</h2>
      <ul>
        {articles.map((a, i) => (
          <li key={i}>{a.title}</li>
        ))}
      </ul>
    </div>
  );
}
