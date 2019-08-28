<template>
  <div class="dashboard">
      <!-- header -->
    <header class="header">
        <!-- nav -->
        <Nav />
        <!-- end of nav -->
    </header>
    <!-- end of header -->

    <!-- main section -->
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
import { constants } from 'crypto';
import { mixin as clickaway } from 'vue-clickaway'
import Nav from '@/components/Nav.vue'
import Rmenu from '@/components/Rmenu.vue'

export default {
    name: "dashboard",
    mixins: [ clickaway ],
    components: {
      Nav,
      Rmenu
    },
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
