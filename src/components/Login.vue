<template>
  <section class="py-20 px-6 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100">
    <h2 class="text-3xl font-bold mb-6 text-center">Iniciar sesión</h2>
    <form class="login-form flex flex-col max-w-md mx-auto" aria-label="Formulario de login">
      <input v-model="email" type="email" placeholder="Email" class="mb-4 p-2 border rounded" aria-label="Correo electrónico" />
      <input v-model="password" type="password" placeholder="Contraseña" class="mb-4 p-2 border rounded" aria-label="Contraseña" />
      <button @click.prevent="login" class="bg-blue-500 text-white px-4 py-2 rounded">Ingresar</button>
    </form>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth, db } from '../firebase/config'
import { useRouter } from 'vue-router'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'
import gsap from 'gsap'

const email = ref('')
const password = ref('')
const router = useRouter()

const login = async () => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email.value, password.value)
    const user = userCredential.user

    // Registrar acceso en 'usuarios'
    await addDoc(collection(db, 'usuarios'), {
      email: user.email,
      fechaAcceso: serverTimestamp(),
    })

    router.push('/cv')
  } catch (error) {
    // Feedback visual en error
    gsap.from('.login-form', { x: -10, duration: 0.1, repeat: 3, yoyo: true })
    alert('Credenciales inválidas')
  }
}
</script>
