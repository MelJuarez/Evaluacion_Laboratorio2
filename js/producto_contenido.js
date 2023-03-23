
export function merch (numero){

    let PRODUCTO = `
    <div class="H">
        <img src="./img/foto.png" alt="">
        <h4 class="merchh ${numero}">${our_products[numero].titulo}</h4>
        <h5 class="merchh ${numero}">${our_products[numero].contenido}</h5>
    </div>
    
    `;

    return PRODUCTO;
}