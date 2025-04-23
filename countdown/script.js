var data = new Date('2025/07/01 18:00:00');
// var data = new Date('2021/02/27 13:40:00');

$(function(){
	var note = $('#note');
	var newYear = true;

	var options = { 
		weekday: 'long', 
		year: 'numeric', 
		month: 'long', 
		day: 'numeric', 
		hour: '2-digit', 
		minute: '2-digit' 
	};
	var formattedDate = data.toLocaleDateString('pt-BR', options);
	$('#data').html(formattedDate);
	
	if((new Date()) > data){
		data = new Date();
		newYear = false;
	}
		
	$('#countdown').countdown({
		timestamp	: data,
		callback	: function(days, hours, minutes, seconds){
			
			var message = "";
			
			if(newYear){
				message += days + " dia" 		+ ( (days==1    || days==0)    ? '':'s' ) + ", ";
				message += hours + " hora" 		+ ( (hours==1   || hours==0)   ? '':'s' ) + ", ";
				message += minutes + " minuto" 	+ ( (minutes==1 || minutes==0) ? '':'s' ) + " e ";
				message += seconds + " segundo" + ( (seconds==1 || seconds==0) ? '':'s' ) + ". ";
				// message += "para iniciar!";
				message = "Falta " + message + "";
			}
			else {
				message += "Estamos em recesso atualmente...";
				countdown.style.display = "none";
			}
			
			note.html(message);
		}
	});
});
