/* ============ MUSICKLE — Konfigurasi Supabase ============
   Cara setup (5 menit):
   1. Buka https://supabase.com → Sign in (bisa pakai GitHub) → New project
      (nama bebas, password database SIMPAN, region Singapore/Asia)
   2. Setelah project jadi: kiri bawah → Settings → API →
      copy "Project URL" ke SUPABASE_URL dan "anon public" key ke SUPABASE_ANON_KEY
   3. Di SQL Editor, jalankan isi file supabase-schema.sql (buat tabel + RLS)
   4. Masukkan kedua nilai di bawah, commit, push — fitur login langsung aktif.
   Kalau dikosongkan, website tetap jalan normal (mode lokal) tanpa login. */
const SUPABASE_URL = '';
const SUPABASE_ANON_KEY = '';
