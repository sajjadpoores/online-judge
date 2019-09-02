<template>
  <div class="problems-view">
    <!-- problems-view-header -->
    <div class="problems-view-header">
        <span>سوالات</span>
    </div>


    <!-- problems table head -->
    <div class="p-head">
        <span class="p-thin-item">
            #
        </span>

        <span class="p-wide-item">
            عنوان
        </span>

        <span class="p-wide-item">
            برچسب
        </span>

        <span class="p-item">
            تعداد حل
        </span>

        <span class="p-thin-item"></span>
    </div>
    <!-- end of problems table head -->

    <!-- problems table body -->
    <div class="p-body">
        <div class="p-row">
            <span class="p-thin-item">1</span>

            <span class="p-wide-item">
                <a href="#">چه کسی پنیر مرا برداشته</a>
            </span>

            <span class="p-wide-item">
            بازگشتی
            </span>

            <span class="p-item">
            120
            </span>

            <span class="p-thin-item">
                <font-awesome-icon icon="check"></font-awesome-icon>
            </span>
        </div>

        <div class="p-row">
            <span class="p-thin-item">1</span>

            <span class="p-wide-item">
                <a href="#">چه کسی پنیر مرا برداشته</a>
            </span>

            <span class="p-wide-item">
            بازگشتی
            </span>

            <span class="p-item">
            120
            </span>

            <span class="p-thin-item">
                <font-awesome-icon icon="check"></font-awesome-icon>
            </span>
        </div>

        <div class="p-row">
            <span class="p-thin-item">1</span>

            <span class="p-wide-item">
            <a href="#">چه کسی پنیر مرا برداشته</a>
            </span>

            <span class="p-wide-item">
            بازگشتی
            </span>

            <span class="p-item">
            120
            </span>

            <span class="p-thin-item">
                <font-awesome-icon icon="times"></font-awesome-icon>
            </span>
        </div>

        <div class="p-row">
            <span class="p-thin-item">1</span>

            <span class="p-wide-item">
            <a href="#">چه کسی پنیر مرا برداشته</a></span
            >

            <span class="p-wide-item">
            بازگشتی
            </span>

            <span class="p-item">
            120
            </span>

            <span class="p-thin-item">
                <font-awesome-icon icon="check"></font-awesome-icon>
            </span>
        </div>

        <div class="p-row">
            <span class="p-thin-item">1</span>

            <span class="p-wide-item">
            <a href="#">چه کسی پنیر مرا برداشته</a></span
            >

            <span class="p-wide-item">
            بازگشتی
            </span>

            <span class="p-item">
            120
            </span>

            <span class="p-thin-item">
                <font-awesome-icon icon="check"></font-awesome-icon>
            </span>
        </div>

        <div class="p-row">
            <span class="p-thin-item">1</span>

            <span class="p-wide-item">
            <a href="#">چه کسی پنیر مرا برداشته</a></span
            >

            <span class="p-wide-item">
            بازگشتی
            </span>

            <span class="p-item">
            120
            </span>

            <span class="p-thin-item">
                <font-awesome-icon icon="times"></font-awesome-icon>
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
    <!-- end of problems table body -->
  </div>
</template>

<script>
export default {
    name: "problems"
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

/* problems header */
.problems-view-header{
    direction: rtl;
    color: var(--dark-blue);
    background-color: var(--light-gray);
    border-radius: 5px;
    padding: 5px 20px;
    margin-bottom: 10px;
}
/* end of problems header */

/* problems */
.problems-view {
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

/* end of problems */

</style>