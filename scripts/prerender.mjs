import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { createServer } from 'vite';

const distIndex = path.resolve('dist/index.html');
const vite = await createServer({
  appType: 'custom',
  logLevel: 'error',
  server: { middlewareMode: true },
});

try {
  const template = await readFile(distIndex, 'utf8');
  const { render } = await vite.ssrLoadModule('/src/entry-server.tsx');
  const renderedApp = render();
  const html = template.replace(
    '<div id="root"></div>',
    `<div id="root">${renderedApp}</div>`,
  );

  if (html === template) {
    throw new Error('Não foi possível localizar o contêiner principal para pré-renderização.');
  }

  await writeFile(distIndex, html, 'utf8');
} finally {
  await vite.close();
}
