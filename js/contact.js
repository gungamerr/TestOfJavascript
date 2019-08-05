$(document).ready(function(){
	//Validacion

$("form input[name='date']").datepicker({
		date:" dd-mm-yy"
	});

	 $.validate({
	    lang: 'es',
	    errorMessagePosition: 'top',
	    scrollToTopOnError: true

	  });
})

