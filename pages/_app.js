import '../styles/global.css';

export default function App({ Component, pageProps }) {
  return (
    <>
      <header style={{
        width: "100%",
        padding: "20px",
        background: "#0A0A0A",
        color: "white",
        fontFamily: "Arial",
        fontSize: "20px",
        display: "flex",
        justifyContent: "center",
        gap: "30px"
      }}>
        <a href="/" style={{ color: "white", textDecoration: "none" }}>Início</a>
        <a href="/ferramentas" style={{ color: "white", textDecoration: "none" }}>Ferramentas</a>
        <a href="/noticias" style={{ color: "white", textDecoration: "none" }}>Notícias</a>
        <a href="/blog" style={{ color: "white", textDecoration: "none" }}>Blog</a>
      </header>

      <Component {...pageProps} />

      <footer style={{
        marginTop: "50px",
        width: "100%",
        padding: "20px",
        background: "#0A0A0A",
        color: "white",
        textAlign: "center",
        fontFamily: "Arial"
      }}>
        © {new Date().getFullYear()} Central IA Brasil — Todos os direitos reservados.
      </footer>
    </>
  );
}
