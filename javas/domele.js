function abrircifraoubase(){
    let c = document.getElementById('textopracodar').value
    if(document.getElementById('cifra').checked == true){
    sel1 = document.querySelector ("#nav");
    sel1.innerHTML = `
    <div id="containercifra">
        <div class="layoutletrasbotaoselecao">
            <label for="">Digite a quantidade de posições para deslocar cada letra</label>
            <input id="deslocamento" type="number" placeholder="nº">
        </div>
        <div class="layoutletrasbotaoselecao">
            <input type="radio" class="botaocolado" name="c" id="codificar" value="C" onClick="CodificarDesCodCif()">Codificar<br>
            <input type="radio" class="botaocolado" name="c" id="descodificar" value="D" onClick="CodificarDesCodCif()">Descodificar<br>
        </div>
    </div>`;
    sel2 = document.querySelector ("#nav2");
    sel2.innerHTML = `<h2>Codificar/Descodificar Cifra de Cesar</h2>`
    ;
    }
    else if(document.getElementById('base').checked == true){
        navHeader = document.querySelector ("#nav");
        navHeader.innerHTML = `
        <div id="containerbase64">
            <div class="layoutletrasbotaoselecao">
            <input type="radio" class="botaocolado" name="c" id="codificarbase" value="C" onClick="base64()">Codificar<br>
            <input type="radio" class="botaocolado" name="c" id="descodificarbase" value="D" onClick="base64()">Descodificar<br>
            </div>
        </div>`;
        sel2 = document.querySelector ("#nav2");
        sel2.innerHTML = `<h2>Codificar/Descodificar Base64</h2>`;
    }
}
function CodificarDesCodCif(){
    let msg = document.getElementById('textopracodar').value
    let number = document.getElementById('deslocamento').value
    number = Number(number)
    nmsg = ''
    vmsg = ''
    for (carac of msg){
        const cod = carac.charCodeAt(0)
        if((cod >= 65 && cod <= 90)){//maiúsculos
            const codi = carac.charCodeAt(0)
            const novcodi = (codi-90 + number)%26+90
            const nov_cara = String.fromCharCode(novcodi)
            nmsg += nov_cara
        }else if((cod >= 97 && cod <= 122)){//minusculos
            const codi = carac.charCodeAt(0)
            const novcodi = (codi-97 + number)%26+97
            const nov_cara = String.fromCharCode(novcodi)
            nmsg += nov_cara    
        }else if((cod >= 48 && cod <= 57)){//numeros
            const codi = carac.charCodeAt(0)
            const novcodi = (codi-48 + number)%10+48
            const nov_cara = String.fromCharCode(novcodi)
            nmsg += nov_cara
        }
        else{
            nmsg += carac
        }
    }
    for (caracc of msg){
        const cod = caracc.charCodeAt(0)
        if((cod >= 65 && cod <= 90)){//maiúsculos
            const codi = caracc.charCodeAt(0)
            const novcodi = (codi-90 - number)%26+90
            const nov_cara = String.fromCharCode(novcodi)
            vmsg += nov_cara
        }else if((cod >= 97 && cod <= 122)){//minusculos
            const codi = caracc.charCodeAt(0)
            const novcodi = (codi-97 - number)%26+97
            const nov_cara = String.fromCharCode(novcodi)
            vmsg += nov_cara    
        }else if((cod >= 48 && cod <= 57)){//numeros
            const codi = caracc.charCodeAt(0)
            const novcodi = (codi-48 - number)%10+48
            const nov_cara = String.fromCharCode(novcodi)
            vmsg += nov_cara
        }
        else{
            vmsg += caracc
        }
    }
    if(document.getElementById('codificar').checked == true){
        sel1 = document.querySelector ("#nav2");
        sel1.innerHTML = `<h3 class="resposta">Codificar Mensagem! </br> ${nmsg}</h3>`
    }
    else if(document.getElementById('descodificar').checked == true){
        sel1 = document.querySelector ("#nav2");
        sel1.innerHTML = `<h3 class="resposta">Descodificar Mensagem!</br> ${vmsg}</h3>`
    };
}
function base64(){
    let c = document.getElementById('textopracodar').value
    if(document.getElementById('codificarbase').checked == true){
        var s = btoa(c)
        sel2 = document.querySelector ("#nav2");
        sel2.innerHTML = `<h3 class="resposta">${s}</h3>`;
    }else if(document.getElementById('descodificarbase').checked == true){
        var s = atob(c)
        sel2 = document.querySelector ("#nav2");
        sel2.innerHTML = `<h3 class="resposta">${s}</h3>`;
    }
}
cifra.addEventListener('click',abrircifraoubase)
base.addEventListener('click',abrircifraoubase)