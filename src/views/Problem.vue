<template>
  <div class="problem-view">
      <!-- problem title -->
      <!-- v-if="problem" -->
      <div class="problem-section p-title">
        {{ problem.name }}
      </div>
      <!-- end of problem title -->

      <!-- problem restrictions -->
      <div class="problem-section p-restriction">
        <div class="rcontent">
          <div class="rkey">
            محدودیت زمان:
          </div>
          <div class="rvalue">
            {{ problem.timelimit}} ثانیه
          </div>
        </div>

        <div class="rcontent">
          <div class="rkey">
            محدودیت حافظه:
          </div>
          <div class="rvalue">
            {{ problem.memorylimit}} مگابایت
          </div>
        </div>

        <div class="rcontent">
          <div class="rkey">
            محدودیت خروجی:
          </div>
          <div class="rvalue">
            {{ problem.outputlimit}} 
          </div>
        </div>

      </div>
      <!-- end of problem restrictions -->

      <!-- problem text -->
      <div class="problem-section p-text">
        {{ parseContent('text') }}
      </div>
      <!-- end of problem text -->

      <!-- problem input -->
      <div class="problem-section p-input-output p-input">
        <h2>ورودی</h2>
        <p>
          {{ parseContent('input') }}
        </p>
      </div>
      <!-- end of problem input -->

      <!-- problem output -->
      <div class="problem-section p-input-output p-output">
        <h2>خروجی</h2>
        <p>
          {{ parseContent('output')}}
        </p>
      </div>
      <!-- end of problem output -->

      <!-- problem example -->
      <div class="problem-section problem-example">
        <h2>
          نمونه
        </h2>
        <div class="problem-example-input">
          <h3>ورودی نمونه</h3>
          <pre>
{{ parseContent('exampleInput') }}
          </pre>
        </div>
        <div class="problem-example-output">
          <h3>خروجی نمونه</h3>
          <pre>
{{ parseContent('exampleOutput') }}
          </pre>
        </div>
      </div>
      <!-- end of problem example -->
      
      <!-- problem submit -->
      <form action="" class="problem-section p-submit" @submit="submitCode">
        <h2>ارسال فایل</h2>
        <input type="file" id="codeInput" />
        <button type="submit" class="submit-btn">ارسال</button>
      </form>
      <!-- end of problem submit -->
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import router from '@/router.js'
import axios from 'axios'
export default {
    name: "problem",
    data() {
        return {
            problem: {}
        }
    },
    props: [
      'pid'
    ],
    computed: {
        ...mapState(['problems', 'backendUrl'])
    },
    methods: {
        ...mapActions(['getProblems']),
        findProblemFromProblems(){
            for(var i=0; i< this.problems.length; i++){
                if(this.problems[i].problemID === this.pid){
                    this.problem = this.problems[i]
                    break;
                }
            }
        },
        b64DecodeUnicode(str) {
            if(str === undefined)
                return ''

            // Going backwards: from bytestream, to percent-encoding, to original string.
            return decodeURIComponent(atob(str).split('').map(function(c) {
                return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
            }).join(''));
        },
        parseContent(mode){
            if(this.problem.content){
                var output = this.b64DecodeUnicode(this.problem.content)
                var output = output.split('!-_-!')

                if(mode === 'text')
                    return this.b64DecodeUnicode(output[0])
                else if(mode === 'input')
                    return this.b64DecodeUnicode(output[1])
                else if(mode === 'output')
                    return this.b64DecodeUnicode(output[2])
                else if(mode === 'exampleInput')
                    return this.b64DecodeUnicode(output[3])
                else if(mode === 'exampleOutput')
                    return this.b64DecodeUnicode(output[4])
            }
            return ''
        },
        submitCode(e) {
            e.preventDefault()
            var codeInput = document.getElementById('codeInput')
            var code = codeInput.files[0]

            var data = new FormData()
            data.append('language', 'cpp')
            data.append('code', code)

            const jwt = this.$cookie.get('auth')
            axios.post(this.backendUrl + '/problem/' + this.pid + '/submissions', data, 
            {
              headers: {
               Authorization: jwt
            }
            }).then(response => {
                  router.push({ name: 'history'})
            }).catch(error => {
                console.log(error.response)
                if(error.response.status === 401)
                    router.push({ name: 'home' })
            })
        }
    },
    mounted() {
      // get all problems if problems array is empty
      this.getProblems().then(() => {
          this.findProblemFromProblems()
      })
    }
}
</script>

<style scoped>
.problem-view {
  direction: rtl;
  color: white;

  background-color: rgba(255, 255, 255, 0.1);
  padding: 8px;
  padding-top: 1px;
  border-radius: 5px;
}

.p-title {
  text-align: center;
  font-weight: bold;
  font-size: 1.5rem;
}

.p-restriction {
  font-size: 1rem;
  display: flex;
  flex-direction: column;

  padding: 10px;
}

.rcontent {
  margin: 5px 0;
  display: flex;
}

.rvalue {
  margin-right: 13px;
}

.p-text {
  margin: 5px 0;
  font-size: 1.3rem;
  padding: 5px;
  margin: 5px 0;
}

.p-input-output h2 {
  font-size: 1.8rem;
  margin: 10px 0;
  color: var(--light-blue);
}

.p-submit {
  margin: 10px 0;
  display: flex;
  flex-direction: column;
}

.p-submit > h2 {
  margin-bottom: 10px;
  font-size: 1.7rem;
  color: var(--light-blue);
}

.p-submit input[type="file"] {
  text-align: center;
}

.p-submit .submit-btn {
    align-self: center;
    margin: 20px 0;
    padding: 5px 20px;
    border: 0;
    border-radius: 5px;

    background-color: var(--greenest);
    color: white;
    font-size: 1.3rem;
    font-family: "vazir", sans-serif;
 }
/* problem example */
.problem-section {
  margin: 15px 0;
  padding: 10px;
  background-color: var(--verylight-blue);
  border-radius: 5px;
  color: var(--dark-blue);
  word-break: break-all;
}

.problem-example > h2{
  margin: 5px 0;
  font-size: 1.7rem;
  color: var(--light-blue);
}

.problem-example .problem-example-input > h3,
 .problem-example .problem-example-output > h3 {
  margin: 5px 0;
  font-size: 1.5rem;
  color: var(--dark-blue);
}

.problem-example .problem-example-input > pre,
 .problem-example .problem-example-output > pre {
  margin: 5px 0;
  font-size: 1.3rem;
  color: var(--dark-blue);
 }

/* end of problem example */
</style>