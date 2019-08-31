<template>
  <div class="submit-history-view">
    <!-- submit-history-view-header -->
    <div class="submit-history-view-header">
        <span>تاریخچه ارسال پاسخ</span>
    </div>

    <!-- submit-history table head -->
    <div class="p-head">
        <span class="p-thin-item">
            #
        </span>

        <span class="p-item">
          عنوان
        </span>

        <span class="p-thin-item">
          وضعیت
        </span>

        <span class="p-item">
          تاریخ ارسال
        </span>
    </div>
    <!-- end of submit-history table head -->

    <!-- submit-history table body -->
    <div class="p-body">
        <div class="p-row">
            <span class="p-thin-item">1</span>

            <span class="p-item">
            <a href="#">چه کسی پنیر مرا برداشته</a></span
            >

            <span class="p-thin-item wrong-answer">
                غلط
            </span>

            <span class="p-item">
                ۱۳ فروردین ۱۳۹۲ ساعت ۲۲:۴۰
            </span>
        </div>

        <div class="p-row">
            <span class="p-thin-item">2</span>

            <span class="p-item">
            <a href="#">چه کسی پنیر مرا برداشته</a></span
            >

            <span class="p-thin-item accepted">
                درست
            </span>

            <span class="p-item">
                ۱۳ فروردین ۱۳۹۲ ساعت ۲۲:۴۰
            </span>
        </div>

        <div class="p-row">
            <span class="p-thin-item">3</span>

            <span class="p-item">
            <a href="#">چه کسی پنیر مرا برداشته</a></span
            >

            <span class="p-thin-item compile-error">
                خطا کامپایلر
            </span>

            <span class="p-item">
                ۱۳ فروردین ۱۳۹۲ ساعت ۲۲:۴۰
            </span>
        </div>

        <div class="p-row">
            <span class="p-thin-item">4</span>

            <span class="p-item">
            <a href="#">چه کسی پنیر مرا برداشته</a></span
            >

            <span class="p-thin-item wrong-answer">
                غلط
            </span>

            <span class="p-item">
                ۱۳ فروردین ۱۳۹۲ ساعت ۲۲:۴۰
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
    <!-- end of submit-history table body -->
  </div>
</template>

<script>
export default {
    name: "submit-history"
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

/* submit-history header */
.submit-history-view-header{
    direction: rtl;
    color: var(--dark-blue);
    background-color: var(--light-gray);
    border-radius: 5px;
    padding: 5px 20px;
    margin-bottom: 20px;
}
/* end of submit-history header */

/* submit-history */
.submit-history-view {
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
    cursor: default !important;
}
/* end of pagination */

/* submit statuses */
.wrong-answer {
  background-color: red;
  border-radius: 5px;
  display: inline;
}

.accepted {
  background-color: var(--greenest);
  border-radius: 5px;
}

.compile-error {
  background-color: orange;
  border-radius: 5px;
}
/* end of submit statuses */
/* end of submit-history */


</style>