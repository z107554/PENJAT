/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */
        var Paraula = ""; 
        var error ="";
        var Vides = 7;
        var seconds = 0;
        window.onload = function(){
        if (!confirm("Anam a la quinta forca?")) {
            document.body.style.backgroundImage = "url('fondo1.png')";
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
                    break
                case "ï":
                case "í":
                    lletra = "i";
                    break
                case "ú":
                case "ü":
                    lletra = "u";
                    break;  
            }
            if ((lletra >= "a") && (lletra <= "m") || (lletra === "ç")) {
                window.alert("Has encertat!");
                Paraula = Paraula + lletra + " ";
                document.getElementById("Paraula").innerHTML = Paraula;
                document.getElementById("disfraz3").hidden = false;
                document.getElementById("miau").play();
                document.getElementById("clock_ticking").play();
            } else{
                window.alert("Has fallat!");
                error = error + lletra + " ";
                document.getElementById("error").innerHTML = error;
                Vides = Vides - 1;
                document.getElementById("Vides").innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + Vides;
                Mostrarimg();
                document.getElementById("boom").play();
                document.getElementById("clock_ticking").play();
            }
            document.getElementById("Vides").innerHTML = 
            "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + Vides;
            if (Vides <= 0) {
                window.alert("i has perdut!");
                document.getElementById("cat-fight").play();
                document.getElementById("bell_toll_x3").play();
                document.body.style.backgroundImage = "url('Jungle.png')";
                document.getElementById("disfraz1").hidden = false;
                document.getElementById("rotar").hidden = false;
                AturaTot();
            } else {
                if (Paraula.length >= 14) {
                    window.alert("i has guanyat!");
                    document.getElementById("cheer").play();
                    document.body.style.backgroundImage = "url('Party.png')";
                    document.getElementById("ahorcado").hidden = false;
                    document.getElementById("ahorcado_0").hidden = true;
                    document.getElementById("disfraz3").hidden = false;
                    document.getElementById("rotar").hidden = false
                    AturaTot();
                }
            }
        }
        function AturaTot() {
            document.getElementById("lletra").disabled = true;
            document.getElementById("Comprovar").disabled = true;
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
                }
                }
        function timer(){
            seconds = seconds + 1
            document.getElementById("counter").innerHTML=seconds
    }
    setInterval(timer,1000)
        
   