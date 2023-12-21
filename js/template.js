(function($) {
  'use strict';
  $(function() {
    let current = location.pathname.split("/").slice(-1)[0].replace(/^\/|\/$/g, '');
    let body = $('body');
    let sidebar = $('.sidebar');

    function addActiveClass(element) {
      if (current === "") {
        if (element.attr('href').indexOf("index.html") !== -1) {
          element.parents('.nav-item').last().addClass('active');
          if (element.parents('.sub-menu').length) {
            element.closest('.collapse').addClass('show');
            element.addClass('active');
          }
        }
      } else {
        if (element.attr('href').indexOf(current) !== -1) {
          element.parents('.nav-item').last().addClass('active');
          if (element.parents('.sub-menu').length) {
            element.closest('.collapse').addClass('show');
            element.addClass('active');
          }
          if (element.parents('.submenu-item').length) {
            element.addClass('active');
          }
        }
      }
    }

    $('.nav li a', sidebar).each(function() {
      let $this = $(this);
      addActiveClass($this);
    })

    sidebar.on('show.bs.collapse', '.collapse', function() {
      sidebar.find('.collapse.show').collapse('hide');
    });
    $('[data-toggle="minimize"]').on("click", function() {
      body.toggleClass('sidebar-icon-only');
    });
    $(".form-check label,.form-radio label").append('<i class="input-helper"></i>');

    if ($( ".navbar" ).hasClass( "fixed-top" )) {
      document.querySelector('.page-body-wrapper').classList.remove('pt-0');
      document.querySelector('.navbar').classList.remove('pt-5');
    }
    else {
      document.querySelector('.page-body-wrapper').classList.add('pt-0');
      document.querySelector('.navbar').classList.add('pt-5');
      document.querySelector('.navbar').classList.add('mt-3');
    }
  });



})(jQuery);
