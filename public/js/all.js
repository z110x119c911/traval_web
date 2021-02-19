"use strict";

$(document).ready(function () {
  $.ajax({
    method: "GET",
    dataType: 'json',
    url: "https://raw.githubusercontent.com/hexschool/KCGTravel/master/datastore_search.json",
    success: function success(msg) {
      var items = msg.result.records;
      ListArea();
      Select_list(); //info();
      //Area List 清單

      function ListArea() {
        //所有地區
        var area = [];

        for (var i = 0; i < items.length; i++) {
          area.push(items[i].Zone);
        } //刪除重複


        var filterZone = [];
        area.forEach(function (value) {
          if (filterZone.indexOf(value) == -1) {
            filterZone.push(value);
          }

          ;
        });

        for (var _i = 0; _i < filterZone.length; _i++) {
          var str = '';
          str += "<option value=\"".concat(filterZone[_i], "\">").concat(filterZone[_i], "</option>");
          $('#select_area').append(str);
        }
      } //List 選取


      function Select_list() {
        $('#select_area').change(function (e) {
          //選取
          var choose = $('#select_area').val();
          var title = '';
          var str = '';

          for (var i = 0; i < items.length; i++) {
            if (choose == items[i].Zone) {
              title = "<h1 class=\"text-primary text-center pt-5\">".concat(items[i].Zone, "</h1>");
              str += "\n\t\t\t\t\t\t\t\t<div class=\"col-md-6 pt-5 d-flex justify-content-center\">\n\t\t\t\t\t\t\t\t\t<div class=\"card\" style=\"width: 24rem;\">\n\t\t\t\t\t\t\t\t\t\t<img src=\"".concat(items[i].Picture1, "\" class=\"card-img-top\" alt=\"...\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t\t\t\t<h5 class=\"card-title\">").concat(items[i].Name, "</h5>\n\t\t\t\t\t\t\t\t\t\t\t<p class=\"card-text\">").concat(items[i].Description, "</p>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>");
            }
          }

          $('#information_title').empty();
          $('#information_title').append(title);
          $('#information').empty();
          $('#information').append(str); //螢幕捲動

          var windowHeight = $(window).height();
          $('html,body').animate({
            scrollTop: windowHeight
          }, 500);
        });
      }
    }
  });
});
//# sourceMappingURL=all.js.map
