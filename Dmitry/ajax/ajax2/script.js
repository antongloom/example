window.onload = function(){

	var inp_email  = document.querySelector('input[name=email]');
	var inp_phone  = document.querySelector('input[name=phone ]');
	var inp_name  = document.querySelector('input[name=name]');

	document.querySelector('#send').onclick = function(){
		var params = 'email=' + inp_email.value + '&' + 'phone=' + inp_phone.value + '&' + 'name=' + inp_name.value;
		ajaxPost(params)
	}
}

function ajaxPost(params){

	var request = new XMLHttpRequest();

	request.onreadystatechange = function(){  // статус изменения
		if(request.readyState == 4 && request.status == 200){
			if(request.responseText == '1'){
				document.querySelector('#result').innerHTML = 'Форма успешно заполнена'; 
				document.querySelector('form').style.display = 'none';
			}
			else{
				document.querySelector('#result').innerHTML = request.responseText; 
		}
	}
}
	request.open('POST', 'http://antongloom.beget.tech/app.php'); // открыть запрос
	request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
	request.send(params); // отправить запрос
}