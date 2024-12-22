// server.js
import express from 'express';
import { createServer as createViteServer } from 'vite';
import { renderToString } from 'react-dom/server';
import React from 'react';
import App from './src/App';

async function startServer() {
  const app = express();

  const vite = await createViteServer({
    server: { middlewareMode: 'ssr' }
  });

  app.use(vite.middlewares);

  app.get('*', async (req, res) => {
    try {
      const appHtml = renderToString(<App />);

      const template = await vite.transformIndexHtml(req.url, `
        <!DOCTYPE html>
        <html lang="en">
          <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Vite SSR App</title>
          </head>
          <body>
            <div id="root">${appHtml}</div>
          </body>
        </html>
      `);

      res.status(200).set({ 'Content-Type': 'text/html' }).end(template);
    } catch (e) {
      vite.ssrFixStacktrace(e);
      console.error(e);
      res.status(500).end(e.message);
    }
  });

  app.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
  });
}

startServer();
