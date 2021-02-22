

$(document).ready(function(){
	$("#newsletter").modal('show');
	setInterval(function() {
		$('#newsletter').modal('show');
	  }, 10 * 60 * 1000); 
});
// for minus on shopping_cart_page
const decrease_number = (e, x) =>{
	var itemval = document.getElementById(e);
	var itemprice= document.getElementById(x);
	if (itemval.value <= 0){
		itemval.value = 0;
	}else{
		itemval.value = parseInt(itemval.value)- 1;
		itemprice.innerHTML= parseInt(itemprice.innerHTML) - 9;
	}
}

// for add item on shopping_cart_page
const increase_number = (e, x) => {
	var itemval = document.getElementById(e);
	var itemprice = document.getElementById(x);
	if (itemval.value >= 9){
		itemval.value = 10;
	}else{
		itemval.value = parseInt(itemval.value) + 1;
		itemprice.innerHTML= parseInt(itemprice.innerHTML) + 9;
	}
}

// for delete product row on shopping_cart_page
const deleteRow = (e) => {
	var rowPro= document.getElementById(e);
	rowPro.style.display= 'none';
}