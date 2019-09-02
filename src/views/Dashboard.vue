<template>
  <div class="dashboard-view">
    <!-- problems-view-header -->
    <div class="dashboard-view-header">
        <span>داشبورد</span>
    </div>

    
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

<style scoped>
/* dashboard header */
.dashboard-view-header{
    direction: rtl;
    color: var(--dark-blue);
    background-color: var(--light-gray);
    border-radius: 5px;
    padding: 5px 20px;
    margin-bottom: 10px;
}
/* end of dashboard header */

</style>
