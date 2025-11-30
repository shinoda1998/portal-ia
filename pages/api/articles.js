// pages/api/articles.js
import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  try {
    // Caminho correto para arquivos públicos
    const articlesDirectory = path.join(process.cwd(), 'public', 'articles');

    // Se a pasta não existir, retorna lista vazia (não erro 500)
    if (!fs.existsSync(articlesDirectory)) {
      return res.status(200).json([]);
    }

    // Ler arquivos .md apenas
    const files = fs.readdirSync(articlesDirectory).filter(f => f.toLowerCase().endsWith('.md'));

    const articles = files.map((fileName) => {
      const filePath = path.join(articlesDirectory, fileName);
      const fileContent = fs.readFileSync(filePath, 'utf8');

      return {
        title: fileName.replace(/\.md$/i, ''),
        content: fileContent,
      };
    });

    return res.status(200).json(articles);
  } catch (error) {
    console.error('API /api/articles error:', error);
    // Em caso de erro inesperado, retorna 200 com lista vazia e loga no servidor
    return res.status(200).json([]);
  }
}
