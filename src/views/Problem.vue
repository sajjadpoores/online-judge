<template>
  <div class="problem-view">
      <!-- problem title -->
      <div class="problem-section p-title">
        چه کسی پنیر مرا برداشته؟
      </div>
      <!-- end of problem title -->

      <!-- problem restrictions -->
      <div class="problem-section p-restriction">
        <div class="rcontent">
          <div class="rkey">
            محدودیت زمان:
          </div>
          <div class="rvalue">
            ۲ ثانیه
          </div>
        </div>

        <div class="rcontent">
          <div class="rkey">
            محدودیت حافظه:
          </div>
          <div class="rvalue">
            ۲۵۶ مگابایت
          </div>
        </div>
      </div>
      <!-- end of problem restrictions -->

      <!-- problem text -->
      <div class="problem-section p-text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio possimus soluta nam. Quae possimus commodi sequi, laborum dolores esse libero minus corrupti excepturi doloribus suscipit id, amet error magnam cum consequuntur neque eligendi facere delectus soluta similique ducimus rem perferendis? Voluptas fuga impedit consectetur quos, reiciendis debitis accusantium nisi, ad, dolor quisquam sit tenetur. Cupiditate ullam aliquid ratione laudantium, officia, repellendus eveniet modi quam odio quas soluta mollitia totam voluptas beatae sed dolore illum voluptate eum, nam error sint iste sunt reprehenderit! Voluptates molestias facilis quidem accusamus repellat laudantium mollitia dicta neque! Tenetur blanditiis molestias asperiores itaque eligendi rerum doloremque ipsam illo placeat, neque dolor consectetur, in ullam ratione minus, sint mollitia? Iusto maiores debitis perspiciatis, in laudantium ea placeat. Minima, voluptatibus. Quaerat reprehenderit molestias explicabo corrupti sunt corporis quibusdam, tempore ea reiciendis, magnam consequuntur facere! Ea dolorem magni aperiam possimus minima vitae odit voluptatibus voluptate nihil velit magnam, cum modi? Magnam tempore atque itaque pariatur quidem unde repellat veritatis quisquam cum consequatur excepturi natus quae autem dolore ab dolores quas voluptatibus, corrupti aliquid beatae exercitationem ducimus quasi obcaecati deserunt. Fugiat quod veniam perspiciatis illum aperiam expedita modi sint facilis?
      </div>
      <!-- end of problem text -->

      <!-- problem input -->
      <div class="problem-section p-input-output p-input">
        <h2>ورودی</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus,
          ullam.
        </p>
      </div>
      <!-- end of problem input -->

      <!-- problem output -->
      <div class="problem-section p-input-output p-output">
        <h2>خروجی</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus,
          ullam.
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
1
2
3
          </pre>
        </div>
        <div class="problem-example-output">
          <h3>خروجی نمونه</h3>
          <pre>
14
          </pre>
        </div>
      </div>
      <!-- end of problem example -->
      
      <!-- problem submit -->
      <form action="" class="problem-section p-submit">
        <h2 for="code">ارسال فایل</h2>
        <input type="file" name="code" />
      </form>
      <!-- end of problem submit -->
  </div>
</template>

<script>
export default {
    name: "problem"
}
</script>

<style scoped>
.problem-view {
  direction: rtl;
  color: white;

  background-color: rgba(255, 255, 255, 0.1);
  padding: 8px;
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

/* problem example */
.problem-section {
  margin: 15px 0;
  padding: 10px;
  background-color: var(--verylight-blue);
  border-radius: 5px;
  color: var(--dark-blue);
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