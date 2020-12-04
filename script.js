let viewport = document.getElementById("viewport");
let style = window.getComputedStyle(viewport);

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
