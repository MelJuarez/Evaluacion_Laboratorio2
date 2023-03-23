
function footerjs(){

    let pie_de_pagina = `
        <div class="X">
            <img src="./img/logo.png" alt="">
            <button class="bt-footer">Button</button>
        </div>
        <div class="Z">
            <a href="./Home.html">HOME</a>
            <a href="./About.html">ABOUT</a>
            <a href="./Contact.html">CONTACT</a>
        </div>
    `;

    let final_pag = document.querySelector("footer");
   
    final_pag.innerHTML = pie_de_pagina;

    console.log("Hola2")
 
};

footerjs();