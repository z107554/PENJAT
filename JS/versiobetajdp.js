/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */
var seconds = 0;
function timer(){
    seconds = seconds + 1
    document.getElementById("counter").innerHTML=seconds
}
setInterval(timer,1000)

var Paraula = []; 
var lletres =["_","_","_","_","_","_","_"];
var Vides = 7;
var Paraules = ["cordes", "fetge", "forca", "jutges", "jutjat", "mengen", "penjat", "quinta", "setze"];
var pistes = ["A la quinta forca", "A ca un penjat, no hi anomenis cordes", "Setze jutges d'un jutjat mengen fetge d'un penjat"];
var Paraulapista = [1, 2, 0, 2, 2, 2, 1, 0, 2];

var Aleatori = Math.floor(Math.random() * Paraules.length);
var palabra = Paraules[Aleatori];
var pista = pistes [Paraulapista[Aleatori]];

function Amagarimg(){
    document.getElementById("ahorcado_6").hidden = true;
    document.getElementById("ahorcado_5").hidden = true;
    document.getElementById("ahorcado_4").hidden = true;
    document.getElementById("ahorcado_3").hidden = true;
    document.getElementById("ahorcado_2").hidden = true;
    document.getElementById("ahorcado_1").hidden = true;
    document.getElementById("ahorcado_0").hidden = true;
    document.getElementById("ahorcado").hidden = true;
    document.getElementById("disfraz3").hidden = true;
    document.getElementById("disfraz2").hidden = true;
    document.getElementById("disfraz1").hidden = true;
    document.getElementById("caminar").hidden = true;
    document.getElementById("rotar").hidden = true; 
    document.body.style.display = "block"; 

    for (var i = 0 ; i < palabra.length; i++){
    Paraula[i] = "";
}
}
function alertpista(){
    window.alert(pista);
}
window.onload = function(){
if (!confirm("Anam a la quinta forca?")) {
    document.body.style.backgroundImage = "url('img/fondo1.png')";
    document.getElementById("mystery").play();
}
Amagarimg();
}
function Comprovar() {
    lletra = document.getElementById("lletra").value;
    document.getElementById("lletra").value = "";
    lletra = lletra.toLowerCase();
    switch(lletra) {
        case "á":
        case "à":
            lletra = "a";
            break;
        case "é":
        case "è":
            lletra = "e";
            break;
        case "ó":
        case "ò":
            lletra = "o";
            break;
        case "ï":
        case "í":
            lletra = "i";
            break
        case "ú":
        case "ü":
            lletra = "u";
            break;  
    }
    if (palabra.indexOf(lletra) !== -1) {
        var pos = palabra.indexOf(lletra);
        for (var i = 0; i < palabra.length; i++) {
            if (palabra[i] === lletra) {
                Paraula[i] = lletra;
            }
        }
        window.alert("Has encertat!");
        palabra = palabra + lletra + " ";
        document.getElementById("Paraula").innerHTML = Paraula;
        document.getElementById("disfraz3").hidden = false;
        document.getElementById("miau").play();
        document.getElementById("clock_ticking").play();
    } else {
        window.alert("Has fallat!");
        lletres[7-Vides] = lletra;
        document.getElementById("lletres").innerHTML = lletres;
        Vides = Vides - 1;
        document.getElementById("Vides").innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + Vides;
        Mostrarimg();
        document.getElementById("boom_cloud").play();
        document.getElementById("clock_ticking").play();
    }
    if (Vides <= 0){
        window.alert("i has perdut!");
        document.getElementById("cat-fight").play();
        document.getElementById("bell_toll_x3").play();
        document.body.style.backgroundImage = "url('img/Jungle.png')";
        document.getElementById("disfraz1").hidden = false;
        document.getElementById("rotar").hidden = false;
        AturaTot();
    } else {
        if (!Paraula.includes("")) {
            window.alert("i has guanyat!");
            document.getElementById("cheer").play();
            document.body.style.backgroundImage = "url('img/Party.png')";
            document.getElementById("ahorcado").hidden = false;
            document.getElementById("ahorcado_0").hidden = true;
            document.getElementById("disfraz3").hidden = false;
            document.getElementById("rotar").hidden = false;
            document.getElementById("imatges").hidden = true;
            AturaTot();
        }
    }
}
function AturaTot() {
    document.getElementById("lletra").disabled = true;
    document.getElementById("Comprovar").disabled = true;
}

function Mostrarimg(){
    switch (Vides){
        case 6:
            document.getElementById("ahorcado_6").hidden = false;
            break;
        case 5:
            document.getElementById("ahorcado_5").hidden = false;
            document.getElementById("ahorcado_6").hidden = true;
            break;
        case 4:
            document.getElementById("ahorcado_4").hidden = false;
            document.getElementById("ahorcado_5").hidden = true;
            break;
        case 3:
            document.getElementById("ahorcado_3").hidden = false;
            document.getElementById("ahorcado_4").hidden = true;
            break;
        case 2:
            document.getElementById("ahorcado_2").hidden = false;
            document.getElementById("ahorcado_3").hidden = true;
            break;
        case 1:
            document.getElementById("ahorcado_1").hidden = false;
            document.getElementById("ahorcado_2").hidden = true;
            break;
        case 0:
            document.getElementById("ahorcado_0").hidden = false;
            document.getElementById("ahorcado_1").hidden = true;
            break;
        }
        }
