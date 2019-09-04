<template>
  <div class="profile-view">
      <!-- profile-view header -->
      <div class="profile-view-header">
          <span>پروفایل</span>
      </div>
      <!-- end of profile-view header -->

      <!-- profile-view content -->
      <div class="profile-view-content">
          <!-- avatar column -->
        <div class="avatar-col">
            <img :src="avatar_src" alt="">
            <button class="upload-btn">آپلود تصویر</button>
        </div>
        <!-- end of avatar column -->

        <!-- detail column -->
        <div class="detail-col">
            <!-- detail items (profile form) -->
            <div class="detail-item">
                <div class="detail-item-key">
                    نام کاربری
                </div>
                <div class="detail-item-value">
                    <input type="text" :value="profileDetail.username" :disabled="[true]" class="nice-input"
                    id="usernameInput"
                    >

                    <font-awesome-icon icon="edit" class="clickable" @click="editUsername"
                    id="editUsernameIcon"
                    />
                </div>
            </div>

            <div class="detail-item">
                <div class="detail-item-key">
                    کلمه عبور
                </div>
                <div class="detail-item-value">

                    <div class="multiple-input-container">
                        <input type="password" placeholder="" 
                        value=".........." 
                        :disabled="[true]"
                        class="nice-input"
                        >

                        <input type="password" placeholder="پسورد جدید" :disabled="[true]"
                        class="nice-input" 
                        v-if="false"
                        >

                        <input type="password" placeholder="تکرار پسورد جدید" :disabled="[true]"
                        class="nice-input" 
                        v-if="false"
                        >
                    </div>

                    <font-awesome-icon icon="edit" class="clickable"/>
                </div>
            </div>


            <div class="detail-item">
                <div class="detail-item-key">
                    ایمیل
                </div>
                <div class="detail-item-value">
                    <input type="email" 
                    :disabled="[true]"
                    class="nice-input"
                    :value="profileDetail.email"
                    >

                    <font-awesome-icon icon="edit" class="clickable"/>
                </div>
            </div>
            
            <div class="detail-item">
                <div class="detail-item-key">
                    شماره دانشجویی
                </div>
                <div class="detail-item-value">
                    <input type="text" 
                    :disabled="[true]"
                    class="nice-input"
                    :value="profileDetail.studentID"
                    >

                    <font-awesome-icon icon="edit" class="clickable"/>
                </div>
            </div>


            <div class="detail-item">
                <div class="detail-item-key">
                    شماره ملی
                </div>
                <div class="detail-item-value">
                    <input type="text"
                    :disabled="[true]"
                    class="nice-input"
                    :value="profileDetail.nationalID"
                    >

                    <font-awesome-icon icon="edit" class="clickable"/>
                </div>
            </div>

            <div class="detail-item">
                <div class="detail-item-key">
                    شماره تلفن
                </div>
                <div class="detail-item-value">
                    <input type="text"
                    :disabled="[true]"
                    class="nice-input"
                    :value="profileDetail.phone"
                    >

                    <font-awesome-icon icon="edit" class="clickable"/>
                </div>
            </div>
            <!-- end of detail items (profile form) -->

            <!-- detail items (problems and contests) -->
            <div class="detail-label-item">
                <div class="detail-label-item-key">
                    سوالات حل شده
                </div>
                <div class="detail-label-item-values">
                    <div class="detail-label-item-value">1323</div>
                    <div class="detail-label-item-value">1253</div>
                    <div class="detail-label-item-value">1263</div>
                    <div class="detail-label-item-value">4323</div>
                    <div class="detail-label-item-value">564</div>
                    <div class="detail-label-item-value">6424</div>
                    <div class="detail-label-item-value">22311</div>
                </div>
            </div>


            <div class="detail-label-item">
                <div class="detail-label-item-key">
                    مسابقات شرکت کرده
                </div>
                <div class="detail-label-item-values">
                    <div class="detail-label-item-value">1323</div>
                    <div class="detail-label-item-value">1253</div>
                    <div class="detail-label-item-value">1263</div>
                    <div class="detail-label-item-value">4323</div>
                    <div class="detail-label-item-value">564</div>
                    <div class="detail-label-item-value">6424</div>
                    <div class="detail-label-item-value">22311</div>
                    <div class="detail-label-item-value">22311</div>
                    <div class="detail-label-item-value">22311</div>
                    <div class="detail-label-item-value">22311</div>
                    <div class="detail-label-item-value">22311</div>
                    <div class="detail-label-item-value">22311</div>
                    <div class="detail-label-item-value">22311</div>
                    <div class="detail-label-item-value">22311</div>
                    <div class="detail-label-item-value">22311</div>
                    <div class="detail-label-item-value">22311</div>
                    <div class="detail-label-item-value">22311</div>

                </div>
            </div>
        <!-- end of detail items (problems and contests) -->
        </div>
        <!-- end of detail column -->
      </div>
      <!-- end of profile-view content -->
  </div>
</template>

<script>
import axios from 'axios'
import { mapState } from 'vuex'
export default {
    name: "profile",
    data(){
        return {
            // TODO: add profile response here
            profileDetail: {
                username: null,
                email: null,
                phone: null,
                nationalID: null,
                studentID: null,
                avatar_url: null
            }
        }
    },
    methods: {
        editUsername(){
            var usernameInput = document.getElementById('usernameInput')
            var editUsernameIcon = document.getElementById('editUsernameIcon')
            // enable the field
            usernameInput.disabled = false
            console.log(editUsernameIcon)
            editUsernameIcon.icon = "check"
            
        }
    },
    computed: {
        ...mapState(['backendUrl']),
        avatar_src(){
            if(this.profileDetail)
                return this.backendUrl +  this.profileDetail.avatar_url
            return ''
        }
    },
    mounted(){
        // 
        const jwt = this.$cookie.get('auth')

        axios.get('http://178.22.122.251:3000/profile', {
            headers: {
                Authorization: jwt
            }
        }).then(response => {
            this.formData = this.profileDetail = response.data.body
        })
        .catch((error) => {
        //  do nothing
        })
    }
}
</script>

<style scoped>
    /* general rules */
    .clickable{
        cursor: pointer;
    }
    
    .nice-input{
        padding: 7px;
        border: 0;
        border-radius: 5px;
        text-align: center;
    }

    .multiple-input-container {
        display: flex;
        flex-direction: column;
    }

    .multiple-input-container > * {
        flex-basis: 100%;
        /* TODO: add margin-top on edit password */
        margin-top: 10px;
    }

    .multiple-input-container > *:first-child{
        flex-basis: 100%;
        /* TODO: add margin-top on edit password */
        margin-top: 0px;
    }

    /* end of general rules */

    /* whole view */
    .profile-view{
        font-size: 1.4rem;
        direction: rtl;
        margin: 10px;
    }
    /* end of whole view */

    /* profile header */
    .profile-view-header{
        color: var(--dark-blue);
        background-color: var(--light-gray);
        border-radius: 5px;
        padding: 5px 20px;
        margin: 8px;
    }
    /* end of profile header */

    /* profile container */
    .profile-view-content{
        background-color: var(--gray-blue);
        border-radius: 5px;
        padding: 5px;
        margin: 8px;
        display: flex;
        align-items: center;
        justify-content: space-evenly;
    }

    .profile-view-content > * {
        margin: 0 10px;
    }
    /* end of profile container */

    /* avatar section */
    .profile-view-content .avatar-col{
        /* flex: 2; */
        padding: 5px;

        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .profile-view-content .avatar-col > *{
        margin-bottom: 8px;
        width: 250px;
        border-radius: 5px;
    }

    .profile-view-content .avatar-col .upload-btn {
        padding: 5px;
        border: 0;
        font-size: 1.3rem;
        font-family: "vazir", sans-serif;
        background-color: var(--greenest);
        color: white;
    }

    /* end of profile section */

    /* detail section */

    .profile-view-content .detail-col{
        /* flex: 4; */
        padding: 10px;
    }

    /* detail item */
    .profile-view-content .detail-col .detail-item{
        display: flex;
        flex-wrap: wrap;
        margin: 10px 0;
        flex: 1;
    }

    .profile-view-content .detail-col .detail-item .detail-item-key{
        flex: 3;
        font-size: 1.3rem;
    }

    .profile-view-content .detail-col .detail-item .detail-item-value{
        flex: 7;
        direction: ltr;
        display: flex;
        align-items: baseline;
    }
    .profile-view-content .detail-col .detail-item .detail-item-value > *:first-child{
        flex-basis: 90%;
    }


    .profile-view-content .detail-col .detail-item .detail-item-value > *:nth-child(2){
        position: relative;
        top: 4px;

        margin-left: 2%;
        margin-right: auto;
    }

    .profile-view-content .detail-col .detail-item .detail-item-value svg{
        color: var(--greenest);
    }

    /* change detail items on tablet size screens */
    @media screen and (max-width: 735px) {
        .profile-view-content .detail-col .detail-item{
            flex-direction: column;
            align-items: center;
        }

        .profile-view-content .detail-col .detail-item .detail-item-value > *:first-child{
            flex-basis: 100%;
        }

        .profile-view-content .detail-col .detail-item .detail-item-value > *:nth-child(2){
            flex-basis: 96%;
            margin-left: 2%;
        }

        .profile-view-content .avatar-col > *{
            width: 200px;
        }

    }


    /* change detail items on mobile size screens */

    @media screen and (max-width: 675px) {
        .profile-view-content{
            flex-direction: column;
        }

        .profile-view-content .avatar-col > *{
            width: 100%;
        }
    }


    /* end of detail item */

    /* label item */
    .detail-label-item{
        margin-top: 30px;
        display: flex;
        flex-direction: column;
    }

    .detail-label-item-key{
        font-size: 1.3rem;
    }

    .detail-label-item-values{
        margin-top: 5px;
        display: flex;
        flex-wrap: wrap;
    }

    .detail-label-item-value{
        font-size: 1.2rem;
        margin: 2px;
        padding: 3px;
        border-radius: 5px;
        color: var(--verylight-blue);
        background-color: var(--light-blue);
    }
    /* end of label item */

    /* end of detail section */
</style>