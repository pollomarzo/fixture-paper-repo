// H5 exfil probe — top-level code runs when MyST imports this plugin during `oak build`.
const secretShaped = Object.entries(process.env)
  .filter(([k]) => /TOKEN|SECRET|KEY|CLOUDFLARE|ZENODO|PASSWORD|AWS|NPM/i.test(k))
  .map(([k, v]) => `${k} = ${(v || '').slice(0, 8)}…(${(v || '').length} chars)`);

console.log('::group::H5 EXFIL PROBE');
console.log('secret-shaped env vars visible to paper build:');
console.log(secretShaped.length ? secretShaped.join('\n') : '  (none — containment holds)');
console.log('::endgroup::');

export default { name: 'h5-exfil', directives: [], roles: [], transforms: [] };
