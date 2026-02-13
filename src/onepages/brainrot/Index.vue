<template>
  <div class="page">
    <!-- Header com imagem -->
    <header class="header">
      <img
        class="header__img"
        :src="headerImage"
        alt="Capa Brainrot"
        @error="onHeaderImgError"
      />

      <div class="header__overlay">
        <div class="header__content">
          <div class="badge">1ISH • /brainrot</div>
          <h1 class="title">Brain Rot</h1>

          <p class="desc">
            {{ description }}
          </p>

          <div class="links">
            <a class="btn btn--primary" :href="wikiUrl" target="_blank" rel="noopener noreferrer">
              Ler no Wikipedia
            </a>
            <a class="btn" href="#exemplos">Ver exemplos</a>
          </div>

          <p class="resume">
            <b>Resumo:</b> {{ summary }}
          </p>
        </div>
      </div>
    </header>

    <!-- Carrossel de exemplos -->
    <section class="section" id="exemplos">
      <div class="section__head">
        <h2>Exemplos de brain rot</h2>
        <p class="muted">
          Troque as imagens colocando os arquivos na pasta <span class="mono">/brainrot</span>.
          Por padrão, o componente tenta carregar: <span class="mono">/brainrot/exemplo-01.jpg</span> etc.
        </p>
      </div>

      <div class="carousel">
        <button class="nav" type="button" @click="prev" aria-label="Anterior">‹</button>

        <div class="viewport" @keydown.left.prevent="prev" @keydown.right.prevent="next" tabindex="0">
          <div class="track" :style="trackStyle">
            <article v-for="(item, idx) in items" :key="item.slug" class="slide">
              <div class="card">
                <img
                  class="card__img"
                  :src="item.image"
                  :alt="item.title"
                  loading="lazy"
                  @error="onCardImgError(idx)"
                />
                <div class="card__body">
                  <h3 class="card__title">{{ item.title }}</h3>
                  <p class="card__text">{{ item.text }}</p>
                </div>
              </div>
            </article>
          </div>
        </div>

        <button class="nav" type="button" @click="next" aria-label="Próximo">›</button>
      </div>

      <div class="dots" role="tablist" aria-label="Selecionar exemplo">
        <button
          v-for="(item, idx) in items"
          :key="item.slug"
          class="dot"
          :class="{ 'dot--active': idx === current }"
          type="button"
          @click="goTo(idx)"
          :aria-label="`Ir para ${item.title}`"
        />
      </div>

      <div class="hint muted">
        Dica: use setas do teclado no carrossel (← →).
      </div>
    </section>
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from "vue";

/**
 * Você vai colocar as imagens aqui:
 * public/brainrot/header.jpg
 * public/brainrot/exemplo-01.jpg
 * public/brainrot/exemplo-02.jpg
 * ...
 */

const wikiUrl = "https://pt.wikipedia.org/wiki/Brain_rot";

const headerImage = ref("/brainrot/header.png");
const description = ref(
  "Brain rot é um termo popular da internet usado para descrever conteúdo repetitivo, caótico e altamente viral, que ‘gruda’ na mente e vira referência/meme."
);
const summary = ref(
  "Esta página reúne uma breve descrição com link de referência e um carrossel com exemplos (imagens serão adicionadas por você)."
);

const items = ref([
  {
    slug: "vaca-saturno-saturnina",
    title: "Vaca Saturno Saturnina",
    text: ".",
    image: "/brainrot/vaca-saturno-saturnina.webp",
  },
  {
    slug: "tom-tom-sarur",
    title: "Tom Tom Sarur",
    text: "Placeholder de descrição curta (você pode ajustar depois).",
    image: "/brainrot/exemplo-02.jpg",
  },
  {
    slug: "tralalelo-tralala",
    title: "Tralalelo Tralala",
    text: "Placeholder de descrição curta (você pode ajustar depois).",
    image: "/brainrot/exemplo-03.jpg",
  },
  {
    slug: "exemplo-04",
    title: "Outro exemplo (placeholder)",
    text: "Troque por mais um exemplo quando quiser.",
    image: "/brainrot/exemplo-04.jpg",
  },
]);

const current = ref(0);

const trackStyle = computed(() => {
  const x = current.value * 100;
  return { transform: `translateX(-${x}%)` };
});

function prev() {
  current.value = (current.value - 1 + items.value.length) % items.value.length;
}
function next() {
  current.value = (current.value + 1) % items.value.length;
}
function goTo(idx) {
  current.value = idx;
}

function onHeaderImgError() {
  headerImage.value = "";
}

function onCardImgError(idx) {
  return () => {
    items.value[idx].image = "";
  };
}

/* Autoplay leve (opcional). Se não quiser, apaga esse bloco. */
const autoplay = ref(true);
let t = null;

onMounted(() => {
  if (!autoplay.value) return;
  t = setInterval(() => next(), 4500);
});
</script>

<style scoped>
.page {
  min-height: 100vh;
  background: #050607;
  color: #eaf3ee;
  font-family: system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif;
}

/* Header */
.header {
  position: relative;
  height: 420px;
  overflow: hidden;
  border-bottom: 1px solid rgba(28, 90, 53, 0.25);
}

.header__img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  filter: contrast(1.05) saturate(1.05);
}

.header__overlay {
  position: absolute;
  inset: 0;
  background: radial-gradient(900px 420px at 20% 20%, rgba(28, 90, 53, 0.45), transparent 60%),
    linear-gradient(180deg, rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.75));
}

.header__content {
  max-width: 1100px;
  margin: 0 auto;
  padding: 26px 22px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 10px;
}

.badge {
  display: inline-flex;
  width: fit-content;
  padding: 6px 10px;
  border-radius: 999px;
  border: 1px solid rgba(28, 90, 53, 0.6);
  background: rgba(28, 90, 53, 0.14);
  font-size: 12px;
  letter-spacing: 0.6px;
}

.title {
  margin: 0;
  font-size: 48px;
  letter-spacing: 1.4px;
}

.desc {
  margin: 0;
  max-width: 80ch;
  color: rgba(234, 243, 238, 0.82);
  line-height: 1.5;
}

.links {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  margin-top: 6px;
}

.resume {
  margin: 0;
  color: rgba(234, 243, 238, 0.72);
  line-height: 1.5;
}

/* Section */
.section {
  max-width: 1100px;
  margin: 0 auto;
  padding: 22px;
}

.section__head h2 {
  margin: 0 0 6px 0;
  font-size: 22px;
}

.muted {
  color: rgba(234, 243, 238, 0.62);
}

.mono {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", monospace;
}

/* Botões */
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 11px 14px;
  border-radius: 12px;
  border: 1px solid rgba(28, 90, 53, 0.55);
  background: rgba(28, 90, 53, 0.12);
  color: #eaf3ee;
  text-decoration: none;
  cursor: pointer;
  transition: transform 0.12s ease, border-color 0.12s ease, background 0.12s ease;
}
.btn:hover {
  transform: translateY(-1px);
  border-color: rgba(28, 90, 53, 0.95);
  background: rgba(28, 90, 53, 0.18);
}
.btn--primary {
  border-color: rgba(28, 90, 53, 0.95);
  background: linear-gradient(180deg, rgba(28, 90, 53, 0.48), rgba(28, 90, 53, 0.18));
}

/* Carrossel */
.carousel {
  margin-top: 14px;
  display: grid;
  grid-template-columns: 44px 1fr 44px;
  gap: 10px;
  align-items: center;
}

.viewport {
  border-radius: 16px;
  border: 1px solid rgba(28, 90, 53, 0.25);
  background: rgba(255, 255, 255, 0.02);
  overflow: hidden;
  outline: none;
}

.track {
  display: flex;
  width: 100%;
  transition: transform 260ms ease;
}

.slide {
  min-width: 100%;
  padding: 12px;
}

.nav {
  width: 44px;
  height: 44px;
  border-radius: 12px;
  border: 1px solid rgba(28, 90, 53, 0.35);
  background: rgba(0, 0, 0, 0.35);
  color: rgba(234, 243, 238, 0.9);
  font-size: 28px;
  cursor: pointer;
}
.nav:hover {
  border-color: rgba(28, 90, 53, 0.85);
}

/* Card do slide */
.card {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
  border-radius: 14px;
  border: 1px solid rgba(28, 90, 53, 0.22);
  background: rgba(0, 0, 0, 0.25);
  overflow: hidden;
}

.card__img {
  width: 100%;
  height: 260px;
  object-fit: cover;
  display: block;
  background: rgba(28, 90, 53, 0.08);
}

.card__body {
  padding: 14px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 8px;
}

.card__title {
  margin: 0;
  font-size: 20px;
}

.card__text {
  margin: 0;
  color: rgba(234, 243, 238, 0.72);
  line-height: 1.45;
}

.dots {
  margin-top: 12px;
  display: flex;
  gap: 8px;
  justify-content: center;
}

.dot {
  width: 10px;
  height: 10px;
  border-radius: 999px;
  border: 1px solid rgba(28, 90, 53, 0.55);
  background: rgba(28, 90, 53, 0.12);
  cursor: pointer;
}
.dot--active {
  background: rgba(124, 255, 180, 0.55);
  border-color: rgba(124, 255, 180, 0.85);
}

.hint {
  margin-top: 10px;
  text-align: center;
  font-size: 13px;
}

/* Responsivo */
@media (max-width: 900px) {
  .title {
    font-size: 38px;
  }
  .carousel {
    grid-template-columns: 38px 1fr 38px;
  }
  .nav {
    width: 38px;
    height: 38px;
  }
  .card {
    grid-template-columns: 1fr;
  }
  .card__img {
    height: 220px;
  }
}
</style>
