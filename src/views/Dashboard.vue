<template>
  <div class="dashboard">
      <!-- header -->
    <header class="header">
        <!-- nav -->
        <nav class="nav">
            <!-- first section of nav -->
            <div class="nav-first">
                <div class="nav-item logo">
                    <img src="@/assets/img/logo.png" alt="">
                </div>
                <div class="full-width-on-mobile nav-item dropdown">
                    <span @click="show_dropdown"
                    v-on-clickaway="close_dropdown"
                     class="dropbtn flex-container-to-center">
                        
                        <font-awesome-icon icon="caret-down" class="dropbtn dropbtni" />
                        <span class="dropbtn">پروفایل</span>
                    </span>
                    <div id="myDropdown" class="dropdown-content">
                        <div class="dropdown-item">پروفایل</div>
                        <div class="dropdown-item">خروج</div>
                    </div>
                </div>
            </div>
            <!-- end of first section -->
            <!-- second section of nav -->
            <div class="nav-second">

                <div class="full-width-on-mobile nav-item"><a href="#">مسابقات</a></div>
                <div class="full-width-on-mobile nav-item"><a href="#">سوالات</a></div>
                <div class="full-width-on-mobile nav-item"><a href="#">داشبورد</a></div>
                <div class="nav-item rightside-menu-btn" @click="show_rmenu" v-on-clickaway="close_rmenu">
                    <svg width="30" height="30" class="opener_btn">
                        <path d="M0,5 30,5" class="opener_btn" stroke="#2e9cca" stroke-width="3" />

                        <path d="M0,14 30,14" class="opener_btn" stroke="#2e9cca" stroke-width="3" />

                        <path d="M0,23 30,23" class="opener_btn" stroke="#2e9cca" stroke-width="3" />
                    </svg>
                </div>
            </div>
            <!-- end of section section -->
        </nav>
        <!-- end of nav -->

        <!-- mobile nav -->
        <nav class="mobile-nav">
            <div class="mnav-item logo">
                <img src="@/assets/img/logo.png" alt="">
            </div>
            <div class="mnav-dropbtn mnav-item" @click="show_mnav_items()">
                <a href="#">

                    <font-awesome-icon 
                    id="arrow_i_down"
                    icon="caret-down"/>

                    <font-awesome-icon 
                    id="arrow_i_up"
                    icon="caret-up"/>

                    <span>پروفایل</span>

                </a>
            </div>
            <div id="mnav-drop-container" class="mnav-drop-container">
                <div class="mnav-drop-item">
                    <a href="#">پروفایل</a>
                </div>
                <div class="mnav-drop-item">
                    <a href="#">خروج</a>
                </div>
            </div>


            <div class="mnav-item">
                <a href="#">داشبورد</a>
            </div>

            <div class="mnav-item">
                <a href="#">سوالات</a>
            </div>

            <div class="mnav-item">
                <a href="#">مسابقات</a>
            </div>

            <div class="mnav-item rightside-menu-btn" @click="show_rmenu()">
                <svg width="30" height="30" class="opener_btn">
                    <path class="opener_btn" d="M0,5 30,5" stroke="#2e9cca" stroke-width="3" />
                    <path class="opener_btn" d="M0,14 30,14" stroke="#2e9cca" stroke-width="3" />
                    <path class="opener_btn" d="M0,23 30,23" stroke="#2e9cca" stroke-width="3" />
                </svg>
            </div>
        </nav>
        <!-- end of mobile nav -->
    </header>
    <!-- end of header -->

    <!-- main section -->
    <section class="main">
        <!-- rightside menu **rmenu** -->
        <div class="rmenu" id="rmenu" v-on-clickaway="close_rmenu">

            <div class="rmenu-close-btn" @click="close_rmenu">
                &times;
            </div>
            <div class="rmenu-photo">
                <img src="@/assets/img/profile.jpg" alt="">
            </div>

            <div class="rmenu-item rmenu-head">
                جزءیات
            </div>

            <div class="rmenu-item">
                <div class="rmenu-key">
                    تعداد سوالات حل شده
                </div>

                <div class="rmenu-value">
                    10
                </div>
            </div>

            <div class="rmenu-item">
                <div class="rmenu-key">
                    تعداد مسابقات شرکت کرده
                </div>

                <div class="rmenu-value">
                    20
                </div>
            </div>

        </div>
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

export default {
    name: "dashboard",
    mixins: [ clickaway ],
    data() {
        return {
            rmenu: null,
            mnav_drop_container: null,
            arrow_i: null
        }
    },
    methods: {
        close_rmenu(event) {
            // if user hasnt click on open rmenu button , close the rmenu
            if(event.target.classList[0] !== 'opener_btn')
                this.rmenu.style.width = 0
        },
        show_rmenu() {
            this.rmenu.style.width = "300px"
        },
        show_dropdown(){
            document.getElementById("myDropdown").classList.toggle("show");
        },
        close_dropdown(){
            if (!event.target.matches(".dropbtn")) {
                var dropdowns = document.getElementsByClassName("dropdown-content");
                var i;
                for (i = 0; i < dropdowns.length; i++) {
                var openDropdown = dropdowns[i];
                if (openDropdown.classList.contains("show")) {
                    openDropdown.classList.remove("show");
                }
                }
            }
        },
        show_mnav_items(){
          if (this.mnav_drop_container.style.height === "100%") {
              this.mnav_drop_container.style.height = "0"
              this.mnav_drop_container.style.transform = "scaleY(0)"
              document.getElementById('arrow_i_up').style.display = 'none'
              document.getElementById('arrow_i_down').style.display = 'inline'
          } else {
              this.mnav_drop_container.style.height = "100%"
              this.mnav_drop_container.style.transform = "scaleY(1)"
              document.getElementById('arrow_i_up').style.display = 'inline'
              document.getElementById('arrow_i_down').style.display = 'none'
          }

          // console.log(this.mnav_drop_container.style.height)
        }
    },
    mounted(){
        this.rmenu = document.getElementById('rmenu')
        this.mnav_drop_container = document.getElementById("mnav-drop-container")
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

/* nav */
.nav {
  display: flex;
}

.nav-first {
  display: flex;
  flex: 4;
}

.nav-second {
  flex: 1;
  display: flex;
  flex-direction: row-reverse;
}

.nav-item a {
  color: var(--light-blue);
  text-decoration: none;
}

.nav-item a:hover {
  color: var(--greenest);
}

.nav-item {
  align-self: center;
  margin: 7px;
}

.nav-second .nav-item {
  align-self: center;
  flex: 1;
}

.logo {
  border-radius: 5px;
  max-height: 80px;
  filter: invert(1);
}

.rightside-menu-btn {
  display: none;
  order: -100;
}

.rightside-menu-btn svg path:hover {
  stroke: var(--greenest);
}

/* tablet size screen */
@media screen and (max-width: 600px) {
  .rightside-menu-btn {
    display: block;
    align-self: center;
  }
}

/* mobile size screen */
@media screen and (max-width: 510px) {
  .nav {
    flex-direction: column;
  }
  .nav-first {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .nav-second {
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
  }

  .rightside-menu-btn {
    position: fixed;
    right: 0;
    top: 10px;
    background: none !important;
  }

  /* make some of nav items full width on mobile size screen */
  .full-width-on-mobile {
    width: 100%;
    background-color: rgba(255, 255, 255, 0.1);
  }

  .nav-item a {
    display: block;
    width: 100%;
  }
  .nav-item {
    text-align: center;
  }

  /* change dropdown content being 100% in mobile size screen */
  .dropdown-content {
    width: 50% !important;
    right: 20vw !important;
  }
}

/* nav dropdown */
.dropbtn {
  cursor: pointer;
  display: block;
}

.dropbtn:hover,
.dropbtn:focus {
  color: var(--greenest);
}

.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  width: 130%;
  text-align: center;
  display: none;
  position: absolute;
  z-index: 100;
  top: 50px;
  right: 2px;
  background-color: var(--light-blue);

  border-radius: 5px;
}

.dropdown-item {
  border-radius: 5px 5px 0 0;
  border-bottom: 1px solid var(--dark-blue);
  cursor: pointer;
  background-color: var(--light-blue);
  color: var(--dark-blue);
  margin-top: 2px;
}

.dropdown-item:last-child {
  border-radius: 5px;
}

.dropdown-item:hover {
  color: var(--greenest);
}

.dropbtn .dropbtni {
  display: block;
  float: right;
  margin-top: 9px;
  margin-left: 5px;
}

.show {
  display: block;
}

#arrow_i_up{
  display: none;
  margin-right: 3px;
}

#arrow_i_down {
  display: inline;
  margin-right: 3px;
}
/* end of nav dropdown */

/* end of nav */

/* main section */
.main {
  /* border: 2px solid red; */

  display: flex;
  justify-content: space-between;
  padding: 10px;
}
/* end of main section */

/* main content */

.main-content {
  flex-basis: calc(100% - 300px);
  margin: 0 auto;
}

/* end of main content */

/* rmenu */
.rmenu {
  /* #rmenu_width */
  flex-basis: 270px;
  order: 1;

  direction: rtl;
  font-size: 1.3rem;
  z-index: 1;
  background-color: var(--gray-blue);
  overflow: hidden;
  color: var(--light-blue);

  display: flex;
  flex-direction: column;

  border-radius: 10px 0 0 10px;
  padding: 10px;
}

.rmenu .rmenu-close-btn {
  display: none;

  align-self: flex-end;
  padding: 10px;
}
.rmenu .rmenu-close-btn:hover {
  color: var(--greenest);
  font-weight: bold;
  transform: scale(1.08);
  cursor: pointer;
}

.rmenu .rmenu-photo {
  clear: both;
  padding: 2px;
  margin-top: 8px;
  text-align: center;
}

.rmenu .rmenu-photo img {
  border-radius: 5px 0 0 5px;
}

.rmenu .rmenu-photo:hover {
  transform: scale(1.004);
}
.rmenu .rmenu-head {
  font-weight: bolder;
  margin: 5px 0;
  color: var(--light-blue);
}

.rmenu-item {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-right: 10px !important;
  color: white;
}

.rmenu-key {
  flex: 9;
}
.rmenu-value {
  flex: 1;
  font-weight: bolder;
  margin-right: auto;
}

/* rmenu fades away on tablet size screen */
@media screen and (min-width: 601px) {
  .rmenu .rmenu-close-btn {
    display: none;
  }
}
@media screen and (max-width: 600px) {
  .rmenu {
    position: fixed;
    right: 0;
    top: 0;
    height: 100%;
    opacity: 0.9;
    width: 0;
    transition: all 0.4s linear;

    border-radius: 0;
  }

  .rmenu .rmenu-close-btn {
    display: block;
  }

  .main-content {
    flex-basis: 100%;
  }
}
/* end of rmenu */

/* mobile menu */

.mobile-nav {
  display: none;
}
@media screen and (max-width: 510px) {
  .nav {
    display: none;
  }

  .mobile-nav {
    display: flex;
    flex-direction: column;
    text-align: center;
  }

  .mnav-item {
    background-color: rgba(255, 255, 255, 0.1);
    margin-bottom: 7px;
  }

  .mnav-drop-container {
    transition: all 0.3s linear;
    transform: scaleY(0);
    transform-origin: top;
    height: 0;
    overflow: hidden;
  }

  .mnav-drop-item a {
    text-decoration: none;
    color: var(--light-blue);
    display: block;
    width: 100%;
  }

  .mnav-drop-item a:hover {
    color: var(--greenest);
  }

  .mnav-item a {
    text-decoration: none;
    color: var(--light-blue);
    display: block;
    width: 100%;
  }

  .mnav-item a:hover {
    color: var(--greenest);
  }
}
/* end of mobile menu */
</style>
