$(document).ready(function() {
    
	$('.rotating-image-container').click(function(){
		self = this;
		$("[data-order='1']")[0].attributes["data-order"].value = $(self)[0].attributes["data-order"].value
		$(self)[0].attributes["data-order"].value = 1;

		//if($("[data-order]")
	})
    
});