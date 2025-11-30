import { getArticles } from '../services/api';

export async function getServerSideProps() {
  const articles = await getArticles();
  return { props: { articles } };
}

export default function Home({ articles }) {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Central IA Brasil</h1>
      <h2>Últimos Artigos</h2>
      
      {articles.length === 0 && (
        <p>Nenhum artigo encontrado ainda.</p>
      )}

      {articles.map((article, index) => (
        <div key={index} 
             style={{ 
               marginBottom: "20px", 
               padding: "10px", 
               border: "1px solid #ccc",
               borderRadius: "8px"
             }}>
          
          <h3>{article.title}</h3>
          <p>{article.content.substring(0, 200)}...</p>
        </div>
      ))}
    </div>
  );
}

