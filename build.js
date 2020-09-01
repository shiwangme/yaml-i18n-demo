/* eslint-disable import/no-extraneous-dependencies */
const yaml = require('js-yaml');
const fs = require('fs');
const path = require('path');

const SOURCE_DIR = path.join(__dirname, './i18n');
const DIST_DIR = path.join(__dirname, './assets/i18n');
const files = fs.readdirSync(SOURCE_DIR);
const yamls = files.filter((x) => x.endsWith('.yml') || x.endsWith('.yaml'));

for (let i = 0; i < yamls.length; i += 1) {
  const filename = yamls[i];
  const file = fs.readFileSync(path.join(SOURCE_DIR, filename), { encoding: 'utf-8' });
  const ouput = yaml.safeLoad(file);
  fs.writeFileSync(path.join(DIST_DIR, filename.replace(/\.ya?ml/, '.json')), JSON.stringify(ouput, null, 2), { encoding: 'utf-8' });
}
