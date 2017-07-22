$(document).ready(function(){
	$(".dropdown-button").dropdown();
	$(".button-collapse").sideNav();


	$('.dropdown-button').dropdown({
        inDuration: 300,
        outDuration: 225,
        constrainWidth: false, // Does not change width of dropdown to that of the activator
        hover: true, // Activate on hover
        gutter: 0, // Spacing from edge
        belowOrigin: true, // Displays dropdown below the button
        alignment: 'left', // Displays dropdown with edge aligned to the left of button
        stopPropagation: false // Stops event propagation
    });

    $("#forward").on("click",function(){
        if (($("#seccion-carrusel").attr("class"))=="slider"){    
            $("#seccion-carrusel").removeClass("slider");
            $("#seccion-carrusel").addClass("slider2");
            $("#title").text("Slick Material Design");
            $("#subtitle").text("Beautiful, Elegantly Coded, One-Page WordPress Theme for Business")
        }
        else if(($("#seccion-carrusel").attr("class"))=="slider2"){
            $("#seccion-carrusel").removeClass("slider2");
            $("#seccion-carrusel").addClass("slider");
            $("#title").text("Simple & Awesome");
            $("#subtitle").text("Beautiful, Elegantly Coded")            
        }
    });

    $("#backwards").on("click",function(){
        if(($("#seccion-carrusel").attr("class"))=="slider"){
            $("#seccion-carrusel").removeClass("slider");
            $("#seccion-carrusel").addClass("slider2");
            $("#title").text("Slick Material Design");
            $("#subtitle").text("Beautiful, Elegantly Coded, One-Page WordPress Theme for Business")            
        }
        else if(($("#seccion-carrusel").attr("class"))=="slider2"){
            $("#seccion-carrusel").removeClass("slider2");
            $("#seccion-carrusel").addClass("slider"); 
            $("#title").text("Simple & Awesome");
            $("#subtitle").text("Beautiful, Elegantly Coded")              
        }
    });
});