$(document).foundation()

$('[data-toggle-dia]').click(function(event){
  const PANEL = $(this).data('toggleDia');
  console.log(PANEL);
  $('#lineup-tabs').foundation('selectTab', PANEL);
});

const $offCanvas = $('#offCanvas');

$offCanvas.find('li').click(function (event) {
  $offCanvas.foundation('close');
});