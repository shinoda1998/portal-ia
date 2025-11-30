import fs from "fs";
import path from "path";

export default function handler(req, res) {
  try {
    // Caminho correto dos artigos dentro de /public/articles
    const articlesPath = path.join(process.cwd(), "public", "articles");

    // Lê todos os arquivos .md
    const files = fs.readdirSync(articlesPath);

    const articles = files
      .filter((file) => file.endsWith(".md"))
      .map((file) => {
        const content = fs.readFileSync(path.join(articlesPath, file), "utf8");
        return {
          title: file.replace(".md", ""),
          content,
        };
      });

    res.status(200).json(articles);
  } catch (error) {
    res.status(500).json({ error: "Erro ao carregar artigos" });
  }
}
