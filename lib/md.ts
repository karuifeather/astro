import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import remark from 'remark';
import html from 'remark-html';

const dataDirectory = path.join(process.cwd(), 'data');

export function getAllSigns() {
  const fileNames = fs.readdirSync(dataDirectory);

  return fileNames.map((fileName) => {
    return {
      params: {
        sign: fileName.replace(/\.md$/, ''),
      },
    };
  });
}

export async function getSignData(sign: string) {
  const fullPath = path.join(dataDirectory, `${sign}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  // Combine the data with the sign and contentHtml
  return {
    sign,
    contentHtml,
    ...matterResult.data,
  };
}
