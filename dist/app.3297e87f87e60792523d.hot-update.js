/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdateProject_HTML"]("app",{

/***/ "./src/js/script.js":
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
/***/ (() => {

eval("(function ($) {\n  // define 'script' object and current version\n  var script = {};\n  script.version = '1.0.0';\n  script.app = {\n    isMobile: function isMobile() {\n      var e = !1;\n      (/(android|bb\\d+|meego).+mobile|avantgo|bada\\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\\-(n|u)|c55\\/|capi|ccwa|cdm\\-|cell|chtm|cldc|cmd\\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\\-s|devi|dica|dmob|do(c|p)o|ds(12|\\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\\-|_)|g1 u|g560|gene|gf\\-5|g\\-mo|go(\\.w|od)|gr(ad|un)|haie|hcit|hd\\-(m|p|t)|hei\\-|hi(pt|ta)|hp( i|ip)|hs\\-c|ht(c(\\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\\-(20|go|ma)|i230|iac( |\\-|\\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\\/)|klon|kpt |kwc\\-|kyo(c|k)|le(no|xi)|lg( g|\\/(k|l|u)|50|54|\\-[a-w])|libw|lynx|m1\\-w|m3ga|m50\\/|ma(te|ui|xo)|mc(01|21|ca)|m\\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\\-2|po(ck|rt|se)|prox|psio|pt\\-g|qa\\-a|qc(07|12|21|32|60|\\-[2-7]|i\\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\\-|oo|p\\-)|sdk\\/|se(c(\\-|0|1)|47|mc|nd|ri)|sgh\\-|shar|sie(\\-|m)|sk\\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\\-|v\\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\\-|tdg\\-|tel(i|m)|tim\\-|t\\-mo|to(pl|sh)|ts(70|m\\-|m3|m5)|tx\\-9|up(\\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\\-|your|zeto|zte\\-/i.test(navigator.userAgent.substr(0, 4))) && (e = !0), 1 == e && $(\"body\").addClass(\"mobile\");\n    },\n    checkIE: function checkIE() {\n      function e() {\n        var e = window.navigator.userAgent,\n          t = e.indexOf(\"MSIE\");\n        return t > 0 ? parseInt(e.substring(t + 5, e.indexOf(\".\", t))) : navigator.userAgent.match(/Trident\\/7\\./) ? 11 : 0;\n      }\n      e() > 0 && e() < 12 && $(\"body\").addClass(\"ie-mode\");\n    },\n    mobilemenu: function mobilemenu() {\n      $(\"*[data-mobilemenu='true']\").each(function () {\n        $(this).mnav();\n        $(this).css({\n          \"opacity\": \"1\"\n        });\n        var api = $(this).data(\"mnav\");\n        $(this).prepend(\"<a href=\\\"javascript:void(0);\\\" class=\\\"mobilemenu-close\\\"><i class='icon-close' /></a>\");\n        $(\".mobilemenu-close\").on('click', function () {\n          $(\".mobilemenu-menu_offcanvas.mobilemenu-menu_opened\").removeClass(\"mobilemenu-menu_opened\");\n          api.close();\n        });\n      });\n    },\n    owlInit: function owlInit() {\n      $(\"*[data-owl]\").each(function () {\n        var slider = $(this);\n        var loop = $(this).find(\".item\").length > 1 && $(this).attr(\"data-loop\") != undefined ? $.parseJSON($(this).attr(\"data-loop\")) : false;\n        var nav = $(this).find(\".item\").length > 1 && $(this).attr(\"data-nav\") != undefined ? $.parseJSON($(this).attr(\"data-nav\")) : false;\n        var dots = $(this).attr(\"data-dots\") != undefined ? $.parseJSON($(this).attr(\"data-dots\")) : false;\n        var items = $(this).attr(\"data-items\") != undefined ? parseInt($(this).attr(\"data-items\")) : 1;\n        var autoplay = $(this).attr(\"data-autoplay\") != undefined ? $.parseJSON($(this).attr(\"data-autoplay\")) : false;\n        var margin = $(this).attr(\"data-margin\") != undefined ? parseInt($(this).attr(\"data-margin\")) : 0;\n        var xs = $(this).attr(\"data-xs\") != undefined ? parseInt($(this).attr(\"data-xs\")) : items;\n        var sm = $(this).attr(\"data-sm\") != undefined ? parseInt($(this).attr(\"data-sm\")) : items;\n        var md = $(this).attr(\"data-md\") != undefined ? parseInt($(this).attr(\"data-md\")) : items;\n        var lg = $(this).attr(\"data-lg\") != undefined ? parseInt($(this).attr(\"data-lg\")) : items;\n        var autoHeight = $(this).attr(\"data-autoheight\") != undefined ? $.parseJSON($(this).attr(\"data-autoheight\")) : false;\n        var dotContainer = $(this).attr(\"data-dotcontainer\") != undefined ? $.parseJSON($(this).attr(\"data-dotcontainer\")) : false;\n        var customNav = $(this).attr(\"data-custom-nav\");\n        var itemvideo = $(this).attr(\"data-video\") != undefined ? $.parseJSON($(this).attr(\"data-video\")) : false;\n        var rtl = $(\"body\").attr(\"dir\") == \"rtl\" ? true : false;\n        var carousel = slider.owlCarousel({\n          loop: loop,\n          nav: nav,\n          dots: dots,\n          items: items,\n          margin: parseInt(margin),\n          autoplay: autoplay,\n          autoHeight: autoHeight,\n          navText: [\"\", \"\"],\n          rtl: rtl,\n          video: itemvideo,\n          responsive: {\n            0: {\n              items: xs\n            },\n            640: {\n              items: xs\n            },\n            768: {\n              items: sm\n            },\n            992: {\n              items: md\n            },\n            1280: {\n              items: lg\n            }\n          },\n          onInitialized: function onInitialized() {\n            if (dotContainer) {\n              slider.append(\"<div class=\\\"container controls-container\\\"></div>\");\n              slider.find(\".owl-controls\").detach().appendTo('.controls-container');\n              var i = 1;\n              slider.find(\".owl-dots .owl-dot\").each(function () {\n                $(this).html(i);\n                i++;\n              });\n            }\n            OwlDots();\n          }\n        });\n        carousel.on('changed.owl.carousel', function (event) {\n          if (event.item.count - event.page.size == event.item.index) $(event.target).find('.owl-dots div:last').addClass('active').siblings().removeClass('active');\n          $(event.target).find(\".owl-item\").find(\".effect\").each(function () {\n            $(this).removeClass($(this).data(\"class\"));\n          });\n          $(this).find(\".owl-item\").eq(event.item.index).find(\".effect\").each(function () {\n            $(this).addClass($(this).data(\"class\"));\n          });\n        });\n        if (customNav != undefined && customNav.length > 0) {\n          $(customNav.split(',')[0]).on('click', function () {\n            carousel.trigger('prev.owl.carousel');\n          });\n          $(customNav.split(',')[1]).on('click', function () {\n            carousel.trigger('next.owl.carousel');\n          });\n        }\n        $(window).on('resize', function () {\n          OwlDots();\n        });\n        function OwlDots() {\n          if (slider.find(\".owl-controls .owl-dot\").length <= 1) {\n            slider.find(\".owl-controls .owl-dot\").hide();\n          } else {\n            slider.find(\".owl-controls .owl-dot\").show();\n          }\n        }\n      });\n    },\n    init: function init() {\n      script.app.owlInit();\n      script.app.mobilemenu();\n      $(\"*[data-mask]\").each(function () {\n        var item = $(this);\n        var v = item.data(\"mask\").split(':')[0];\n        switch (v) {\n          case \"phone\":\n            script.app.utility.mask.phone(item);\n            break;\n          case \"number\":\n            script.app.utility.mask.number(item);\n            break;\n          case \"letter\":\n            script.app.utility.mask.letter(item);\n            break;\n          case \"money\":\n            script.app.utility.mask.money(item);\n            break;\n          case \"credit-card\":\n            script.app.utility.mask.creditCard(item);\n          case \"regex\":\n            script.app.utility.mask.regex(item);\n            break;\n        }\n      });\n      $(\".menu_list-profile\").on(\"click\", function () {\n        $(\".menu_list\").toggleClass(\"buyut\");\n      });\n      $('.highSlider').owlCarousel({\n        loop: true,\n        margin: 10,\n        nav: false,\n        autoplay: true,\n        autoplayTimeout: 3000,\n        autoplayHoverPause: false,\n        responsive: {\n          0: {\n            items: 1\n          },\n          600: {\n            items: 1\n          },\n          1000: {\n            items: 1\n          }\n        }\n      });\n      $('input[name=\"date\"]').daterangepicker({\n        singleDatePicker: true,\n        showDropdowns: true,\n        minYear: 2023,\n        maxYear: parseInt(moment().format('YYYY'), 10) + 10\n      });\n      $('input[name=\"date\"]').val('Select Your Date');\n      $('.saat').daterangepicker({\n        timePicker: true,\n        singleDatePicker: true,\n        timePicker24Hour: true,\n        timePickerIncrement: 1,\n        timePickerSeconds: true,\n        locale: {\n          format: 'HH:mm:ss'\n        }\n      }).on('show.daterangepicker', function (ev, picker) {\n        picker.container.find(\".calendar-table\").hide();\n      });\n      $('input[name=\"saat\"]').val('Select Your Time');\n      $('.popularCarousel').owlCarousel({\n        loop: true,\n        nav: false,\n        autoplay: true,\n        autoplayTimeout: 3000,\n        autoplayHoverPause: false,\n        responsive: {\n          0: {\n            items: 1\n          },\n          600: {\n            items: 2\n          },\n          1000: {\n            items: 1\n          }\n        }\n      });\n      var cars = $(\".recard\").length;\n      $(\".recomendation\").on(\"mousemove\", function () {\n        $(\".count\").text(cars + \" Cars\");\n      });\n      $(\".recomendation-sm\").on(\"mousemove\", function () {\n        var cars = $(\".recard-sm\").length;\n        $(\".count\").text(cars + \" Cars\");\n      });\n      $(\".ShowMore\").on(\"click\", function () {\n        if ($(\".recard-sm\").length < 120) {\n          $(\".recomendation\").append($(\".recomendation\").html());\n          $(\".recomendation-sm\").append($(\".recomendation-sm\").html());\n        } else {\n          alert(\"No More Car To Show!\");\n        }\n      });\n      $(\".card\").on(\"click\", function () {\n        var likes = $(\".icon-Like\").length;\n        $(\".likescount\").text(likes);\n      });\n      var clicked = false;\n      $(\".like\").on(\"click\", function () {\n        if (clicked == false) {\n          $(this).html(\"<img src='../assets/img/heart.png'>\");\n          clicked = true;\n        } else {\n          $(this).html(\"<i class='icon-Like'></i>\");\n          clicked = false;\n        }\n      });\n      $(\"#range1\").on(\"change\", function () {\n        var value = $(this).val();\n        $(\".check-group-price_value\").text(\" $\" + value + \".00\");\n      });\n      $(\".btnFilter\").on(\"click\", function () {\n        $(\".sidebar\").toggleClass(\"slideopen\");\n      });\n      $(\"body\").on(\"load\", function () {\n        var sportcount = $(\"#sport\").length;\n        $(\"#sportcount\").text(sportcount);\n        var hatchbackcount = $(\"#hatchback\").length;\n        $(\"#hatchbackcount\").text(hatchbackcount);\n        var suvcount = $(\"#suv\").length;\n        $(\"#suvcount\").text(suvcount);\n        var sedancount = $(\"#sedan\").length;\n        $(\"#sedancount\").text(sedancount);\n      });\n      $('#sports').on(\"click\", function () {\n        if ($(this).is(':checked')) {\n          $(\".card\").css(\"display\", \"none\");\n          $(\"div\").filter(\"#sport\").css(\"display\", \"block\");\n        } else {\n          $(\".card\").css(\"display\", \"block\");\n        }\n      });\n      $('#suvs').on(\"click\", function () {\n        if ($(this).is(':checked')) {\n          $(\".card\").css(\"display\", \"none\");\n          $(\"div\").filter(\"#suv\").css(\"display\", \"block\");\n        } else {\n          $(\".card\").css(\"display\", \"block\");\n        }\n      });\n      $('#hatchbacks').on(\"click\", function () {\n        if ($(this).is(':checked')) {\n          $(\".card\").css(\"display\", \"none\");\n          $(\"div\").filter(\"#hatchback\").css(\"display\", \"block\");\n        } else {\n          $(\".card\").css(\"display\", \"block\");\n        }\n      });\n      $('#sedans').on(\"click\", function () {\n        if ($(this).is(':checked')) {\n          $(\".card\").css(\"display\", \"none\");\n          $(\"div\").filter(\"#sedan\").css(\"display\", \"block\");\n        } else {\n          $(\".card\").css(\"display\", \"block\");\n        }\n      });\n    },\n    utility: {\n      cookie: {\n        get: function get(key) {\n          var c = $.cookie(key);\n          return c;\n        },\n        add: function add(key, value) {\n          var expiry = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;\n          $.cookie(key, value, {\n            expires: expiry\n          });\n        },\n        remove: function remove(key) {\n          $.removeCookie(key);\n        }\n      },\n      mask: {\n        pattern: function pattern(thi, _pattern) {\n          thi.inputmask(_pattern);\n        },\n        regex: function regex(thi) {\n          var pattern = thi.data(\"mask\").split(':')[1];\n          thi.inputmask(\"\", {\n            regex: pattern\n          });\n        },\n        creditCard: function creditCard(thi) {\n          thi.inputmask(\"\", {\n            regex: \"[0-9][0-9][0-9][0-9] - [0-9][0-9][0-9][0-9] - [0-9][0-9][0-9][0-9] - [0-9][0-9][0-9][0-9]\"\n          });\n        },\n        money: function money(thi) {\n          thi.maskMoney({\n            thousands: '',\n            decimal: '.',\n            allowZero: true,\n            precision: 2,\n            affixesStay: false\n          });\n        },\n        phone: function phone(thi) {\n          var pattern = thi.attr(\"data-pattern\");\n          thi.inputmask(pattern != undefined && pattern != null && pattern != \"\" ? pattern : \"(999) 999 99 99\");\n        },\n        number: function number(thi) {\n          thi.on(\"keypress\", function (event) {\n            if ((event.keyCode < 48 || event.keyCode > 57) && event.keyCode != 46) return false;\n            if (event.keyCode == 46 && instr(thi.value, \".\") >= 0) return false;\n          });\n        },\n        letter: function letter(thi) {\n          thi.on(\"keypress\", function (event) {\n            var regEx = /^\\s*[a-zA-Z,ç,Ç,ğ,Ğ,ı,İ,ö,Ö,ş,Ş,ü,Ü,\\s]+\\s*$/g;\n            var key = String.fromCharCode(event.which);\n            if (event.keyCode == 8 || event.keyCode == 37 || event.keyCode == 39 || regEx.test(key)) {\n              return true;\n            }\n            return false;\n          });\n        }\n      }\n    }\n  };\n  window.script = script;\n})(jQuery);\n$(document).ready(function () {\n  var library = new Script();\n  Script.init();\n});\nfunction Script() {\n  script.app.init();\n}\nScript.init = function () {\n  var module = this.getModul().split(',');\n  for (var i = 0; i < module.length; i++) {\n    this.runModule(module[i]);\n  }\n};\nScript.getModul = function () {\n  var scripts = document.getElementsByTagName(\"BODY\")[0];\n  var modulePage = scripts.getAttribute(\"data-template\");\n  return modulePage;\n};\nScript.runModule = function (module) {\n  switch (module) {\n    case \"index\":\n      break;\n    default:\n      break;\n  }\n};\n\n//# sourceURL=webpack://Project-HTML/./src/js/script.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("7bb44a0e71f2555a009a")
/******/ })();
/******/ 
/******/ }
);