<template>
  <div id="app">
    <!-- <div id="nav"> -->
      <!-- <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> -->
    <!-- </div> -->
    <router-view/>
  </div>
</template>

<style>
@font-face {
  font-family: 'vazir';
  font-style: normal;
  font-weight: 400;
  src: url('./assets/font/vazir/Vazir-FD.eot'); /* IE9 Compat Modes */
  src: local('Vazir'), local('Vazir'),
    url('./assets/font/vazir/Vazir-FD.eot?#iefix') format('embedded-opentype'),
    /* IE6-IE8 */ url('./assets/font//vazir/Vazir-FD.woff2') format('woff2'),
    /* Super Modern Browsers */ url('./assets/font//vazir/Vazir-FD.woff')
      format('woff'),
    /* Modern Browsers */ url('./assets/font//vazir/Vazir-FD.ttf') format('truetype'); /* Safari, Android, iOS */
}

#app {
  font-size: 1.6rem;
  font-family: 'vazir', sans-serif;
}

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

</style>
