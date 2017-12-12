$(document).ready(() => {



$("#save").click(function() {
		var name = $("#contactName").val();
		$("#contactName").val ('');
		var number = $("#contactNumber").val();
		$("#contactNumber").val ('');

		$("#contactos").append('<div class="container">' + '<div class="panel panel-default">' + '<div class="panel-body">' + '<h3>' + name + '</h3>' + '<hr>' + '<h6>' + number + '</h6>'+ '</div>' + '</div>' + '</div>');});


});