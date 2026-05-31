const fs = require('fs');
const path = require('path');

const projectName = process.argv[2] || 'new-framer-web';
const projectPath = path.join(process.cwd(), projectName);

console.log(`🚀 [AugustoCS] Iniciando creación del proyecto: ${projectName}...`);

// ── Helpers ────────────────────────────────────────────────
function mkdir(dir) {
  const fullPath = path.join(projectPath, dir);
  if (!fs.existsSync(fullPath)) {
    fs.mkdirSync(fullPath, { recursive: true });
    console.log(`  📁 Creado: ${dir}`);
  }
}

function write(file, content) {
  const fullPath = path.join(projectPath, file);
  fs.writeFileSync(fullPath, content.trim() + '\n');
  console.log(`  📄 Creado: ${file}`);
}

// ── 1. Estructura de Carpetas ─────────────────────────────
mkdir('');
mkdir('src');
mkdir('src/components');
mkdir('scripts');
mkdir('dist');

// ── 2. package.json ────────────────────────────────────────
const packageJson = {
  name: projectName,
  version: "1.0.0",
  description: "Web modular para Framer",
  scripts: {
    "build": "node scripts/build-framer.js"
  },
  dependencies: {
    "framer-motion": "latest",
    "react": "latest",
    "react-dom": "latest"
  }
};
write('package.json', JSON.stringify(packageJson, null, 2));

// ── 3. src/tokens.js ───────────────────────────────────────
const tokensJs = `
// Design Tokens — Estilo base
export const T = {
  bg:           '#0f172a',
  surface1:     '#1e293b',
  hi:           '#f8fafc',
  accent:       '#38bdf8',
  fontSans:     "'Inter', sans-serif",
};
`;
write('src/tokens.js', tokensJs);

// ── 4. src/icons.jsx ───────────────────────────────────────
const iconsJsx = `
// Iconos SVG — Añade tus iconos aquí
export const Icons = {
  Activity: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
    </svg>
  )
};
`;
write('src/icons.jsx', iconsJsx);

// ── 5. src/components/Hero.jsx (Ejemplo) ──────────────────
const heroJsx = `
// Componente de ejemplo
export function Hero() {
  return (
    <section style={{ padding: '4rem 2rem', textAlign: 'center' }}>
      <h1>Bienvenido a ${projectName}</h1>
      <p>Empieza a editar en src/components</p>
    </section>
  );
}
`;
write('src/components/Hero.jsx', heroJsx);

// ── 6. App.jsx ─────────────────────────────────────────────
const appJsx = `
// Entry Point Principal
function App() {
  return (
    <div style={{ backgroundColor: T.bg, color: T.hi, fontFamily: T.fontSans, minHeight: '100vh' }}>
      <Hero />
    </div>
  );
}

export default App;
`;
write('App.jsx', appJsx);

// ── 7. scripts/build-framer.js (Dinámico) ───────────────────
const buildScript = `
/**
 * build-framer.js
 * Genera automáticamente FramerApp.jsx unificando src/ en un solo archivo.
 */
const fs   = require('fs');
const path = require('path');

const root = path.join(__dirname, '..');
const dist = path.join(root, 'dist');
if (!fs.existsSync(dist)) fs.mkdirSync(dist);

function read(rel) {
  const full = path.join(root, rel);
  return fs.existsSync(full) ? fs.readFileSync(full, 'utf-8') : '';
}

function strip(code) {
  return code
    .replace(/^import\s+.*?from\s+['"][^'"]+['"]\s*;?\s*$/gm, '')
    .replace(/^export\s+default\s+/gm, '')
    .replace(/^export\s+(const|function|class|let|var)\s+/gm, '$1 ')
    .replace(/^export\s+\{[^}]*\}\s*;?\s*$/gm, '')
    .trim();
}

function section(label, code) {
  const stripped = strip(code);
  if (!stripped) return '';
  return \`\\n// \${'─'.repeat(40)}\\n// \${label}\\n// \${'─'.repeat(40)}\\n\${stripped}\\n\`;
}

// 1. Recolectar archivos de componentes
const componentsDir = path.join(root, 'src/components');
const componentFiles = fs.readdirSync(componentsDir)
  .filter(f => f.endsWith('.jsx') || f.endsWith('.js'))
  .map(f => [\`src/components/\${f}\`, f.toUpperCase()]);

// 2. Definir orden de ensamble
const essentialFiles = [
  ['src/tokens.js', 'TOKENS'],
  ['src/icons.jsx', 'ICONS'],
  ...componentFiles
];

console.log('🚀 Compilando para Framer...');
let body = '';
for (const [file, label] of essentialFiles) {
  const code = read(file);
  if (code) {
    body += section(label, code);
    console.log(\`  ✓ \${file}\`);
  }
}

const appRaw = strip(read('App.jsx'));

const output = \`
// ============================================================
// Auto-generated Framer Code Component
// ============================================================
import React, { useState, useCallback, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

\${body}

// ────────────────────────────────────────────────────────────
// APP ROOT
// ────────────────────────────────────────────────────────────
\${appRaw}

export default App;
\`.trim();

fs.writeFileSync(path.join(dist, 'FramerApp.jsx'), output);
console.log('✅ dist/FramerApp.jsx listo!');
`;
write('scripts/build-framer.js', buildScript);

// ── 8. .cursorrules (AI Skills) ───────────────────────────
const cursorRules = `
# Reglas de Proyecto - Estándar UI/UX Pro Max

1. **Diseño Premium**: Sigue siempre los principios de la skill UI-UX Pro Max (https://github.com/nextlevelbuilder/ui-ux-pro-max-skill).
2. **Componentes Framer**: Estamos construyendo componentes compatibles con Framer. No uses librerías externas que requieran un bundler aparte de framer-motion y react.
3. **Estructura Modular**: Crea nuevos componentes en src/components.
4. **Stitch**: Utiliza las herramientas de Stitch para acelerar el desarrollo de pantallas y sistemas de diseño.
5. **No Emojis**: Usa iconos SVG en src/icons.jsx.
6. **Tokens**: Usa siempre el objeto T de src/tokens.js para colores y tipografía.
`;
write('.cursorrules', cursorRules);

console.log(`\n✨ Proyecto creado con éxito por AugustoCS en: ${projectPath}`);
console.log(`   Pasos siguientes:`);
console.log(`   1. cd ${projectName}`);
console.log(`   2. npm install`);
console.log(`   3. npm run build`);
