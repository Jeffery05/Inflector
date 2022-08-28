var apiUrl = 'http://www.statbureau.org/calculate-inflation-price-jsonp?jsoncallback=?';

$('#calc').on('click', function calculate() {
  $.getJSON(apiUrl, {
      country: 'canada',
      start: $('#startDate').val(),
      end: $('#endDate').val(),
      amount: $('#startPrice').val(),
      format: true
    })
    .done(function (data) {
      $('#endPrice').val(data);
    });
});