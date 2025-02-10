/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */
        var Paraula = ""; 
        var error ="";
        var Vides = 7;
        window.onload = function(){
        if (!confirm("Anam a la quinta forca?")) {
            document.body.style.backgroundImage = "url('fondo1.png')";
        }
        }

        function Comprovar() {
            lletra = document.getElementById("lletra").value;
            document.getElementById("lletra").value = "a";
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
                    break
                case "ï":
                case "í":
                    lletra = "i";
                    break
                case "ú":
                case "ü":
                    lletra = "o";
                    break;  
            }
            if ((lletra >= "a") && (lletra <= "m") || (lletra === "ç")) {
                window.alert("Has encertat!");
                Paraula = Paraula + lletra + " ";
                document.getElementById("Paraula").innerHTML = Paraula;
            } else{
                window.alert("Has fallat!");
                error = error + lletra + " ";
                document.getElementById("error").innerHTML = error;
                Vides = Vides - 1;   
                Mostrarimg ();        
            }
            document.getElementById("Vides").innerHTML = 
            "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + Vides;
            if (Vides <= 0) {
                window.alert("i has perdut!");
                document.body.style.backgroundImage = "url('Jungle.png')";

                AturaTot();
            } else {
                if (Paraula.length >= 14) {
                    window.alert("i has guanyat!");
                    document.body.style.backgroundImage = "url('Party.png')";
                    AturaTot();
                }
            }
        }
        function AturaTot() {
            document.getElementById("lletra").disabled = true;
            document.getElementById("Comprovar").disabled = true;
            document.getElementById('teclat').disabled = true;s
        }
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
                default:
                    break;
                }
                }
        var seconds = 0
        function timer(){
            seconds = seconds + 1
            document.getElementById("counter").innerHTML=seconds
    }
    setInterval(timer,1000)
        
   