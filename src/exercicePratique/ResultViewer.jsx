// src/components/ResultViewer.js
import React from 'react';

const ResultViewer = ({ code }) => {
  // Le HTML qui sera injecté dans l'iframe.
  // Notez l'utilisation de CDN pour React, ReactDOM et Babel.
  const srcDoc = `
    <!DOCTYPE html>
    <html lang="fr">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Prévisualisation</title>
        <!-- On charge React et ReactDOM depuis un CDN -->
        <script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
        <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
        <!-- Babel pour "traduire" le JSX en JavaScript que le navigateur comprend -->
        <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
      </head>
      <body>
        <div id="root"></div>
        <script type="text/babel">
          // Le code de l'utilisateur est injecté ici
          try {
            ${code}
            // On fait le rendu du composant "App" (par convention)
            const root = ReactDOM.createRoot(document.getElementById('root'));
            root.render(<App />);
          } catch (error) {
            // En cas d'erreur, on l'affiche dans la page
            document.getElementById('root').innerHTML = \`
              <div style="color: red; font-family: monospace;">
                <h3>Erreur d'exécution</h3>
                <p>\${error.message}</p>
              </div>
            \`;
          }
        </script>
      </body>
    </html>
  `;
  return (
    <iframe
      srcDoc={srcDoc}
      title="result-preview"
      sandbox="allow-scripts" // Important pour la sécurité
      style={{ width: '100%', height: '100%', border: '1px solid #ccc' }}
    />
  );
};
export default ResultViewer;