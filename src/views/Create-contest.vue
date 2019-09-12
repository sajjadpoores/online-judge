<template>
    <div class="create-contest-view">
        <div class="create-problem-view-header">
            <span>ایجاد سوال جدید</span>
        </div>

        <form action="" @submit="createContest">
            <div class="problem-container">
                <div class="psection ptitle">
                    <label>نام</label>
                    <input type="text" id="nameInput">
                </div>

                <div class="psection">
                    <label>زمان پنالتی</label>
                    <input type="number" id="penaltyInput" value="20">
                </div>

                <div class="psection">
                    <label>زمان شروع</label>
                    <input
                        type="text"
                        v-model="startDateTime"
                        id="startDateInput"
                        placeholder="زمان شروع"
                    />
                </div>
                <custom-date-picker
                    v-model="startDateTime"
                    element="startDateInput"
                    type="datetime"
                />

                <div class="psection">
                    <label>زمان پایان</label>
                    <input
                        type="text"
                        v-model="endDateTime"
                        id="endDateInput"
                        placeholder="زمان پایان"
                    />
                </div>
                <custom-date-picker
                    v-model="endDateTime"
                    element="endDateInput"
                    type="datetime"
                />

                <div class="psection">
                    <label>سوالات</label>
                    <!-- <select multiple v-model="selectedProblems">
                      <option v-for="problem in problems" :key="problem.problemID" :value="problem.problemID">{{ problem.name }}</option>
                    </select> -->

                    <multiselect v-model="selectedProblems" :options="problems" :multiple="true" 
                    :close-on-select="false"
                    :preserve-search="true" placeholder="سوالات مورد نظر را انتخاب کنید" label="name" track-by="problemID" :preselect-first="true">
                    </multiselect>
                </div>

                <div class="psection psubmit">
                    <button type="submit">ایجاد</button>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
import moment from 'moment-jalaali';
import { mapActions, mapState } from 'vuex'
import axios from 'axios'
export default {
    name: "createContest",
    data() {
        return {
            startDateTime: null,
            endDateTime: null,
            selectedProblems: [],
            problemOptions: []
        }
    },
    methods: {
        ...mapActions(['getProblems']),
        createContest(e) {
            e.preventDefault()
            var nameInput = document.getElementById('nameInput')
            var name = nameInput.value

            var penaltyInput = document.getElementById('penaltyInput')
            var penalty_time = penaltyInput.value

            var start_time = this.startDateTime
            start_time = moment(this.startDateTime, 'jYYYY/jM/jD HH:mm').format('YYYY-MM-DDTHH:mm:ss+04:30')

            var end_time = this.endDateTime
            end_time = moment(this.endDateTime, 'jYYYY/jM/jD HH:mm').format('YYYY-MM-DDTHH:mm:ss+04:30')

            var problem = []
            this.selectedProblems.forEach(element => {
              problem.push({
                id: element.problemID
              })
            })

            // var data = new FormData()
            // data.append('name', name)
            // data.append('penalty_time', penalty)
            // data.append('start_time', start)
            // data.append('end_time', end)
            // data.append('problem', problem)

            var data = {
              name,
              penalty_time: penalty_time.toString(),
              start_time,
              end_time,
              problem
            }

            const jwt = this.$cookie.get('auth')
            axios.post(this.backendUrl + '/contest', data, {
              headers: {
                Authorization: jwt
              }
            }).then(response => {
              console.log(response)
            }).catch(error => {
              console.log(error.response)
            })
        }
    },
    computed: {
      ...mapState(['problems', 'backendUrl'])
    },
    mounted() {
      this.getProblems().then(
        done => {
          this.problems.forEach(element => {
            this.problemOptions.push({
              name: element.name,
              id: element.problemID
            })
          })
        }
      )
    }
}
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>

<style scoped>
.create-contest-view{
    color: var(--verylight-blue);
    direction: rtl;
  }

/* create problem header */
  .create-problem-view-header{
      color: var(--dark-blue);
      background-color: var(--light-gray);
      border-radius: 5px;
      padding: 5px 20px;
      margin-bottom: 10px;
  }
/* end of create problem header */

/* problem container */
  .problem-container {
    background-color: rgba(255, 255, 255, 0.1);
    padding: 10px;
    padding-top: 1px;
    border-radius: 5px;
  }
  /* end of problem container */

  .psection {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 10px 0;
  }

  @media screen and (max-width: 680px) {
    .psection {
      flex-direction: column;
    }
  }

  .psection label{
    font-size: 1.3rem;
  }

  .psection input, .multiselect {
      padding: 6px;
      border: 0;
      border-radius: 5px;
      text-align: center;
      flex-basis: 70%;
  }

  .ptext {
    flex-direction: column;
  }

  .ptext label {
    align-self: flex-start;
    margin-top: 5px;
  }

  .ptext textarea{
    width: 100%;
    margin: 20px 0;
    font-family: "vazir", sans-serif;
    padding: 10px;
  }

  .psubmit {
    justify-content: center;
  }

  .psubmit button {
    padding: 5px 10px;
    flex-basis: 30%;
    border: 0;
    font-size: 1.3rem;
    font-family: "vazir", sans-serif;
    background-color: var(--greenest);
    color: white;
  }
</style>