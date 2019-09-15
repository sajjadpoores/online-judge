<template>
  <div class="contests-view">
    <!-- contests-view-header -->
    <div class="contests-view-header">
        <span>مسابقات</span>
    </div>
    <!-- end of contests-view-header -->

    <!-- contests table head -->
    <div class="p-head">
        <span class="p-thin-item">
            #
        </span>

        <span class="p-item">
            عنوان
        </span>

        <span class="p-wide-item">
            تاریخ شروع
        </span>

        <span class="p-wide-item">
            تاریخ پایان
        </span>

        <span class="p-thin-item"></span>
    </div>
    <!-- end of contests table head -->

    <!-- contests table body -->
    <div class="p-body">
        <div class="p-row" v-for="(contest, index) in computeIndex" :key="contest.contestID">
            <span class="p-thin-item">{{ index | getIndexByPage(page) }}</span>

            <span class="p-item">
                <router-link :to="contestLink(contest.contestID)"> {{ contest.name }}</router-link>
            </span>

            <span class="p-wide-item">
            ۱۳ فروردین ۱۳۹۲ ساعت ۱۲:۲۲
            </span>

            <span class="p-wide-item">
            ۱۳ فروردین ۱۳۹۲ ساعت ۲۲:۴۰
            </span>

            <span class="p-thin-item">
                <font-awesome-icon icon="user-plus"></font-awesome-icon>
            </span>
        </div>

        <div class="p-row">
            <span class="p-thin-item">1</span>

            <span class="p-item">
            <a href="#">مقدماتی جام جهانی</a></span
            >

            <span class="p-wide-item">
            ۱۳ فروردین ۱۳۹۲ ساعت ۱۲:۲۲
            </span>

            <span class="p-wide-item">
            ۱۳ فروردین ۱۳۹۲ ساعت ۲۲:۴۰
            </span>

            <span class="p-thin-item">
                <font-awesome-icon icon="user-plus"></font-awesome-icon>
            </span>
        </div>

        <div class="p-row">
            <span class="p-thin-item">1</span>

            <span class="p-item">
            <a href="#">مقدماتی جام جهانی</a></span
            >

            <span class="p-wide-item">
            ۱۳ فروردین ۱۳۹۲ ساعت ۱۲:۲۲
            </span>

            <span class="p-wide-item">
            ۱۳ فروردین ۱۳۹۲ ساعت ۲۲:۴۰
            </span>

            <span class="p-thin-item">
                <font-awesome-icon icon="user-plus"></font-awesome-icon>
            </span>
        </div>

        <div class="p-row">
            <span class="p-thin-item">1</span>

            <span class="p-item">
            <a href="#">مقدماتی جام جهانی</a></span
            >

            <span class="p-wide-item">
            ۱۳ فروردین ۱۳۹۲ ساعت ۱۲:۲۲
            </span>

            <span class="p-wide-item">
            ۱۳ فروردین ۱۳۹۲ ساعت ۲۲:۴۰
            </span>

            <span class="p-thin-item">
                <font-awesome-icon icon="user-plus"></font-awesome-icon>
            </span>
        </div>

        <div class="p-row">
            <span class="p-thin-item">1</span>

            <span class="p-item">
            <a href="#">مقدماتی جام جهانی</a></span
            >

            <span class="p-wide-item">
            ۱۳ فروردین ۱۳۹۲ ساعت ۱۲:۲۲
            </span>

            <span class="p-wide-item">
            ۱۳ فروردین ۱۳۹۲ ساعت ۲۲:۴۰
            </span>

            <span class="p-thin-item">
                <font-awesome-icon icon="user-plus"></font-awesome-icon>
            </span>
        </div>

        <div class="p-row">
            <span class="p-thin-item">1</span>

            <span class="p-item">
            <a href="#">مقدماتی جام جهانی</a></span
            >

            <span class="p-wide-item">
            ۱۳ فروردین ۱۳۹۲ ساعت ۱۲:۲۲
            </span>

            <span class="p-wide-item">
            ۱۳ فروردین ۱۳۹۲ ساعت ۲۲:۴۰
            </span>

            <span class="p-thin-item">
                <font-awesome-icon icon="user-plus"></font-awesome-icon>
            </span>
        </div>

        <div class="p-row pagination-container">
            <div class="pagination-btns-container">
                <div class="pagination-btn pagination-arrow">
                    <font-awesome-icon icon="angle-right"></font-awesome-icon>
                </div>

                <div class="pagination-btn selected-number">1</div>
                <div class="pagination-btn">2</div>
                <div class="pagination-btn">3</div>
                <div class="pagination-btn">...</div>
                <div class="pagination-btn">21</div>
                <div class="pagination-btn pagination-arrow">
                    <font-awesome-icon icon="angle-left"></font-awesome-icon>
                </div>
            </div>
            <p class="pagination-info">۲۰ از ۴۲۰ سوال</p>
        </div>
    </div>
    <!-- end of contests table body -->      
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
    name: "contests",
    data() {
        return {
            page: 0,
            local_contests: [],
            has_next: true
        }
    },
    props: {
        type: String
    },
    computed: {
        ...mapState(['contests', 'myContests']),
        computeIndex() {
            if(this.type === 'all')
                this.local_contests = this.contests.slice(this.page*5, this.page*5+5)
            else if(this.type === 'user')
                this.local_contests = this.myContests.slice(this.page*5, this.page*5+5)
                
            return this.local_contests
        }
    },
    methods: {
        ...mapActions(['getContests']),
        nextPage(){
            if ((this.page +1)*5 + 1 < this.local_contests.length)
                this.page++
        },
        pervPage(){
            if(this.page > 1)
                this.page--
        },
        contestLink(id){
            return `/contest/${id}`
        }
    },
    mounted() {
        if(this.type === undefined)
        this.type = 'all'
    
        if(this.type === 'all')
            this.getContests()
        else{
            var jwt = this.$cookie.get('auth')
            this.getContests('user')
        }

        console.log(this.local_contests)
    },
    filters: {
        plus_one(index){
            return index + 1
        },
        getIndexByPage(index, page){
            return page*5 + index + 1
        }
    }
}
</script>

<style scoped>
/* font-awesome styling */
.fa-user-plus {
    color: var(--greenest);
    cursor: pointer;
}

.fa-user-plus:hover{
    color: white;
}

/* contests header */
.contests-view-header{
    direction: rtl;
    color: var(--dark-blue);
    background-color: var(--light-gray);
    border-radius: 5px;
    padding: 5px 20px;
    margin-bottom: 10px;
}
/* end of contests header */

/* contests */
.contests-view {
  font-size: 1.2rem;
}

.p-head {
  background-color: var(--light-gray);

  text-align: center;
  border-radius: 5px 5px 0 0;

  display: flex;
  flex-direction: row-reverse;
  padding: 5px;
}

.p-item {
  flex: 2;
}

.p-thin-item {
  flex: 1;
}

.p-wide-item {
  flex: 3;
}

.p-body {
  display: flex;
  flex-direction: column;
  color: white;
}

.p-body span {
    direction: rtl;
}

.p-row {
  display: flex;
  flex-direction: row-reverse;
  align-items: center;

  text-align: center;

  background-color: var(--gray-blue);
  margin-top: 4px;
}

.p-row:last-child{
    border-radius: 0px 0px 5px 5px;   
}
.p-row a {
  text-decoration: none;
  color: var(--verylight-blue);
}

.p-row a:hover {
  color: var(--medium-light-blue);
}

/* pagination */
.pagination-container {
    direction: rtl;
    padding: 5px;

    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
}

.pagination-info {
    flex-basis: 30%;
    white-space: nowrap;
}

.pagination-btns-container {
    flex-basis: 65%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
}

.pagination-btn {
    padding: 2px 10px;
    background-color: var(--greenest);
    color: white;
    margin: 2px;
    cursor: pointer;
    border-radius: 5px;
}

.pagination-btn:hover {
    background-color: white;
    color: var(--greenest);
}

.pagination-arrow {
    margin: 1px 3px;
}

.pagination-btns-container .selected-number {
    background-color: white;
    color: var(--greenest);
    cursor: default;
}
/* end of pagination */

/* end of contests */

</style>