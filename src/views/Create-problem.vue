<template>
  <div class="create-problem-view">
      <div class="create-problem-view-header">
        <span>ایجاد سوال جدید</span>
      </div>

    <div class="problem-container">
      <div class="psection ptitle">
        <label>عنوان</label>
        <input type="text" id="titleInput">
      </div>

      <div class="psection ptime">
        <label>محدودیت زمان (ثانیه)</label>
        <input type="number" id="timeInput" value="10">
      </div>

      <div class="psection pmemory">
        <label>محدودیت حافظه</label>
        <input type="number" id="memoryInput" value="1">
      </div>

      <div class="psection poutput">
        <label>محدودیت خروجی</label>
        <input type="number" id="outputInput" value="400">
      </div>

      <div class="psection ptext">
        <label>متن سوال</label>
        <textarea type="text" rows="15" id="contentTextarea"></textarea>
      </div>

      <div class="psection ptestcase">
        <label>فایل تست کیس ها</label>
        <input type="file" id="testcaseInput" value="400">
      </div>
    </div>

  </div>
</template>

<script>
export default {
    name: "createProblem"
}
</script>

<style scoped>
/* create problem header */
  .create-problem-view-header{
      direction: rtl;
      color: var(--dark-blue);
      background-color: var(--light-gray);
      border-radius: 5px;
      padding: 5px 20px;
      margin-bottom: 10px;
  }
/* end of create problem header */

/* problem container */
  .problem-container {
    direction: rtl;
    color: var(--verylight-blue);

    background-color: rgba(255, 255, 255, 0.1);
    padding: 8px;
    padding-top: 1px;
    border-radius: 5px;
  }
  /* end of problem container */

  .psection {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 5px 20px;
  }

  .psection label{
    font-size: 1.3rem;
  }

  .psection input {
      padding: 4px;
      border: 0;
      border-radius: 5px;
      text-align: center;
  }

  .ptext {
    flex-direction: column;
  }

  .ptext label {
    align-self: flex-start;
  }

  .ptext textarea{
    width: 100%;
    margin: 10px 0;
  }
</style>