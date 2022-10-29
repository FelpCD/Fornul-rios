var slider = document.getElementById("range");


var resultado = document.getElementById("valor");

resultado.innerHTML = slider.value;

slider.oninput = function(){
    resultado.innerHTML = this.value;
}

