
function menu_encabezado(){

    let menu = `
    <a href="./index.html">
        <img src="./img/menu.png" alt="">   
    </a>
    `;

    let menu_central = document.querySelector(".encabezado");
   
    menu_central.innerHTML = menu;

    console.log("Hola")
 
};

menu_encabezado();

