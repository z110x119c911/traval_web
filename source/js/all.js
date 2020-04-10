$(document).ready(function () {
    $.ajax({
        method: "GET",
        url: "https://data.kcg.gov.tw/api/action/datastore_search?resource_id=92290ee5-6e61-456f-80c0-249eae2fcc97",
        success: (function (msg) {
            let items = msg.result.records;
            ListArea();
            Select_list();
            //info();
            //Area List 清單
            function ListArea() {
                //所有地區
                let area = [];
                for(let i = 0; i < items.length; i++){
                    area.push(items[i].Zone);
                }
                //刪除重複
                let filterZone = [];
                area.forEach(function (value) {
                    if (filterZone.indexOf(value) == -1) {
                        filterZone.push(value);
                    };
                });
                for(let i = 0; i < filterZone.length; i++){
                    let str = '';
                    str += `<option value="${filterZone[i]}">${filterZone[i]}</option>`
                    $('#select_area').append(str);
                }   
            }
            //List 選取
            function Select_list() {
                $('#select_area').change(function(e){
                    let choose = e.target.value;
                    let str = '';
                    for (let i = 0; i < items.length; i++) {
                        if(choose == items[i].Zone){
                            str += `<div class="col-md-6 pt-5 d-flex justify-content-center">
                                        <div class="card" style="width: 24rem;">
                                            <img src="${items[i].Picture1}" class="card-img-top" alt="...">
                                            <div class="card-body">
                                                <h5 class="card-title">${items[i].Name}</h5>
                                                <p class="card-text">${items[i].Description}</p>
                                            </div>
                                        </div>
                                    </div>`
                            
                        }
                    }   
                    $('#information').append(str);
                })
            }
            
            //景點內容
            function info() {
                for (var i = 0; i < items.length; i++) {
                    var str = '';
                    str += `<div class="col-md-6 pt-5 d-flex justify-content-center">
                                <div class="card" style="width: 24rem;">
                                    <img src="${items[i].Picture1}" class="card-img-top" alt="...">
                                    <div class="card-body">
                                        <h5 class="card-title">${items[i].Name}</h5>
                                        <p class="card-text">${items[i].Description}</p>
                                    </div>
                                </div>
                            </div>`
                    $('#information').append(str);
                }
            }
        })
    })
});