import fs from 'node:fs';
const species=JSON.parse(fs.readFileSync('src/species.json','utf8'));
fs.mkdirSync('docs/species',{recursive:true});
const atlas=fs.readFileSync('docs/atlas.html','utf8');
for(const s of species){let html=atlas.replace('data-page="atlas"',`data-page="species" data-species="${s.id}"`).replace(/<title>.*?<\/title>/,`<title>${s.name} — ABYSS</title>`).replace(/<meta name="description" content="[^"]*">/,`<meta name="description" content="${s.summary.replaceAll('"','&quot;')}">`);fs.writeFileSync(`docs/species/${s.id}.html`,html);}
fs.writeFileSync('docs/.nojekyll','');
const routes=['','expedition.html','atlas.html','vehicle.html',...species.map(s=>'species/'+s.id+'.html')];
fs.writeFileSync('docs/sitemap.xml',`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${routes.map(r=>`<url><loc>https://isefdk.github.io/abyss-expedition/${r}</loc></url>`).join('')}</urlset>`);
fs.writeFileSync('docs/robots.txt','User-agent: *\nAllow: /\nSitemap: https://isefdk.github.io/abyss-expedition/sitemap.xml\n');
console.log(`Finalized ${routes.length} public routes`);
