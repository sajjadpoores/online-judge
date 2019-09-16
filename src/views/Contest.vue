<template>
  <div class="contest-view">
    <!-- contest-view-header -->
    <div class="contest-view-header">
        <span>مسابقه</span>
    </div>
    <!-- end of contest-view-header -->
    
    <!-- contest info table head -->
    <div class="p-head">
        <span class="p-wide-item">
            زمان شروع
        </span>

        <span class="p-item">
            زمان باقی مانده
        </span>
    </div>
    <!-- end of contest info table head -->

    <!-- contest table body -->
    <div class="p-body">
        <div class="p-row">
            <span class="p-wide-item">
              ۱۳ فروردین ۱۳۹۲ ساعت ۲۲:۴۰
            </span>

            <span class="p-item">
              ۰۱:۲۲:۰۹
            </span>
        </div>
    </div>
    <!-- end of contest table body -->




    <!-- contest table head -->
    <div class="p-head">
        <span class="p-thin-item">
            #
        </span>

        <span class="p-wide-item">
            عنوان
        </span>

        <span class="p-thin-item">
          وضعیت
        </span>

        <span class="p-thin-item">
          مشاهده
        </span>
    </div>
    <!-- end of contest table head -->

    <!-- contest table body -->
    <div class="p-body">
        <div class="p-row">
            <span class="p-thin-item">1</span>

            <span class="p-wide-item">
            <a href="#">چه کسی پنیر مرا برداشته</a></span
            >

            <span class="p-thin-item">
                <font-awesome-icon icon="check"></font-awesome-icon>
            </span>

            <span class="p-thin-item">
                <font-awesome-icon icon="angle-left"></font-awesome-icon>
            </span>
        </div>

        <div class="p-row">
            <span class="p-thin-item">2</span>

            <span class="p-wide-item">
            <a href="#">چه کسی پنیر مرا برداشته</a></span
            >

            <span class="p-thin-item">
                <font-awesome-icon icon="check"></font-awesome-icon>
            </span>

            <span class="p-thin-item">
                <font-awesome-icon icon="angle-left"></font-awesome-icon>
            </span>
        </div>

        <div class="p-row">
            <span class="p-thin-item">3</span>

            <span class="p-wide-item">
            <a href="#">چه کسی پنیر مرا برداشته</a></span
            >

            <span class="p-thin-item">
                <font-awesome-icon icon="times"></font-awesome-icon>
            </span>

            <span class="p-thin-item">
                <font-awesome-icon icon="angle-left"></font-awesome-icon>
            </span>
        </div>

        <div class="p-row">
            <span class="p-thin-item">4</span>

            <span class="p-wide-item">
            <a href="#">چه کسی پنیر مرا برداشته</a></span
            >

            <span class="p-thin-item">
                <font-awesome-icon icon=""></font-awesome-icon>
            </span>

            <span class="p-thin-item">
                <font-awesome-icon icon="angle-left"></font-awesome-icon>
            </span>
        </div>

        <div class="p-row pagination-container">
            <div class="pagination-btns-container">
                <div class="pagination-btn pagination-arrow">
                    <font-awesome-icon icon="angle-right"></font-awesome-icon>
                </div>

                <div class="pagination-btn selected-number">1</div>
                <div class="pagination-btn pagination-arrow">
                    <font-awesome-icon icon="angle-left"></font-awesome-icon>
                </div>
            </div>
            <p class="pagination-info">4 از 4 سوال</p>
        </div>
    </div>
    <!-- end of contest table body -->
  </div>
</template>

<script>
import axios from 'axios'
import { mapState, mapActions } from 'vuex'
export default {
    name: "contest",
    data() {
        return {
            contest_info: {},
            local_problems: []
        }
    },
    methods: {
        ...mapActions(['getProblems']),
        findProblemFromProblems(id){
            for(var i=0; i< this.problems.length; i++){
                if(this.problems[i].problemID === id){
                    this.local_problems.push(this.problems[i])
                    break;
                }
            }
        }
    },
    computed: {
        ...mapState(['backendUrl', 'problems'])
    },
    mounted() {
        var jwt = this.$cookie.get('auth')

        axios.get(this.backendUrl + '/contest/' + this.$route.params.cid, {
            headers: {
            Authorization: jwt
            }
        }).then(response => {
            // success
            this.contest_info = response.data.body
        }).catch(error => {
            // fail
            console.log(error.response)
        })
    },
    watch: {
        contest_info: function() {
            this.getProblems().then(done => {
                this.contest_info.problem.forEach(element => {
                    this.findProblemFromProblems(element.id)
                })
            })
        }
    }
}
</script>

<style scoped>
/* font-awesome styling */
.fa-check {
  color: var(--greenest);
}

.fa-times {
  color: red;
}

.fa-angle-left {
  color: var(--verylight-blue);
  cursor: pointer;
}
/* contest header */
.contest-view-header{
    direction: rtl;
    color: var(--dark-blue);
    background-color: var(--light-gray);
    border-radius: 5px;
    padding: 5px 20px;
    margin-bottom: 20px;
}
/* end of contest header */

/* contest */
.contest-view {
  font-size: 1.2rem;
}

.p-head {
  background-color: var(--light-gray);

  text-align: center;
  border-radius: 5px 5px 0 0;

  display: flex;
  flex-direction: row-reverse;
  padding: 5px;
  margin-top: 10px;
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
  margin-bottom: 20px;
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

/* end of contest */

</style>