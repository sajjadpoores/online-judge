<template>
  <div class="create-problem-view">
      <div class="create-problem-view-header">
        <span>ایجاد سوال جدید</span>
      </div>

    <form action="" @submit="createProblem">
      <div class="problem-container">
        <div class="psection ptitle">
          <label>عنوان</label>
          <input type="text" id="titleInput" required>
        </div>

        <div class="psection ptime">
          <label>محدودیت زمان (ثانیه)</label>
          <input type="number" id="timeInput" value="10" required>
        </div>

        <div class="psection pmemory">
          <label>محدودیت حافظه</label>
          <input type="number" id="memoryInput" value="1" required>
        </div>

        <div class="psection poutput">
          <label>محدودیت خروجی</label>
          <input type="number" id="outputInput" value="400" required>
        </div>

        <div class="psection ptext">
          <label>متن سوال</label>
          <textarea required type="text" rows="15" id="contentTextarea"></textarea>
        </div>

        <div class="psection ptext">
          <label>ورودی</label>
          <textarea required type="text" rows="5" id="inputTextarea"></textarea>
        </div>

        <div class="psection ptext">
          <label>خروجی</label>
          <textarea required type="text" rows="5" id="outputTextarea"></textarea>
        </div>

        <div class="psection ptext">
          <label>نمونه ورودی</label>
          <textarea required type="text" rows="5" id="inputExampleTextarea"></textarea>
        </div>

        <div class="psection ptext">
          <label>نمونه خروجی</label>
          <textarea required type="text" rows="5" id="outputExampleTextarea"></textarea>
        </div>

        <div class="psection ptestcase">
          <label>فایل تست کیس ها</label>
          <input required type="file" id="testcaseInput" value="400">
        </div>

        <div class="psection psubmit">
          <button type="submit">ایجاد</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import axios from 'axios'
import { mapState } from 'vuex'
import router from '@/router.js'
export default {
    name: "createProblem",
    computed: {
      ...mapState(['backendUrl'])
    },
    methods: {
      b64EncodeUnicode(str) {
        // first we use encodeURIComponent to get percent-encoded UTF-8,
        // then we convert the percent encodings into raw bytes which
        // can be fed into btoa.
        return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g,
            function toSolidBytes(match, p1) {
                return String.fromCharCode('0x' + p1);
        }));
      },
      createProblem(e){
        e.preventDefault()

        var titleInput = document.getElementById('titleInput')
        var title = titleInput.value

        var timeInput = document.getElementById('timeInput')
        var time = timeInput.value

        var memoryInput = document.getElementById('memoryInput')
        var memory = memoryInput.value

        var outputInput = document.getElementById('outputInput')
        var output = outputInput.value

        var contentTextarea = document.getElementById('contentTextarea')
        var content = contentTextarea.value

        var inputTextarea = document.getElementById('inputTextarea')
        var inputFormat = inputTextarea.value

        var outputTextarea = document.getElementById('outputTextarea')
        var outputFormat = outputTextarea.value

        var inputExampleTextarea = document.getElementById('inputExampleTextarea')
        var inputExample = inputExampleTextarea.value

        var outoutExampleTextarea = document.getElementById('outputExampleTextarea')
        var outputExample = outputExampleTextarea.value

        var finalContent = this.b64EncodeUnicode(content) + '!-_-!' + this.b64EncodeUnicode(inputFormat) + '!-_-!' + this.b64EncodeUnicode(outputFormat) + '!-_-!' + this.b64EncodeUnicode(inputExample) + '!-_-!' + this.b64EncodeUnicode(outputExample)

        finalContent = this.b64EncodeUnicode(finalContent)

        var testcaseInput = document.getElementById('testcaseInput')
        var testcase = testcaseInput.files[0]

        var data = new FormData()
        data.append('name', title)
        data.append('timelimit', time)
        data.append('memlimit', memory)
        data.append('outputLimit', output)
        data.append('testcase', testcase)
        data.append('content', finalContent)

        // get jwt authentication
        const jwt = this.$cookie.get('auth')

        axios.post(this.backendUrl + '/problem', data, 
        {
          headers: {
            Authorization: jwt
          }
        }
        ).then(response => {
          router.push({name: 'problems', params: {type: 'user'}})
        }).catch(error => {
          if(error.response.status === 401)
            router.push({ name: 'home' })
          console.log(error.response)
        })
      }
    }
}
</script>

<style scoped>
  .create-problem-view{
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

  .psection input {
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