// ==UserScript==
// @name         Chroma V1.1
// @namespace    http://tampermonkey.net/
// @version      1.1
// @description  Hacks, Styling, all in one!
// @author       DaxCodes (replit)
// @match        https://*
// @icon         https://replit.com/@DaxCodes/ImportChroma#images/logo.png
// @grant        none
// ==/UserScript==

// Chroma V1 \\
//-----------\\
// Created by @DaxCodes on replit! \\

// oogly
// boogly

// set up style & starting var
var chromaOpened = 0;

var chromaStyle = document.createElement('style');
chromaStyle.textContent = `
  @import url('https://fonts.googleapis.com/css2?family=Raleway&display=swap');
  @keyframes chromatext{
    100%{color: red;}
    95%{color: #DE00FF;}
    80%{color: #0098FF;}
    60%{color: #00FF0A;}
    40%{color: yellow;}
    20%{color: orange;}
    0%{color: red;}
  }
  @keyframes chroma{
    100%{background: red;}
    95%{background: purple;}
    80%{background: blue;}
    60%{background: green;}
    40%{background: yellow;}
    20%{background: orange;}
    0%{background: red;}
  }
  @keyframes gradientred{
    100%{background: #660000;}
    90%{background: #800000;}
    80%{background: #990000;}
    70%{background: #b30000;}
    60%{background: #cc0000;} 
    50%{background: #e60000;}
    40%{background: #cc0000;}
    30%{background: #b30000;}
    20%{background: #990000;}
    10%{background: #800000;}
    0%{background: #660000;}
  }
  @keyframes chromaoriginal{
    100%{background: #222222;}
    50%{background: #333333;}
    0%{background: #222222;}
  }
  @keyframes logospin{
    100%{transform: rotate(16deg);}
    50%{transform: rotate(-16deg);}
    0%{transform: rotate(16deg);}
  }
  *{
    margin: 0;
    padding: 0;
  }
  #chromaMain{
    z-index: 767676;
    position: fixed;
    top: 0;
    left; 0;
    width: 49px;
    height: 49px;
    margin: 0;
    padding: 2px;
    border-radius: 6px;
    animation-name: chromaoriginal;
    animation-iteration-count: infinite;
    animation-duration: 2s;
    font-family: 'Raleway', sans-serif;
    opacity: .5;
    transition: width .5s, height .5s, opacity .5s;
  }
  #chromaMain:hover{
    opacity: 1;
  }
  #chromascriptbuttonsgui::-webkit-scrollbar {
    width: 12px;               /* width of the entire scrollbar */
  }
  #chromascriptbuttonsgui::-webkit-scrollbar-track {
    background: #222222;        /* color of the tracking area */
  }
  #chromascriptbuttonsgui::-webkit-scrollbar-thumb {
    background-color: #853F3F;    /* color of the scroll thumb */
    border-radius: 20px;       /* roundness of the scroll thumb */
    border: 3px solid #222222;  /* creates padding around scroll thumb */
  }
  #chromahackbuttonsgui::-webkit-scrollbar {
    width: 12px;               /* width of the entire scrollbar */
  }
  #chromahackbuttonsgui::-webkit-scrollbar-track {
    background: #222222;        /* color of the tracking area */
  }
  #chromahackbuttonsgui::-webkit-scrollbar-thumb {
    background-color: #853F3F;    /* color of the scroll thumb */
    border-radius: 20px;       /* roundness of the scroll thumb */
    border: 3px solid #222222;  /* creates padding around scroll thumb */
  }
  
  #chromaText{
    animation-name: chromatext;
    animation-duration: 2s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
  }
  .chromabtn{
    width: 445px;
    height: 30px;
    border: 0;
    color: white;
    font-size: 25px;
    margin: 2px;
    border-radius: 5px;
    background: #414141;
    font-family: 'raleway', sans-serif;
    transition: background .35s, font-size .35s;
  }
  .chromabtn:hover{
    background: #3B3B3B;
    font-size: 27px;
    cursor: pointer;
  }
  .chromabtn:active{
    background: #242424;
    font-size: 28px;
    cursor: pointer;
  }
  .catagorybutton{
    width: 75px;
    height: 30px;
    border: 0;
    color: white;
    font-size: 18px;
    border-radius: 5px;
    background: #414141;
    font-family: 'raleway', sans-serif;
    transition: background .35s, font-size .35s;
    margin: 3px;
  }
  .catagorybutton:hover{
    animation-name: chromatext;
    animation-duration: 2s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    font-size: 20px;
    cursor: pointer;
  }
  .catagorybutton:active{
    font-size: 22px;
  }
`;
// AVALIABLE GRADIENTS: gradientred, chroma, chromaoriginal

// page
var page = 'homebuttonsgui';

// set up main interface
var main = document.createElement("div");
main.id = 'chromaMain';

var logo = document.createElement("img");
logo.id = 'chromaLogo';
logo.style = 'user-select: none; position: absolute; top: -1%; left: 0%; transform: translate(-2%, 0%); margin: 0; width: 50px; z-index: 999999;';
logo.src = 'https://importchroma.daxcodes.repl.co/images/logo.png';

var logotext = document.createElement("h2");
logotext.id = 'chromaText';
logotext.innerHTML = 'Chroma v1.1';
logotext.style = 'user-select: none; opacity: 0; pointer-events: none; position: absolute; top: 2%; left: 11%; transform: translate(-2%, 0%); margin: 5px; z-index: 999999; transition: opacity .25s;';

// main interface functioning
// width: 450px height: 300px
var opened = false;
function invis(obj){
  obj.style.opacity = 0;
  obj.style.pointerEvents = 'none';
}
function vis(obj){
  obj.style.opacity = 1;
  obj.style.pointerEvents = 'all';
}


// buttons
var catagorygui = document.createElement('div');
catagorygui.id = 'chromaCatagoryGUI';
catagorygui.style = 'transition: opacity .4s;';

//scriptbuttonsgui
var scriptbuttonsgui = document.createElement('div');
scriptbuttonsgui.id = 'chromascriptbuttonsgui';
scriptbuttonsgui.style='height: 200px; width: 450px; position: absolute; bottom: 0; opacity: 0; pointer-events: none; transition: opacity .25s; overflow-y: auto; overflow-x: hidden;';

// homebuttonsgui
var homebuttonsgui = document.createElement('div');
homebuttonsgui.id = 'chromahomebuttonsgui';
homebuttonsgui.style='height: 200px; width: 450px; position: absolute; bottom: 0; opacity: 0; pointer-events: none; transition: opacity .25s; padding: 3px; color: white;';
var hometext = document.createElement('h3');
hometext.id = 'chromahometext';
hometext.style = 'user-select: none; animation-name: chromatext; animation-duration: 5s; animation-iteration-count: infinite; animation-timing-function: linear;'
hometext.innerHTML = 'V1 Patch Notes:';

// hackbuttonsgui
var hackbuttonsgui = document.createElement('div');
hackbuttonsgui.id = 'chromahackbuttonsgui';
hackbuttonsgui.style='height: 200px; width: 450px; position: absolute; bottom: 0; opacity: 0; pointer-events: none; transition: opacity .25s;';

var hometext2 = document.createElement('h3');
hometext2.id = 'chromahometext2';
hometext2.style = 'user-select: none; position: absolute; top: 65%';
hometext2.innerHTML = 'Press "h" to toggle menu.';

var bullet1 = document.createElement('h3');
bullet1.id = 'chromabullet1';
bullet1.style = 'position: absolute; left: 5%; color: lime; user-select: none;'
bullet1.innerHTML = '  - FIRST RELEASE AYAYAY';
var bullet2 = document.createElement('h3');
bullet2.id = 'chromabullet2';
bullet2.style = 'position: absolute; left: 5%; top: 23%; user-select: none;'
bullet2.innerHTML = '  - Added lots of scripts, themes, etc.';
var bullet3 = document.createElement('h3');
bullet3.id = 'chromabullet3';
bullet3.style = 'position: absolute; left: 5%; top: 34%; color: red; user-select: none;'
bullet3.innerHTML = '  - No Chroma Injector yet :(';

// catagory buttons
var catagorybuttons = document.createElement('div');
catagorybuttons.id = 'chromaCatagoryButtons';
catagorybuttons.style = 'height: 30px; width: 450px; position: absolute; top: 20%; opacity: 0; pointer-events: none; transition: opacity .25s;';

// homebtn
var homebtn = document.createElement('button');
homebtn.id = 'chromaHomeBtn';
homebtn.innerHTML = 'Home'
homebtn.classList.add('catagorybutton');
homebtn.addEventListener('click', homebtnfunc);
function homebtnfunc(){
  invis(scriptbuttonsgui)
  invis(hackbuttonsgui)
  vis(homebuttonsgui)
}

// scriptsbtn
var scriptsbtn = document.createElement('button');
scriptsbtn.id = 'chromaScriptsBtn';
scriptsbtn.innerHTML = 'Scripts'
scriptsbtn.classList.add('catagorybutton');
scriptsbtn.addEventListener('click', scriptsbtnfunc);
function scriptsbtnfunc(){
  invis(homebuttonsgui)
  invis(hackbuttonsgui)
  vis(scriptbuttonsgui)
}
var scriptsbtntext = document.createElement('h2');
scriptsbtntext.id = 'chromascriptsbtntext';
scriptsbtntext.style = 'color: yellow; text-align: center;';
scriptsbtntext.innerHTML = '-- Scripts --';

// hacksbtn
var hacksbtn = document.createElement('button');
hacksbtn.id = 'chromaHacksBtn';
hacksbtn.innerHTML = 'Hacks'
hacksbtn.classList.add('catagorybutton');
hacksbtn.addEventListener('click', hacksbtnfunc);
function hacksbtnfunc(){
  invis(homebuttonsgui)
  invis(scriptbuttonsgui)
  vis(hackbuttonsgui)
}
var hacksbtntext = document.createElement('h2');
hacksbtntext.id = 'chromahacksbtntext';
hacksbtntext.style = 'color: red; text-align: center;';
hacksbtntext.innerHTML = '-- Hacks --';


// Edit Text
var edittext = document.createElement('button');
edittext.id = 'chromaEditText';
edittext.classList.add("chromabtn");
edittext.innerHTML = 'Edit Text';
edittext.addEventListener('click', editTextfunc);
edittextvar = false;
function editTextfunc(){
  if(edittextvar == false){
    document.body.contentEditable = 'true';
    document.designMode='on';
    edittext.innerHTML = 'Disable Edit Text';
    edittextvar = true;
  } else{
    document.body.contentEditable = 'false';
    document.designMode='off';
    edittext.innerHTML = 'Edit Text';
    edittextvar = false;
  }
  
}

// RGB Background
var rgbbackground = document.createElement('button');
rgbbackground.id = 'chromaRGBBackground';
rgbbackground.classList.add("chromabtn");
rgbbackground.innerHTML = 'RGB Background';
rgbbackground.style = 'animation-name: chromatext; animation-duration: 2s; animation-iteration-count: infinite; animation-timing-function: linear;'
rgbbackground.addEventListener('click', rgbbackgroundfunc);
function rgbbackgroundfunc(){
  document.body.style.animationName = 'chroma';
  document.body.style.animationDuration = '2s';
  document.body.style.animationIterationCount = 'infinite';
}

// Inspect Element
var InspectElement = document.createElement('button');
InspectElement.id = 'chromaInspectElement';
InspectElement.classList.add("chromabtn");
InspectElement.innerHTML = 'Inspect Element';
InspectElement.addEventListener('click', InspectElementfunc);
function InspectElementfunc(){
  (function () {     var script =  document.createElement('script');    script.src="//cdn.jsdelivr.net/npm/eruda";     document.body.appendChild(script);    script.onload = function () {         eruda.init()     } })();
  alert('Inspect Element Loaded!')
}

// YOU ARE AN IDIOT!
var idiot = document.createElement('button');
idiot.id = 'chromaIdiot';
idiot.classList.add("chromabtn");
idiot.innerHTML = 'You are an Idiot!';
idiot.addEventListener('click', Idiotfunc);
function Idiotfunc(){
  document.body.style.backgroundImage = 'url("https://importchroma.daxcodes.repl.co/scriptimages/you-are-idiot.gif")';
}

// YOU ARE AN IDIOT with sound!
var idiotwithsound = document.createElement('button');
idiotwithsound.id = 'chromaIdiotwithsound';
idiotwithsound.classList.add("chromabtn");
idiotwithsound.innerHTML = 'You are an Idiot! (with sound)';
idiotwithsound.addEventListener('click', Idiotsoundfunc);
function Idiotsoundfunc(){
  document.body.style.backgroundImage = 'url("https://importchroma.daxcodes.repl.co/scriptimages/you-are-idiot.gif")';
  
  var idiotsound = document.createElement('audio');
  idiotsound.src ='https://importchroma.daxcodes.repl.co/music/you-are-an-idiot.mp3';
  idiotsound.id ='chromaIdiotSound';
  idiotsound.play()
  idiotsound.loop = true;
}

// RGB Text
var rgbtext = document.createElement('button');
rgbtext.id = 'chromaRGBText';
rgbtext.classList.add("chromabtn");
rgbtext.innerHTML = 'RGB Text';
rgbtext.style = 'animation-name: chromatext; animation-duration: 2s; animation-iteration-count: infinite; animation-timing-function: linear;'
rgbtext.addEventListener('click', rgbtextfunc);
function rgbtextfunc(){
  document.body.style.animationName = 'chromatext';
  document.body.style.animationDuration = '2s';
  document.body.style.animationIterationCount = 'infinite';
}

// appending elements
document.head.appendChild(chromaStyle)

document.body.appendChild(main)
document.getElementById("chromaMain").appendChild(logo)
document.getElementById("chromaMain").appendChild(logotext)

//button append
document.getElementById("chromaMain").appendChild(catagorygui)
document.getElementById("chromaCatagoryGUI").appendChild(scriptbuttonsgui)
document.getElementById("chromaCatagoryGUI").appendChild(homebuttonsgui)
document.getElementById("chromaCatagoryGUI").appendChild(hackbuttonsgui)
document.getElementById("chromaMain").appendChild(catagorybuttons)

document.getElementById("chromaCatagoryButtons").appendChild(homebtn);
document.getElementById("chromaCatagoryButtons").appendChild(scriptsbtn);
document.getElementById("chromaCatagoryButtons").appendChild(hacksbtn);

// for scriptbuttonsgui
document.getElementById("chromascriptbuttonsgui").appendChild(scriptsbtntext)
document.getElementById("chromascriptbuttonsgui").appendChild(edittext)
document.getElementById("chromascriptbuttonsgui").appendChild(rgbbackground);
document.getElementById("chromascriptbuttonsgui").appendChild(InspectElement);
document.getElementById("chromascriptbuttonsgui").appendChild(idiot);
document.getElementById("chromascriptbuttonsgui").appendChild(idiotwithsound);
document.getElementById("chromascriptbuttonsgui").appendChild(rgbtext);

// for homebuttonsgui
document.getElementById("chromahomebuttonsgui").appendChild(hometext)
document.getElementById("chromahomebuttonsgui").appendChild(bullet1)
document.getElementById("chromahomebuttonsgui").appendChild(bullet2)
document.getElementById("chromahomebuttonsgui").appendChild(bullet3)
document.getElementById("chromahomebuttonsgui").appendChild(hometext2)

// for hackbuttonsgui
document.getElementById("chromahackbuttonsgui").appendChild(hacksbtntext)

// music


// event listeners
document.getElementById("chromaLogo").addEventListener("click", openclose);

var invisibleMenu = false;
document.addEventListener('keypress', (event) => {
  if(event.key == 'h'){
    if(invisibleMenu == false){
      invisibleMenu = true;
      invis(main)
    } else {
      invisibleMenu = false;
      vis(main)
    }
  }
}, false);

// openclose

function openclose(){
  if(opened==false){
    opened = true;
    document.getElementById("chromaMain").style.width = '450px';
    document.getElementById("chromaMain").style.height = '300px';
    vis(logotext)
    vis(catagorybuttons)
    vis(catagorygui)
    if(chromaOpened == 0){
      chromaOpened = 1;
      vis(homebuttonsgui)
    }
  } else{
    opened = false;
    document.getElementById("chromaMain").style.width = '49px';
    document.getElementById("chromaMain").style.height = '49px';
    invis(logotext)
    invis(catagorybuttons)
    invis(catagorygui)
  }
}