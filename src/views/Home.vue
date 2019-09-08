<template>
  <div class="home" @click="windowClick">
      <!-- Register modal -->
    <div id="registerModal" class="modal">
        <div id="registerModalContent" class="modal-content">
            <h2 class="modal-title">ثبت نام</h2>
            <span @click="rCloseBtnClick" id="rCloseBtn" class="close-btn">&times;</span>
            <form class="modalForm" @submit="register">
              <!-- error and success messages -->
              <p class="formError">{{ registerError }}</p>
              <p class="formSuccess">{{ registerSuccess }}</p>
              
                <div class="form-group">
                    <!-- <i class="fa fa-user"></i> -->
                    <font-awesome-icon icon="user" class="form-icon"/>
                    <input id="registerUsername" type="text" placeholder="نام کاربری">
                </div>

                <!-- TODO: add email if wanted (uncomment and add id to input field and do the register method stuff ... -->

                <!-- <div class="form-group"> -->
                    <!-- <i class="fa  fa-envelope"></i> -->
                    <!-- <font-awesome-icon icon="envelope" class="form-icon" /> -->
                    <!-- <input type="email" placeholder="پست الکترونیک"> -->
                <!-- </div> -->

                <div class="form-group">
                    <!-- <i class="fa fa-lock"></i> -->
                    <font-awesome-icon icon="lock" class="form-icon" />
                    <input id="registerPassword" type="password" placeholder="کلمه عبور">
                </div>

                <div class="form-group">
                    <!-- <i class="fa fa-lock"></i> -->
                    <font-awesome-icon icon="lock" class="form-icon" />
                    <input id="registerRePassword" type="password" placeholder="تکرار کلمه عبور">
                </div>

                <div class="form-group">
                    <input id="registerSubmit" type="submit" value="ثبت نام">
                </div>
            </form>
        </div>
    </div>
    <!-- end of Register modal -->

    <!-- Login modal -->
    <div id="loginModal" class="modal">
        <div class="modal-content" id="loginModalContent">
            <h2 class="modal-title">ورود</h2>
            <span @click="lCloseBtnClick" id="lCloseBtn" class="close-btn">&times;</span>
            <form class="modalForm" @submit="login">
                <p class="formError">{{ loginError }}</p>
                <div class="form-group">
                    <!-- <i class="fa fa-user"></i> -->
                    <font-awesome-icon icon="user" class="form-icon" />
                    <input type="text" id="loginUsername" placeholder="نام کاربری">
                </div>

                <div class="form-group">
                    <!-- <i class="fa fa-lock"></i> -->
                    <font-awesome-icon icon="lock" class="form-icon" />
                    <input id="loginPassword" type="password" placeholder="کلمه عبور">
                </div>

                <div class="form-group">
                    <input type="submit" value="ورود">
                </div>
            </form>
        </div>
    </div>
    <!-- end of Login modal -->

    <!-- Header -->
  <header class="header">
    <!-- Header container -->
    <div class="container">
      <!-- Nav -->
        <nav class="nav">
            <div class="logo"><img src="@/assets/img/logo.png" alt="logo" /></div>
            <a href="/dashboard" class="nav-item" v-if="$cookie.get('auth')">داشبورد</a>
            <a href="#" id="registerBtn" class="nav-item" @click="rbtnClick" v-if="!$cookie.get('auth')">ثبت نام</a>
            <a href="#" @click="lbtnClick" id="loginBtn" class="nav-item" v-if="!$cookie.get('auth')">ورود</a>
            <a href="/problems/all" v-if="$cookie.get('auth')" class="nav-item">سوالات</a>
            <a href="/contests" v-if="$cookie.get('auth')" class="nav-item">مسابقات</a>
            <a href="#" @click="logout" class="nav-item" v-if="$cookie.get('auth')">خروج</a>
        </nav>
      <!-- End of nav -->

      <!-- Header info -->
      <div class="header-info">
        <h1 class="header-info-h1">سیستم Mosimehran دانشگاه خیام</h1>
        <p class="header-info-p">
          اولین سیستم مصی مهران در جهان
          <br>
          مهارت‌هات رو در کنار برنامه‌نویس‌های خوب ایرانی محک بزن، رقابت کن،
          جایزه بگیر و سریع‌تر استخدام شو!
        </p>
        <a href="#" @click="rbtnClick" class="header-info-a">عضو شوید</a>
      </div>
      <!-- End of header info -->
    </div>
    <!-- End of header container -->
  </header>
  <!-- End of header -->
  </div>
</template>

<script>
import axios from 'axios'
import { mapState } from 'vuex'
import router from '@/router.js'

export default {
  name: 'home',
  data() {
    return {
      rModal: null,
      rModalContent: null,
      rBtn: null,
      rCloseBtn: null,
      lModal: null,
      lModalContent: null,
      lCloseBtn: null,
      loginError: null,
      registerError: null,
      registerSuccess: null
    }
  },
  components: {
  },
  methods: {
    // method to make program wait before excution of next line!
    wait(ms){
      var start = new Date().getTime();
      var end = start;
      while(end < start + ms) {
        end = new Date().getTime();
      }
    },
    // show register modal on register link click
    rbtnClick() {
      this.rModal.style.display = 'block'
    },
    // show login modal on login link click
    lbtnClick(){
      this.lModal.style.display = 'block'
    },
    windowClick(event){
        if (event.target == this.rModal) {
          this.rModal.style.display = 'none'
        } else if (event.target == this.lModal) {
          this.lModal.style.display = 'none'
        }
    },
    rCloseBtnClick(){
      this.rModal.style.display = 'none'
    },
    lCloseBtnClick(){
      this.lModal.style.display = 'none'
    },
    logout(){
      this.$cookie.delete('auth')
      // refresh the page
      window.location.reload()
    },
    register(e){
      e.preventDefault()
      // clear form messages
      this.registerError = null
      this.registerSuccess = null
      this.loginError = null

      // get form values
      const username = document.getElementById('registerUsername').value
      const password = document.getElementById('registerPassword').value

      const rePassword = document.getElementById('registerRePassword').value

      const submitButton = document.getElementById('registerSubmit')

      if(rePassword !== password){
        this.registerError = 'کلمه عبور و تکرار آن یکسان نیست'
        return
      }

      const user = {
        username,
        password
      }

      // try logging in
      axios.post(this.backendUrl + '/user/register', user).then(
        response => {
          // show success message
          this.registerSuccess = username + ' ثبت نام با موفقیت انجام شد.'
          
          // disable submit button
          submitButton.disabled = true
          // wait 2 sec
          this.wait(2000)
          // close register modal
          this.rCloseBtnClick()
          // open login modal
          this.lbtnClick()
        }
      ).catch(
        error => {
          this.registerError = 'کلمه عبور باید حداقل ۸ کاراکتر و ترکیبی از حرف و عدد باشد'

          if(error.response.data.type === 'duplicateUser')
            this.registerError = 'نام کاربری تکراری می باشد.'
          console.log(error.response)
        }
      )
    },
    login(e) {
      e.preventDefault()
      // clear error message
      this.loginError = null

      // get form values
      const username = document.getElementById('loginUsername').value
      const password = document.getElementById('loginPassword').value

      const user = {
        username,
        password
      }

      // try logging in
      axios.post(this.backendUrl + '/user/login', user).then(
        response => {
          // success
          const jwt = response.data.token
          this.$cookie.set('auth', jwt)
          router.push({name: 'dashboard'})
        }
      ).catch(
        error => {
          this.loginError = 'نام کاربری یا کلمه عبور اشتباه است'
          console.log(error.response)
        }
      )
    }
  },
  computed: {
    ...mapState(['backendUrl'])
  },
  mounted() {
    // register Modal variables
    this.rModal = document.getElementById('registerModal')
    this.rModalContent = document.getElementById('registerModalContent')
    this.rBtn = document.getElementById('registerBtn')
    this.rCloseBtn = document.getElementById('rCloseBtn')

    // login Modal variables
    this.lModal = document.getElementById('loginModal')
    this.lModalContent = document.getElementById('loginModalContent')
    this.lBtn = document.getElementById('loginBtn')
    this.lCloseBtn = document.getElementById('lCloseBtn')

  }
}
</script>

<style scoped>
.home {
  color: var(--lightest);
  font-size: 1.6rem;
  font-family: 'vazir', sans-serif;

  --darkest: #000;
  --lightest: #fff;
  --dark: #28464b;
  --light-dark: #3a506b;
  --green-blue: #00a9a5;
  --light-blue: #baedff;
  --sky-blue: #56cbf9;
}

/* header */
.header {
  background: url('../assets/img/header.jpg') center / cover no-repeat;
}
/* header container */
.header .container {
  height: 100vh;
  width: 60%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
}
/* end of header container */
/* end of header */

/* nav */
.nav {
  flex: 1;

  display: flex;
  flex-direction: row-reverse;
  /* flex-wrap: wrap; */
  margin-bottom: 10px;
  font-size: 1.3rem;
}

.nav .nav-item {
  margin-right: 10px;
  display: flex;
  align-items: center;
}

.nav .logo {
  order: 1;
  margin-right: auto;
  margin-left: 10px;
  margin-top: 5px;
}

.nav .nav-item {
  text-decoration: none;
  color: var(--light-blue);
  padding: 0 10px;
}

.nav .nav-item:hover {
  color: var(--lightest);
}

@media screen and (max-width: 765px) {
  .nav {
    flex-wrap: wrap;
    justify-content: center;
  }

  .nav .logo {
    order: -1;
    flex-basis: 100%;
    text-align: center;
  }

  /* .nav .nav-item {
    flex-basis: 48%;
  }

  .nav .nav-item:nth-child(2) {
    flex: 2;
  } */
}
/* end of nav */

/* header-info */
.header-info {
  flex: 9;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  text-align: right;
}

.header-info-h1 {
  font-size: 3rem;
  margin-bottom: 50px;
  text-align: center;
  direction: rtl;
}

.header-info-p {
  font-size: 1.5rem;
  border-right: var(--sky-blue) solid 2px;
  padding-right: 10px;
}

.header-info-a {
  text-align: center;
  margin-top: 20px;
  padding: 10px;
  text-decoration: none;
  color: var(--lightest);
  border-radius: 3px;
  background-color: var(--green-blue);
  width: 150px;
  /* margin-left: auto; */
  transition: color 0.6s linear, background-color 0.6s linear;
}

.header-info-a:hover {
  color: var(--green-blue);
  background-color: var(--lightest);
}
/* end of header-info */

/* General modal rules */
.modal-title {
  color: var(--green-blue);
  margin-bottom: 10px;
}

.modal {
  width: 100%;
  height: 100%;
  overflow: auto;
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */

  display: none; /* Hidden by default */
  text-align: center;
}

.modal-content {
  width: 80%;
  margin: 40vh auto;
  background-color: white;
  padding: 30px;

  position: relative;
  border-radius: 5px;
}

.modalForm {
  display: flex;
  flex-direction: column;
  align-items: center;
  direction: rtl;

  border: 3px solid var(--green-blue);
  padding: 10px;
  border-radius: 5px;
}

.modalForm .form-group {
  position: relative;
  display: flex;
  flex-direction: row-reverse;
  justify-content: center;
  margin-top: 8px;

  border-radius: 5px;
}

.modalForm .form-group .form-icon {
  position: absolute;
  right: 5px;
  top: 8px;
  padding: 3px;
  color: var(--green-blue);
}

.modalForm .form-group input {
  padding: 4px 25px 4px 4px;
  text-align: center;
  width: 100%;
  font-family: 'vazir', sans-serif;
}

.modalForm .form-group input[type='submit'] {
  padding: 15px 18px;
  border-radius: 3px;
  border: 0;
  flex: 1;
  background-color: var(--green-blue);
  color: var(--lightest);
  font-size: 1.2rem;
}

.modalForm .form-group input[type='submit']:hover {
  color: var(--green-blue);
  background-color: var(--lightest);
}

.close-btn {
  color: var(--green-blue);
  position: absolute;
  z-index: 2;
  left: 9px;
  top: 5px;
  font-size: 28px;
  font-weight: bold;
}

.close-btn:hover,
.close-btn:focus {
  color: var(--darkest);
  text-decoration: none;
  cursor: pointer;
}

.formError {
  color: red;
  font-size: 1.2rem;
  margin: 15px 0;
}

.formSuccess {
  color: green;
  font-size: 1.2rem;
  margin: 15px 0;
}
/* End of general modal rules */

/* Register modal */
#registerModal {
  background-color: rgba(0, 0, 0, 0.7); /* Black w/ opacity */
}

/* End of Register modal */

/* Login modal */
#loginModal {
  background-color: rgba(0, 0, 0, 0.7); /* Black w/ opacity */
}

/* End of Login modal */

</style>
