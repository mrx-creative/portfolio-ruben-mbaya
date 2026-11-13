/* =====================================================
   CONFIGURATION : modifiez uniquement cette partie
   ===================================================== */

// Réseaux sociaux : collez vos URL. Un champ vide masque le bouton.
const SOCIAL = {
  linkedin: '',    // ex. https://www.linkedin.com/in/votre-profil
  instagram: '',   // ex. https://www.instagram.com/votre-compte
  facebook: '',    // ex. https://www.facebook.com/votre-profil
  whatsapp: 'https://wa.me/243979385552'
};
const PROJECTS = [
  { name: 'MRX Creative', category: 'Projet web',
    image: 'assets/images/mrx-creative.png',
    description: 'Site dédié à mes créations graphiques.',
    goal: 'Présenter mes réalisations graphiques en ligne.',
    link: 'https://mrx-creative.netlify.app/', linkLabel: 'Voir le site' },

  { name: 'Portfolio personnel', category: 'Projet web',
    image: 'assets/images/portfolio.jpeg',
    description: 'Ce portfolio, développé sans framework pour être hébergé gratuitement sur GitHub Pages.',
    tools: 'HTML5, CSS3, JavaScript',
    goal: 'Présenter mon profil aux recruteurs et aux clients.' }
];

// Galerie. category : 'Affiches', 'Design graphique', 'Photographie' ou 'Audiovisuel'.
// Exemple : { title:'Affiche événement', category:'Affiches', image:'assets/images/gallery/affiche-1.jpg' }
const GALLERY = [];

/* =====================================================
   CODE DU SITE
   ===================================================== */
const $ = (s, c = document) => c.querySelector(s);
const $$ = (s, c = document) => [...c.querySelectorAll(s)];
const h = (tag, cls, txt) => { const e = document.createElement(tag); if (cls) e.className = cls; if (txt) e.textContent = txt; return e; };
const link = (cls, label, url) => { const a = h('a', cls, label); a.href = url; a.target = '_blank'; a.rel = 'noopener'; return a; };

// Thème sombre / clair (mémorisé)
$('#theme').addEventListener('click', () => {
  const t = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
  document.documentElement.dataset.theme = t;
  try { localStorage.setItem('theme', t); } catch (e) {}
});

// Menu mobile
const burger = $('.burger'), menu = $('#menu');
const setMenu = open => { menu.classList.toggle('open', open); burger.setAttribute('aria-expanded', open); };
burger.addEventListener('click', () => setMenu(!menu.classList.contains('open')));
menu.addEventListener('click', e => { if (e.target.matches('a')) setMenu(false); });

// Projets
const pbox = $('#projects');
PROJECTS.forEach(p => {
  const c = h('article', 'card pcard reveal'), m = h('div', 'pimg', p.category);
  if (p.image) { const i = h('img'); i.src = p.image; i.alt = 'Aperçu du projet ' + p.name; i.loading = 'lazy'; m.append(i); }
  c.append(m, h('h3', '', p.name), h('p', '', p.description));
  if (p.tools) c.append(h('p', 'meta', 'Technologies : ' + p.tools));
  if (p.goal) c.append(h('p', 'meta', 'Objectif : ' + p.goal));
  if (p.link) c.append(link('btn', p.linkLabel || 'Voir le projet', p.link));
  pbox.append(c);
});

// Galerie filtrable
const gempty = $('#gempty');
GALLERY.forEach(g => {
  const f = h('figure', 'gitem'), i = h('img');
  f.dataset.cat = g.category; i.src = g.image; i.alt = g.title; i.loading = 'lazy';
  f.append(i, h('figcaption', '', g.title)); $('#gallery').append(f);
});
const refresh = () => { gempty.hidden = $$('.gitem:not([hidden])').length > 0; };
$$('.filters button').forEach(b => b.addEventListener('click', () => {
  $$('.filters button').forEach(x => x.setAttribute('aria-pressed', x === b));
  $$('.gitem').forEach(f => { f.hidden = !(b.dataset.f === 'all' || f.dataset.cat === b.dataset.f); });
  refresh();
}));
refresh();

// Réseaux sociaux (seuls les liens renseignés s'affichent)
const names = { linkedin: 'LinkedIn', instagram: 'Instagram', facebook: 'Facebook', whatsapp: 'WhatsApp' };
Object.entries(SOCIAL).forEach(([k, url]) => {
  if (!url) return;
  const li = h('li'); li.append(link('btn', names[k], url)); $('#social').append(li);
});

// Images manquantes : on masque l'image, le repli (initiales) reste visible
$$('img').forEach(i => {
  const miss = () => i.classList.add('is-missing');
  i.addEventListener('error', miss);
  if (i.complete && !i.naturalWidth) miss();
});

// Apparition discrète au défilement
const io = 'IntersectionObserver' in window ? new IntersectionObserver(es => es.forEach(e => {
  if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
}), { threshold: .12 }) : null;
$$('.reveal').forEach(e => io ? io.observe(e) : e.classList.add('in'));


/* =====================================================
   DATE ET HEURE LOCALE DE LUBUMBASHI
   ===================================================== */

function actualiserDateHeureLubumbashi() {

  const maintenant = new Date();

  // Date locale de Lubumbashi
  const date = maintenant.toLocaleDateString('fr-FR', {
    timeZone: 'Africa/Lubumbashi',
    weekday: 'long',
    day: '2-digit',
    month: 'long',
    year: 'numeric'
  });

  // Heure locale de Lubumbashi
  const heure = maintenant.toLocaleTimeString('fr-FR', {
    timeZone: 'Africa/Lubumbashi',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false
  });

  // Affichage de la date
  const dateElement = document.querySelector('#date-lubumbashi');

  if (dateElement) {
    dateElement.textContent = date;
  }

  // Affichage de l'heure
  const heureElement = document.querySelector('#heure-lubumbashi');

  if (heureElement) {
    heureElement.textContent = heure;
  }
}

// Affichage immédiat
actualiserDateHeureLubumbashi();

// Mise à jour chaque seconde
setInterval(actualiserDateHeureLubumbashi, 1000);