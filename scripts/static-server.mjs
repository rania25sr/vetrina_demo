import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const port = Number.parseInt(process.env.PORT ?? '3000', 10);
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distDir = path.resolve(__dirname, '..', 'dist');

const contentTypes = new Map([
  ['.html', 'text/html; charset=utf-8'],
  ['.css', 'text/css; charset=utf-8'],
  ['.js', 'application/javascript; charset=utf-8'],
  ['.mjs', 'application/javascript; charset=utf-8'],
  ['.json', 'application/json; charset=utf-8'],
  ['.txt', 'text/plain; charset=utf-8'],
  ['.svg', 'image/svg+xml'],
  ['.png', 'image/png'],
  ['.jpg', 'image/jpeg'],
  ['.jpeg', 'image/jpeg'],
  ['.webp', 'image/webp'],
  ['.ico', 'image/x-icon'],
  ['.woff', 'font/woff'],
  ['.woff2', 'font/woff2'],
]);

function getContentType(filePath) {
  return contentTypes.get(path.extname(filePath).toLowerCase()) ?? 'application/octet-stream';
}

async function resolveFile(requestPath) {
  const safePath = requestPath === '/' ? '/index.html' : requestPath;
  const normalizedPath = safePath.replace(/\/+/, '/').replace(/\.{2,}/g, '');
  const candidatePaths = [];

  if (path.extname(normalizedPath)) {
    candidatePaths.push(normalizedPath);
  } else {
    candidatePaths.push(`${normalizedPath}.html`);
    candidatePaths.push(path.posix.join(normalizedPath, 'index.html'));
  }

  for (const candidate of candidatePaths) {
    const filePath = path.join(distDir, candidate.replace(/^\//, ''));
    try {
      const fileStat = await stat(filePath);
      if (fileStat.isFile()) {
        return filePath;
      }
    } catch {
      // Ignore missing files and continue trying fallbacks.
    }
  }

  return path.join(distDir, '404.html');
}

const server = createServer(async (request, response) => {
  try {
    const requestUrl = new URL(request.url ?? '/', `http://${request.headers.host ?? 'localhost'}`);
    const filePath = await resolveFile(requestUrl.pathname);
    const fileContent = await readFile(filePath);
    const isNotFound = path.basename(filePath) === '404.html' && requestUrl.pathname !== '/404.html';

    response.statusCode = isNotFound ? 404 : 200;
    response.setHeader('Content-Type', getContentType(filePath));
    response.end(fileContent);
  } catch (error) {
    response.statusCode = 500;
    response.setHeader('Content-Type', 'text/plain; charset=utf-8');
    response.end(error instanceof Error ? error.message : 'Internal Server Error');
  }
});

server.listen(port, () => {
  console.log(`Static site server running at http://localhost:${port}`);
});