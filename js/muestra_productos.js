//import { merch } from "./producto_contenido.js";

function merch (numero){

    let PRODUCTO = `
    <div class="H">
        <img src="./img/foto.png" alt="">
        <h4 class="merchh ${numero}">${our_products[numero].titulo}</h4>
        <p class="merchh ${numero}">${our_products[numero].contenido}</p>
    </div>
    
    `;

    return PRODUCTO;
}

function desplegar (){

    let mercaderia = document.querySelector(".H");

    our_products.forEach((Element,indice) => {

        let caja = document.createElement("div");

        caja.innerHTML = merch(indice);

        mercaderia.appendChild(caja)
    })

    console.log("aaaaa");
}

desplegar();