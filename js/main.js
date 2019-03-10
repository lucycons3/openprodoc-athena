'use strict'

//config
var home = "localhost:8080";

// IP change
var as = document.querySelectorAll("a");
var local = "localhost:8080";

for (var i = 0; i < as.length; i++){
  if (as[i].getAttribute("href").search(local) != -1){
    var rest = as[i].getAttribute("href").slice(21);
    as[i].href = "http://"+home+rest;
  }
}

// General variables

var url = window.location.href;

//Flecha arriba
function arrowTop(){
  let winHeight = window.innerHeight;
  let bodyHeight = document.querySelector("body").scrollHeight;
  let arrow = document.querySelector(".arrow");
  if (arrow != null && (2*winHeight) < bodyHeight ){
    arrow.className += " visible"
  }else{
  }
}

arrowTop();

// COOKIES
var aceptoCookies = document.getElementById("acepto-cookies");
var divCookies = document.querySelector(".cookies");
var cookies = localStorage.getItem("cookies");

if (aceptoCookies != null){
  aceptoCookies.onclick = function(){
    localStorage.setItem("cookies","true");
    divCookies.style.display = 'none';
  };
};

if (cookies == 'true'){
  divCookies.style.display = 'none';
}

// OPAC
if(url.search('OPAC')>1){
  let divs_search = document.querySelectorAll(".OPACFTLAB");
  for (var i = 0; divs_search.length > i; i++){
    if (divs_search[i].innerHTML == "Búsqueda por texto libre"){
      divs_search[i].innerHTML += "<br><span class='note'>Solo para documentos a partir de 2004</span>"
    }
  }
  let divs_title = document.querySelectorAll(".OPACLAB");
  for (var i = 0; divs_title.length > i; i++){
    if (divs_title[i].innerHTML == "Título del Documento"){
      divs_title[i].innerHTML += "<br><span class='note'>No utilizar Título para revistas</span>"
    }
  }

  let labels = document.querySelectorAll('td');
  let inputs = document.querySelectorAll('.TD_OPACINP');
  for(var i = 0; labels.length > i; i++){
    labels[i].classList.add('col-6')
  }
  for(var i = 0; inputs.length > i; i++){
    inputs[i].classList.add('col-6')
  }
}

//contrib-login
if (url.search('ContribLogin')>1){
    var required = document.querySelectorAll(".CONTRIBLAB_LOGIN");
    document.querySelector("input[name='Nombre']").setAttribute("required","");
    document.querySelector("input[name='Correo']").setAttribute("required","");
    for (var i = 0; i < required.length; i++){
      required[i].innerHTML += "<span style='color:red';> * </span>";
    };

    let autorizacion = document.querySelectorAll('.CONTRIBLAB');
    let check = document.querySelector(".CONTRIBCHECKBOX");
    let div = document.createElement("div");
    let area = document.querySelector(".CONTRIBAREA");
    div.className = "autorization";
    for(var i = 0; i< autorizacion.length; i++){
      if(autorizacion[i].innerHTML == "Autorizo nombre y apellidos"){
        autorizacion[i].innerHTML = 'Autorizo que se publiquen mis datos personales';
        autorizacion[i].className = "autorizacion";
        div.appendChild(check);
        check.insertAdjacentElement("afterend",autorizacion[i]);
        area.insertAdjacentElement("afterend",div);
      }
    }

    console.log(check);
}

//contrib-list
if (url.search('ContribList')>1){
  var campos = document.querySelectorAll(".CONTRIBLAB");
  for (var i = 0; i < campos.length; i++){
    campos[i].classList.remove("CONTRIBLAB");
    campos[i].classList.add("CONTRIBLIST");
  }

  //autorizacion
  let autorizacion = document.querySelectorAll(".CONTRIBLIST");
  for(var i = 0; i < autorizacion.length ; i++){
    if(autorizacion[i].innerHTML == "Autorizo nombre y apellidos"){
      autorizacion[i].innerHTML = "Autorizo que se publiquen mis datos personales";
      let authline = document.getElementById("Consentimiento");
      authline.appendChild(authline.childNodes[0]);
      console.log(authline.querySelectorAll("td"));
      authline.className = "autorization";
      authline.firstChild.className += " left";
      authline.lastChild.className = "inline";
      authline.lastChild.style.width = "90%";
      authline.lastChild.firstChild.className = "autorizacion";
    }
  }

  //mensaje si no hay documentos donados
  let docs = document.querySelector('.result');
  if(docs == null){
    let result = document.querySelector(".maincontribreport");
    let div = document.createElement("div");
    let svg = document.createElement("img");
    let p = document.createElement("p");
    let insert = result.childNodes[1];
    svg.src = "img/hand-heart.svg";
    svg.className = "emoji";
    p.innerHTML = "Lista vacía, todavía no has incorporado ningún documento."
    div.className = "noresult";
    div.appendChild(svg);
    div.appendChild(p);
    insert.appendChild(div);
  }
}

//contrib-add
if (url.search('ContribAdd')>1){
  var fecha = document.querySelector("[name=DocDate]");
  fecha.setAttribute("type","date");
  document.querySelector("[name=Title]").setAttribute("required","");
  var titulo = document.querySelector(".CONTRIBLAB_LOGIN");
  var inputs = document.querySelectorAll(".CONTRIBINP");
  var inputtitulo = document.querySelectorAll('[name=Title]');
  var spans = document.querySelectorAll("span");
  var divs = document.querySelectorAll("div");
  var spantitulo = spans[1];
  divs[9].insertAdjacentElement("beforebegin",titulo);
  titulo.insertAdjacentElement("afterend",inputtitulo[0]);
  // inputtitulo.insertAdjacentElement("afterend",spantitulo);
  let dpto = document.querySelector("[name = 'Departamento']");
  let year = document.querySelector("[name = 'Year']");
  let numero = document.querySelector("[name = 'Numero']");


  for (var i = 0; divs.length > i; i++){
    if (divs[i].firstChild.innerHTML == "Título del Documento" && divs[i+1].innerHTML != "Archivo a aportar" && divs[i].innerHTML.search("Año") < 1 && divs[i].innerHTML.search("Número") < 1){
      divs[i].style.width = "100%";
      divs[i].innerHTML = '<div class=\"CONTRIBLAB\">Título del Documento</div><input class=\"CONTRIBINP\" type=\"text\" name=\"Title\" required=\"\"><span id=\"\" style=\"display: none;\"> |</span><div class=\"CONTRIBLAB\">Departamento</div>';
      var inject = i;
      divs[i].className = "";
      divs[i].appendChild(dpto);
    }else if (divs[i].className == "CONTRIBLAB" && divs[i].innerHTML.search("Año")>1) {
      divs[i].style.width = "100%";
      divs[i].innerHTML = '<div class=\"CONTRIBLAB\">Título del Documento</div><input class=\"CONTRIBINP\" type=\"text\" name=\"Title\" required=\"\"><span id=\"\" style=\"display: none;\"> |</span><div class=\"CONTRIBLAB\">Año</div>';
      divs[i].appendChild(year);
    }else if(divs[i].className == "CONTRIBLAB" && divs[i].innerHTML.search("Número")>1){
      divs[i].style.width = "100%";
      divs[i].innerHTML = '<div class=\"CONTRIBLAB\">Título del Documento</div><input class=\"CONTRIBINP\" type=\"text\" name=\"Title\" required=\"\"><span id=\"\" style=\"display: none;\"> |</span><div class=\"CONTRIBLAB\">Número</div>';
      divs[i].appendChild(numero);
    }
  }
}

//contrib-res
if(url.search("ContribRes")>1){
  window.onload = function (){
    var contribok = document.querySelector(".CONTRIBRETRYOK");
    var contribko = document.querySelector(".CONTRIBRETRYKO");
    let result = document.querySelector("#result");
    let svg = document.createElement("img");
    let buttons = document.querySelectorAll(".exitbutton");
    svg.className = "emoji";

    if (contribok != null){
      buttons[0].className += " good";
      buttons[1].className += " good";
      svg.src = "img/nice.svg";
      result.insertAdjacentElement("afterbegin", svg);
    }else if (contribko != null) {
      let error = document.querySelectorAll("div");
      svg.src = "img/stop.svg";
      result.insertAdjacentElement("afterbegin", svg);
      result.innerHTML = result.innerHTML.replace("ERROR:Not Allowed extension","<div>ERROR:Not Allowed extension</div>")
    }
  }
}

//responsive menu
  document.querySelector(".icon").onclick = function (){
    let menu = document.querySelector('.topNav');
    if(menu.className === 'topNav') {
      menu.className += ' responsive';
    }else{
      menu.className = 'topNav'
    }
  }

//traduccion

var whichLang = localStorage.getItem('lang');
var english = document.querySelector('#english');
var spanish = document.querySelector('#spanish');
var galician = document.querySelector('#galician');
var eusk = document.querySelector('#euskera');
var cat = document.querySelector('#catalan');

var all = [
  document.getElementsByTagName('h1'),
  document.getElementsByTagName('h2'),
  document.getElementsByTagName('h4'),
  document.getElementsByTagName('a'),
  document.getElementsByTagName('p'),
  document.getElementsByTagName('div'),
  document.getElementsByTagName('button'),
  document.getElementsByTagName('label'),
  document.getElementsByTagName('strong'),
  document.getElementsByTagName('span'),
  document.getElementsByTagName('option'),
  document.getElementsByTagName('input'),
  document.getElementsByTagName('legend')
]

english.onclick = function(){
  localStorage.setItem('lang','english');
  location.reload();
}

spanish.onclick = function(){
  localStorage.setItem('lang','spanish');
  location.reload();
}

galician.onclick = function(){
  localStorage.setItem('lang','galician');
  location.reload();
}

eusk.onclick = function(){
  localStorage.setItem('lang','euskera');
  location.reload();
}

cat.onclick = function(){
  localStorage.setItem('lang','catalan');
  location.reload();
}

function language(){
  if(whichLang == null || whichLang == 'spanish'){
    spanish.style.display = "none";
    document.getElementById("esTube").style.display = "none";
  } else if (whichLang == 'english'){
    english.style.display = "none";
    document.getElementById("enTube").style.display = "none";
    for(var i = 0; all.length > i; i++){
      for(var k = 0; all[i].length > k; k++){
        for (var j = 0; ingles.length > j; j++){
          if(all[i][k].innerHTML == ingles[j].castellano){
            all[i][k].innerHTML = ingles[j].ingles
          }else if(all[i][k].value == ingles[j].castellano){
            all[i][k].value = ingles[j].ingles
          }
        }
      }
    }
  } else if (whichLang == 'galician'){
    galician.style.display = "none";
    document.getElementById("gaTube").style.display = "none";
    for(var i = 0; all.length > i; i++){
      for(var k = 0; all[i].length > k; k++){
        for (var j = 0; gallego.length > j; j++){
          if(all[i][k].innerHTML == gallego[j].castellano){
            all[i][k].innerHTML = gallego[j].gallego
          }else if(all[i][k].value == gallego[j].castellano){
            all[i][k].value = gallego[j].gallego
          }
        }
      }
    }
  }else if (whichLang == 'euskera'){
    eusk.style.display = "none";
    document.getElementById("euTube").style.display = "none";
    for(var i = 0; all.length > i; i++){
      for(var k = 0; all[i].length > k; k++){
        for (var j = 0; euskera.length > j; j++){
          if(all[i][k].innerHTML == euskera[j].castellano){
            all[i][k].innerHTML = euskera[j].euskera
          }else if(all[i][k].value == euskera[j].castellano){
            all[i][k].value = euskera[j].euskera
          }
        }
      }
    }
  }else if (whichLang == 'catalan'){
    cat.style.display = "none";
    document.getElementById("gaTube").style.display = "none";
    for(var i = 0; all.length > i; i++){
      for(var k = 0; all[i].length > k; k++){
        for (var j = 0; catalan.length > j; j++){
          if(all[i][k].innerHTML == catalan[j].castellano){
            all[i][k].innerHTML = catalan[j].catalan
          }else if(all[i][k].value == catalan[j].castellano){
            all[i][k].value = catalan[j].catalan
          }
        }
      }
    }
  }
}

language();
