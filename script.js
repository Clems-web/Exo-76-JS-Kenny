let viewport = document.getElementById("viewport");
let style = window.getComputedStyle(viewport);
let carreRouge = document.createElement("div");
carreRouge.style.width = "50px";
carreRouge.style.height = "50px";
carreRouge.style.backgroundColor = "red";
viewport.appendChild(carreRouge);

document.getElementById('up').addEventListener('click',function() {
    let t = parseInt(document.getElementById('kenny').style.top);
    t = t - 10;
    if(t > 0) {
        document.getElementById('kenny').style.top = t + 'px';
    }
});

document.getElementById('left').addEventListener('click',function() {
    let t = parseInt(document.getElementById('kenny').style.left);
    t = t - 10;
    if(t > 0) {
        document.getElementById('kenny').style.left = t + 'px';
    }
});

document.getElementById('right').addEventListener('click',function() {
    let t = parseInt(document.getElementById('kenny').style.left);
    t = t + 10;
    if(t < 468){
        document.getElementById('kenny').style.left = t + 'px';
    }
});

document.getElementById('down').addEventListener('click',function() {
    let t = parseInt(document.getElementById('kenny').style.top);
    t = t + 10;
    if (t < 468)
    document.getElementById('kenny').style.top = t + 'px';
});

let kennyX = parseInt(document.getElementById("kenny").style.left);
let kennyY = parseInt(document.getElementById("kenny").style.top);
let heightCarreRouge = parseInt(carreRouge.style.height);
let widthCarreRouge = parseInt(carreRouge.style.width);

if ((kennyX <= widthCarreRouge) && (kennyY <= heightCarreRouge)) {
    alert("Espèce d'enfoiré !")
}