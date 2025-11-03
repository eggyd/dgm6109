"use strict"

/* Configuration variables: drawing */
let svgWidth = 600;
let svgHeight = 400;
let margin = 25;

/* Resize  div to match width of visualization. */
d3.select("#container")
    .style("width", String(svgWidth) + "px");

/* Create drawing canvas */
let svg = d3.select("#canvas")
    .append("svg")
    .attr("width", svgWidth)
    .attr("height", svgHeight);

/* Draw canvas border */
svg.append("rect")
    .attr("fill", "none")
    .attr("stroke", "black")
    .attr("width", svgWidth)
    .attr("height", svgHeight);

/* Draw margin border. */
svg.append("rect")
    .attr("fill", "none")
    .attr("stroke", "gray")
    .attr("stroke-dasharray", "5")
    .attr("x", margin)
    .attr("y", margin)
    .attr("width", svgWidth - margin * 2)
    .attr("height", svgHeight - margin * 2);

/* Use FANG's listening records (x = duration, y = mood， stress)
*/
let FANG_stress = [
  {x: 10, y: 1, stress: 2},
  {x: 15, y: 2, stress: 2},
  {x: 25, y: 3, stress: 3},
  {x: 30, y: 4, stress: 3},
  {x: 35, y: 3, stress: 4},
  {x: 40, y: 5, stress: 4},
  {x: 45, y: 4, stress: 5},
  {x: 50, y: 5, stress: 5},
  {x: 55, y: 4, stress: 5},
  {x: 60, y: 5, stress: 5}
];


/* ? Scales for:
   Map real data range (domain) to screen pixel range (range)
*/

let xScale = d3.scaleLinear() // Linear scale for continuous numeric data
    .domain([
        0, // minimum value of data
        d3.max(FANG_stress, function (d) { return d.x; }) // maximum listening duration
    ]) 
    .range([
        margin,               // Left boundary in pixels
        svgWidth - margin     // Right boundary in pixels
    ]);
    /*
      range([margin, svgWidth - margin])
      Define where data values appear on the screen
      So 0-minute will be at 'margin' (left), and the largest x will be near 'svgWidth - margin' (right)
    */

// Y-axis scale 
let yScale = d3.scaleLinear()
    .domain([0, d3.max(FANG_stress, function(d){ return d.y; })])
    .range([svgHeight - margin, margin]);
    /*
      The screen’s (0,0) starts at the top-left, so invert it
    */


// Radius scale for stress level
let rScale = d3.scaleLinear()
  .domain([1, 5])
  .range([4, 12]);

svg.selectAll("circle")
  .data(FANG_stress)
  .enter()
  .append("circle")
  .attr("cx", function(d){ return xScale(d.x); })     //  horizontal
  .attr("cy", function(d){ return yScale(d.y); })     // vertical 
  .attr("r", function(d){ return rScale(d.stress); }) //radius is stress
  .attr("fill", "#66b3ff")                           


//Uss D3’s axis generators 
svg.append("g")
  .attr("transform", "translate(0," + (svgHeight - margin) + ")")
  .call(d3.axisBottom(xScale));

svg.append("text")
  .attr("x", svgWidth / 2)                    
  .attr("y", svgHeight - margin - 8)         
  .style("text-anchor", "middle")
  .style("font-size", "13px")
  .style("font-weight", "bold")
  .style("fill", "#000")
  .text("Duration (minutes)");
// Label units (minutes).

svg.append("g")
  .attr("transform", "translate(" + margin + ",0)")
  .call(d3.axisLeft(yScale));

svg.append("text")
  .attr("transform", "rotate(-90) translate(" + (-svgHeight / 2) + "," + (margin + 15) + ")")
  .style("text-anchor", "middle")
  .style("font-size", "13px")
  .style("font-weight", "bold")
  .style("fill", "#000")
  .text("Mood (0–5, 0 = bad mood, 5 = good mood)");
// range and meaning of values


svg.append("text")
  .attr("x", margin - 15)
  .attr("y", svgHeight - margin + 15)
  .style("font-size", "10px")
  .text("0,0");  // Origin

svg.append("text")
  .attr("x", svgWidth - margin - 30)
  .attr("y", svgHeight - margin + 15)
  .style("font-size", "10px")
  .text("max duration");  //  max X value 

svg.append("text")
  .attr("x", margin - 15)
  .attr("y", margin)
  .style("font-size", "10px")
  .text("Mood = 5");  //max Y value

svg.append("text")
  .attr("x", margin + 5)
  .attr("y", svgHeight - margin + 15)
  .style("font-size", "10px")
  .text("Mood = 0");  // min Y value



let legendX = svgWidth - margin - 120;   // X position of legend
let legendY = svgHeight - margin - 130;  // Y start position 

// Title 
svg.append("text")
  .attr("x", legendX -60)
  .attr("y", legendY - 10)
  .attr("font-size", "12px")
  .attr("font-weight", "bold")
  .text("Perceived Stress Level (by radius)");
// explain how stress is encoded by size.

let stressValues = [1, 3, 5];
let stressLabels = ["Stress 1 (low)", "Stress 3 (medium)", "Stress 5 (high)"];
// explain stress levels and labels



for (let i = 0; i < stressValues.length; i = i + 1) {
  
  // draw circle for each stress level
  svg.append("circle")
    .attr("r", rScale(stressValues[i]))      // scaled radius
    .attr("cx", legendX)
    .attr("cy", legendY + i * 25)
    .attr("fill", "#66b3ff")
    .attr("stroke", "#003366")
    .attr("stroke-width", 1);

  // text label beside each circle
  svg.append("text")
    .attr("x", legendX + 25)
    .attr("y", legendY + i * 25 + 4)
    .attr("font-size", "11px")
    .text(stressLabels[i]);
}
