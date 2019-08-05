$(document).ready(function(){
	//Slider

$('.galeria').bxSlider({
    	mode: 'fade',
    	captions: true,
   	 	slideWidth: 1200,
   	 	responsive:true
  		});
	
			//Posts

	  	var posts = [
	  		{
	  			title :'Prueba de titulo 1',
	  			date: 'Publicado el dia '+moment().date()+ ' de '+ moment().format("MMM")+ ' del ' + moment().format("YYYY") ,
	  			content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
	  		},
	  		{
	  			title :'Prueba de titulo 2',
	  			date: 'Publicado el dia '+moment().date()+ ' de '+ moment().format("MMM")+ ' del ' + moment().format("YYYY") ,
	  			content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
	  		},
	  		{
	  			title :'Prueba de titulo 3',
	  			date: 'Publicado el dia '+moment().date()+ ' de '+ moment().format("MMM")+ ' del ' + moment().format("YYYY") ,
	  			content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
	  		},
	  		{
	  			title :'Prueba de titulo 4',
	  			date: 'Publicado el dia '+moment().date()+ ' de '+ moment().format("MMM")+ ' del ' + moment().format("YYYY") ,
	  			content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
	  		},
	  		{
	  			title :'Prueba de titulo 5',
	  			date: 'Publicado el dia '+moment().date()+ ' de '+ moment().format("MMM")+ ' del ' + moment().format("YYYY") ,
	  			content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
	  		},
	  	]

	  	posts.forEach((item, index)=>{
	  		var post =`<div id="posts">
						<article class="post">
							<h2>${item.title}</h2>
							<span class="date">${item.date}</span>
							<p>
							${item.content}
							</p>
							<a href="#" class="button-more">Leer Mas</a>
						</article>
					</div>
					`;
			$("#posts").append(post);
			console.log(post);

	  	});
})
