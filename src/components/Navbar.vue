<template>
  <nav class="fixed top-0 left-0 w-full bg-white dark:bg-gray-900 shadow z-50">
    <div class="flex justify-between items-center px-6 py-4">
      <!-- Navegación por secciones -->
      <ul class="flex space-x-6" role="navigation" aria-label="Navegación principal">
        <li v-for="section in sections" :key="section.id">
          <a
            :href="'#' + section.id"
            :class="[
              'text-lg font-medium transition',
              activeSection === section.id
                ? 'text-blue-600 border-b-2 border-blue-600'
                : 'text-gray-700 dark:text-gray-200'
            ]"
            :aria-label="`Ir a sección ${section.label}`"
          >
            {{ section.label }}
          </a>
        </li>
      </ul>

      <!-- ModoOscuro -->
      <button
        @click="toggleTheme"
        :aria-pressed="theme.dark"
        aria-label="Alternar modo oscuro"
        role="switch"
        class="ml-4 p-2 rounded-full bg-gray-200 dark:bg-gray-700 transition"
      >
        <span v-if="theme.dark">🌙</span>
        <span v-else>☀️</span>
      </button>
    </div>
  </nav>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { useThemeStore } from '../store/theme'

const theme = useThemeStore()
const toggleTheme = () => theme.toggleTheme()

const sections = [
  { id: 'hero', label: 'Inicio' },
  { id: 'about', label: 'Sobre mí' },
  { id: 'projects', label: 'Proyectos' },
  { id: 'contact', label: 'Contacto' },
]

const activeSection = ref('hero')

// Scroll 
onMounted(() => {
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) activeSection.value = entry.target.id
      })
    },
    { threshold: 0.6 }
  )

  sections.forEach(section => {
    const el = document.getElementById(section.id)
    if (el) observer.observe(el)
  })
})
</script>
