$(document).ready(function(){

  //Selector de Theme
  var theme = $("")
  $("#to-green").click(function(){
  		$("#theme").attr("href","css/green.css");
  });

    $("#to-red").click(function(){
  		$("#theme").attr("href","css/red.css");
  });

      $("#to-blue").click(function(){
  		$("#theme").attr("href","css/blue.css");
  });
// Scroll Arriba de la Web

	$(".subir").click(function(e){
		e.preventDefault();
		$('html,body').animate({
			scrollTop: 0
		},500);

		return false;
	})

	//Login Falso
	$("#login form").submit(function(){
		var form_name = $("#form_name").val();

		localStorage.setItem("form_name",form_name);
	});

	var form_name = localStorage.getItem("form_name");

	if(form_name != null && form_name != "undefined")
	{
		var about_parrafo = $("#about p")
		about_parrafo.html("<br><strong>Bienvenido, "+form_name+"</strong>");
		about_parrafo.append("<a href='#' id='logout'>Cerrar Sesion</a> ");
		$("#login form").hide();

		$("#logout").click(function(){
			localStorage.clear();
			location.reload();
		});
	}
	

});