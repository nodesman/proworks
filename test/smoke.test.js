import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

console.log('Running Proworks Smoke Tests...');

// 1. Verify trades.json schema and content
const tradesJsonPath = path.join(rootDir, 'src', 'data', 'trades.json');
assert.ok(fs.existsSync(tradesJsonPath), 'src/data/trades.json must exist');
const tradesData = JSON.parse(fs.readFileSync(tradesJsonPath, 'utf-8'));

assert.ok(Array.isArray(tradesData.trades), 'trades must be an array');
assert.ok(tradesData.trades.length >= 6, 'Must define at least 6 trade categories');
assert.ok(Array.isArray(tradesData.workers), 'workers must be an array');
assert.ok(tradesData.workers.length >= 6, 'Must provide at least 6 worker profiles');

for (const worker of tradesData.workers) {
  assert.ok(worker.id, 'Worker must have an id');
  assert.ok(worker.name, 'Worker must have a name');
  assert.ok(worker.trade, 'Worker must belong to a trade');
  assert.ok(worker.tradeTitle, 'Worker must have a tradeTitle');
  assert.ok(worker.location, 'Worker must specify location');
  assert.ok(worker.verifiedStatus, 'Worker must have verifiedStatus');
  assert.ok(worker.phone, 'Worker must have direct phone');
  assert.ok(worker.whatsapp, 'Worker must have direct WhatsApp');
  assert.ok(Array.isArray(worker.certifications), 'Certifications must be an array');
  assert.ok(worker.certifications.length > 0, 'Worker must possess at least one certification');
}
console.log(`✓ Data validation passed: ${tradesData.workers.length} workers verified.`);

// 2. Verify wrangler.jsonc syntax and configuration
const wranglerPath = path.join(rootDir, 'wrangler.jsonc');
assert.ok(fs.existsSync(wranglerPath), 'wrangler.jsonc must exist');
const wranglerContent = fs.readFileSync(wranglerPath, 'utf-8');
assert.ok(wranglerContent.includes('"name": "proworks"'), 'wrangler.jsonc name must be proworks');
assert.ok(wranglerContent.includes('"pages_build_output_dir": "./dist"'), 'pages_build_output_dir must be ./dist');
console.log('✓ Wrangler configuration verified.');

// 3. Verify dist build artifact creation
const distHtml = path.join(rootDir, 'dist', 'index.html');
const distTrades = path.join(rootDir, 'dist', 'data', 'trades.json');
assert.ok(fs.existsSync(distHtml), 'dist/index.html must exist after build');
assert.ok(fs.existsSync(distTrades), 'dist/data/trades.json must exist after build');

const htmlContent = fs.readFileSync(distHtml, 'utf-8');
assert.ok(htmlContent.includes('Proworks'), 'HTML must contain Proworks title');
assert.ok(htmlContent.includes('Aram'), 'HTML must align with Aram');
assert.ok(!htmlContent.includes('Dharma'), 'HTML must NEVER mention Dharma');
console.log('✓ Build artifacts and sovereign doctrine compliance verified.');

console.log('\nAll Proworks smoke tests passed successfully!');
