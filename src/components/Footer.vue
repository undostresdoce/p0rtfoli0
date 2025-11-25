<template>
  <footer ref="footerRef" class="bg-gray-800 text-white text-center py-6 mt-10 opacity-0 translate-y-10" role="contentinfo">
    <p>© 2025 LVNO by Cvmi  </p>
    <nav aria-label="Enlaces de contacto">
      <a href="mailto:camictejo@gmail.com" class="underline text-blue-300">Contacto</a>
    </nav>
  </footer>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const footerRef = ref(null)

// 
onMounted(() => {
  gsap.to(footerRef.value, {
    opacity: 1,
    y: 0,
    duration: 1,
    ease: 'power2.out',
    scrollTrigger: { trigger: footerRef.value, start: 'top 95%' },
  })
})
</script>
