export async function getServerSideProps() {
  const baseUrl =
    process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : "http://localhost:3000";

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
      <h2>Artigos</h2>

      <ul>
        {articles.map((article, index) => (
          <li key={index} style={{ marginBottom: "20px" }}>
            <h3>{article.title}</h3>
            <pre>{article.content}</pre>
          </li>
        ))}
      </ul>
    </div>
  );
}
