'use strict';

$(document).ready(function () {
  $(window).on('scroll', function () {

    $('.title').fadeIn(2000);
    $('.front-menu').fadeIn(2000);

    $('.copy-text').fadeIn(3000);

    $('.intro').fadeIn(5000);
  })
});

document.getElementById("scrollToTop").addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
// ハンバーガーメニュー
$(function () {
  $('#menu-toggle').on('click', function () {
    $('#menu').toggle();

    if ($('#menu').is(':visible')) {
      $('#menu-toggle').attr('src', 'img/white-menu.png');
    } else {
      $('#menu-toggle').attr('src', 'img/menu-icon.png');
    }
  });
});