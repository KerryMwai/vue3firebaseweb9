<template>
      <Navbar/>
  <div class="container">
    <router-view/>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
export default {
name:'app',
components:{Navbar}
}
</script>



<style >
@import url("https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.2.0/css/fontawesome.min.css");
</style>

