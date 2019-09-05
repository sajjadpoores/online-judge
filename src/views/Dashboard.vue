<template>
  <div class="dashboard-view">
    <!-- problems-view header -->
    <div class="dashboard-header">
        <span>داشبورد</span>
    </div>
    <!-- end of dashboard-view header -->        

      <div class="container">

        <div class="container-item">
          <div class="item-header dashboard-header">
            سوالات
          </div>

          <div class="container-item-item">
            بخش سوالات  
          </div>

          <div class="container-item-item">
            <router-link :to="{name: 'createProblem'}">ایجاد سوال جدید</router-link>
          </div>

          <div class="container-item-item">
            سوالات من
          </div>
        </div>

        <div class="container-item">
          <div class="item-header dashboard-header">
            مسابقات
          </div>

          <div class="container-item-item">
            بخش مسابقات 
          </div>

          <div class="container-item-item">
            ایجاد مسابقه جدید
          </div>

          <div class="container-item-item">
            مسابقات من
          </div>
        </div>
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
  /* general rules */
  .dashboard-view {
      direction: rtl;
  }

  .dashboard-header {
      color: var(--dark-blue);
      background-color: var(--light-gray);
      border-radius: 5px;
      padding: 5px 20px;
      margin-bottom: 10px;
      font-size: 1.5rem;
  }
  /* end of general rules */
  .container {
    text-align: center;
  }
  .item-header {
      font-size: 1.3rem !important;
      border-radius: 0;
  }
  
  .container-item {
      margin: 10px 0;
      border-radius: 5px;
  }

  .container-item-item {
    color: white;
    background-color: var(--gray-blue);
    font-size: 1.2rem;
    margin-bottom: 2px;
  }

  .container-item-item a{
    text-decoration: none;
    display: block;
    color: white;
    padding: 5px 10px;
  }

  .container-item-item:hover {
    background-color: var(--light-blue);
  }
</style>
