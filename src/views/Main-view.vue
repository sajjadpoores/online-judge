<template>
  <div class="main-view">
      <!-- header -->
    <header class="header">
        <!-- nav -->
        <Nav />
        <!-- end of nav -->
    </header>
    <!-- end of header -->

    <!-- view content -->
    <section class="view-content">
      <router-view/>
    </section>
    <!-- end of view content -->
  </div>
</template>

<script>
import Nav from '@/components/Nav.vue'

export default {
    name: "main-view",
    components: {
      Nav
    }
}
</script>

<style>

</style>