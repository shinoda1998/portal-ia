import { useEffect, useState } from "react";

export default function Home() {
  const [articles, setArticles] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Faz a chamada do browser para /api/articles — evita problemas de URL no servidor
    fetch("/api/articles")
      .then((r) => {
        if (!r.ok) throw new Error(`Status ${r.status}`);
        return r.json();
      })
      .then((data) => setArticles(data))
      .catch((err) => {
        console.error("Erro ao buscar /api/articles:", err);
        setError(err.message || "Erro desconhecido");
      });
  }, []);

  return (
    <div style={{ padding: 20, fontFamily: "Arial" }}>
      <h1>Central IA Brasil</h1>
      <p>Modo: cliente (fetch no navegador)</p>

      {error && (
        <div style={{ color: "red", marginTop: 12 }}>
          Erro ao carregar artigos: {error}
          <br />
          (Veja console do navegador ou cole a mensagem aqui)
        </div>
      )}

      {!articles && !error && <p>Carregando artigos...</p>}

      {Array.isArray(articles) && (
        <>
          <h2>Artigos</h2>
          <ul>
            {articles.map((a, i) => (
              <li key={i} style={{ marginBottom: 12 }}>
                <strong>{a.title}</strong>
                <pre style={{ whiteSpace: "pre-wrap" }}>{a.content}</pre>
              </li>
            ))}
          </ul>
        </>
      )}

      {articles && articles.length === 0 && <p>Sem artigos encontrados.</p>}
    </div>
  );
}
