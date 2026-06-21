import fs from 'fs';
import path from 'path';

function copyFolderSync(from, to) {
  if (!fs.existsSync(to)) {
    fs.mkdirSync(to, { recursive: true });
  }
  fs.readdirSync(from).forEach(element => {
    if (fs.lstatSync(path.join(from, element)).isDirectory()) {
      copyFolderSync(path.join(from, element), path.join(to, element));
    } else {
      fs.copyFileSync(path.join(from, element), path.join(to, element));
    }
  });
}

const source = path.join(process.cwd(), 'apps/web/out');
const dest = path.join(process.cwd(), 'dist');

console.log(`Copying Next.js static files from "${source}" to "${dest}"...`);
try {
  if (fs.existsSync(dest)) {
    fs.rmSync(dest, { recursive: true, force: true });
  }
  copyFolderSync(source, dest);
  console.log('✓ Successfully populated the static distribution folder (dist/)!');
} catch (err) {
  console.error('Error during static export transfer:', err);
  process.exit(1);
}
