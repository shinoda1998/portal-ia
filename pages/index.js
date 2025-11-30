export default function Home({ articles }) {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Central IA Brasil</h1>
      <h2>Artigos Recentes</h2>

      <ul>
        {articles.map((article, index) => (
          <li key={index}>
            <a
              href={`/articles/${article.id}`}
              style={{ textDecoration: "none", color: "blue" }}
            >
              {article.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export async function getServerSideProps() {
  const baseUrl = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "http://localhost:3000";

  const res = await fetch(`${baseUrl}/api/articles`);
  const articles = await res.json();

  return {
    props: {
      articles,
    },
  };
}
