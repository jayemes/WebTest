var gendatafortransf = function() {
    transfPoints = numeric.dot(Matrix, [xVal, yVal]);
    transfVector = numeric.dot(Matrix, Vector);
    xPos = transfVector[0] > 0;
    xZero = transfVector[0] == 0;
    yPos = transfVector[1] > 0;
    yZero = transfVector[1] == 0;
    if (xPos) {
        if (yPos) {
            theSymbol = 'triangle-ne';
        } else {
            if (yZero) {
                theSymbol = 'triangle-right';
            } else {
                theSymbol = 'triangle-se';
            }
        }
    } else {
        if (xZero) {
            if (yPos) {
                theSymbol = 'triangle-up';
            } else {
                if (yZero) {
                    theSymbol = 'circle';
                } else {
                    theSymbol = 'triangle-down';
                }
            }
        } else {
            if (yPos) {
                theSymbol = 'triangle-nw';
            } else {
                if (yZero) {
                    theSymbol = 'triangle-left';
                } else {
                    theSymbol = 'triangle-sw';
                }
            }
        }
    }
    data = [{
        x: transfPoints[0],
        y: transfPoints[1],
        mode: 'lines',
        name: 'Todos los vectores transformados',
        line: {
            color: 'red'
        }
    }, {
        x: [0, transfVector[0]],
        y: [0, transfVector[1]],
        name: "Vector y",
        mode: 'lines',
        line: {
            color: 'rgb(127, 255, 35)'
        },
    }, {
        x: [transfVector[0]],
        y: [transfVector[1]],
        marker: {
            color: 'rgb(127, 255, 35)',
            symbol: theSymbol,
            size: 8
        },
        showlegend: false
    }];
    document.getElementById("theVector").innerHTML = "<p style='background:white'>" + transfVector[0] + "&nbsp &nbsp &nbsp" + transfVector[1] +"</p>";
    return data;
}

var gendataforvector = function() {
    vectorNorm = numeric.norm2(Vector);
    xVal = numeric.mul(numeric.cos(t), vectorNorm);
    yVal = numeric.mul(numeric.sin(t), vectorNorm);
    xPos = Vector[0] > 0;
    xZero = Vector[0] == 0;
    yPos = Vector[1] > 0;
    yZero = Vector[1] == 0;
    if (xPos) {
        if (yPos) {
            theSymbol = 'triangle-ne';
        } else {
            if (yZero) {
                theSymbol = 'triangle-right';
            } else {
                theSymbol = 'triangle-se';
            }
        }
    } else {
        if (xZero) {
            if (yPos) {
                theSymbol = 'triangle-up';
            } else {
                if (yZero) {
                    theSymbol = 'circle';
                } else {
                    theSymbol = 'triangle-down';
                }
            }
        } else {
            if (yPos) {
                theSymbol = 'triangle-nw';
            } else {
                if (yZero) {
                    theSymbol = 'triangle-left';
                } else {
                    theSymbol = 'triangle-sw';
                }
            }
        }
    }
    return [{
        x: xVal,
        y: yVal,
        mode: 'lines',
        name: 'Todos los vectores de la misma norma que x'
    }, {
        x: [0, Vector[0]],
        y: [0, Vector[1]],
        name: 'Vector x',
        mode: 'lines',
        line: {
            color: 'rgb(255, 153, 0)'
        }
    }, {
        x: [Vector[0]],
        y: [Vector[1]],
        marker: {
            color: 'rgb(255, 153, 0)',
            symbol: theSymbol,
            size: 8
        },
        showlegend: false
    }];
}

var recalcVector = function() {
    Vector[0] = Number(document.getElementById("a4").value);
    Vector[1] = Number(document.getElementById("a5").value);
    newData = gendataforvector();
    gd.data[0].x = newData[0].x;
    gd.data[0].y = newData[0].y;
    gd.data[1].x = newData[1].x;
    gd.data[1].y = newData[1].y;
    gd.data[2].x = newData[2].x;
    gd.data[2].y = newData[2].y;
    gd.data[2].marker.symbol = newData[2].marker.symbol;
    Plotly.redraw(gd);
    newData = gendatafortransf();
    gd2.data[0].x = newData[0].x;
    gd2.data[0].y = newData[0].y;
    gd2.data[1].x = newData[1].x;
    gd2.data[1].y = newData[1].y;
    gd2.data[2].x = newData[2].x;
    gd2.data[2].y = newData[2].y;
    gd2.data[2].marker.symbol = newData[2].marker.symbol;
    Plotly.redraw(gd2);
}

var recalcMatrix = function() {
    //how does performance compare between reading the whole matrix perform better than just reading what changed ? 
    Matrix[0][0] = Number(document.getElementById("a0").value);
    Matrix[0][1] = Number(document.getElementById("a1").value);
    Matrix[1][0] = Number(document.getElementById("a2").value);
    Matrix[1][1] = Number(document.getElementById("a3").value);
    newData = gendatafortransf();
    gd2.data[0].x = newData[0].x;
    gd2.data[0].y = newData[0].y;
    gd2.data[1].x = newData[1].x;
    gd2.data[1].y = newData[1].y;
    gd2.data[2].x = newData[2].x;
    gd2.data[2].y = newData[2].y;
    gd2.data[2].marker.symbol = newData[2].marker.symbol;
    Plotly.redraw(gd2);
    changeVector();
}

document.getElementById("a0").addEventListener('change', recalcMatrix);
document.getElementById("a1").addEventListener('change', recalcMatrix);
document.getElementById("a2").addEventListener('change', recalcMatrix);
document.getElementById("a3").addEventListener('change', recalcMatrix);

document.getElementById("a4").addEventListener('change', recalcVector);
document.getElementById("a5").addEventListener('change', recalcVector);

var Matrix = [
    [Math.floor((Math.random() * 20) - 10), Math.floor((Math.random() * 20) - 10)],
    [Math.floor((Math.random() * 20) - 10), Math.floor((Math.random() * 20) - 10)]
];
var Vector = [Math.floor((Math.random() * 20) - 10), Math.floor((Math.random() * 20) - 10)];
var merged = [].concat.apply([], Matrix).concat(Vector);
for (var i = 0; i < 6; i++) {
    document.getElementById("a" + i).value = merged[i];
}

var d3 = Plotly.d3;
var pariente = d3.select("#GraphCont1");
var w = pariente[0][0].offsetWidth;
var h = pariente[0][0].offsetHeight;
var gd3 = pariente
    .append('div')
    .style({
        width: w + 'px',
        height: h + 'px',
    });
var gd = gd3.node();
pariente2 = d3.select('#GraphCont2');
var gd32 = pariente2
    .append('div')
    .style({
        width: w + 'px',
        height: h + 'px',
    });
var gd2 = gd32.node();

if (w > h) {
    var layUp = {
        margin: {
            t: 20,
            b: 50,
            l: 50,
            r: (w - h - 50)
        },
        legend: {
            x: 0,
            y: 1.2
        }
    };
} else {
    var layUp = {
        margin: {
            t: 20,
            l: 50,
            r: 50,
            b: (h - w - 50)
        },
        legend: {
            x: 0,
            y: 1.2
        }
    };
}

t = numeric.linspace(0, 2 * Math.PI, 100);

Plotly.plot(gd, gendataforvector(), layUp, {
    staticPlot: true
});
Plotly.plot(gd2, gendatafortransf(), layUp, {
    staticPlot: true
});

window.onresize = function() {
    w = pariente[0][0].offsetWidth;
    h = pariente[0][0].offsetHeight;
    gd.style.width = w + "px";
    gd.style.height = h + "px";
    w = pariente2[0][0].offsetWidth;
    h = pariente2[0][0].offsetHeight;
    gd2.style.width = w + "px";
    gd2.style.height = h + "px";
    Plotly.Plots.resize(gd);
    Plotly.Plots.resize(gd2);
    if (w > h) {
        var layUp = {
            margin: {
                t: 50,
                b: 50,
                l: 50,
                r: (w - h - 50)
            }
        };
    } else {
        var layUp = {
            margin: {
                t: 50,
                l: 50,
                r: 50,
                b: (h - w - 50)
            }
        };
    }
    Plotly.relayout(gd2, layUp);
    Plotly.relayout(gd, layUp);
}
