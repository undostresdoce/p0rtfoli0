<template>
  <section id="hero" class="hero text-center py-20 text-white bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 dark:from-gray-900 dark:to-gray-800">
    <h1 class="title text-5xl font-bold">Camila Belén </h1>
    <p class="subtitle text-xl mt-4"> - </p>
    <p class="final-phrase text-lg mt-10 opacity-0">Soy Camila, egresada de Desarrollo Front-End Trainee de Talento Digital. Apasionada por la innovación, la tecnología y el aprendizaje continuo como herramientas para mejorar la calidad de vida de las personas. Actualmente dedicada a potenciar pequeños emprendimientos a través de asesoramiento en marketing y gestión de redes sociales. Busco desempeñarme en organizaciones con sentido social, donde pueda aplicar mis habilidades y creatividad para contribuir al bienestar y desarrollo comunitario e inclusivo.
    </p>
  </section>
</template>

<script setup>
import { onMounted } from 'vue'
import gsap from 'gsap'
import anime from 'animejs/lib/anime.es.js'

onMounted(() => {
  // Entrada del título
  gsap.from('.title', { y: -50, opacity: 0, duration: 1 })
  // Microinteracción en subtítulo
  anime({
    targets: '.subtitle',
    translateX: [0, 50],
    opacity: [0, 1],
    duration: 1500,
    easing: 'easeOutExpo',
  })
  // Frase final con fade-in
  gsap.to('.final-phrase', { opacity: 1, delay: 2, duration: 1, ease: 'power2.out' })
})
</script>
