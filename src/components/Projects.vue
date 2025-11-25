<template>
  <section id="projects" class="projects py-20 px-6 bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-100">
    <h2 class="text-4xl font-bold mb-10 text-center">Proyectos</h2>
    <div ref="cardsContainer" class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-8">
      <div
        v-for="(project, index) in projects"
        :key="project.title"
        :ref="el => cardRefs[index] = el"
        class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 opacity-0 transform translate-y-10"
        role="region"
        :aria-label="`Proyecto: ${project.title}`"
      >
        <h3 class="text-2xl font-semibold mb-2">{{ project.title }}</h3>
        <p class="text-gray-700 dark:text-gray-300 mb-4">{{ project.description }}</p>
        <a :href="project.link" target="_blank" class="text-blue-600 underline font-medium" aria-label="Ver proyecto">
          Ver proyecto
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const cardRefs = []
const cardsContainer = ref(null)

onMounted(() => {
  // 
  cardRefs.forEach((card, index) => {
    gsap.to(card, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      delay: index * 0.2,
      ease: 'power3.out',
      scrollTrigger: { trigger: card, start: 'top 90%' },
    })
  })
})

const projects = [
  {
    title: 'Landing animada con GSAP',
    description: 'Scroll reactivo, gradientes animados, SVG interactivo y defensa académica con narrativa visual.',
    link: 'https://github.com/camila/landing-gsap',
  },
  {
    title: 'Suite de testing con Cypress',
    description: 'Login, CRUD y navegación protegida con documentación clara y validación de flujos críticos.',
    link: 'https://github.com/camila/test-suite',
  },
  {
    title: 'Portfolio modular con Vue 3',
    description: 'Componentes accesibles, animaciones con Anime.js, estructura defendible y despliegue optimizado.',
    link: 'https://github.com/camila/vue-portfolio',
  },
  {
    title: 'Dashboard con Firebase y Pinia',
    description: 'Gestión de usuarios, autenticación segura, estado global y rutas protegidas con defensa técnica.',
    link: 'https://github.com/camila/firebase-dashboard',
  },
]
</script>
