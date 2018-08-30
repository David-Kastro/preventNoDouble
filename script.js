/**
* Prevent Double Click
*
* Add a 1s delay de 1s to any form submit and prevent a double click to 
*send the form twice!!
*
*@author Davi Duarte <daviduartedf@gmail.com>
*@version 1.0
*/

function submitNoDouble(button){       //The button of the form (with submit attr)
	button.one('click', function(e){
		e.preventDefault();
		button.addClass('disabled');
		var form = $('form');

		setTimeout(function(){
			button.removeClass('disabled');
			form.submit();
		}, 1000);
	});
}
