"use strict";

let drawingWidth = 500;
let drawingHeight = 500;

// place of the bugbody
let bx = 200;     
let by = 250;       



let drawing = d3.select("#canvas")
    .append("svg")
    .attr("width", drawingWidth)
    .attr("height", drawingHeight);

// headfirst
let headBottomW = 60;  
let headTopW    = 40;  
let headH       = 35;  

let headBottomY = by - 40;      
let headTopY    = by - 75;

let headPoints = [
  (bx - headBottomW/2) + "," + headBottomY, // left bottom
  (bx - headTopW/2)    + "," + headTopY,    // left t
  (bx + headTopW/2)    + "," + headTopY,    // right t
  (bx + headBottomW/2) + "," + headBottomY  // right b
].join(" ");

let bugHead = drawing.append("polygon")
    .attr("points", headPoints)
    .attr("fill", "blue")  
    .attr("stroke", "black");

//body
let bodyR = 50;
let bugBody = drawing.append("circle")
    .attr("cx", bx)
    .attr("cy", by)
    .attr("r", 50)
    .attr("fill", "orange"); 

// body middle line
let bugWingMiddle = drawing.append("line")
    .attr("x1", bx)
    .attr("y1", by-50)
    .attr("x2", bx)
    .attr("y2", by + 50)
    .attr("stroke", "black")
    .attr("stroke-width", 1.5);

// spotleft1
let spotR = 15;
let spx = 180;     
let spy = 230;     

let spotLeft1 = drawing.append("circle")
    .attr("cx", spx)
    .attr("cy", spy)
    .attr("r", 15)
    .attr("fill", "yellow"); 
let spotLeft2 = drawing.append("circle")
    .attr("cx", spx-15)
    .attr("cy", spy+20)
    .attr("r", 8)
    .attr("fill", "yellow"); 
let spotLeft3 = drawing.append("circle")
    .attr("cx", spx)
    .attr("cy", spy+40)
    .attr("r", 15)
    .attr("fill", "yellow"); 

let spotRight1 = drawing.append("circle")
    .attr("cx", spx+40)
    .attr("cy", spy)
    .attr("r", 15)
    .attr("fill", "yellow"); 
let spotRight2 = drawing.append("circle")
    .attr("cx", spx+55)
    .attr("cy", spy+20)
    .attr("r", 8)
    .attr("fill", "yellow"); 
let spotRight3 = drawing.append("circle")
    .attr("cx", spx+40)
    .attr("cy", spy+40)
    .attr("r", 15)
    .attr("fill", "yellow"); 


// bug eyes
let bugEyeleft = drawing.append("circle")
    .attr("cx", spx+5)
    .attr("cy", spy-40)
    .attr("r", 6)
    .attr("fill", "yellow");
let bugEyeright = drawing.append("circle")
    .attr("cx", spx+33)
    .attr("cy", spy-40)
    .attr("r", 6)
    .attr("fill", "yellow");


// bug feet
let bugFootleft1 = drawing.append ("line")
    .attr("x1", bx-80)
    .attr("y1", by-50)
    .attr("x2", bx-35)
    .attr("y2", by-20)
    .attr("stroke", "black")
    .attr("stroke-width", 1);
let bugFootleft2 = drawing.append ("line")
    .attr("x1", bx-80)
    .attr("y1", by-10)
    .attr("x2", bx-35)
    .attr("y2", by-10)
    .attr("stroke", "black")
    .attr("stroke-width", 1);
let bugFootleft3 = drawing.append ("line")
    .attr("x1", bx-80)
    .attr("y1", by+30)
    .attr("x2", bx-35)
    .attr("y2", by+10)
    .attr("stroke", "black")
    .attr("stroke-width", 1);

let bugFootright1 = drawing.append ("line")
    .attr("x1", bx+80)
    .attr("y1", by-50)
    .attr("x2", bx+35)
    .attr("y2", by-20)
    .attr("stroke", "black")
    .attr("stroke-width", 1);
let bugFootright2 = drawing.append ("line")
    .attr("x1", bx+80)
    .attr("y1", by-10)
    .attr("x2", bx+35)
    .attr("y2", by-10)
    .attr("stroke", "black")
    .attr("stroke-width", 1);
let bugFootright3 = drawing.append ("line")
    .attr("x1", bx+80)
    .attr("y1", by+30)
    .attr("x2", bx+35)
    .attr("y2", by+10)
    .attr("stroke", "black")
    .attr("stroke-width", 1);


// bug antennae
let bugAntennaeleft = drawing.append ("line")
    .attr("x1", bx-10)
    .attr("y1", by-100)
    .attr("x2", bx-5)
    .attr("y2", by-70)
    .attr("stroke", "black")
    .attr("stroke-width", 1);
let bugAntennaeright = drawing.append ("line")
    .attr("x1", bx+10)
    .attr("y1", by-100)
    .attr("x2", bx+5)
    .attr("y2", by-70)
    .attr("stroke", "black")
    .attr("stroke-width", 1);

