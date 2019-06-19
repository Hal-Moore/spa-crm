<template>
  <div>
    <div class="page-title">
      <button class="btn waves-effect waves-light btn-small">
      <i class="material-icons">refresh</i>
      </button>
      <h4>
          Обзор за вчера <span>{{date | date('datetime')}}</span>
          <i class="material-icons black-text pointer" id="dashboard-info">info_outline</i>
      </h4>
    </div>

    <div class="row">
        <div class="col s12 l6">
            <div class="card light-blue lighten-2 white-text">
                <div class="card-content">
                    <span class="card-title">Выручка:</span>
                    <h3>20 000 руб.</h3>
                    <h3 class="green-text text-darken-2 m0 mb1">
                        <i class="material-icons">arrow_upward</i>
                        26%
                    </h3>
                    <p>Выручка вашего бизнеса вчера на 20% выше среднего: 5555 руб. в день</p>
                </div>
            </div>
        </div>

        <div class="col s12 l6">
            <div class="card orange lighten-2 white-text">
                <div class="card-content">
                    <span class="card-title">Заказы:</span>
                    <h3>200 зак.</h3>
                    <h3 class="red-text m0 mb1">
                        <i class="material-icons">arrow_downward</i>
                        26%
                    </h3>
                    <p>Число заказов вчера на 26% ниже среднего значения: 3 зак. в день</p>
                </div>
            </div>
        </div>
    </div>
  <div class="page-title">

  </div>

  <div class="row">
    <div class="col s12 m6 l6">
      <div class="card light-blue bill-card">
        <div class="card-content white-text">
          <span class="card-title">Счет в валюте</span>

          <p class="currency-line">
            <span>12.0 Р</span>
          </p>
        </div>
      </div>
    </div>

    <div class="col s12 m6 l6">
      <div class="card orange darken-3 bill-card">
        <div class="card-content white-text">
          <div class="card-header">
            <span class="card-title">Курс валют</span>
          </div>
          <table>
            <thead>
            <tr>
              <th>Валюта</th>
              <th>Курс</th>
              <th>Дата</th>
            </tr>
            </thead>

            <tbody>
            <tr>
              <td>руб</td>
              <td>12121</td>
              <td>12.12.12</td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>

export default {
  data: () => ({
    date: new Date()
  })
}
</script>
