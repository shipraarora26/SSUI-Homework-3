var a = 0;

function countItemsOnPage() {
    var items = document.querySelectorAll('.shoppingCartItems .flavor');
    var shoppingCartValue = document.getElementById("shoppingCartValue");
    shoppingCartValue.innerHTML = items.length;
}

function addABread() {
    event.stopPropagation();
    a++;
 	updateShoppingCart();
}

function removeABread(item) {
    var items = document.querySelectorAll('.shoppingCartItems .flavor');
    var shoppingCartValue = document.getElementById("shoppingCartValue");

    if (items.length > 0) {
        document.getElementById(item).remove();
    	countItemsOnPage()
	} else {
		alert("You dont have any items in your cart yet!");
	}
}

function updateShoppingCart() {
	var s = document.getElementById("shoppingCartValue");
  	s.innerHTML = a;
}

function end() {
    alert("This is the end of my prototype! Better luck buying your cinnamon rolls next time!")
}