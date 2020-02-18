function init() {
}
window.onload = function() {
    init();
 };

// en caso de que quisera usar quantity como variale global, ¿como paso a la misma como parametros a estas dos funciones?

function lessButton(){

    var quantity = document.getElementById("quantity").value;
    
    if(quantity > 1){
        document.getElementsByClassName("total").innerHTML =  parseInt(quantity) - 1;
        document.getElementById("quantity").value = parseInt(quantity) - 1;
    }
}

function moreButton(){

    var quantity = document.getElementById("quantity").value;
    
    document.getElementById("quantity").innerHTML = parseInt(quantity) + 1;
    document.getElementById("quantity").value = parseInt(quantity) + 1;

}


buy = () => {

    let quantity = document.getElementById('quantity').value;
    let price = document.getElementById('price');
    

    var priceNumber = "";
    for(let i = 0 ; i < price.innerHTML.length; i++){

        if(price.innerHTML[i] == '.' || price.innerHTML[i] == '0' ||
        price.innerHTML[i] == '1' || price.innerHTML[i] == '2' || price.innerHTML[i] == '3' ||
        price.innerHTML[i] ==  '4' || price.innerHTML[i] == '5' || price.innerHTML[i] == '6' ||
        price.innerHTML[i] == '7' || price.innerHTML[i] == '8' || price.innerHTML[i] == '9'){
        
            priceNumber = priceNumber + price.innerHTML[i];
        }
    }
    parseFloat(priceNumber);

    parseInt(quantity);

    console.log(quantity*priceNumber);
} 


//cantidad * precio  


