$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {

      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
    this.toggleClass("active");
  });
});

var windowScrollTop = function () {
  return window.pageYOffset;
};

var Menu = (function (scrollOffset) {
  var Menu = function () {
    this.element = document.getElementById('nav');
    this.docked = false;
    this.initialOffsetTop = 0;

    this.resetInitialOffsetTop();
  }

  Menu.prototype = {
    offsetTop: function () {
      return this.element.offsetTop;
    },
    resetInitialOffsetTop: function () {
      this.initialOffsetTop = this.offsetTop();
    },

    dock: function () {
      this.element.className = 'docked'; 
      this.docked = true;
    },
    undock: function () {
      this.element.className = this.element.className.replace('docked', ''); 
      this.docked = false;
    },

    toggleDock: function () {
      if (this.docked === false && (this.offsetTop() - scrollOffset() < 0)) {
        this.dock();
      } else if (this.docked === true && (scrollOffset() <= this.initialOffsetTop)) { 
        this.undock();
      }
    }
  };

  return Menu;
})(windowScrollTop);


var menu = new Menu();


window.onscroll = function () {
  menu.toggleDock();
};

(function ($) {

  new WOW().init();

  jQuery(window).load(function() { 
    jQuery("#preloader").delay(100).fadeOut("slow");
    jQuery("#load").delay(100).fadeOut("slow");
  });


  //jQuery to collapse the navbar on scroll
  $(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
      $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
      $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
  });

  //jQuery for page scrolling feature - requires jQuery Easing plugin
  $(function() {
    $('.navbar-nav li a').bind('click', function(event) {
      var $anchor = $(this);
      $('html, body').stop().animate({
        scrollTop: $($anchor.attr('href')).offset().top
      }, 1500, 'easeInOutExpo');
      event.preventDefault();
    });
    $('.page-scroll a').bind('click', function(event) {
      var $anchor = $(this);
      $('html, body').stop().animate({
        scrollTop: $($anchor.attr('href')).offset().top
      }, 1500, 'easeInOutExpo');
      event.preventDefault();
    });
  });

})(jQuery);
