"use strict";

$(document).ready(function () {
  $.ajax({
    method: "GET",
    url: "https://data.kcg.gov.tw/api/action/datastore_search?resource_id=92290ee5-6e61-456f-80c0-249eae2fcc97",
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
              str += "\n                                    <div class=\"col-md-6 h-100 pt-5 d-flex justify-content-center\">\n                                        <div class=\"card\" style=\"width: 24rem;\">\n                                            <img src=\"".concat(items[i].Picture1, "\" class=\"card-img-top\" alt=\"...\">\n                                            <div class=\"card-body\">\n                                                <h5 class=\"card-title\">").concat(items[i].Name, "</h5>\n                                                <p class=\"card-text\">").concat(items[i].Description, "</p>\n                                            </div>\n                                        </div>\n                                    </div>");
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
  }); //回到最上層

  $(window).scroll(function () {
    var windowHeight = $(window).height();
    var thisPos = $(window).scrollTop();
    console.log(windowHeight, thisPos);

    if (windowHeight < thisPos) {
      $('#arrow_display').removeClass('d-none');
    } else if (windowHeight > thisPos) {
      $('#arrow_display').addClass('d-none');
    }
  });
  $('#arrow_slide').click(function (e) {
    e.preventDefault();
    $('html,body').animate({
      scrollTop: 0
    }, 500);
  });
});
//# sourceMappingURL=all.js.map
