$(document).ready(function () {
    $("*")
      .find("[data-lazy]")
      .each(function () {
        var item = $(this);
        $(this).lazy({
          selector:
            item.attr("data-lazy-selector") != "" &&
            item.attr("data-lazy-selector") != undefined
              ? item.attr("data-lazy-selector")
              : "",
          button:
            item.attr("data-lazy-button") != "" &&
            item.attr("data-lazy-button") != undefined
              ? item.attr("data-lazy-button")
              : "",
          item:
            item.attr("data-lazy-item") != "" &&
            item.attr("data-lazy-item") != undefined
              ? parseInt(item.attr("data-lazy-item"))
              : 1,
          show:
            item.attr("data-lazy-show") != "" &&
            item.attr("data-lazy-show") != undefined
              ? parseInt(item.attr("data-lazy-show"))
              : 1,
        });
      });
  });
  
  (function ($) {
    $.fn.lazy = function (options) {
      var defaults = {
        selector: "",
        item: 1,
        show: 1,
        button: "",
      };
      var options = $.extend(true, {}, defaults, options || {});
  
      var element = this;
      var item = options.selector;
      var show = options.item;
      var plus = options.show;
      var buttonClass = options.button;
  
      var max = show + plus;
  
      element.find(item).slice(show).hide();
  
      for (var i = 0; i < show; i++) {
        element
          .find(item)
          .eq(i)
          .find("img")
          .each(function () {
            $(this).attr("src", $(this).attr("data-src"));
          });
      }
  
      function callBack(show, max) {
        try{
          eval("onScrollComplete(" + show + "," + max + ");");
        }catch(ex)
        {
  
        }
      }
  
      if (buttonClass == "" || buttonClass == null) {
        var h = $(window).height() + 1000;
        $(window).on("scroll", function () {
          if ($(window).width() <= 640) {
            h = $(window).height() + 2000;
          }
  
          if ($(window).scrollTop() + h >= getDocHeight()) {
            callBack(show, max);
            LoadImage();
            element.find(item).slice(show, max).fadeTo(350, 1);
            show += plus;
            max += plus;
          }
        });
      } else {
        if (element.find(item).length <= show) {
          $(buttonClass).hide();
        } else {
          $(buttonClass).show();
        }
  
        $(buttonClass).on("click", function () {
          
          callBack(show, max);
          LoadImage();
          element.find(item).slice(show, max).fadeTo(350, 1);
          show += plus;
          max += plus;
  
          if (element.find(item).length <= show) {
            $(buttonClass).hide();
          } else {
            $(buttonClass).show();
          }
        });
      }
  
      function getDocHeight() {
        var D = document;
        return Math.max(
          Math.max(D.body.scrollHeight, D.documentElement.scrollHeight),
          Math.max(D.body.offsetHeight, D.documentElement.offsetHeight),
          Math.max(D.body.clientHeight, D.documentElement.clientHeight)
        );
      }
  
      function LoadImage() {
        for (var i = show; i < max; i++) {
          element
            .find(item)
            .eq(i)
            .find("img")
            .each(function () {
              $(this).attr("src", $(this).attr("data-src"));
            });
        }
      }
    };
  })(jQuery);