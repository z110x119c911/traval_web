$(document).ready(function () {
	$.ajax({
		method: "GET",
		dataType : 'json',
		url: "https://raw.githubusercontent.com/hexschool/KCGTravel/master/datastore_search.json",
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
					//選取
					let choose = $('#select_area').val();
					let title = '';
					let str = '';
					for (let i = 0; i < items.length; i++) {
						if(choose == items[i].Zone){
							title = `<h1 class="text-primary text-center pt-5">${items[i].Zone}</h1>`
							str += `
								<div class="col-md-6 pt-5 d-flex justify-content-center">
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
					$('#information_title').empty();
					$('#information_title').append(title);
					$('#information').empty();
					$('#information').append(str);

					//螢幕捲動
					let windowHeight = $(window).height();
					$('html,body').animate({ scrollTop: windowHeight }, 500);
				})
			}
		})
	})
});