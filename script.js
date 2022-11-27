var a = null;
var b = null;
var c = null;
var d = null;
var e = null;
var f = null;
var x1 = null;
var x2 = null;
var x3 = null;
var x4 = null;

var lienzo = document.getElementById("lienzo"); 
var cd = lienzo.getContext("2d");

var lienzo2 = document.getElementById("lienzo2"); 
var cd2 = lienzo2.getContext("2d");

var lienzo3 = document.getElementById("lienzo3"); 
var cd3 = lienzo3.getContext("2d");

var lienzo4 = document.getElementById("lienzo4"); 
var cd4 = lienzo4.getContext("2d");

var lienzo5 = document.getElementById("lienzo5"); 
var cd5 = lienzo5.getContext("2d");

var lienzo6 = document.getElementById("lienzo6"); 
var cd6 = lienzo6.getContext("2d"); 

var x = 1119;
var y = 659;
var Ex = 1119;
var Ey = 659;
/*
var x = 1460;
var y = 900;
var Ex = 1480;
var Ey = 900;
*/
function exhibirLineas(){
    var x = 20;
    var y = 20;
    while(x <= Ex || y <= Ey){
        cd.strokeStyle = 'Pink';
        cd.moveTo(x, 0);
        cd.lineTo(x, Ey);
        cd.moveTo(0, y);
        cd.lineTo(Ex, y);
        cd.stroke();
        y = y + 30;    
        x = x + 30;    
    }
    //plano Cartesiano
    //eje y
    var pex = Ex / 2;
    cd2.lineWidth = 2;
    cd2.strokeStyle = 'Black';
    cd2.moveTo(pex, 0);
    cd2.lineTo(pex, pex+80);
    cd2.stroke();
    //eje x
    var pey = Ey / 2;
    cd2.strokeStyle = 'Black';
    cd2.moveTo(0, pey-10);
    cd2.lineTo(Ex, pey-10);
    cd2.stroke();
    x = 20;
    y = 20;
    while(x <= Ex || y <= Ey){
        cd2.moveTo(x, pey-10);
        cd2.lineTo(x, pey);
        cd2.moveTo(pex+10,y);
        cd2.lineTo(pex, y);
        cd2.stroke();
        y = y + 30;    
        x = x + 30;    
    }
Numeros();
        }
        function Numeros(){
        var pex = Ex / 2;
        var pey = Ey / 2;
        x = 20;
        y = 20;
        var Number = 1;
        while(y <= Ey){
            cd2.fillText("-"+Number, pex+14, pey+2+y, 200); //y+
            cd2.fillText(Number, pex+14, pey-17-y, 200); //y-
            Number = Number+1;
            y = y + 30;      
        }
        Number = 1;
        while(x <= Ex+150){
            cd2.fillText(Number, pex+6+x, pey+10, 200); //x+
            cd2.fillText("-"+Number, pex-16-x, pey+10, 200); //x-
            Number = Number+1;
            x = x + 30;   
        }
        cd2.fillText("0", pex+5, pey-15, 200); //0
        cd2.fillText("0", pex-15, pey+5, 200); //0
}

function Linea1(x3, x4, arr){
        cd5.strokeStyle = 'Lime';
        cd5.lineWidth = 2;
        px1 = x/2 + (30 * x3 )-80
        py1 = y/2 - (30 * (arr[4]) )-20
        px2 = x/2 + (30 * x4 )-80
        py2 = y/2 - (30 * (arr[5]) )-20
        cd5.moveTo(px2, py2);
        cd5.lineTo(px1, py1);
        cd5.stroke();
}

function Linea2(x1, x2, arr){
        cd4.strokeStyle = 'Yellow';
        cd4.lineWidth = 2;
        px1 = x/2 + (30 * x1 )-80
        py1 = y/2 - (30 * arr[2])-20
        px2 = x/2 + (30 * x2 )-80
        py2 = y/2 - (30 * arr[3] )-20
        cd4 .moveTo(px2, py2);
        cd4.lineTo(px1, py1);
        cd4.stroke();
}

function Punto(arr){
        debugger
        p1 = x/2 + (30 * arr[1])-80
        p2 = y/2 - (30 * arr[0])-20
        var r = 10;
        cd3.strokeStyle = "#006400";
        cd3.fillStyle = "RebeccaPurple";
        cd3.lineWidth = 5;
        cd3.arc(p1, p2, r,0,2*Math.PI);
        cd3.fill();
}


// arr = new Array(6);
function sol(a,b,c,d,e,f,x1,x2,x3,x4, arr){
        var arr = new Array(6);
        a = document.getElementById("a").value;
        b = document.getElementById("b").value;
        c = document.getElementById("c").value;
        d = document.getElementById("d").value;
        e = document.getElementById("e").value;
        f = document.getElementById("f").value;
        x1 = document.getElementById("x1").value;
        x2 = document.getElementById("x2").value;
        x3 = document.getElementById("x3").value;
        x4 = document.getElementById("x4").value;
        // arr[0] = 0;

        arr[0] = (a*f-d*c) / (a*e-d*b); //valor de Y
        arr[1] = (c - b*arr[0]) / a; //valor de X
        arr[2] = (c - a*x1) / b; //valor de y1
        arr[3] = (c - a*x2) / b; //valor de y2
        arr[4] = (f - d*x3) / e; //valor de y3
        arr[5] = (f - d*x4) / e; //valor de y4

        //document.getElementById('resultadoxy').innerHTML = "(x, y) = " + "(" + arr[1] + "," + arr[0] + ")";
        
        Linea1(x3, x4, arr);
        Linea2(x1, x2, arr);
        Punto(arr);

        if((a*f-d*c) == 0 && (a*e-d*b) == 0)
        {
                document.getElementById('res2').innerHTML = "Tiende a ser infinito";
                px2 = x/2 + (30 * x2 ) - 80//linea 2
                py2 = y/2 - (30 * arr[3] ) - 20
                cd6.fillText(a + "x + " + b + "y = " + c, px2+10, py2, 200); 

                px2 = x/2 + (30 * x4 ) - 80//linea 1
                py2 = y/2 - (30 * (arr[5]*1) ) - 20
                cd6.fillText(d + "x + " + e + "y = " + f, px2+10, py2, 200);
        }
        else if((a*e-d*b) == 0)
        {       
                document.getElementById('res2').innerHTML = "No hay solucion";
                px2 = x/2 + (30 * x2 ) - 80//linea 2
                py2 = y/2 - (30 * arr[3] ) - 20
                cd6.fillText(a + "x + " + b + "y = " + c, px2+10, py2, 200); 

                px2 = x/2 + (30 * x4 ) - 80//linea 1
                py2 = y/2 - (30 * (arr[5]*1) ) - 20
                cd6.fillText(d + "x + " + e + "y = " + f, px2+10, py2, 200);
        }
        else if((arr[0]) != 0)
        {
                document.getElementById('res2').innerHTML = "(x, y) = " + "(" + arr[1] + "," + arr[0] + ")"; //cuando hay solucion
                p1 = x/2 + (30 * arr[1]) - 80
                p2 = y/2 - (30 * arr[0]) - 20
                cd6.fillText("(" + arr[1] + "," + arr[0] + ")", p1+15, p2, 200);

                px2 = x/2 + (30 * x2 ) - 80//linea 2
                py2 = y/2 - (30 * arr[3] ) - 20
                cd6.fillText(a + "x + " + b + "y = " + c, px2+10, py2, 200); 

                px2 = x/2 + (30 * x4 ) - 80//linea 1
                py2 = y/2 - (30 * (arr[5]*1) ) - 20
                cd6.fillText(d + "x + " + e + "y = " + f, px2+10, py2, 200);
        }

        document.getElementById('resultadox1').innerHTML = "P1(x1, y1) = " + "(" + x1 + "," + arr[2] + ")";
        document.getElementById('resultadox2').innerHTML = "P2(x2, y2) = " + "(" + x2 + "," + arr[3] + ")";
        document.getElementById('resultadox3').innerHTML = "P3(x3, y3) = " + "(" + x3 + "," + arr[4] + ")";
        document.getElementById('resultadox4').innerHTML = "P4(x4, y4) = " + "(" + x4 + "," + arr[5] + ")";
        
}

// var a = document.getElementById('a');
// var b = document.getElementById('b');
// var c = document.getElementById('c');
// var d = document.getElementById('d');
// var e = document.getElementById('e');
// var f = document.getElementById('f');
// var x1 = document.getElementById('x1');
// var x2 = document.getElementById('x2');
// var x3 = document.getElementById('x3');
// var x4 = document.getElementById('x4');

// console.log('a: ', a.value);
//     console.log('b: ', b.value);
//     console.log('c: ', c.value);
//     console.log('d: ', d.value);
//     console.log('e: ', e.value);
//     console.log('f: ', f.value);
// sol(a.value,b.value,c.value,d.value,e.value,f,x1,x2,x3,x4,arr);
window.onload = exhibirLineas();