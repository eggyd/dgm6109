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

/* Use FANG's listening records (x = duration, y = mood)
*/
let FANG = [
  { x: 28, y: 4 },
  { x: 75, y: 4 },
  { x: 90, y: 4 },
  { x: 73, y: 3 },
  { x: 32, y: 4 },
  { x: 80, y: 5 },
  { x: 31, y: 4 },
  { x: 70, y: 5 },
  { x: 30, y: 4 },
  { x: 78, y: 4 }
];

/* ? Scales for:
   Map real data range (domain) to screen pixel range (range)
*/

let xScale = d3.scaleLinear() // Linear scale for continuous numeric data
    .domain([
        0, // minimum value of data
        d3.max(FANG, function (d) { return d.x; }) // maximum listening duration
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
    .domain([0, 5]) // mood score range from 0 to 5 
    .range([svgHeight - margin, margin]);
    /*
      The screen’s (0,0) starts at the top-left, so invert it
    */

/*  Draw scatterplot */
let circles = svg.selectAll("circle") // Select all circles (none yet//
    .data(FANG) // Bind the data//
    .join("circle"); //ervy data point has new circle//

// attributes for each circle 
circles
    .attr("r", 4) 
    .attr("cx", function (d) { return xScale(d.x); }) // X position = mapped duration 
    .attr("cy", function (d) { return yScale(d.y); }) // Y position = mapped mood 
    .attr("fill", "black"); 


let xAxisLabel = svg.append("text") // X label 
    .attr("x", svgWidth / 2)        // center horizontally
    .attr("y", svgHeight - (margin / 2)) // bottom of canvas 
    .attr("text-anchor", "middle")
    .text("Listening Duration (minutes)"); // Label content 

let yAxisLabel = svg.append("text") // Y label 
    .attr("x", -svgHeight / 2)      // move left to center vertically 
    .attr("y", margin / 2)          // border but alittle distance
    .attr("text-anchor", "middle")
    .attr("alignment-baseline", "middle")
    .text("Mood (0–5, 0 = negative, 5 = positive)") 
    .attr("transform", "rotate(-90)"); // rotate vertically 


let originLabel = svg.append("text") // Origin label 
    .attr("x", margin)
    .attr("y", svgHeight - (margin / 2))
    .attr("text-anchor", "middle")
    .text("0,0"); // Mark origin 

// X-axis max value label
svg.append("text")
    .attr("x", svgWidth - margin)
    .attr("y", svgHeight - (margin / 2))
    .attr("text-anchor", "end")
    .text(d3.max(FANG, function (d) { return d.x; }) + " min"); // Show max listening time 

// Y-axis max value label
svg.append("text")
    .attr("x", margin + 10)
    .attr("y", margin - 8)
    .attr("text-anchor", "start")
    .text("Mood = 5"); // Show mood top level