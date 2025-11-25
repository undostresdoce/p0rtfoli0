<template>
  <Navbar />
  <main>
    <Hero />
    <About />
    <Projects />
    <Contact />
  </main>
  <Footer />
</template>

<script setup>
import Navbar from './components/Navbar.vue'
import Hero from './components/Hero.vue'
import About from './components/About.vue'
import Projects from './components/Projects.vue'
import Contact from './components/Contact.vue'
import Footer from './components/Footer.vue'
</script>

<style>
main {
  margin-top: 80px;
  scroll-behavior: smooth;
}

html {
  transition: background-color 300ms ease, color 300ms ease;
}
</style>
