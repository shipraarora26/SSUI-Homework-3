var a = 0;

function saveToStorage(item) {
    if (typeof(Storage) !== "undefined") {
        html = document.getElementById(item).outerHTML;
        item = item + localStorage.length
        localStorage.setItem(item, html);
    } else {
        console.log('Sorry! No Web Storage support..');
    }
}

function addItemsToShoppingCart() {
    for (var i = 0; i < localStorage.length; i++){
        var target = document.getElementById("checkoutCart");
        var str = localStorage.getItem(localStorage.key(i));
        var temp = document.createElement('div');

        str = str.replace('addABread', 'removeABread');
        str = str.replace('Add to Cart', 'Remove');
        str = str.replace('src="../resources', 'src="./resources');
        str = str.replace('visibility: hidden', 'visibility: visible');

        temp.innerHTML = str;
        while (temp.firstChild) {
          target.appendChild(temp.firstChild);
        }
    }
}

function setShoppingCartCount() {
    var shoppingCartValue = document.getElementById("shoppingCartValue");
    shoppingCartValue.innerHTML = localStorage.length;
}

function addABread(item) {
    event.stopPropagation();
    saveToStorage(item);
    a++;
 	updateShoppingCart();
}

function removeABread(item) {
    event.stopPropagation();

    var items = document.querySelectorAll('.items .flavor');
    var shoppingCartValue = document.getElementById("shoppingCartValue");

    if (items.length > 0) {
        document.getElementById(item).remove();
        localStorage.removeItem(localStorage.key(item));
    	setShoppingCartCount();
	} else {
		alert("You dont have any items in your cart yet!");
	}
}

function updateShoppingCart() {
	var s = document.getElementById("shoppingCartValue");
  	s.innerHTML = localStorage.length;
}

function end() {
    alert("This is the end of my prototype! Better luck buying your cinnamon rolls next time!");
    localStorage.clear();
}