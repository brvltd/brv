function getData(){
	var track_no =document.getElementById("track_no").value;
	// alert(track_no);

	if (track_no=="") {
		alert("Please Provide Track Number");
	}else{
		document.getElementById('visibility').style.display = "block";

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