$(document).ready(function(){
	$("#btn").click(function(e){
		e.preventDefault();
		$(".error").hide();
		var hasError = false;
		var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;

		var emailInput=$('#email').val();
		if (emailInput=="") {
			alert("Please enter your email address.");
			hasError = true;
		}
		else if(!emailReg.test(emailInput)) {
			alert("Enter a valid email address.");
			hasError = true;
		}else{
			var mailData='name='+'Bravie'+'&email='+emailInput;
			
			$.ajax({
				type: 'POST',
				url:'subscribe.php',
				data: emailInput,
				success:function(response){
					if (!response) {
						alert("Something went wrong. Please try again");
					}
					var parsedJSON = eval('('+response+')');

					if(parsedJSON.Error) {
						if (parsedJSON.Error == "Timeout") {
							alert("Session timed out. Please login again.");
							window.location.reload();
						}
					}

					alert("Subscription Successful");
				}
			});
		}
		if(hasError == true) { return false; }
	});
});