window.onload = function(){
	document.querySelector('#shop_ip').onclick = function(){
		ajaxGet('ip.php', function(data){
			console.log(data);
		});
		ajaxGet('ip.php', function(data){
			document.querySelector('#myip').innerHTML = data;
		});
	}
}

function ajaxGet(url, callback){
	var f = callback || function(data){};

	var request = new XMLHttpRequest(); // создаем экземпляр класса

	// request.readyState //  0 - new
	// request.readyState //  1 - open
	// request.readyState //  2 - send
	// request.readyState //  3 - частично пришел ответ
	// request.readyState //  4 - ответ пришел полностью

	request.onreadystatechange = function(){  // статус изменения
		if(request.readyState == 4 && request.status == 200){
			//document.querySelector('#myip').innerHTML = request.responseText; // responseText - текст пришедшего ответа
			f(request.responseText);
		}
	}

	request.open('GET', url); // открыть запрос
	request.send(); // отправить запрос
}