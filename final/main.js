"use strict"

document.getElementById("action").addEventListener("click", processForm);

let xInput, yInput, choice;

function processForm() {

    xInput = Number(document.getElementById("xInput").value);
    yInput = Number(document.getElementById("yInput").value);
    choice = document.getElementById("bugMode").value; 
    drawing.selectAll('svg>*').remove(); // This line selects everything that has been drawn in the SVG and deletes it all
    drawImage();
}

// Canvas
let drawing = d3.select("#canvas")
    .append("svg")
    .attr("width", 500)
    .attr("height", 500);

let border = drawing.append("rect")
    .attr("width", 500)
    .attr("height", 500)
    .attr("fill", "none")
    .attr("stroke", "red");

// Drawing Function

function drawImage() {

// !Origin is bugX and bugY:
    let bugX = xInput;
    let bugY = yInput;

//Background
drawing.append("rect")
        .attr("x", 0)
        .attr("y", 0)
        .attr("width", 500)
        .attr("height", 500)
        .attr("fill", "lightblue"); 

    
//MY LADYBUG IS MADE BY:
    
    //Head
if (choice === "normal") {
    // Noraml Tapezoid Head
    let headBottomW = 60;  
    let headTopW    = 40;  
    let headBottomY = bugY - 40;      
    let headTopY    = bugY - 75;

    let headPoints = [
        (bugX - headBottomW/2) + "," + headBottomY,
        (bugX - headTopW/2)    + "," + headTopY,
        (bugX + headTopW/2)    + "," + headTopY,
        (bugX + headBottomW/2) + "," + headBottomY
    ].join(" ");

    drawing.append("polygon")
        .attr("points", headPoints)
        .attr("fill", "blue")
        .attr("stroke", "black");

} else if (choice === "after") {
    // After Triangle Head
    let side = 60;  // 三角形边长
    let height = Math.sqrt(3) / 2 * side;

    let headPoints = [
        bugX + "," + (bugY - 75),                       // top
        (bugX - side/2) + "," + (bugY - 75 + height),  // bottom left
        (bugX + side/2) + "," + (bugY - 75 + height)   // bottom right
    ].join(" ");

    drawing.append("polygon")
        .attr("points", headPoints)
        .attr("fill", "blue")
        .attr("stroke", "black");
}

    // Bug Body
drawing.append("circle")
        .attr("cx", bugX)
        .attr("cy", bugY)
        .attr("r", 50)
        .attr("fill", "orange"); 

    // Body Middle Line
drawing.append("line")
        .attr("x1", bugX)
        .attr("y1", bugY-50)
        .attr("x2", bugX)
        .attr("y2", bugY+50)
        .attr("stroke", "black")
        .attr("stroke-width", 1.5);
    
   
     // Bug Spots
    let spx = bugX - 20;     
    let spy = bugY - 20;     
     // left side
let spotLeft1 = drawing.append("circle")
    .attr("cx", spx).attr("cy", spy)
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
    // right side
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

    // Bug Eyes
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

    // Bug Feet
let bugFootLeft1 = drawing.append ("line")
    .attr("x1", bugX-80)
    .attr("y1", bugY-50)
    .attr("x2", bugX-35)
    .attr("y2", bugY-20)
    .attr("stroke", "black");
let bugFootLeft2 = drawing.append ("line")
    .attr("x1", bugX-80)
    .attr("y1", bugY-10)
    .attr("x2", bugX-35)
    .attr("y2", bugY-10)
    .attr("stroke", "black");
let bugFootLeft3 = drawing.append ("line")
    .attr("x1", bugX-60)
    .attr("y1", bugY+30)
    .attr("x2", bugX-35)
    .attr("y2", bugY+10)
    .attr("stroke", "black");
let bugFootLeftBottom = drawing.append ("line")
    .attr("x1", bugX-60)
    .attr("y1", bugY+30)
    .attr("x2", bugX-70)
    .attr("y2", bugY+60)
    .attr("stroke", "black");

let bugFootRight1 = drawing.append ("line")
   .attr("x1", bugX+80)
   .attr("y1", bugY-50)
   .attr("x2", bugX+35)
   .attr("y2", bugY-20)
   .attr("stroke", "black");
let bugFootRight2 = drawing.append ("line")
   .attr("x1", bugX+80)
   .attr("y1", bugY-10)
   .attr("x2", bugX+35)
   .attr("y2", bugY-10)
   .attr("stroke", "black");
let bugFootRight3 = drawing.append ("line")
   .attr("x1", bugX+60)
   .attr("y1", bugY+30)
   .attr("x2", bugX+35)
   .attr("y2", bugY+10)
   .attr("stroke", "black");
let bugFootRightBottom = drawing.append ("line")
   .attr("x1", bugX+60)
   .attr("y1", bugY+30)
   .attr("x2", bugX+70)
   .attr("y2", bugY+60)
   .attr("stroke", "black");
    // Bug Antenna
let bugAntennaeLeft = drawing.append ("line")
   .attr("x1", bugX-10)
   .attr("y1", bugY-100)
   .attr("x2", bugX-5)
   .attr("y2", bugY-70)
   .attr("stroke", "black");
let bugAntennaeRight = drawing.append ("line")
   .attr("x1", bugX+10)
   .attr("y1", bugY-100)
   .attr("x2", bugX+5)
   .attr("y2", bugY-70)
   .attr("stroke", "black");
   
    

    /***** DO NOT ADD OR EDIT ANYTHING BELOW THIS LINE ******/
}
