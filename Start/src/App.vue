<template>
    <div class="container">
        <header-cmp></header-cmp>
        <hr>
        <main-cmp></main-cmp>
        <hr>
        <footer-cmp></footer-cmp>
    </div>
</template>

<script>
import Header from './components/shared/Header.vue'
import Main from './components/server/Main.vue'
import Footer from './components/shared/Footer.vue'

export default {
  components: {
    'header-cmp': Header,
    'main-cmp': Main,
    'footer-cmp': Footer
  }
}
</script>
