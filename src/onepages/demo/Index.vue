<script setup>
const links = [
  { label: 'Voltar pro Hub', href: '/' },
  { label: 'Info', href: '/info' },
]
</script>

<template>
  <div class="wrap">
    <header class="top">
      <div class="brand">
        <div class="badge">1ISH</div>
        <h1>OnePage Demo</h1>
        <p>Essa página NÃO herda app-bar, tema ou layout do site-mãe.</p>
      </div>

      <nav class="nav">
        <a v-for="l in links" :key="l.href" :href="l.href">{{ l.label }}</a>
      </nav>
    </header>

    <main class="grid">
      <section class="card">
        <h2>Bloco 1</h2>
        <p>Layout e CSS próprios, isolados.</p>
      </section>

      <section class="card">
        <h2>Bloco 2</h2>
        <p>Ideal pra “1 ideia, 1 site, 1 hora”.</p>
      </section>

      <section class="card wide">
        <h2>Call to Action</h2>
        <p>Curtiu? Me chama pra fazer seu site em 1 hora.</p>
        <a class="btn" href="https://wa.me/" target="_blank" rel="noreferrer">WhatsApp</a>
      </section>
    </main>

    <footer class="foot">
      <small>© {{ new Date().getFullYear() }} 1ISH</small>
    </footer>
  </div>
</template>

<style scoped>
.wrap {
  min-height: 100vh;
  background: #050505;
  color: #f5f5f5;
  padding: 24px;
  font-family: system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif;
}

.top {
  display: flex;
  gap: 16px;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 24px;
}

.brand h1 {
  margin: 8px 0 4px;
  font-size: 32px;
  line-height: 1.1;
}

.brand p {
  margin: 0;
  opacity: 0.8;
}

.badge {
  display: inline-flex;
  align-items: center;
  height: 28px;
  padding: 0 10px;
  border-radius: 999px;
  background: #1c5a35;
  font-weight: 800;
  letter-spacing: 0.5px;
}

.nav {
  display: flex;
  gap: 12px;
}

.nav a {
  color: #cfcfcf;
  text-decoration: none;
  padding: 8px 10px;
  border: 1px solid #222;
  border-radius: 10px;
}

.nav a:hover {
  border-color: #1c5a35;
  color: #fff;
}

.grid {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 14px;
}

.card {
  grid-column: span 6;
  border: 1px solid #1d1d1d;
  background: #0b0b0b;
  border-radius: 16px;
  padding: 16px;
}

.card.wide {
  grid-column: span 12;
}

.card h2 {
  margin: 0 0 8px;
  font-size: 18px;
}

.card p {
  margin: 0;
  opacity: 0.85;
}

.btn {
  display: inline-flex;
  margin-top: 12px;
  background: #1c5a35;
  color: #fff;
  text-decoration: none;
  padding: 10px 14px;
  border-radius: 12px;
  font-weight: 700;
}

.foot {
  margin-top: 24px;
  opacity: 0.6;
}
</style>
