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
  { name:'The Weeknd', genre:'R&B / Synth', tags:['dramatis','malam','ikonik'], top:'Blinding Lights', grad:'linear-gradient(135deg,#6E96CC,#E8925A)' },
  { name:'Taylor Swift', genre:'Pop / Country', tags:['storytelling','emosional','pop'], top:'Cruel Summer', grad:'linear-gradient(135deg,#E3B25F,#E8925A)' },
  { name:'Bad Bunny', genre:'Latin / Reggaeton', tags:['reggaeton','latin','vibe'], top:'DÁKITI', grad:'linear-gradient(135deg,#D97A45,#7FA8DC)' },
  { name:'Billie Eilish', genre:'Alt Pop', tags:['whisper','misterius','melankolis'], top:'BIRDS OF A FEATHER', grad:'linear-gradient(135deg,#232A3C,#8FB0E0)' },
  { name:'Drake', genre:'Hip-hop / R&B', tags:['rap','smooth','ikonik'], top:'One Dance', grad:'linear-gradient(135deg,#6E96CC,#7FC4B2)' },
  { name:'Ed Sheeran', genre:'Pop / Akustik', tags:['akustik','romantis','hangat'], top:'Shape of You', grad:'linear-gradient(135deg,#E3B25F,#C9DBF2)' },
  { name:'Ariana Grande', genre:'Pop / R&B', tags:['high notes','power','pop'], top:'7 rings', grad:'linear-gradient(135deg,#8FB0E0,#F2C6B8)' },
  { name:'Bruno Mars', genre:'Pop / Funk', tags:['funk','retro','energik'], top:'Locked out of Heaven', grad:'linear-gradient(135deg,#D97A45,#E3B25F)' },
  { name:'Post Malone', genre:'Hip-hop / Pop', tags:['moody','rap-pop','chill'], top:'Sunflower', grad:'linear-gradient(135deg,#7FC4B2,#A5C8E8)' },
  { name:'Eminem', genre:'Hip-hop', tags:['rap','lirik','gaspol'], top:'Without Me', grad:'linear-gradient(135deg,#232A3C,#6E96CC)' },
  { name:'Justin Bieber', genre:'Pop / R&B', tags:['catchy','hangat','pop'], top:'Love Yourself', grad:'linear-gradient(135deg,#C9DBF2,#E3B25F)' },
  { name:'Rihanna', genre:'R&B / Pop', tags:['ikonik','vibe','r&b'], top:'Umbrella', grad:'linear-gradient(135deg,#E8925A,#F2C6B8)' },
  { name:'Coldplay', genre:'Alt Rock', tags:['emosional','megah','hopeful'], top:'Yellow', grad:'linear-gradient(135deg,#5F86BC,#C9DBF2)' },
  { name:'Maroon 5', genre:'Pop / Rock', tags:['funk-rock','catchy','pop'], top:'Payphone', grad:'linear-gradient(135deg,#7FA8DC,#B7C98C)' },
  { name:'Lady Gaga', genre:'Pop / Dance', tags:['powerful','dramatis','pop'], top:'Die With A Smile', grad:'linear-gradient(135deg,#E8925A,#D9776B)' },
  { name:'Calvin Harris', genre:'EDM / Dance', tags:['edm','dance','party'], top:'One Kiss', grad:'linear-gradient(135deg,#A5C8E8,#7FC4B2)' },
];

const TRENDING = [
  { song:'Blinding Lights', artist:'The Weeknd', daily:1576932, mood:63 },
  { song:'Shape of You', artist:'Ed Sheeran', daily:1410416, mood:57 },
  { song:'Sweater Weather', artist:'The Neighbourhood', daily:2217648, mood:89 },
  { song:'Starboy', artist:'The Weeknd', daily:1930202, mood:77 },
  { song:'As It Was', artist:'Harry Styles', daily:1847475, mood:74 },
  { song:'Someone You Loved', artist:'Lewis Capaldi', daily:882924, mood:35 },
  { song:'One Dance', artist:'Drake', daily:1929395, mood:77 },
  { song:'Sunflower', artist:'Post Malone', daily:2497026, mood:100 },
  { song:'Perfect', artist:'Ed Sheeran', daily:1256982, mood:50 },
  { song:'STAY', artist:'The Kid LAROI', daily:1203957, mood:48 },
  { song:'I Wanna Be Yours', artist:'Arctic Monkeys', daily:1734193, mood:69 },
  { song:'Believer', artist:'Imagine Dragons', daily:980382, mood:39 },
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
  { id:'pink-plum', css:'linear-gradient(135deg,#E8925A,#8FB0E0)' },
  { id:'yellow-pink', css:'linear-gradient(135deg,#E3B25F,#E8925A)' },
  { id:'blue-mint', css:'linear-gradient(135deg,#6E96CC,#7FC4B2)' },
  { id:'plum-blue', css:'linear-gradient(135deg,#8FB0E0,#6E96CC)' },
  { id:'red-orange', css:'linear-gradient(135deg,#D9776B,#D97A45)' },
  { id:'midnight-plum', css:'linear-gradient(135deg,#223047,#8FB0E0)' },
  { id:'sunset', css:'linear-gradient(135deg,#D97A45,#E8925A)' },
  { id:'lime-mint', css:'linear-gradient(135deg,#B7C98C,#7FC4B2)' },
  { id:'sky-ocean', css:'linear-gradient(135deg,#A5C8E8,#6E96CC)' },
  { id:'candy', css:'linear-gradient(135deg,#E8925A,#D97A45)' },
  { id:'deep-violet', css:'linear-gradient(135deg,#2C3F5E,#8FB0E0)' },
  { id:'neon-night', css:'linear-gradient(135deg,#1B1E2A,#E8925A)' },
  { id:'berry', css:'linear-gradient(135deg,#B45F3A,#8FB0E0)' },
  { id:'tropic', css:'linear-gradient(135deg,#7FC4B2,#A5C8E8)' },
  { id:'ember', css:'linear-gradient(135deg,#D9776B,#E3B25F)' },
  { id:'aurora', css:'linear-gradient(135deg,#B7C98C,#6E96CC)' },
  { id:'lavender-soft', css:'linear-gradient(135deg,#C9DBF2,#8FB0E0)' },
  { id:'rose-lavender', css:'linear-gradient(135deg,#F2C6B8,#C9DBF2)' },
  { id:'peach-soft', css:'linear-gradient(135deg,#F5D9B0,#F2C6B8)' },
  { id:'mint-lavender', css:'linear-gradient(135deg,#CFE8DC,#C9DBF2)' },
  { id:'sky-lavender', css:'linear-gradient(135deg,#C3E0F2,#C9DBF2)' },
  { id:'pastel-pop', css:'linear-gradient(135deg,#F5DFAE,#C3E0F2)' },
  { id:'soft-ember', css:'linear-gradient(135deg,#F0CBB0,#EFC4C2)' },
  { id:'honey-lavender', css:'linear-gradient(135deg,#F7E6B8,#C9DBF2)' },
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
  { id:'bubble', label:'Gelembung' },
  { id:'confetti', label:'Konfeti' },
  { id:'heart', label:'Hati' },
  { id:'wave', label:'Ombak' },
  { id:'rays', label:'Sinar' },
  { id:'ticket', label:'Tiket' },
  { id:'lightning', label:'Petir' },
  { id:'marble', label:'Marmer' },
];
const FRAMES = [
  { id:'none', label:'Tanpa' },
  { id:'double', label:'Double' },
  { id:'neon', label:'Neon' },
  { id:'retro', label:'Retro' },
  { id:'corners', label:'Kurung' },
  { id:'bold', label:'Tebal' },
  { id:'golden', label:'Emas' },
  { id:'sticker', label:'Stiker' },
];
const FONTS = [
  { id:'anton', label:'Anton' },
  { id:'bungee', label:'Bungee' },
  { id:'archivo', label:'Archivo' },
  { id:'caveat', label:'Caveat' },
  { id:'monoton', label:'Monoton' },
  { id:'fredoka', label:'Fredoka' },
  { id:'lobster', label:'Lobster' },
  { id:'righteous', label:'Righteous' },
  { id:'spaceg', label:'Space G.' },
];
const POSITIONS = [
  { id:'center', label:'Tengah' },
  { id:'top', label:'Atas' },
  { id:'bottom', label:'Bawah' },
];

/* ============ HELPERS ============ */
const $ = (id) => document.getElementById(id);
const esc = (s) => String(s ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));

/* ============ NAV MOBILE ============ */
$('burger').addEventListener('click', () => $('mobileMenu').classList.toggle('open'));
document.querySelectorAll('#mobileMenu a').forEach(a => a.addEventListener('click', () => $('mobileMenu').classList.remove('open')));

/* ============ SCROLL REVEAL (dinamis — scan ulang saat render baru) ============ */
function scanReveals() {
  document.querySelectorAll('[data-reveal]:not(.in-view)').forEach(el => {
    if (!('IntersectionObserver' in window)) { el.classList.add('in-view'); return; }
    const r = el.getBoundingClientRect();
    // sudah lewat/masuk viewport (mis. kena scroll cepat) -> langsung tampil
    if (r.top < window.innerHeight - 40) el.classList.add('in-view');
    else ro.observe(el);
  });
}
const ro = new IntersectionObserver((entries) => {
  entries.forEach(en => { if (en.isIntersecting) { en.target.classList.add('in-view'); ro.unobserve(en.target); } });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
scanReveals();
let revealTicking = false;
window.addEventListener('scroll', () => {
  if (revealTicking) return;
  revealTicking = true;
  requestAnimationFrame(() => { scanReveals(); revealTicking = false; });
}, { passive: true });
if ('MutationObserver' in window && 'IntersectionObserver' in window) {
  new MutationObserver(scanReveals).observe(document.body, { childList: true, subtree: true });
} else if (!('IntersectionObserver' in window)) {
  setInterval(() => document.querySelectorAll('[data-reveal]').forEach(el => el.classList.add('in-view')), 400);
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
const fmtDaily = (n) => (n >= 1e6 ? (n / 1e6).toFixed(1).replace('.', ',') + 'M' : Math.round(n / 1e3) + 'K');
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
    <span class="trend-daily">${fmtDaily(t.daily)}<small>/hari</small></span>
    <button class="t-add" data-add-play="${esc(t.song)}" data-add-artist="${esc(t.artist)}" title="Tambah ke playlist">+</button>
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
let currentPos = 'center';
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
    pos: currentPos,
  };
}
function applyCardClasses(el, st) {
  el.classList.remove('motif-none', 'motif-groove', 'motif-vinyl', 'motif-dots', 'motif-stripes', 'motif-checker', 'motif-grid', 'motif-ring', 'motif-eq', 'motif-zigzag', 'motif-star', 'motif-note', 'motif-bubble', 'motif-confetti', 'motif-heart', 'motif-wave', 'motif-rays', 'motif-ticket', 'motif-lightning', 'motif-marble');
  el.classList.remove('frame-none', 'frame-double', 'frame-neon', 'frame-retro', 'frame-corners', 'frame-bold', 'frame-golden', 'frame-sticker');
  el.classList.remove('font-anton', 'font-bungee', 'font-archivo', 'font-caveat', 'font-monoton', 'font-fredoka', 'font-lobster', 'font-righteous', 'font-spaceg');
  el.classList.remove('pos-center', 'pos-top', 'pos-bottom');
  el.classList.add('motif-' + (st.motif || 'none'));
  el.classList.add('frame-' + (st.frame || 'none'));
  el.classList.add('font-' + (st.font || 'anton'));
  el.classList.add('pos-' + (st.pos || 'center'));
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

/* posisi picker */
$('posPicker').innerHTML = POSITIONS.map(p => `
  <div class="pos-opt ${p.id === currentPos ? 'active' : ''}" data-pos="${p.id}">
    <span class="po-swatch"></span>${p.label}
  </div>`).join('');
$('posPicker').addEventListener('click', (e) => {
  const opt = e.target.closest('.pos-opt');
  if (!opt) return;
  currentPos = opt.dataset.pos;
  document.querySelectorAll('.pos-opt').forEach(o => o.classList.toggle('active', o === opt));
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
      <div class="match-card motif-${c.motif || 'none'} frame-${c.frame || 'none'} font-${c.font || 'anton'} pos-${c.pos || 'center'}" style="background:${c.grad}">
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
    currentMotif = c.motif || 'none'; currentFrame = c.frame || 'none'; currentFont = c.font || 'anton'; currentPos = c.pos || 'center';
    document.querySelectorAll('.grad-opt').forEach(o => o.classList.toggle('active', o.style.background === c.grad || o.dataset.grad === GRADIENTS.find(g => g.css === c.grad)?.id));
    document.querySelectorAll('.icon-opt').forEach(o => o.classList.toggle('active', o.dataset.icon === c.icon));
    document.querySelectorAll('.motif-opt').forEach(o => o.classList.toggle('active', o.dataset.motif === currentMotif));
    document.querySelectorAll('.frame-opt').forEach(o => o.classList.toggle('active', o.dataset.frame === currentFrame));
    document.querySelectorAll('.font-opt').forEach(o => o.classList.toggle('active', o.dataset.font === currentFont));
    document.querySelectorAll('.pos-opt').forEach(o => o.classList.toggle('active', o.dataset.pos === currentPos));
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

/* ============ PLAYER ENGINE (Spotify-style) ============ */
const audio = new Audio();
let currentPlayKey = null;
const previewCache = {};
const nowPlaying = $('nowPlaying');
const npTitle = $('npTitle');
const npCover = $('npCover');
const npPlay = $('npPlay');
const npPrev = $('npPrev');
const npNext = $('npNext');
const npShuffle = $('npShuffle');
const npRepeat = $('npRepeat');
const npProgBar = $('npProgBar');
const npProgFill = $('npProgFill');
const npTime = $('npTime');

const player = { queue: [], seq: [], seqPos: -1, shuffle: false, repeat: 'off', plId: null };

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

function fmtTime(s) {
  if (!isFinite(s)) return '0:00';
  const m = Math.floor(s / 60), ss = Math.floor(s % 60);
  return m + ':' + String(ss).padStart(2, '0');
}

function shuffleArray(a) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function updateMediaSession(t) {
  if (!('mediaSession' in navigator)) return;
  try {
    navigator.mediaSession.metadata = new MediaMetadata({
      title: t.title,
      artist: t.artist,
      album: 'MUSICKLE',
      artwork: t.cover ? [{ src: t.cover, sizes: '512x512' }] : [],
    });
    navigator.mediaSession.playbackState = 'playing';
  } catch (e) { /* noop */ }
}

function setPlayingUI() {
  npPlay.textContent = audio.paused ? '▶' : '⏸';
  document.querySelectorAll('.pl-track').forEach(el => {
    const btn = el.querySelector('.pl-play');
    const i = btn ? +btn.dataset.plPlay : -1;
    const playing = player.plId === activePlId && player.seq[player.seqPos] === i && !audio.paused;
    el.classList.toggle('playing', playing);
    if (btn) btn.textContent = playing ? '⏸' : '▶';
  });
}

async function loadTrack(pos) {
  const t = player.queue[pos];
  if (!t) return;
  if (!t.url) {
    // lagu template tanpa URL — cari preview dulu (lazy)
    npTitle.textContent = t.title + ' — ' + t.artist;
    nowPlaying.hidden = false;
    npPlay.textContent = '…';
    const hit = await findPreview(t.title, t.artist);
    if (!hit) {
      npPlay.textContent = '▶';
      nowPlaying.hidden = true;
      toast('Preview gak ketemu buat "' + t.title + '" 😢');
      nextTrack();
      return;
    }
    t.url = hit.url;
  }
  player.seqPos = pos;
  audio.src = t.url;
  audio.play().catch(() => {});
  npTitle.textContent = t.title + ' — ' + t.artist;
  npCover.src = t.cover || '';
  npCover.style.visibility = t.cover ? 'visible' : 'hidden';
  nowPlaying.hidden = false;
  currentPlayKey = 'q|' + pos;
  updateMediaSession(t);
  setPlayingUI();
}

function playQueue(tracks, startIdx, plId) {
  player.queue = tracks.map(t => ({ title: t.title, artist: t.artist, url: t.url, cover: t.cover || '' }));
  player.plId = plId || null;
  player.seq = player.queue.map((_, i) => i);
  if (player.shuffle) shuffleArray(player.seq);
  loadTrack(Math.max(0, player.seq.indexOf(startIdx)));
}

function nextTrack() {
  if (!player.queue.length) return;
  if (player.repeat === 'one') { audio.currentTime = 0; audio.play().catch(() => {}); return; }
  if (player.seqPos < player.seq.length - 1) loadTrack(player.seqPos + 1);
  else if (player.repeat === 'all') loadTrack(0);
  else { audio.pause(); audio.currentTime = 0; setPlayingUI(); }
}

function prevTrack() {
  if (!player.queue.length) return;
  if (audio.currentTime > 3) { audio.currentTime = 0; return; }
  loadTrack(player.seqPos > 0 ? player.seqPos - 1 : 0);
}

audio.addEventListener('ended', nextTrack);
audio.addEventListener('play', setPlayingUI);
audio.addEventListener('pause', setPlayingUI);
audio.addEventListener('timeupdate', () => {
  if (!audio.duration) return;
  npProgFill.style.width = (audio.currentTime / audio.duration * 100) + '%';
  npTime.textContent = fmtTime(audio.currentTime) + ' / ' + fmtTime(audio.duration);
});
npProgBar.addEventListener('click', (e) => {
  const r = npProgBar.getBoundingClientRect();
  const pct = (e.clientX - r.left) / r.width;
  if (audio.duration) audio.currentTime = pct * audio.duration;
});
npPlay.addEventListener('click', () => { if (audio.paused) audio.play().catch(() => {}); else audio.pause(); });
npNext.addEventListener('click', nextTrack);
npPrev.addEventListener('click', prevTrack);
npShuffle.addEventListener('click', () => {
  player.shuffle = !player.shuffle;
  npShuffle.classList.toggle('on', player.shuffle);
  const cur = player.queue[player.seq[player.seqPos]];
  if (!cur) return;
  player.seq = player.queue.map((_, i) => i);
  if (player.shuffle) {
    const rest = player.seq.filter(i => player.queue[i] !== cur);
    shuffleArray(rest);
    player.seq = [player.queue.indexOf(cur), ...rest];
  }
  player.seqPos = 0;
});
npRepeat.addEventListener('click', () => {
  player.repeat = player.repeat === 'off' ? 'all' : player.repeat === 'all' ? 'one' : 'off';
  npRepeat.classList.toggle('on', player.repeat !== 'off');
  npRepeat.title = 'Ulangi (' + (player.repeat === 'off' ? 'off' : player.repeat === 'all' ? 'semua' : 'satu') + ')';
});
if ('mediaSession' in navigator) {
  navigator.mediaSession.setActionHandler('play', () => audio.play().catch(() => {}));
  navigator.mediaSession.setActionHandler('pause', () => audio.pause());
  navigator.mediaSession.setActionHandler('previoustrack', prevTrack);
  navigator.mediaSession.setActionHandler('nexttrack', nextTrack);
  navigator.mediaSession.setActionHandler('seekto', (d) => { if (d.seekTime != null) audio.currentTime = d.seekTime; });
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
  player.queue = [{ title: hit.name, artist: hit.artist, url: hit.url, cover: '' }];
  player.plId = null;
  player.seq = [0];
  loadTrack(0);
  bumpLiked({ title: hit.name, artist: hit.artist, url: hit.url, cover: '' });
  resetPlayBtns();
  btn.textContent = '⏸';
  btn.classList.add('playing');
}

/* ============ 06 — CARI LAGU (iTunes Search API) ============ */
const searchForm = $('searchForm');
const searchInput = $('searchInput');
const searchMeta = $('searchMeta');
const searchResults = $('searchResults');

function playDirect(url, name, artist) {
  audio.pause();
  resetPlayBtns();
  audio.src = url;
  audio.play().catch(() => {});
  currentPlayKey = 'direct|' + name + '|' + artist;
  npTitle.textContent = name + ' — ' + artist;
  nowPlaying.hidden = false;
  bumpLiked({ title: name, artist, url, cover: '' });
  document.querySelectorAll('.s-item-play').forEach(b => {
    const on = b.dataset.url === url;
    b.textContent = on ? '⏸' : '▶';
    b.classList.toggle('playing', on);
  });
}

async function runSearch(q) {
  const term = q.trim();
  if (!term) return;
  $('searchSuggest').hidden = true;
  searchMeta.textContent = 'Nyari "' + term + '"… 🔍';
  searchResults.innerHTML = '<div class="search-empty">Lagi nyari di jutaan lagu…</div>';
  try {
    const res = await fetch('https://itunes.apple.com/search?term=' + encodeURIComponent(term)
      + '&media=music&entity=song&limit=12&country=ID');
    const data = await res.json();
    const hits = (data.results || []).filter(r => r.previewUrl);
    if (!hits.length) {
      searchMeta.textContent = '';
      searchResults.innerHTML = '<div class="search-empty">Gak ketemu buat "' + esc(term) + '" 😢 Coba judul atau artis lain, ya.</div>';
      return;
    }
    searchMeta.textContent = hits.length + ' hasil buat "' + esc(term) + '"';
    searchResults.innerHTML = hits.map((r, i) => `
      <div class="search-item" data-reveal style="--stagger:${i % 4}">
        <img class="s-cover" src="${esc(r.artworkUrl60)}" alt="" loading="lazy" onerror="this.style.visibility='hidden'">
        <div class="s-info">
          <div class="s-song">${esc(r.trackName)}</div>
          <div class="s-artist">${esc(r.artistName)}${r.collectionName ? ' · ' + esc(r.collectionName) : ''}</div>
        </div>
        <div class="s-actions">
          <button class="play-btn s-item-play" data-url="${esc(r.previewUrl)}" data-name="${esc(r.trackName)}" data-artist="${esc(r.artistName)}" title="Preview 30 detik">▶</button>
          <button class="s-use" data-song="${esc(r.trackName)}" data-artist="${esc(r.artistName)}" title="Pakai di card">+Card</button>
          <button class="s-use s-pl" data-pl-song="${esc(r.trackName)}" data-pl-artist="${esc(r.artistName)}" data-pl-url="${esc(r.previewUrl)}" data-pl-cover="${esc(r.artworkUrl100 || '')}" title="Tambah ke playlist">+Pl</button>
        </div>
      </div>`).join('');
    scanReveals();
  } catch (e) {
    searchMeta.textContent = '';
    searchResults.innerHTML = '<div class="search-empty">Gagal nyari 😢 Cek koneksi internet & coba lagi.</div>';
  }
}

searchForm.addEventListener('submit', (e) => { e.preventDefault(); runSearch(searchInput.value); });
searchInput.addEventListener('input', () => {
  if (!searchInput.value.trim()) {
    $('searchSuggest').hidden = false;
    searchResults.innerHTML = '';
    searchMeta.textContent = '';
  }
});
searchResults.addEventListener('click', (e) => {
  const play = e.target.closest('.s-item-play');
  if (play) {
    if (play.classList.contains('playing')) {
      audio.pause();
      resetPlayBtns();
      nowPlaying.hidden = true;
      currentPlayKey = null;
      play.textContent = '▶';
      play.classList.remove('playing');
      return;
    }
    playDirect(play.dataset.url, play.dataset.name, play.dataset.artist);
    return;
  }
  const addPl = e.target.closest('.s-pl');
  if (addPl) {
    openPlPick({
      title: addPl.dataset.plSong,
      artist: addPl.dataset.plArtist,
      url: addPl.dataset.plUrl,
      cover: addPl.dataset.plCover,
    });
    return;
  }
  const use = e.target.closest('.s-use');
  if (use) {
    $('cfSong').value = use.dataset.song;
    $('cfArtist').value = use.dataset.artist;
    fillCard(cardState());
    toast('Lagu "' + use.dataset.song + '" masuk ke card kamu 🎴');
    document.getElementById('card').scrollIntoView({ behavior: 'smooth' });
  }
});

document.addEventListener('click', (e) => {
  const addT = e.target.closest('.t-add');
  if (addT) {
    const title = addT.dataset.addPlay, artist = addT.dataset.addArtist;
    findPreview(title, artist).then(hit => {
      if (!hit) { toast('Gak ketemu preview buat "' + title + '" 😢'); return; }
      openPlPick({ title: hit.name, artist: hit.artist, url: hit.url, cover: '' });
    });
    return;
  }
  const btn = e.target.closest('.play-btn');
  if (btn && !btn.classList.contains('s-item-play')) togglePreview(btn);
});
$('npStop').addEventListener('click', () => {
  audio.pause();
  audio.currentTime = 0;
  resetPlayBtns();
  nowPlaying.hidden = true;
  currentPlayKey = null;
  player.queue = [];
  player.seq = [];
  player.seqPos = -1;
  player.plId = null;
  setPlayingUI();
});

/* ============ 07 — PLAYLIST ============ */
const LS_PLAYLISTS = 'musickle_playlists_v1';
const PL_TEMPLATES = [
  { name: 'Chill Vibes', emoji: '🌙', tracks: [
    { title: 'Sweater Weather', artist: 'The Neighbourhood' },
    { title: 'Someone You Loved', artist: 'Lewis Capaldi' },
    { title: 'Perfect', artist: 'Ed Sheeran' },
    { title: 'I Wanna Be Yours', artist: 'Arctic Monkeys' },
  ]},
  { name: 'Gaspol', emoji: '🔥', tracks: [
    { title: 'Believer', artist: 'Imagine Dragons' },
    { title: 'Starboy', artist: 'The Weeknd' },
    { title: 'One Dance', artist: 'Drake' },
    { title: 'Sunflower', artist: 'Post Malone' },
  ]},
  { name: 'Galau Malam', emoji: '🌧️', tracks: [
    { title: 'Someone You Loved', artist: 'Lewis Capaldi' },
    { title: 'As It Was', artist: 'Harry Styles' },
    { title: 'Blinding Lights', artist: 'The Weeknd' },
    { title: 'Perfect', artist: 'Ed Sheeran' },
  ]},
  { name: 'Legends', emoji: '🏆', tracks: [
    { title: 'Blinding Lights', artist: 'The Weeknd' },
    { title: 'Shape of You', artist: 'Ed Sheeran' },
    { title: 'One Dance', artist: 'Drake' },
    { title: 'Sunflower', artist: 'Post Malone' },
  ]},
];
let playlists = [];
let activePlId = null;
function loadPlaylists() {
  try { playlists = JSON.parse(localStorage.getItem(LS_PLAYLISTS)) || []; }
  catch (e) { playlists = []; }
  if (!playlists.length) {
    playlists = [{ id: 'pl-' + Date.now(), name: 'Favorit', emoji: '💛', tracks: [] }];
  }
  if (!localStorage.getItem('musickle_pl_seeded')) {
    PL_TEMPLATES.forEach((tpl, i) => {
      if (!playlists.some(p => p.name === tpl.name)) {
        playlists.push({
          id: 'pl-tpl-' + i + '-' + Date.now(),
          name: tpl.name, emoji: tpl.emoji,
          tracks: tpl.tracks.map(t => ({ title: t.title, artist: t.artist, url: '', cover: '' })),
        });
      }
    });
    localStorage.setItem('musickle_pl_seeded', '1');
  }
  savePlaylists();
  if (!playlists.find(p => p.id === activePlId)) activePlId = playlists[0].id;
}
function savePlaylists() { localStorage.setItem(LS_PLAYLISTS, JSON.stringify(playlists)); }
function getActivePl() { return playlists.find(p => p.id === activePlId); }
function addToPlaylist(track, plId) {
  const pl = playlists.find(p => p.id === (plId || activePlId));
  if (!pl || !track || !track.url) return false;
  if (pl.tracks.some(t => t.url === track.url)) return false;
  pl.tracks.push({ title: track.title, artist: track.artist, url: track.url, cover: track.cover || '' });
  savePlaylists();
  renderPlaylists();
  return true;
}
function renderPlaylists() {
  $('plList').innerHTML = playlists.map(p => `
    <button class="pl-item ${p.id === activePlId ? 'active' : ''}" data-pl="${p.id}">
      <span class="pl-ic">${p.emoji || '🎵'}</span>
      <span class="pl-meta"><b>${esc(p.name)}</b><span>${p.tracks.length} lagu</span></span>
      <span class="pl-del" data-pl-del="${p.id}" title="Hapus playlist">✕</span>
    </button>`).join('');
  renderPlaylistTracks();
}
function renderPlaylistTracks() {
  const pl = getActivePl();
  if (!pl) return;
  $('plTitle').textContent = pl.name;
  $('plEmpty').hidden = pl.tracks.length > 0;
  $('plTracks').innerHTML = pl.tracks.map((t, i) => `
    <div class="pl-track">
      <img class="s-cover" src="${esc(t.cover || '')}" alt="" loading="lazy" onerror="this.style.visibility='hidden'">
      <div class="s-info">
        <div class="s-song">${esc(t.title)}</div>
        <div class="s-artist">${esc(t.artist)}</div>
      </div>
      <button class="pl-play" data-pl-play="${i}" title="Putar">▶</button>
      <button class="pl-del" data-pl-del-track="${i}" title="Hapus dari playlist">✕</button>
    </div>`).join('');
}
$('plList').addEventListener('click', (e) => {
  const del = e.target.closest('[data-pl-del]');
  if (del) {
    e.stopPropagation();
    const id = del.dataset.plDel;
    if (player.plId === id) { audio.pause(); nowPlaying.hidden = true; player.plId = null; }
    playlists = playlists.filter(p => p.id !== id);
    if (activePlId === id) activePlId = playlists[0] ? playlists[0].id : null;
    savePlaylists();
    renderPlaylists();
    toast('Playlist dihapus 🗑️');
    return;
  }
  const item = e.target.closest('.pl-item');
  if (item) { activePlId = item.dataset.pl; renderPlaylists(); }
});
$('plNewBtn').addEventListener('click', () => {
  const name = prompt('Nama playlist baru:') || '';
  if (!name.trim()) return;
  playlists.unshift({ id: 'pl-' + Date.now(), name: name.trim(), emoji: '🎵', tracks: [] });
  activePlId = playlists[0].id;
  savePlaylists();
  renderPlaylists();
  toast('Playlist "' + name.trim() + '" dibuat 🎵');
});
$('plTracks').addEventListener('click', (e) => {
  const del = e.target.closest('[data-pl-del-track]');
  if (del) {
    const pl = getActivePl();
    pl.tracks.splice(+del.dataset.plDelTrack, 1);
    savePlaylists();
    renderPlaylists();
    toast('Lagu dihapus dari playlist');
    return;
  }
  const play = e.target.closest('[data-pl-play]');
  if (play) {
    const pl = getActivePl();
    player.shuffle = false;
    npShuffle.classList.remove('on');
    playQueue(pl.tracks, +play.dataset.plPlay, pl.id);
  }
});
$('plPlayAll').addEventListener('click', () => {
  const pl = getActivePl();
  if (!pl.tracks.length) { toast('Playlist masih kosong 😢'); return; }
  player.shuffle = false;
  npShuffle.classList.remove('on');
  playQueue(pl.tracks, 0, pl.id);
});
$('plShufflePlay').addEventListener('click', () => {
  const pl = getActivePl();
  if (!pl.tracks.length) { toast('Playlist masih kosong 😢'); return; }
  player.shuffle = true;
  npShuffle.classList.add('on');
  playQueue(pl.tracks, 0, pl.id);
});
loadPlaylists();
renderPlaylists();

/* ============ MODAL PILIH PLAYLIST ============ */
const plPickModal = $('plPickModal');
let pendingTrack = null;
function openPlPick(track) {
  if (!track || !track.title) return;
  pendingTrack = track;
  bumpLiked(track);
  $('plPickList').innerHTML = playlists.map(p => `
    <button class="pl-pick-item" data-pl-pick="${p.id}">
      <span class="pl-ic">${p.emoji || '🎵'}</span>
      <b>${esc(p.name)}</b>
      <span>${p.tracks.length} lagu</span>
      <span class="pl-pick-add">＋</span>
    </button>`).join('');
  plPickModal.hidden = false;
}
function closePlPick() { plPickModal.hidden = true; pendingTrack = null; }
$('plPickClose').addEventListener('click', closePlPick);
plPickModal.addEventListener('click', (e) => { if (e.target === plPickModal) closePlPick(); });
$('plPickList').addEventListener('click', (e) => {
  const item = e.target.closest('[data-pl-pick]');
  if (!item || !pendingTrack) return;
  const pl = playlists.find(p => p.id === item.dataset.plPick);
  const ok = addToPlaylist(pendingTrack, item.dataset.plPick);
  if (ok) {
    toast('Masuk playlist "' + pl.name + '" 🎵');
    closePlPick();
  } else {
    toast('Lagu udah ada di playlist itu 😉');
  }
});
$('plPickNew').addEventListener('click', () => {
  const name = prompt('Nama playlist baru:') || '';
  if (!name.trim()) return;
  playlists.unshift({ id: 'pl-' + Date.now(), name: name.trim(), emoji: '🎵', tracks: [] });
  activePlId = playlists[0].id;
  savePlaylists();
  renderPlaylists();
  if (pendingTrack) {
    addToPlaylist(pendingTrack, playlists[0].id);
    toast('Playlist "' + name.trim() + '" dibuat & lagu masuk 🎵');
    closePlPick();
  } else {
    toast('Playlist "' + name.trim() + '" dibuat 🎵');
  }
});

/* ============ SUGGEST GRID (rekomendasi awal, sebelum cari) ============ */
const LS_LIKED = 'musickle_liked';
const SG_GRADS = [
  'linear-gradient(135deg,#6E96CC,#E8925A)',
  'linear-gradient(135deg,#E3B25F,#D97A45)',
  'linear-gradient(135deg,#7FC4B2,#6E96CC)',
  'linear-gradient(135deg,#8FB0E0,#7FC4B2)',
  'linear-gradient(135deg,#D9776B,#E3B25F)',
  'linear-gradient(135deg,#5F86BC,#8FB0E0)',
];
function loadLiked() {
  try { return JSON.parse(localStorage.getItem(LS_LIKED)) || []; }
  catch (e) { return []; }
}
function saveLiked(list) { localStorage.setItem(LS_LIKED, JSON.stringify(list.slice(0, 20))); }
function bumpLiked(track) {
  if (!track || !track.title) return;
  const list = loadLiked();
  const key = (track.title + '|' + track.artist).toLowerCase();
  const hit = list.find(t => (t.title + '|' + t.artist).toLowerCase() === key);
  if (hit) {
    hit.count = (hit.count || 1) + 1;
    hit.url = hit.url || track.url || '';
    hit.cover = hit.cover || track.cover || '';
  } else {
    list.push({ title: track.title, artist: track.artist, url: track.url || '', cover: track.cover || '', count: 1 });
  }
  saveLiked(list);
  if ($('suggestGrid') && !$('searchSuggest').hidden) renderSuggest();
}
function renderSuggest() {
  const liked = loadLiked().sort((a, b) => (b.count || 0) - (a.count || 0));
  const seen = new Set();
  const tracks = [];
  liked.forEach(t => {
    const k = (t.title + '|' + t.artist).toLowerCase();
    if (!seen.has(k)) { seen.add(k); tracks.push({ title: t.title, artist: t.artist, url: t.url, cover: t.cover }); }
  });
  const pool = [...TRENDING].sort(() => Math.random() - 0.5);
  pool.forEach(t => {
    if (tracks.length >= 12) return;
    const k = (t.song + '|' + t.artist).toLowerCase();
    if (!seen.has(k)) { seen.add(k); tracks.push({ title: t.song, artist: t.artist, url: '', cover: '' }); }
  });
  $('suggestGrid').innerHTML = tracks.map((t, i) => `
    <div class="sg-card" style="--sg-grad:${SG_GRADS[i % SG_GRADS.length]}">
      <div class="sg-cover">
        ${t.cover ? `<img src="${esc(t.cover)}" alt="" loading="lazy" onerror="this.style.visibility='hidden'">` : '<span class="sg-emoji">🎵</span>'}
      </div>
      <div class="sg-info">
        <div class="sg-song">${esc(t.title)}</div>
        <div class="sg-artist">${esc(t.artist)}</div>
      </div>
      <div class="sg-actions">
        <button class="sg-play" data-sg-title="${esc(t.title)}" data-sg-artist="${esc(t.artist)}" data-sg-url="${esc(t.url)}" title="Putar">▶</button>
        <button class="sg-add" data-sg-title="${esc(t.title)}" data-sg-artist="${esc(t.artist)}" data-sg-url="${esc(t.url)}" title="Tambah ke playlist">+ Pl</button>
      </div>
    </div>`).join('');
}
$('suggestGrid').addEventListener('click', (e) => {
  const play = e.target.closest('.sg-play');
  if (play) {
    const title = play.dataset.sgTitle, artist = play.dataset.sgArtist, url = play.dataset.sgUrl;
    if (url) {
      playDirect(url, title, artist);
    } else {
      findPreview(title, artist).then(hit => {
        if (!hit) { toast('Preview gak ketemu buat "' + title + '" 😢'); return; }
        playDirect(hit.url, hit.name, hit.artist);
      });
    }
    return;
  }
  const add = e.target.closest('.sg-add');
  if (add) {
    const title = add.dataset.sgTitle, artist = add.dataset.sgArtist, url = add.dataset.sgUrl;
    if (url) {
      openPlPick({ title, artist, url, cover: '' });
    } else {
      findPreview(title, artist).then(hit => {
        if (!hit) { toast('Gak ketemu preview buat "' + title + '" 😢'); return; }
        openPlPick({ title: hit.name, artist: hit.artist, url: hit.url, cover: '' });
      });
    }
  }
});
renderSuggest();

/* ============ PWA — service worker (installable, offline) ============ */
if ('serviceWorker' in navigator && location.protocol.startsWith('http')) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('sw.js').catch(() => {});
  });
}

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
  const colors = st.grad.match(/#[0-9a-fA-F]{6}/g) || ['#E8925A', '#8FB0E0'];
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
  const fontMap = { anton: "'Anton'", bungee: "'Bungee'", archivo: "'Archivo Black'", caveat: "'Caveat'", monoton: "'Monoton'", fredoka: "'Fredoka'", lobster: "'Lobster'", righteous: "'Righteous'", spaceg: "'Space Grotesk'" };
  const fam = fontMap[st.font] || "'Anton'";
  /* posisi teks: offset Y */
  const posOff = st.pos === 'top' ? -130 : st.pos === 'bottom' ? 130 : 0;
  ctx.fillStyle = '#fff';
  ctx.font = `700 46px ${fam}, sans-serif`;
  const songY = wrapText(ctx, st.song || 'Judul Lagu', W / 2, 440 + posOff, W * .8, 58);
  ctx.fillStyle = 'rgba(255,255,255,.85)';
  ctx.font = '500 26px Poppins, sans-serif';
  ctx.fillText(st.artist || 'Penyanyi', W / 2, Math.max(545 + posOff, songY + 70));
  const bottomBase = Math.max(545 + posOff, songY + 70) + 55;
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
    case 'bubble':
      ctx.strokeStyle = 'rgba(255,255,255,.30)';
      ctx.lineWidth = 2;
      for (let i = 0; i < 14; i++) {
        const x = (i * 97) % W, y = (i * 61) % H, r = 12 + (i % 5) * 7;
        ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2); ctx.stroke();
      }
      break;
    case 'confetti':
      ctx.fillStyle = 'rgba(255,255,255,.5)';
      for (let i = 0; i < 80; i++) {
        const x = (i * 71) % W, y = (i * 47) % H, s = 4 + (i % 4) * 3;
        ctx.save(); ctx.translate(x, y); ctx.rotate((i * 0.7) % Math.PI); ctx.fillRect(-s / 2, -s / 2, s, s * 0.6); ctx.restore();
      }
      break;
    case 'heart':
      ctx.fillStyle = 'rgba(255,255,255,.4)';
      for (let i = 0; i < 12; i++) {
        const x = (i * 89 + 20) % W, y = (i * 73 + 16) % H, s = 8 + (i % 3) * 5;
        ctx.font = s + 'px serif'; ctx.fillText('♥', x, y);
      }
      break;
    case 'wave':
      ctx.strokeStyle = 'rgba(255,255,255,.30)';
      ctx.lineWidth = 3;
      for (let w = 0; w < 4; w++) {
        ctx.beginPath();
        for (let x = 0; x <= W; x += 12) {
          const y = H * (0.2 + w * 0.2) + Math.sin(x / 60 + w * 1.5) * 22;
          x === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
        }
        ctx.stroke();
      }
      break;
    case 'rays':
      ctx.strokeStyle = 'rgba(255,255,255,.18)';
      ctx.lineWidth = 6;
      for (let a = 0; a < 360; a += 24) {
        ctx.beginPath();
        ctx.moveTo(W / 2, H * .4);
        ctx.lineTo(W / 2 + Math.cos(a * Math.PI / 180) * 800, H * .4 + Math.sin(a * Math.PI / 180) * 800);
        ctx.stroke();
      }
      break;
    case 'ticket':
      ctx.strokeStyle = 'rgba(255,255,255,.25)';
      ctx.lineWidth = 3;
      ctx.setLineDash([26, 18]);
      for (let y = 60; y < H; y += 70) { ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke(); }
      ctx.setLineDash([]);
      break;
    case 'lightning':
      ctx.fillStyle = 'rgba(255,255,255,.35)';
      ctx.font = '70px serif';
      for (let i = 0; i < 5; i++) { ctx.fillText('⚡', 40 + i * 130, 120 + (i % 2) * 60); ctx.fillText('⚡', 90 + i * 120, H - 100 - (i % 3) * 50); }
      break;
    case 'marble':
      ctx.strokeStyle = 'rgba(255,255,255,.14)';
      ctx.lineWidth = 14;
      for (let i = 0; i < 10; i++) {
        ctx.beginPath();
        const y0 = (i * 83) % H;
        ctx.moveTo(-40, y0);
        ctx.bezierCurveTo(W * .3, y0 - 90, W * .7, y0 + 90, W + 40, y0 - 30);
        ctx.stroke();
      }
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
      ctx.shadowColor = '#E8925A';
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
    case 'bold':
      ctx.lineWidth = 16;
      ctx.strokeRect(16, 16, W - 32, H - 32);
      break;
    case 'golden':
      ctx.strokeStyle = '#E3B25F';
      ctx.shadowColor = 'rgba(255,210,63,.7)';
      ctx.shadowBlur = 22;
      ctx.lineWidth = 4;
      ctx.strokeRect(26, 26, W - 52, H - 52);
      ctx.shadowBlur = 0;
      ctx.lineWidth = 1.5;
      ctx.strokeRect(40, 40, W - 80, H - 80);
      break;
    case 'sticker':
      ctx.strokeStyle = 'rgba(255,255,255,.85)';
      ctx.lineWidth = 6;
      ctx.strokeRect(34, 34, W - 68, H - 68);
      ctx.strokeStyle = 'rgba(0,0,0,.35)';
      ctx.lineWidth = 2;
      ctx.strokeRect(46, 46, W - 92, H - 92);
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

/* ============ BOTTOM NAV MOBILE (scroll spy + surprise) ============ */
(function () {
  const nav = $('mobileBottomNav');
  if (!nav) return;
  const items = nav.querySelectorAll('.mb-item');
  const sections = ['top', 'sifat', 'trending', 'card'].map(id => document.getElementById(id)).filter(Boolean);
  const setActive = (id) => {
    items.forEach(a => a.classList.toggle('active', a.dataset.spy === id));
  };
  const onScroll = () => {
    const pos = window.scrollY + window.innerHeight * 0.35;
    let current = 'top';
    sections.forEach(sec => { if (sec && sec.offsetTop <= pos) current = sec.id; });
    if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 40) current = 'card';
    setActive(current);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
  const surprise = $('mbSurpriseBtn');
  if (surprise) {
    surprise.addEventListener('click', () => {
      const random = SIFAT[Math.floor(Math.random() * SIFAT.length)];
      selectedSifat = random.id;
      renderSifat();
      showSifatResult(random.id);
      toast('🎲 Kamu dapet: ' + random.icon + ' ' + random.name + '!');
      $('sifat').scrollIntoView({ behavior: 'smooth' });
    });
  }
})();

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
