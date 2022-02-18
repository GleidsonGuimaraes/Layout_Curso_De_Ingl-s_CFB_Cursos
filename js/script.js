let cont = 1;

function autoTrocar() {
    let autoT = setInterval(trocar, 3000);
}

function trocar() {
    document.getElementById("banner").style.backgroundImage = "url(img/banner" + cont + ".jpg)";
    cont++;
    if(cont > 3){
        cont = 1;
    }
}
