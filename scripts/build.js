import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const srcDir = path.join(rootDir, 'src');
const publicDir = path.join(rootDir, 'public');
const distDir = path.join(rootDir, 'dist');

console.log('Building Proworks static edge distribution...');

// Ensure dist directory exists
if (fs.existsSync(distDir)) {
  fs.rmSync(distDir, { recursive: true, force: true });
}
fs.mkdirSync(distDir, { recursive: true });

// Copy public assets if any
if (fs.existsSync(publicDir)) {
  fs.cpSync(publicDir, distDir, { recursive: true });
}

// Copy data directory
const distDataDir = path.join(distDir, 'data');
fs.mkdirSync(distDataDir, { recursive: true });
const tradesJsonPath = path.join(srcDir, 'data', 'trades.json');
fs.copyFileSync(tradesJsonPath, path.join(distDataDir, 'trades.json'));

// Read index.html and embed data as fallback for file:// or direct static preview
const tradesData = fs.readFileSync(tradesJsonPath, 'utf-8');
let indexHtml = fs.readFileSync(path.join(srcDir, 'index.html'), 'utf-8');

// Inject embedded data right before the script tag
const injectedScript = `\n  <script>window.__EMBEDDED_DATA__ = ${tradesData.trim()};</script>\n`;
indexHtml = indexHtml.replace('<script>', `${injectedScript}  <script>`);

fs.writeFileSync(path.join(distDir, 'index.html'), indexHtml, 'utf-8');

console.log('✓ Build complete: dist/ populated successfully.');
