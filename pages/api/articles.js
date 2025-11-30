import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  const articlesDirectory = path.join(process.cwd(), 'Artigos');

  const files = fs.readdirSync(articlesDirectory);

  const articles = files.map((fileName) => {
    const filePath = path.join(articlesDirectory, fileName);
    const fileContent = fs.readFileSync(filePath, 'utf8');

    return {
      title: fileName.replace('.txt', ''),
      content: fileContent,
    };
  });

  res.status(200).json(articles);
}
