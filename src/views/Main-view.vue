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
body {
  --dark-blue: #25274d;
  --gray-blue: #464866;
  --light-gray: #aaabb8;
  --light-blue: #2e9cca;
  --medium-light-blue: #71c1ed;
  --medium-blue: #29648a;
  --greenest: #86c232;
  --verylight-blue: #c4d7f2;

  font-family: "vazir", sans-serif;
  background-color: var(--dark-blue);
}

/* header */
.header {
  color: var(--light-blue);
  min-height: 70px;
}
/* end of header */
</style>