<script setup>
const items = [
  { title: 'Brainrot', path: '/brainrot', desc: 'Brainrot escolhido pelo meu filho Isaac' },
]

const links = [
  { label: 'Info', href: '/info' },
]
</script>

<template>
  <div class="wrap">
    <header class="top">
      <div class="brand">
        <div class="badge">1ISH</div>
        <h1>1 ideia. 1 site. 1 hora.</h1>
        <p>Hub principal. Aqui lista os desafios e direciona para as OnePages.</p>
      </div>

      <nav class="nav">
        <a v-for="l in links" :key="l.href" :href="l.href">{{ l.label }}</a>
      </nav>
    </header>

    <main class="grid">
      <section class="card wide">
        <h2>Como funciona</h2>
        <p>O público sugere. Eu construo em 1 hora. Publico e pronto.</p>
        <div class="cta-row">
          <a class="btn" href="/ish/demo">Ver exemplo</a>
          <a class="btn ghost" href="https://wa.me/+351921262537" target="_blank" rel="noreferrer">Quero um site</a>
        </div>
      </section>

      <section v-for="it in items" :key="it.path" class="card">
        <h2>{{ it.title }}</h2>
        <p>{{ it.desc }}</p>
        <a class="link" :href="it.path">Abrir</a>
      </section>
    </main>

    <footer class="foot">
			<div class="site-assign">
				<small>© {{ new Date().getFullYear() }} 1ISH Developed by <a href="http://faelpatrick.com" target="_blank" rel="noreferrer">Faelpatrick</a></small>
			</div>
    </footer>
  </div>
</template>

<style scoped>
.wrap {
  min-height: 100vh;
  background: #050505;
  color: #f5f5f5;
  padding: 24px 24px 4px 20px;
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

.cta-row {
  display: flex;
  gap: 10px;
  margin-top: 12px;
  flex-wrap: wrap;
}

.btn {
  display: inline-flex;
  background: #1c5a35;
  color: #fff;
  text-decoration: none;
  padding: 10px 14px;
  border-radius: 12px;
  font-weight: 700;
  border: 1px solid transparent;
}

.btn.ghost {
  background: transparent;
  border-color: #2a2a2a;
  color: #cfcfcf;
}

.btn.ghost:hover {
  border-color: #1c5a35;
  color: #fff;
}

.link {
  display: inline-flex;
  margin-top: 12px;
  color: #cfcfcf;
  text-decoration: none;
  padding: 6px 10px;
  border: 1px solid #222;
  border-radius: 10px;
}

.link:hover {
  border-color: #1c5a35;
  color: #fff;
}

.foot {
  margin-top: 54px;
  opacity: 0.6;
}
.foot a {
	color: #ffffff;
	text-decoration: none;
}
.foot .site-assign {
	text-align: center;
	margin-bottom: -18px;
}

</style>
