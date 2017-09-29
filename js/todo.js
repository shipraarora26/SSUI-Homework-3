var a=0;



function addNewList() {
    alert('good morning!');
}

function addABread() {
    a++;
    console.log(a); 
}

function removeABread() {
    if (a > 0) {
    	a--;
    	var x = document.getElementById("myBtn");
    	console.log(a); 
	} else {
		alert("you dont have any items in your cart yet!")
	}
}