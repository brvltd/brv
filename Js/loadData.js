function getData(){
	var track_no =document.getElementById("track_no").value;
	var sixth_image=document.getElementById("sixth_image");
	var seventh_image=document.getElementById("seventh_image");
	// alert(track_no);

	if (track_no=="") {
		alert("Please Provide Track Number");
		document.getElementById('visibility').style.display = "none";		
		sixth_image.style.display="block";
		seventh_image.style.display="none";

	}else{
		document.getElementById('visibility').style.display = "block";
		sixth_image.style.display="none";
		seventh_image.style.display="block";
		while(seventh_image.firstChild){
			seventh_image.removeChild(seventh_image.firstChild);
		}
		seventh_image.innerHTML+=("<iframe style='margin-top:4%; transition: 5s ease;' src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.812277221013!2d36.789474615340396!3d-1.2867035359909806!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10afb600df91%3A0xd4a9f8bfcf2fa234!2sMaalim%20Juma%20Rd%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1605687393375!5m2!1sen!2ske' width='920' height='900' frameborder='0' style='border:0;' allowfullscreen='' aria-hidden='false' tabindex='0'></iframe>");

		// sixth_image.innerHTML+=("<div class='col-md-6 fifth_image'></div>")

		// var rootRef=firebase.database().ref().child("Cargo");

		// rootRef.on("child_added",snap=>{
		// 	var	trackNumber=snap.val().TrackNo;
		// 	var	customer=snap.val().CustomerName;
		// 	var	cargo=snap.val().CargoName;


		// 		alert(customer);
		// 		document.getElementById("id").innerHTML=trackNumber;
		// 		document.getElementById("name").innerHTML=customer;
		// 		document.getElementById("cargo").innerHTML=cargo;
		
		// })
	}
}