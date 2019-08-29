<template>
  <div class="dashboard">
    <section class="main">
        <!-- rightside menu **rmenu** -->
        <Rmenu class="rmenu" />
        <!-- end of rmenu -->

        <!-- main content -->
        <div class="main-content">
            this is main content
        </div>
        <!-- end of main content -->
    </section>
    <!-- end of main section -->
  </div>
</template>

<script>
import Rmenu from '@/components/Rmenu.vue'

export default {
    name: "dashboard",
    components: {
      Rmenu
    },
}
</script>

<style>

.dashboard {
  font-size: 1.4rem;
}
/* general classes */

/* container with elements being centered */
.flex-container-to-center {
  display: flex !important;
  justify-content: center;
  flex-direction: row-reverse;
}

.flex-container-to-center > * {
  margin: 0 5px;
}

/* header */
.header {
  color: var(--light-blue);
  min-height: 70px;
}
/* end of header */


/* main section */
.main {
  display: flex;
  justify-content: space-between;
  padding: 10px;
}
/* end of main section */

/* main content */
flex-
.main-content {
  flex-basis: calc(100% - 300px);
  margin: 0 auto;
}
/* end of main content */

.rmenu{
  /* #rmenu_width */
  flex-basis: 270px;
  order: 1;
}

@media screen and (max-width: 600px) {
  .main-content {
    flex-basis: 100%;
  }
}
</style>
