$(function() {
  $('.arrow').click(function (e) {
    e.preventDefault();
    $('.down').toggleClass('d-none');
    $('.up').toggleClass('d-none');
    
  })
});