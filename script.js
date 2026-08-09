/* ============================================================
   MUSICKLE — logic & data
   Vanilla JS. Data di bawah contoh/demo (bukan chart resmi).
============================================================ */
'use strict';

/* ============ DATA DEMO ============ */
const SIFAT = [
  { id:'melankolis', icon:'🥀', name:'Melankolis', desc:'Lagu buat kamu yang lagi mikirin banyak hal — sedihnya dibikin jadi indah.', songs:[
    { song:'To the Bone', artist:'Pamungkas', mood:'Rindu', tempo:'Slow' },
    { song:'Heather', artist:'Conan Gray', mood:'Galau', tempo:'Slow' },
    { song:'Rumah ke Rumah', artist:'Hindia', mood:'Renung', tempo:'Medium' },
    { song:'Before You Go', artist:'Lewis Capaldi', mood:'Sedih', tempo:'Slow' },
  ]},
  { id:'energik', icon:'⚡', name:'Energik', desc:'Buat yang gak bisa diem — beat ngegas, mood langsung naik.', songs:[
    { song:'Blinding Lights', artist:'The Weeknd', mood:'Gaspol', tempo:'Fast' },
    { song:'Houdini', artist:'Dua Lipa', mood:'Ngegas', tempo:'Fast' },
    { song:'High Hopes', artist:'Panic! At The Disco', mood:'Semangat', tempo:'Fast' },
    { song:'Stronger', artist:'Kanye West', mood:'Power', tempo:'Fast' },
  ]},
  { id:'chill', icon:'😌', name:'Chill', desc:'Santai aja dulu — buat sore yang adem atau tugas yang nggak buru-buru.', songs:[
    { song:'Bertaut', artist:'Nadin Amizah', mood:'Tenang', tempo:'Slow' },
    { song:'Peaches', artist:'Justin Bieber', mood:'Santal', tempo:'Medium' },
    { song:'Sunday Best', artist:'Surfaces', mood:'Happy-chill', tempo:'Medium' },
    { song:'Luar Biasa', artist:'Raisa', mood:'Adem', tempo:'Medium' },
  ]},
  { id:'fokus', icon:'🎯', name:'Fokus', desc:'Distraction? Gak kenal. Buat ngerjain apa pun sampe beres.', songs:[
    { song:'Midnight City', artist:'M83', mood:'Deep work', tempo:'Medium' },
    { song:'Weightless', artist:'Marconi Union', mood:'Fokus', tempo:'Slow' },
    { song:'Lofi Study Beats', artist:'Lofi Girl', mood:'Konsisten', tempo:'Slow' },
    { song:'Intro', artist:'The xx', mood:'Minimal', tempo:'Slow' },
  ]},
  { id:'nostalgia', icon:'📼', name:'Nostalgia', desc:'Flashback ke masa-masa — lagu lama yang gak pernah bosen.', songs:[
    { song:'Terlalu Manis', artist:'Slank', mood:'Kenangan', tempo:'Medium' },
    { song:'Kangen', artist:'Dewa 19', mood:'Rindu lama', tempo:'Slow' },
    { song:'A Thousand Years', artist:'Christina Perri', mood:'Romantis', tempo:'Slow' },
    { song:'Kenangan Terindah', artist:'Samsons', mood:'Nostalgis', tempo:'Medium' },
  ]},
  { id:'party', icon:'🎉', name:'Party', desc:'Turn it up! Buat malam yang gak mau berhenti.', songs:[
    { song:'Levitating', artist:'Dua Lipa', mood:'Dance', tempo:'Fast' },
    { song:'Uptown Funk', artist:'Mark Ronson ft. Bruno Mars', mood:'Groove', tempo:'Fast' },
    { song:'I Gotta Feeling', artist:'Black Eyed Peas', mood:'Party', tempo:'Fast' },
    { song:'Don\'t Start Now', artist:'Dua Lipa', mood:'Disco', tempo:'Fast' },
  ]},
  { id:'galau', icon:'🌧️', name:'Galau', desc:'Nangis pelan-pelan di kamar sambil dengerin ini — valid.', songs:[
    { song:'Runtuh', artist:'Feby Putri ft. Fiersa Besari', mood:'Hancur', tempo:'Slow' },
    { song:'drivers license', artist:'Olivia Rodrigo', mood:'Galau', tempo:'Medium' },
    { song:'Halu', artist:'Feby Putri', mood:'Kecewa', tempo:'Slow' },
    { song:'Cuek', artist:'Rizky Febian', mood:'Patah hati', tempo:'Slow' },
  ]},
  { id:'bahagia', icon:'☀️', name:'Bahagia', desc:'Hari baik, hati tenang — lagu yang bikin senyum gak berhenti.', songs:[
    { song:'Happy', artist:'Pharrell Williams', mood:'Ceria', tempo:'Fast' },
    { song:'Here Comes the Sun', artist:'The Beatles', mood:'Hangat', tempo:'Medium' },
    { song:'Walking on Sunshine', artist:'Katrina & The Waves', mood:'Ceria', tempo:'Fast' },
    { song:'Best Part', artist:'Daniel Caesar ft. H.E.R.', mood:'Lembut', tempo:'Slow' },
  ]},
];

const ARTIS = [
  { name:'Pamungkas', genre:'R&B / Pop', tags:['chill','romantis','deep'], top:'To the Bone', grad:'linear-gradient(135deg,#FF2E88,#7A4DFF)' },
  { name:'Nadin Amizah', genre:'Folk / Indie', tags:['lembut','puitis','tenang'], top:'Bertaut', grad:'linear-gradient(135deg,#FFD23F,#FF2E88)' },
  { name:'Hindia', genre:'Indie Rock', tags:['dalam','kritik','renung'], top:'Rumah ke Rumah', grad:'linear-gradient(135deg,#7A4DFF,#0082F3)' },
  { name:'Raisa', genre:'Pop', tags:['hangat','aduhai','smooth'], top:'Luar Biasa', grad:'linear-gradient(135deg,#0082F3,#3EF2C8)' },
  { name:'The Weeknd', genre:'R&B / Synth', tags:['dramatis','malam','ikonik'], top:'Blinding Lights', grad:'linear-gradient(135deg,#FF4D5E,#FF9F43)' },
  { name:'Dua Lipa', genre:'Pop / Dance', tags:['energik','disco','gaspol'], top:'Levitating', grad:'linear-gradient(135deg,#FF2E88,#FFD23F)' },
  { name:'Coldplay', genre:'Alt Rock', tags:['emosional','megah','hopeful'], top:'Viva La Vida', grad:'linear-gradient(135deg,#131630,#7A4DFF)' },
  { name:'Taylor Swift', genre:'Pop / Country', tags:['storytelling','galau','nostalgia'], top:'All Too Well', grad:'linear-gradient(135deg,#FFD23F,#FF9F43)' },
  { name:'NIKI', genre:'R&B', tags:['lembut','intim','mellow'], top:'Every Summertime', grad:'linear-gradient(135deg,#3EF2C8,#0082F3)' },
  { name:'Rich Brian', genre:'Hip-hop', tags:['santai','witty','lowkey'], top:'Dat $tick', grad:'linear-gradient(135deg,#7A4DFF,#FF2E88)' },
  { name:'Tulus', genre:'Jazz Pop', tags:['romantis','classy','hangat'], top:'Hati-Hati di Jalan', grad:'linear-gradient(135deg,#FF9F43,#FFD23F)' },
  { name:'Billie Eilish', genre:'Alt Pop', tags:['misterius','whisper','melankolis'], top:'Lovely', grad:'linear-gradient(135deg,#131630,#0082F3)' },
];

const TRENDING = [
  { song:'Blinding Lights', artist:'The Weeknd', delta:+12, mood:88 },
  { song:'To the Bone', artist:'Pamungkas', delta:+7, mood:72 },
  { song:'Runtuh', artist:'Feby Putri ft. Fiersa Besari', delta:+15, mood:64 },
  { song:'Bertaut', artist:'Nadin Amizah', delta:+4, mood:58 },
  { song:'Levitating', artist:'Dua Lipa', delta:-3, mood:81 },
  { song:'Rumah ke Rumah', artist:'Hindia', delta:+9, mood:55 },
  { song:'Every Summertime', artist:'NIKI', delta:-2, mood:49 },
  { song:'Hati-Hati di Jalan', artist:'Tulus', delta:-6, mood:45 },
];

const ENERGY_POOL = [
  { song:'Lofi Study Beats', artist:'Lofi Girl', energy:8 },
  { song:'Weightless', artist:'Marconi Union', energy:12 },
  { song:'Bertaut', artist:'Nadin Amizah', energy:18 },
  { song:'Best Part', artist:'Daniel Caesar ft. H.E.R.', energy:26 },
  { song:'Every Summertime', artist:'NIKI', energy:35 },
  { song:'To the Bone', artist:'Pamungkas', energy:42 },
  { song:'Hati-Hati di Jalan', artist:'Tulus', energy:50 },
  { song:'Peaches', artist:'Justin Bieber', energy:58 },
  { song:'Midnight City', artist:'M83', energy:66 },
  { song:'Viva La Vida', artist:'Coldplay', energy:74 },
  { song:'Uptown Funk', artist:'Mark Ronson', energy:82 },
  { song:'High Hopes', artist:'Panic! At The Disco', energy:88 },
  { song:'Blinding Lights', artist:'The Weeknd', energy:92 },
  { song:'Stronger', artist:'Kanye West', energy:96 },
];

const GRADIENTS = [
  { id:'pink-plum', css:'linear-gradient(135deg,#FF2E88,#7A4DFF)' },
  { id:'yellow-pink', css:'linear-gradient(135deg,#FFD23F,#FF2E88)' },
  { id:'blue-mint', css:'linear-gradient(135deg,#0082F3,#3EF2C8)' },
  { id:'plum-blue', css:'linear-gradient(135deg,#7A4DFF,#0082F3)' },
  { id:'red-orange', css:'linear-gradient(135deg,#FF4D5E,#FF9F43)' },
  { id:'midnight-plum', css:'linear-gradient(135deg,#131630,#7A4DFF)' },
  { id:'sunset', css:'linear-gradient(135deg,#FF9F43,#FF2E88)' },
  { id:'lime-mint', css:'linear-gradient(135deg,#B6F24C,#3EF2C8)' },
  { id:'sky-ocean', css:'linear-gradient(135deg,#4CC9FF,#0082F3)' },
  { id:'candy', css:'linear-gradient(135deg,#FF2E88,#FF9F43)' },
  { id:'deep-violet', css:'linear-gradient(135deg,#1B1450,#7A4DFF)' },
  { id:'neon-night', css:'linear-gradient(135deg,#0A0C24,#FF2E88)' },
  { id:'berry', css:'linear-gradient(135deg,#C2185B,#7A4DFF)' },
  { id:'tropic', css:'linear-gradient(135deg,#3EF2C8,#4CC9FF)' },
  { id:'ember', css:'linear-gradient(135deg,#FF4D5E,#FFD23F)' },
  { id:'aurora', css:'linear-gradient(135deg,#B6F24C,#0082F3)' },
];
const ICONS = ['🎧','🎸','🎹','🥁','🎤','🎷','💿','📻','🎺','🎻','🪕','🎼','🎵','🎶','🎚️','🎛️'];
const MOTIFS = [
  { id:'none', label:'Polos' },
  { id:'groove', label:'Groove' },
  { id:'vinyl', label:'Vinyl' },
  { id:'dots', label:'Dot' },
  { id:'stripes', label:'Stripes' },
  { id:'checker', label:'Checker' },
  { id:'grid', label:'Grid' },
  { id:'ring', label:'Ring' },
  { id:'eq', label:'Equalizer' },
  { id:'zigzag', label:'Zigzag' },
  { id:'star', label:'Bintang' },
  { id:'note', label:'Not Balok' },
];
const FRAMES = [
  { id:'none', label:'Tanpa' },
  { id:'double', label:'Double' },
  { id:'neon', label:'Neon' },
  { id:'retro', label:'Retro' },
  { id:'corners', label:'Kurung' },
];
const FONTS = [
  { id:'anton', label:'Anton' },
  { id:'bungee', label:'Bungee' },
  { id:'archivo', label:'Archivo' },
  { id:'caveat', label:'Caveat' },
  { id:'monoton', label:'Monoton' },
];

/* ============ HELPERS ============ */
const $ = (id) => document.getElementById(id);
const esc = (s) => String(s ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));

/* ============ NAV MOBILE ============ */
$('burger').addEventListener('click', () => $('mobileMenu').classList.toggle('open'));
document.querySelectorAll('#mobileMenu a').forEach(a => a.addEventListener('click', () => $('mobileMenu').classList.remove('open')));

/* ============ SCROLL REVEAL ============ */
const revealEls = document.querySelectorAll('[data-reveal]');
if ('IntersectionObserver' in window) {
  const ro = new IntersectionObserver((entries) => {
    entries.forEach(en => { if (en.isIntersecting) { en.target.classList.add('in-view'); ro.unobserve(en.target); } });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  revealEls.forEach(el => ro.observe(el));
} else {
  revealEls.forEach(el => el.classList.add('in-view'));
}

/* ============ 01 — SIFAT MUSIK ============ */
let selectedSifat = null;
const sifatGrid = $('sifatGrid');
const sifatResult = $('sifatResult');

function renderSifat() {
  sifatGrid.innerHTML = SIFAT.map((s, i) => `
    <div class="sifat-card ${s.id === selectedSifat ? 'selected' : ''}" data-sifat="${s.id}" data-reveal style="--stagger:${i % 4}">
      <span class="sifat-check">✓</span>
      <div class="sifat-icon">${s.icon}</div>
      <div class="sifat-name">${s.name}</div>
      <div class="sifat-desc">${s.desc}</div>
    </div>`).join('');
}
renderSifat();

sifatGrid.addEventListener('click', (e) => {
  const card = e.target.closest('.sifat-card');
  if (!card) return;
  const id = card.dataset.sifat;
  selectedSifat = (selectedSifat === id) ? null : id;
  renderSifat();
  if (selectedSifat) showSifatResult(selectedSifat);
  else sifatResult.hidden = true;
});

function showSifatResult(id) {
  const s = SIFAT.find(x => x.id === id);
  if (!s) return;
  $('sifatResultIcon').textContent = s.icon;
  $('sifatResultName').textContent = 'Kamu tuh ' + s.name;
  $('sifatResultDesc').textContent = s.desc;
  $('sifatResultSongs').innerHTML = s.songs.map((sg, i) => `
    <div class="reco-item">
      <span class="reco-num">${String(i + 1).padStart(2, '0')}</span>
      <div>
        <div class="reco-song">${esc(sg.song)}</div>
        <div class="reco-artist">${esc(sg.artist)}</div>
      </div>
      <span class="reco-tag mood">${sg.mood}</span>
      <span class="reco-tag tempo">${sg.tempo}</span>
      <button class="play-btn" data-play="${esc(sg.song)}" data-artist="${esc(sg.artist)}" title="Preview 30 detik">▶</button>
    </div>`).join('');
  sifatResult.hidden = false;
  sifatResult.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}
$('sifatReset').addEventListener('click', () => {
  selectedSifat = null;
  renderSifat();
  sifatResult.hidden = true;
});

/* ============ 02 — PENYANYI ============ */
let artistFilter = 'semua';
const artistGrid = $('artistGrid');
const artistFilters = $('artistFilters');

function renderArtistFilters() {
  const genres = ['semua', ...new Set(ARTIS.map(a => a.genre.split(' / ')[0]))];
  artistFilters.innerHTML = genres.map(g => `
    <button class="chip ${artistFilter === g ? 'active' : ''}" data-genre="${g}">${g === 'semua' ? 'Semua' : g}</button>`).join('');
}
function renderArtists() {
  const list = artistFilter === 'semua'
    ? ARTIS
    : ARTIS.filter(a => a.genre.includes(artistFilter));
  artistGrid.innerHTML = list.map((a, i) => `
    <div class="artist-card" data-reveal style="--stagger:${i % 4}">
      <div class="artist-avatar" style="background:${a.grad}">${esc(a.name[0])}</div>
      <div class="artist-name">${esc(a.name)}</div>
      <div class="artist-genre">${esc(a.genre)}</div>
      <div class="artist-tags">${a.tags.map(t => `<span>${t}</span>`).join('')}</div>
      <div class="artist-top">Top: <b>${esc(a.top)}</b></div>
    </div>`).join('');
}
renderArtistFilters();
renderArtists();
artistFilters.addEventListener('click', (e) => {
  const chip = e.target.closest('.chip');
  if (!chip) return;
  artistFilter = chip.dataset.genre;
  renderArtistFilters();
  renderArtists();
});

/* ============ 03 — TRENDING ============ */
$('trendList').innerHTML = TRENDING.map((t, i) => `
<div class="trend-item" data-reveal style="--stagger:${i % 4}">
  <span class="trend-rank ${i < 3 ? 'top3' : ''}">${String(i + 1).padStart(2, '0')}</span>
  <div class="trend-info">
    <div class="trend-song">${esc(t.song)}</div>
    <div class="trend-artist">${esc(t.artist)}</div>
  </div>
  <div class="trend-mood">
    <span class="trend-mood-label">Heat</span>
    <div class="trend-bar"><i style="width:${t.mood}%"></i></div>
  </div>
  <span class="trend-delta ${t.delta > 0 ? 'up' : t.delta < 0 ? 'down' : 'flat'}">${t.delta > 0 ? '▲' : t.delta < 0 ? '▼' : '—'} ${Math.abs(t.delta)}</span>
  <button class="play-btn" data-play="${esc(t.song)}" data-artist="${esc(t.artist)}" title="Preview 30 detik">▶</button>
</div>`).join('');

/* ============ 04 — ENERGY ============ */
const energySlider = $('energySlider');
const energyLevelTag = $('energyLevelTag');
const energySongs = $('energySongs');

function energyLevel(v) {
  if (v < 30) return { label: 'LOW ENERGY', tag: 'Chill banget — buat rileks & rebahan' };
  if (v < 65) return { label: 'MID ENERGY', tag: 'Seimbang — santai tapi tetep gerak' };
  return { label: 'HIGH ENERGY', tag: 'Gaspol — buat olahraga & ngegas' };
}
function renderEnergy(v) {
  const lvl = energyLevel(v);
  energyLevelTag.textContent = lvl.label + ' — ' + lvl.tag;
  const songs = ENERGY_POOL
    .map(s => ({ ...s, dist: Math.abs(s.energy - v) }))
    .sort((a, b) => a.dist - b.dist)
    .slice(0, 6);
  energySongs.innerHTML = songs.map(s => `
    <div class="energy-song">
      <b>${esc(s.song)}</b>
      <span>${esc(s.artist)} · energy ${s.energy}</span>
      <button class="play-btn sm" data-play="${esc(s.song)}" data-artist="${esc(s.artist)}" title="Preview 30 detik">▶</button>
    </div>`).join('');
}
energySlider.addEventListener('input', () => renderEnergy(Number(energySlider.value)));
renderEnergy(Number(energySlider.value));

/* ============ 05 — CARD KESESUAIAN ============ */
const LS_CARDS = 'musickle_cards_v1';
let cards = [];
let currentGrad = GRADIENTS[0].css;
let currentIcon = ICONS[0];
let currentMotif = 'vinyl';
let currentFrame = 'neon';
let currentFont = 'anton';
let editingId = null;

function cardState() {
  return {
    name: $('cfName').value.trim(),
    song: $('cfSong').value.trim(),
    artist: $('cfArtist').value.trim(),
    vibe: $('cfVibe').value,
    quote: $('cfQuote').value.trim(),
    grad: currentGrad,
    icon: currentIcon,
    motif: currentMotif,
    frame: currentFrame,
    font: currentFont,
  };
}
function applyCardClasses(el, st) {
  el.classList.remove('motif-none', 'motif-groove', 'motif-vinyl', 'motif-dots', 'motif-stripes', 'motif-checker', 'motif-grid', 'motif-ring', 'motif-eq', 'motif-zigzag', 'motif-star', 'motif-note');
  el.classList.remove('frame-none', 'frame-double', 'frame-neon', 'frame-retro', 'frame-corners');
  el.classList.remove('font-anton', 'font-bungee', 'font-archivo', 'font-caveat', 'font-monoton');
  el.classList.add('motif-' + (st.motif || 'none'));
  el.classList.add('frame-' + (st.frame || 'none'));
  el.classList.add('font-' + (st.font || 'anton'));
}
function fillCard(st) {
  const card = $('matchCard');
  card.style.background = st.grad;
  applyCardClasses(card, st);
  $('mcIcon').textContent = st.icon;
  $('mcQuote').innerHTML = st.quote
    ? esc(st.quote)
    : 'Lagu ini <b>kamu banget</b>.';
  $('mcSong').textContent = st.song || 'Judul Lagu';
  $('mcArtist').textContent = st.artist || 'Nama Penyanyi';
  const vibeLabel = SIFAT.find(s => s.id === st.vibe);
  $('mcTags').innerHTML = vibeLabel
    ? `<span class="mc-tag">${vibeLabel.icon} ${vibeLabel.name}</span><span class="mc-tag">♪ match</span>`
    : '<span class="mc-tag">♪ match</span>';
  $('mcName').textContent = st.name || 'kamu';
}

/* vibe select options */
$('cfVibe').innerHTML = '<option value="">pilih vibe…</option>' +
  SIFAT.map(s => `<option value="${s.id}">${s.icon} ${s.name}</option>`).join('');

/* gradient picker */
$('gradPicker').innerHTML = GRADIENTS.map(g => `
  <div class="grad-opt ${g.css === currentGrad ? 'active' : ''}" data-grad="${g.id}" style="background:${g.css}" title="${g.id}"></div>`).join('');
$('gradPicker').addEventListener('click', (e) => {
  const opt = e.target.closest('.grad-opt');
  if (!opt) return;
  currentGrad = GRADIENTS.find(g => g.id === opt.dataset.grad).css;
  document.querySelectorAll('.grad-opt').forEach(o => o.classList.toggle('active', o === opt));
  fillCard(cardState());
});

/* icon picker */
$('iconPicker').innerHTML = ICONS.map(ic => `
  <button class="icon-opt ${ic === currentIcon ? 'active' : ''}" data-icon="${ic}">${ic}</button>`).join('');
$('iconPicker').addEventListener('click', (e) => {
  const opt = e.target.closest('.icon-opt');
  if (!opt) return;
  currentIcon = opt.dataset.icon;
  document.querySelectorAll('.icon-opt').forEach(o => o.classList.toggle('active', o === opt));
  fillCard(cardState());
});

/* motif picker */
$('motifPicker').innerHTML = MOTIFS.map(m => `
  <div class="motif-opt ${m.id === currentMotif ? 'active' : ''}" data-motif="${m.id}">
    <span class="mo-swatch motif-${m.id}"></span>${m.label}
  </div>`).join('');
$('motifPicker').addEventListener('click', (e) => {
  const opt = e.target.closest('.motif-opt');
  if (!opt) return;
  currentMotif = opt.dataset.motif;
  document.querySelectorAll('.motif-opt').forEach(o => o.classList.toggle('active', o === opt));
  fillCard(cardState());
});

/* frame picker */
$('framePicker').innerHTML = FRAMES.map(f => `
  <div class="frame-opt ${f.id === currentFrame ? 'active' : ''}" data-frame="${f.id}">
    <span class="fr-swatch"></span>${f.label}
  </div>`).join('');
$('framePicker').addEventListener('click', (e) => {
  const opt = e.target.closest('.frame-opt');
  if (!opt) return;
  currentFrame = opt.dataset.frame;
  document.querySelectorAll('.frame-opt').forEach(o => o.classList.toggle('active', o === opt));
  fillCard(cardState());
});

/* font picker */
$('fontPicker').innerHTML = FONTS.map(f => `
  <div class="font-opt ${f.id === currentFont ? 'active' : ''}" data-font="${f.id}">
    <span class="fo-swatch">Aa</span>${f.label}
  </div>`).join('');
$('fontPicker').addEventListener('click', (e) => {
  const opt = e.target.closest('.font-opt');
  if (!opt) return;
  currentFont = opt.dataset.font;
  document.querySelectorAll('.font-opt').forEach(o => o.classList.toggle('active', o === opt));
  fillCard(cardState());
});

/* live preview */
['cfName', 'cfSong', 'cfArtist', 'cfVibe', 'cfQuote'].forEach(id => {
  $(id).addEventListener('input', () => fillCard(cardState()));
});

/* save */
function saveCards() {
  localStorage.setItem(LS_CARDS, JSON.stringify(cards));
  renderGallery();
}
$('saveCardBtn').addEventListener('click', () => {
  const st = cardState();
  if (!st.song || !st.artist) {
    toast('Isi minimal judul lagu & penyanyi dulu ya 🎵');
    return;
  }
  const record = { id: editingId || 'C' + Date.now().toString(36).toUpperCase(), ...st, created: Date.now() };
  if (editingId) {
    const idx = cards.findIndex(c => c.id === editingId);
    if (idx >= 0) cards[idx] = record;
    editingId = null;
    $('saveCardBtn').textContent = '💾 Simpan Card';
  } else {
    cards.unshift(record);
  }
  saveCards();
  $('cardGallery').scrollIntoView({ behavior: 'smooth' });
});

/* gallery */
function renderGallery() {
  const grid = $('galleryGrid');
  $('galleryCount').textContent = `(${cards.length})`;
  $('clearCardsBtn').hidden = cards.length === 0;
  if (!cards.length) {
    grid.innerHTML = '<div class="gallery-empty">Belum ada card. Isi form di atas, terus klik <b>Simpan Card</b> — card kamu bakal muncul di sini. ✦</div>';
    return;
  }
  grid.innerHTML = cards.map((c, i) => `
    <div class="gallery-item" data-id="${c.id}">
      <div class="match-card motif-${c.motif || 'none'} frame-${c.frame || 'none'} font-${c.font || 'anton'}" style="background:${c.grad}">
        <div class="mc-motif" aria-hidden="true"></div>
        <div class="mc-top"><span class="mc-badge">♪ MUSICKLE MATCH</span></div>
        <div class="mc-icon">${c.icon}</div>
        <div class="mc-quote">${esc(c.quote) || 'Lagu ini <b>kamu banget</b>.'}</div>
        <div class="mc-divider"></div>
        <div class="mc-song">${esc(c.song)}</div>
        <div class="mc-artist">${esc(c.artist)}</div>
        <div class="mc-tags">${SIFAT.find(s => s.id === c.vibe) ? `<span class="mc-tag">${SIFAT.find(s => s.id === c.vibe).icon} ${SIFAT.find(s => s.id === c.vibe).name}</span>` : ''}<span class="mc-tag">♪ match</span></div>
        <div class="mc-from">dibuat oleh <b>${esc(c.name) || 'kamu'}</b> · musikle</div>
      </div>
      <div class="gallery-actions">
        <button class="gallery-btn edit" data-act="edit" title="Edit">✏️</button>
        <button class="gallery-btn del" data-act="del" title="Hapus">🗑</button>
      </div>
    </div>`).join('');
}

$('galleryGrid').addEventListener('click', (e) => {
  const btn = e.target.closest('[data-act]');
  if (!btn) return;
  const item = btn.closest('.gallery-item');
  const id = item.dataset.id;
  if (btn.dataset.act === 'del') {
    cards = cards.filter(c => c.id !== id);
    saveCards();
  } else {
    const c = cards.find(x => x.id === id);
    if (!c) return;
    editingId = id;
    $('cfName').value = c.name; $('cfSong').value = c.song; $('cfArtist').value = c.artist;
    $('cfVibe').value = c.vibe || ''; $('cfQuote').value = c.quote || '';
    currentGrad = c.grad; currentIcon = c.icon;
    currentMotif = c.motif || 'none'; currentFrame = c.frame || 'none'; currentFont = c.font || 'anton';
    document.querySelectorAll('.grad-opt').forEach(o => o.classList.toggle('active', o.style.background === c.grad || o.dataset.grad === GRADIENTS.find(g => g.css === c.grad)?.id));
    document.querySelectorAll('.icon-opt').forEach(o => o.classList.toggle('active', o.dataset.icon === c.icon));
    document.querySelectorAll('.motif-opt').forEach(o => o.classList.toggle('active', o.dataset.motif === currentMotif));
    document.querySelectorAll('.frame-opt').forEach(o => o.classList.toggle('active', o.dataset.frame === currentFrame));
    document.querySelectorAll('.font-opt').forEach(o => o.classList.toggle('active', o.dataset.font === currentFont));
    fillCard(cardState());
    $('saveCardBtn').textContent = '💾 Update Card';
    $('card-form-col').scrollIntoView({ behavior: 'smooth' });
  }
});
$('clearCardsBtn').addEventListener('click', () => {
  if (confirm('Hapus semua card?')) { cards = []; saveCards(); }
});

/* download PNG via canvas */
$('downloadCardBtn').addEventListener('click', () => {
  const st = cardState();
  if (!st.song) { toast('Isi judul lagu dulu biar card-nya lengkap 🎵'); return; }
  const cv = renderCardCanvas(st);
  const a = document.createElement('a');
  a.download = 'musickle-card-' + (st.song || 'match').toLowerCase().replace(/\s+/g, '-') + '.png';
  a.href = cv.toDataURL('image/png');
  a.click();
});

function wrapText(ctx, text, x, y, maxW, lineH) {
  const words = text.split(' ');
  let line = '';
  let yy = y;
  for (const w of words) {
    const test = line ? line + ' ' + w : w;
    if (ctx.measureText(test).width > maxW && line) {
      ctx.fillText(line, x, yy); line = w; yy += lineH;
    } else line = test;
  }
  ctx.fillText(line, x, yy);
  return yy + lineH;
}

/* ============ PREVIEW 30 DETIK (iTunes Search API) ============ */
const audio = new Audio();
let currentPlayKey = null;
const previewCache = {};
const nowPlaying = $('nowPlaying');
const npTitle = $('npTitle');

async function findPreview(title, artist) {
  const key = (title + '|' + artist).toLowerCase();
  if (previewCache[key] !== undefined) return previewCache[key];
  try {
    const url = 'https://itunes.apple.com/search?term=' + encodeURIComponent(title + ' ' + artist)
      + '&media=music&entity=song&limit=3&country=ID';
    const res = await fetch(url);
    const data = await res.json();
    const hit = (data.results || []).find(r => r.previewUrl) || null;
    previewCache[key] = hit ? { url: hit.previewUrl, name: hit.trackName, artist: hit.artistName } : null;
    return previewCache[key];
  } catch (e) {
    previewCache[key] = null;
    return null;
  }
}

function resetPlayBtns() {
  document.querySelectorAll('.play-btn.playing').forEach(b => { b.textContent = '▶'; b.classList.remove('playing'); });
}

async function togglePreview(btn) {
  const title = btn.dataset.play;
  const artist = btn.dataset.artist || '';
  const key = title + '|' + artist;
  if (currentPlayKey === key && !audio.paused) {
    audio.pause();
    resetPlayBtns();
    nowPlaying.hidden = true;
    currentPlayKey = null;
    return;
  }
  btn.textContent = '…';
  const hit = await findPreview(title, artist);
  if (!hit) {
    btn.textContent = '▶';
    toast('Preview gak ketemu di iTunes buat "' + title + '" 😢');
    return;
  }
  resetPlayBtns();
  audio.src = hit.url;
  audio.play().catch(() => {});
  btn.textContent = '⏸';
  btn.classList.add('playing');
  currentPlayKey = key;
  npTitle.textContent = hit.name + ' — ' + hit.artist;
  nowPlaying.hidden = false;
}
audio.addEventListener('ended', () => { resetPlayBtns(); nowPlaying.hidden = true; currentPlayKey = null; });

document.addEventListener('click', (e) => {
  const btn = e.target.closest('.play-btn');
  if (btn) togglePreview(btn);
});
$('npStop').addEventListener('click', () => {
  audio.pause();
  resetPlayBtns();
  nowPlaying.hidden = true;
  currentPlayKey = null;
});

/* toast kecil */
let toastEl = null, toastTimer = null;
function toast(msg) {
  if (!toastEl) {
    toastEl = document.createElement('div');
    toastEl.className = 'mk-toast';
    document.body.appendChild(toastEl);
  }
  toastEl.textContent = msg;
  toastEl.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toastEl.classList.remove('show'), 2800);
}

/* ============ SURPRISE ME ============ */
$('surpriseBtn').addEventListener('click', () => {
  const random = SIFAT[Math.floor(Math.random() * SIFAT.length)];
  selectedSifat = random.id;
  renderSifat();
  showSifatResult(random.id);
  toast('🎲 Kamu dapet: ' + random.icon + ' ' + random.name + '!');
});

/* ============ SHARE CARD KE WHATSAPP ============ */
function renderCardCanvas(st) {
  const W = 600, H = 750;
  const cv = document.createElement('canvas');
  cv.width = W; cv.height = H;
  const ctx = cv.getContext('2d');
  const g = ctx.createLinearGradient(0, 0, W, H);
  const colors = st.grad.match(/#[0-9a-fA-F]{6}/g) || ['#FF2E88', '#7A4DFF'];
  g.addColorStop(0, colors[0]);
  g.addColorStop(1, colors[colors.length - 1]);
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, W, H);

  /* motif */
  drawMotif(ctx, W, H, st.motif || 'none');

  ctx.fillStyle = 'rgba(255,255,255,.16)';
  ctx.beginPath(); ctx.arc(W * .85, H * .06, 170, 0, Math.PI * 2); ctx.fill();
  ctx.textAlign = 'center';
  const vibeLabel = SIFAT.find(s => s.id === st.vibe);
  ctx.font = '700 22px Poppins, sans-serif';
  ctx.fillStyle = 'rgba(255,255,255,.92)';
  ctx.fillText('♪ MUSICKLE MATCH', W / 2, 76);
  ctx.font = '120px serif';
  ctx.fillText(st.icon || '🎧', W / 2, 250);
  ctx.fillStyle = '#fff';
  ctx.font = '600 34px Poppins, sans-serif';
  ctx.fillText('Lagu ini kamu banget.', W / 2, 330);
  ctx.fillStyle = 'rgba(255,255,255,.9)';
  ctx.fillRect(W * .12, 372, W * .76, 4);

  /* font judul sesuai pilihan */
  const fontMap = { anton: "'Anton'", bungee: "'Bungee'", archivo: "'Archivo Black'", caveat: "'Caveat'", monoton: "'Monoton'" };
  const fam = fontMap[st.font] || "'Anton'";
  ctx.fillStyle = '#fff';
  ctx.font = `700 46px ${fam}, sans-serif`;
  const songY = wrapText(ctx, st.song || 'Judul Lagu', W / 2, 440, W * .8, 58);
  ctx.fillStyle = 'rgba(255,255,255,.85)';
  ctx.font = '500 26px Poppins, sans-serif';
  ctx.fillText(st.artist || 'Penyanyi', W / 2, Math.max(545, songY + 70));
  const bottomBase = Math.max(545, songY + 70) + 55;
  if (vibeLabel) {
    ctx.fillStyle = 'rgba(255,255,255,.9)';
    ctx.font = '600 24px Poppins, sans-serif';
    ctx.fillText(vibeLabel.icon + ' ' + vibeLabel.name.toUpperCase(), W / 2, bottomBase);
  }
  ctx.fillStyle = 'rgba(255,255,255,.65)';
  ctx.font = '500 20px Poppins, sans-serif';
  ctx.fillText('dibuat oleh ' + (st.name || 'kamu') + ' · musikle', W / 2, bottomBase + 90);

  /* frame */
  drawFrame(ctx, W, H, st.frame || 'none');
  return cv;
}

function drawMotif(ctx, W, H, motif) {
  ctx.save();
  ctx.globalAlpha = 0.55;
  ctx.strokeStyle = 'rgba(255,255,255,.35)';
  ctx.fillStyle = 'rgba(255,255,255,.30)';
  const cx = W / 2, cy = H * .42;
  switch (motif) {
    case 'groove':
      for (let y = 0; y < H; y += 12) { ctx.fillRect(0, y, W, 2); }
      break;
    case 'vinyl':
      for (let r = 40; r < W; r += 22) { ctx.beginPath(); ctx.arc(cx, cy, r, 0, Math.PI * 2); ctx.stroke(); }
      break;
    case 'dots':
      ctx.fillStyle = 'rgba(255,255,255,.35)';
      for (let x = 14; x < W; x += 26) { for (let y = 14; y < H; y += 26) { ctx.beginPath(); ctx.arc(x, y, 2, 0, Math.PI * 2); ctx.fill(); } }
      break;
    case 'stripes':
      ctx.strokeStyle = 'rgba(255,255,255,.22)';
      for (let x = -H; x < W; x += 28) { ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x + H, H); ctx.stroke(); }
      break;
    case 'checker':
      const s = 60;
      for (let x = 0; x < W; x += s) { for (let y = 0; y < H; y += s) { if ((x / s + y / s) % 2 === 0) ctx.fillRect(x, y, s, s); } }
      break;
    case 'grid':
      ctx.strokeStyle = 'rgba(255,255,255,.16)';
      for (let x = 0; x < W; x += 44) { ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, H); ctx.stroke(); }
      for (let y = 0; y < H; y += 44) { ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke(); }
      break;
    case 'ring':
      for (let r = 30; r < 420; r += 34) { ctx.beginPath(); ctx.arc(W * .8, H * .18, r, 0, Math.PI * 2); ctx.stroke(); }
      break;
    case 'eq':
      ctx.fillStyle = 'rgba(255,255,255,.35)';
      const bw = 18, gap = 12, n = Math.floor(W / (bw + gap));
      for (let i = 0; i < n; i++) {
        const h = 40 + ((i * 53) % 180);
        ctx.fillRect(i * (bw + gap) + 10, H - h - 30, bw, h);
      }
      break;
    case 'zigzag':
      ctx.strokeStyle = 'rgba(255,255,255,.28)';
      ctx.lineWidth = 3;
      for (let y = -40; y < H; y += 90) {
        ctx.beginPath();
        for (let x = 0; x < W; x += 45) { const yy = y + (Math.floor(x / 45) % 2 === 0 ? 0 : 45); ctx.lineTo(x, yy); }
        ctx.stroke();
      }
      break;
    case 'star':
      ctx.fillStyle = 'rgba(255,255,255,.6)';
      for (let i = 0; i < 90; i++) {
        const x = (i * 137.5) % W, y = (i * 89.3) % H, r = 1 + (i % 3);
        ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2); ctx.fill();
      }
      break;
    case 'note':
      ctx.fillStyle = 'rgba(255,255,255,.4)';
      ctx.font = '46px serif';
      ['♪', '♫', '♩', '♬', '♭', '♮'].forEach((n, i) => { ctx.fillText(n, 30 + i * 95, 90 + (i % 2) * 40); ctx.fillText(n, 60 + i * 90, H - 60 - (i % 3) * 50); });
      break;
  }
  ctx.restore();
}

function drawFrame(ctx, W, H, frame) {
  ctx.save();
  ctx.strokeStyle = 'rgba(255,255,255,.9)';
  ctx.lineWidth = 5;
  switch (frame) {
    case 'double':
      ctx.strokeRect(24, 24, W - 48, H - 48);
      ctx.lineWidth = 2;
      ctx.strokeRect(44, 44, W - 88, H - 88);
      break;
    case 'neon':
      ctx.shadowColor = '#FF2E88';
      ctx.shadowBlur = 30;
      ctx.strokeRect(20, 20, W - 40, H - 40);
      ctx.shadowBlur = 0;
      ctx.lineWidth = 2;
      ctx.strokeRect(20, 20, W - 40, H - 40);
      break;
    case 'retro':
      ctx.setLineDash([16, 12]);
      ctx.strokeRect(30, 30, W - 60, H - 60);
      break;
    case 'corners':
      ctx.lineWidth = 6;
      const L = 64;
      const pts = [[30, 30, 1, 1], [W - 30, 30, -1, 1], [30, H - 30, 1, -1], [W - 30, H - 30, -1, -1]];
      pts.forEach(([x, y, dx, dy]) => {
        ctx.beginPath(); ctx.moveTo(x + dx * L, y); ctx.lineTo(x, y); ctx.lineTo(x, y + dy * L); ctx.stroke();
      });
      break;
  }
  ctx.restore();
}

function canvasToBlob(cv) {
  return new Promise((resolve) => cv.toBlob(resolve, 'image/png'));
}

$('shareCardBtn').addEventListener('click', async () => {
  const st = cardState();
  if (!st.song) { toast('Isi judul lagu dulu biar card-nya lengkap 🎵'); return; }
  const text = '♪ MUSICKLE MATCH — lagu ini aku banget! 🎵\n\n'
    + '🎵 Lagu: ' + (st.song || '-') + '\n'
    + '🧑‍🎤 Penyanyi: ' + (st.artist || '-') + '\n'
    + (st.vibe ? '✨ Vibe: ' + (SIFAT.find(s => s.id === st.vibe)?.name || st.vibe) + '\n' : '')
    + (st.quote ? '💬 "' + st.quote + '"\n' : '')
    + '— dibuat dengan MUSICKLE 🎧';
  try {
    const blob = await canvasToBlob(renderCardCanvas(st));
    const file = new File([blob], 'musickle-card.png', { type: 'image/png' });
    if (navigator.canShare && navigator.canShare({ files: [file] })) {
      await navigator.share({ files: [file], text, title: 'Musickle Card' });
      return;
    }
  } catch (e) { /* fallback ke WA */ }
  window.open('https://wa.me/?text=' + encodeURIComponent(text), '_blank');
});

/* init gallery */
try { cards = JSON.parse(localStorage.getItem(LS_CARDS)) || []; } catch (e) { cards = []; }
renderGallery();

/* ============ PRELOADER ============ */
(function () {
  const pre = $('preloader');
  const bar = $('preBar');
  if (!pre) { document.body.classList.add('ready'); return; }
  let p = 0;
  const iv = setInterval(() => {
    p += Math.random() * 22 + 8;
    if (p >= 100) {
      p = 100;
      clearInterval(iv);
      bar.style.width = '100%';
      setTimeout(() => {
        pre.classList.add('done');
        document.body.classList.add('ready');
        setTimeout(() => pre.remove(), 700);
      }, 260);
    } else {
      bar.style.width = p + '%';
    }
  }, 130);
})();

/* ============ CUSTOM CURSOR ============ */
(function () {
  if (window.matchMedia('(pointer: coarse)').matches) return;
  const dot = $('cursorDot');
  const ring = $('cursorRing');
  if (!dot || !ring) return;
  let mx = -100, my = -100, rx = -100, ry = -100;
  document.addEventListener('mousemove', (e) => {
    mx = e.clientX; my = e.clientY;
    dot.style.left = mx + 'px';
    dot.style.top = my + 'px';
    const t = e.target.closest('a,button,.sifat-card,.artist-card,.play-btn,.grad-opt,.icon-opt,.trend-item,.energy-song,input,select');
    ring.classList.toggle('hovering', !!t);
  });
  (function loop() {
    rx += (mx - rx) * 0.16;
    ry += (my - ry) * 0.16;
    ring.style.left = rx + 'px';
    ring.style.top = ry + 'px';
    requestAnimationFrame(loop);
  })();
  document.addEventListener('mouseleave', () => { ring.style.opacity = 0; dot.style.opacity = 0; });
  document.addEventListener('mouseenter', () => { ring.style.opacity = 1; dot.style.opacity = 1; });
})();

/* ============ SCROLL PROGRESS ============ */
(function () {
  const bar = $('scrollProgress');
  if (!bar) return;
  const update = () => {
    const h = document.documentElement;
    const max = h.scrollHeight - h.clientHeight;
    bar.style.width = (max > 0 ? (h.scrollTop / max) * 100 : 0) + '%';
  };
  window.addEventListener('scroll', update, { passive: true });
  update();
})();

/* ============ HORIZONTAL PROCESS SCROLL ============ */
(function () {
  const section = document.querySelector('.process-section');
  const track = $('processTrack');
  const pBar = $('processBar');
  if (!section || !track) return;
  const isMobile = () => window.innerWidth <= 860;

  function setSectionHeight() {
    if (isMobile()) { section.style.height = 'auto'; return; }
    section.style.height = track.scrollWidth + 'px';
  }
  function updateProcess() {
    if (isMobile()) { track.style.transform = ''; return; }
    const rect = section.getBoundingClientRect();
    const range = section.offsetHeight - window.innerHeight;
    const progress = range > 0 ? Math.min(1, Math.max(0, -rect.top / range)) : 0;
    const maxX = track.scrollWidth - window.innerWidth;
    track.style.transform = 'translateX(' + (-maxX * progress) + 'px)';
    if (pBar) pBar.style.width = (progress * 100) + '%';
  }
  setSectionHeight();
  window.addEventListener('scroll', updateProcess, { passive: true });
  window.addEventListener('resize', () => { setSectionHeight(); updateProcess(); });
  updateProcess();
})();

/* ============ 3D TILT MATCH CARD ============ */
(function () {
  if (window.matchMedia('(pointer: coarse)').matches) return;
  const card = $('matchCard');
  if (!card) return;
  card.classList.add('tilt');
  const glow = document.createElement('div');
  glow.className = 'mc-glow';
  card.appendChild(glow);
  const MAX = 9;
  card.addEventListener('mousemove', (e) => {
    const r = card.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    const rx = (0.5 - py) * MAX;
    const ry = (px - 0.5) * MAX;
    card.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) scale(1.02)`;
    glow.style.setProperty('--gx', (px * 100) + '%');
    glow.style.setProperty('--gy', (py * 100) + '%');
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = 'perspective(900px) rotateX(0deg) rotateY(0deg) scale(1)';
  });
})();
