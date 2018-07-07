/* //to change the color when clicked and to strike through
$("li").click(function(){
	$(this).css("text-decoration", "line-through");
	$(this).css("color", "grey");
	}	);

	); */

// to change click action strike through
//using click() event is working for already stored elements but not working for dynamically added elemetns
/* $("li").click(function(){
	$(this).toggleClass("clickedd");
	
}); */
$("ul").on("click", "li", function(){
	$(this).toggleClass("clickedd");
}
);
/* 
//to delete item 
$("span").click(function(e){
	$(this).parent().fadeOut((1000),function()
	{$(this).remove();// display none which is not we wanted so we must use remove()
	});
	e.stopPropogation();
	
}) */

//to work on span for dynamic elements
$("ul").on("click", "span", function(e){
	$(this).parent().fadeOut((1000),function()
	{
		$(this).remove();// display none which is not we wanted so we must use remove()
	});
	e.stopPropogation();
	
});
//input to add on todolist
$("input[type='text']").keypress(function(event){
	if(event.which===13)
	{
			//grab text from input
		var toDoText=$(this).val();
		$(this).val(""); //to clear the input box after saving the input text
		//append to ul
		/* $("ul").append("<li><span id='del'>X </span" + toDoText + "</li>"); */
		$("ul").append("<li><span id='del'><i class='fa fa-trash'></i></span> " + toDoText +"</li>");
	}
}
);


//plus button fadeIn and fadeOut
$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
}
);