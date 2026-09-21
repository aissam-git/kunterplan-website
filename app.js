'use strict';
const p=window.KUNTERPLAN_PRODUCTS||[];
const cats={routinen:'Alltag & Routinen',lernen:'Lernen & Spielen',motivation:'Motivation & Entwicklung',themen:'Themenwelten'};
let filter='alle',opener=null,currentProduct=null;
const dialog=document.getElementById('details');
const asset=(f)=>'assets/produkte/'+f;
const href=(x)=>'produkte/'+x.id+'.html';
const cfg=window.KUNTERPLAN_CONFIG||{};
const wa=String(cfg.whatsappNumber||'').replace(/\D/g,'');
const instagramUrl='https://www.instagram.com/'+encodeURIComponent(cfg.instagramUsername||'kunterplan.858114')+'/';
function el(tag,cls,txt){const n=document.createElement(tag);if(cls)n.className=cls;if(txt!==undefined)n.textContent=txt;return n;}
function inquiryText(name=''){return `Hallo KunterPlan,\n\nich interessiere mich für ${name?'„'+name+'“':'ein Produkt'} und möchte gerne den Preis sowie die individuellen Gestaltungsmöglichkeiten anfragen.\n\nName für das Produkt:\nGewünschtes Format: A4 / A3\nWunschfarben / Design:\nIndividuelle Änderungen:\nWeitere Wünsche:\n\nBitte nennt mir vor der Bestellung den Gesamtpreis inklusive ggf. Versand. Vielen Dank!`;}
function waUrl(name=''){return wa.length>=8&&wa.length<=16?'https://wa.me/'+wa+'?text='+encodeURIComponent(inquiryText(name)):'';}
function card(x){
 const art=el('article','product');art.id='produkt-'+x.id;art.dataset.category=x.c;
 const vis=el('a','product-visual');vis.href=href(x);vis.setAttribute('aria-label',x.n+' – Produktdetails öffnen');
 const img=el('img');img.src=asset(x.gallery[0].file);img.alt=x.gallery[0].alt;img.loading='lazy';img.decoding='async';img.width=740;img.height=990;vis.append(img);
 const body=el('div','product-info');const meta=el('div','product-meta');meta.append(el('span',null,x.code),el('span',null,'Gestaltungsmuster'));
 const title=el('h4');const link=el('a',null,x.n);link.href=href(x);title.append(link);
 const desc=el('p',null,x.short);const price=el('p','price-on-request','Preis & individuelle Gestaltung auf Anfrage');
 const badges=el('div','product-badges');['A4 & A3','personalisierbar'].forEach(t=>badges.append(el('span',null,t)));
 const bottom=el('div','product-end');bottom.append(el('span',null,cats[x.c]));
 const btn=el('button','detail-trigger','Bilder ansehen ↗');btn.type='button';btn.setAttribute('aria-label',x.n+': Bilder ansehen');btn.addEventListener('click',()=>openDetail(x,btn));bottom.append(btn);
 const more=el('a','product-more','Produktbeschreibung & Details →');more.href=href(x);
 body.append(meta,title,desc,price,badges,bottom,more);art.append(vis,body);return art;
}
function render(){const arr=p.filter(x=>filter==='alle'||x.c===filter);const featuredIds=new Set(['morgen-abend-checkliste','wochenplan','belohnungstafel','gebetskalender','ramadan-kalender']);const a=arr.filter(x=>featuredIds.has(x.id));const other=arr.filter(x=>!featuredIds.has(x.id));
 document.getElementById('featured-heading').hidden=!a.length;document.getElementById('additional-heading').hidden=!other.length;
 document.getElementById('featured').replaceChildren(...a.map(card));document.getElementById('additional').replaceChildren(...other.map(card));document.getElementById('count').textContent=arr.length+' von '+p.length+' Produkten';
 document.querySelectorAll('[data-filter]').forEach(b=>{const on=b.dataset.filter===filter;b.classList.toggle('active',on);b.setAttribute('aria-pressed',String(on));});}
function addSpec(container,k,v){const n=el('div');n.append(el('span',null,k),el('strong',null,v));container.append(n);}
function setGallery(x,i){const g=x.gallery[i],im=document.getElementById('detail-image');im.src=asset(g.file);im.alt=g.alt;document.getElementById('detail-caption').textContent=g.label+(g.label.includes('frontal')?' · vorhandene Vorlage':' · illustrative Musteransicht – keine freigegebene Druckdatei');document.querySelectorAll('#variants button').forEach((b,j)=>b.setAttribute('aria-pressed',String(j===i)));}
function configureDetailInquiry(x){const a=document.getElementById('detail-contact');const u=waUrl(x.n);if(u){a.href=u;a.target='_blank';a.rel='noopener noreferrer';a.textContent='Preis über WhatsApp anfragen ↗';}else{a.href='#kontakt';a.removeAttribute('target');a.removeAttribute('rel');a.textContent='WhatsApp-Kontakt ansehen ↗';}document.getElementById('detail-instagram').href=instagramUrl;}
function openDetail(x,from){currentProduct=x;opener=from;document.getElementById('detail-category').textContent=cats[x.c];document.getElementById('detail-name').textContent=x.n;document.getElementById('detail-code').textContent=x.code;
 document.getElementById('detail-description').textContent=x.desc;document.getElementById('detail-state').textContent='So funktioniert es: '+x.how;
 const specs=document.getElementById('detail-specs');specs.replaceChildren();addSpec(specs,'Produkttyp',x.type);addSpec(specs,'Format',x.formats);addSpec(specs,'Anpassung','Nach Absprache');addSpec(specs,'Preis','Auf Anfrage');
 const vs=document.getElementById('variants');vs.replaceChildren();x.gallery.forEach((g,i)=>{const b=el('button',null,g.label);b.type='button';b.addEventListener('click',()=>setGallery(x,i));vs.append(b);});setGallery(x,0);configureDetailInquiry(x);dialog.showModal();}
function closeDetail(){if(dialog.open)dialog.close();opener?.focus();}
document.querySelectorAll('[data-filter]').forEach(b=>b.addEventListener('click',()=>{filter=b.dataset.filter;render();}));
document.querySelectorAll('[data-world]').forEach(a=>a.addEventListener('click',()=>{filter=a.dataset.world;render();}));
document.getElementById('close-details').addEventListener('click',closeDetail);document.getElementById('back-details').addEventListener('click',closeDetail);
dialog.addEventListener('click',e=>{if(e.target===dialog)closeDetail();});
const menu=document.getElementById('menu');menu.addEventListener('click',()=>{const open=menu.getAttribute('aria-expanded')!=='true';menu.setAttribute('aria-expanded',String(open));menu.setAttribute('aria-label',open?'Menü schließen':'Menü öffnen');document.getElementById('hauptnavigation').classList.toggle('open',open);});document.querySelectorAll('.nav a').forEach(a=>a.addEventListener('click',()=>{menu.setAttribute('aria-expanded','false');document.getElementById('hauptnavigation').classList.remove('open');}));
const general=waUrl('');if(general){const a=document.getElementById('whatsapp');a.href=general;a.hidden=false;document.getElementById('wa-placeholder').hidden=true;}
if(cfg.instagramUsername)document.getElementById('instagram').href=instagramUrl;
document.getElementById('year').textContent=new Date().getFullYear();render();
