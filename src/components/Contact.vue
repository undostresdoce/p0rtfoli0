<template>
  <section id="contact" class="contact py-20 px-6 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100">
    <h2 class="text-4xl font-bold mb-6 text-center">Contacto</h2>
    <form ref="formRef" class="contact-form flex flex-col max-w-md mx-auto opacity-0 translate-y-10" aria-label="Formulario de contacto">
      <input v-model="nombre" type="text" placeholder="Nombre" class="mb-4 p-2 border rounded" aria-label="Nombre" />
      <input v-model="email" type="email" placeholder="Email" class="mb-4 p-2 border rounded" aria-label="Correo electrónico" />
      <textarea v-model="mensaje" placeholder="Mensaje" class="mb-4 p-2 border rounded" aria-label="Mensaje"></textarea>
      <button @click.prevent="enviar" ref="submitBtn" class="bg-blue-500 text-white px-4 py-2 rounded transition transform" aria-label="Enviar formulario de contacto">
        Enviar
      </button>
    </form>
  </section>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { db } from '../firebase/config'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'

gsap.registerPlugin(ScrollTrigger)

const formRef = ref(null)
const submitBtn = ref(null)
const nombre = ref('')
const email = ref('')
const mensaje = ref('')

onMounted(() => {
  // 
  gsap.to(formRef.value, {
    opacity: 1,
    y: 0,
    duration: 1,
    ease: 'power2.out',
    scrollTrigger: { trigger: formRef.value, start: 'top 90%' },
  })
})

// 
const animateButton = () => {
  gsap.fromTo(submitBtn.value, { scale: 1 }, { scale: 0.95, duration: 0.1, yoyo: true, repeat: 1, ease: 'power1.inOut' })
}

// verificaresto!
const enviar = async () => {
  animateButton()
  try {
    await addDoc(collection(db, 'mensajes'), {
      nombre: nombre.value,
      email: email.value,
      mensaje: mensaje.value,
      fecha: serverTimestamp(),
    })
    alert('Mensaje enviado correctamente')
    nombre.value = ''
    email.value = ''
    mensaje.value = ''
  } catch (err) {
    alert('Error al enviar el mensaje')
  }
}
</script>
