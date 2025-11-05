"use strict";

let svgWidth = 800;
let svgHeight = 550;
let margin = 60;

d3.select("#container").style("width", String(svgWidth) + "px");

let svg = d3.select("#canvas")
  .append("svg")
  .attr("width", svgWidth)
  .attr("height", svgHeight);


svg.append("rect")
  .attr("fill", "none")
  .attr("stroke", "black")
  .attr("width", svgWidth)
  .attr("height", svgHeight);

svg.append("rect")
  .attr("fill", "none")
  .attr("stroke", "gray")
  .attr("stroke-dasharray", "5")
  .attr("x", margin)
  .attr("y", margin)
  .attr("width", svgWidth - margin * 2)
  .attr("height", svgHeight - margin * 2);


let FANG = [
  { duration: 28, focus: 4, mood: 3, stress: 1 },
  { duration: 75, focus: 4, mood: 4, stress: 2 },
  { duration: 18, focus: 3, mood: 2, stress: 2 },
  { duration: 33, focus: 4, mood: 4, stress: 1 },
  { duration: 26, focus: 4, mood: 3, stress: 1 },
  { duration: 40, focus: 4, mood: 4, stress: 2 },
  { duration: 20, focus: 4, mood: 2, stress: 2 },
  { duration: 30, focus: 4, mood: 4, stress: 4 },
  { duration: 25, focus: 4, mood: 3, stress: 2 },
  { duration: 22, focus: 5, mood: 3, stress: 2 },
  { duration: 60, focus: 3, mood: 4, stress: 2 },
  { duration: 35, focus: 4, mood: 3, stress: 2 },
  { duration: 85, focus: 5, mood: 5, stress: 2 },
  { duration: 29, focus: 4, mood: 4, stress: 2 },
  { duration: 50, focus: 4, mood: 4, stress: 2 },
  { duration: 24, focus: 4, mood: 3, stress: 1 },
  { duration: 32, focus: 4, mood: 3, stress: 3 },
  { duration: 21, focus: 4, mood: 2, stress: 1 }
];

/* Sorting */
FANG.sort(function(a,b){     
  if (a.stress < b.stress) return 1;  //Positive → place b before a
  if (a.stress > b.stress) return -1; //Negative → place a before b
  return 0;                       //Equal → keep original order
});
// why sorting descending?:
// larger circles (higher stress) come first, so they’re appended earlier;
// smaller circles come later, thus appear on top, avoiding being hidden.

// X axis = Duration (min)
let xScale = d3.scalePow()
  .exponent(0.3)  // exponent < 1: low values compressed, high values stretched
  //When the exponent is greater than 1, 
  // the scale stretches smaller values and compresses larger ones.

  //When the exponent is less than 1,
  //  the scale compresses smaller values and expands larger ones.
  .domain(d3.extent(FANG, function(d){ return d.duration; }))
  .range([margin, svgWidth - margin]);

// Y axis = Focus（1-5）
let yScale = d3.scaleLinear()
  .domain([0, 5])
  .range([svgHeight - margin, margin]);

// Radius = Stress（1-5）
let rScale = d3.scaleSqrt()
  .domain([1, 5])
  .range([5, 15]);

// Color = Mood （Blue 1 to Red 5 ）
let colorScale = d3.scaleLinear()
  .domain([1, 5])
  .range(["#66b3ff", "#ff4d4d"]);



/*circles*/
let circles = svg.selectAll("circle")
  .data(FANG)
  .enter()
  .append("circle")
  .attr("cx", function(d){ return xScale(d.duration); })
  .attr("cy", function(d){ return yScale(d.focus); })
  .attr("r", function(d){ return rScale(d.stress); })
  .attr("fill", function(d){ return colorScale(d.mood); })
  .attr("opacity", 0.85)
  .attr("stroke", "#333") //add a gray border for each circle for clearer edges and separation
  .attr("stroke-width", 1);

/* Axis Labels */
// x Axis scale and ticks
svg.append("g")
  .attr("transform", "translate(0," + (svgHeight - margin) + ")") // bottom
  .call(d3.axisBottom(xScale).ticks(6)); // 6 ticks
// Y Axis scale and ticks
svg.append("g")
  .attr("transform", "translate(" + margin + ",0)") // left
  .call(d3.axisLeft(yScale).ticks(5)); // 0–5 ticks

// X-axis label
svg.append("text")
  .attr("x", svgWidth / 2)
  .attr("y", svgHeight - margin / 3)
  .attr("text-anchor", "middle")
  .text("Listening Duration (minutes)");

// Y-axis label
svg.append("text")
  .attr("x", -svgHeight / 2)
  .attr("y", margin / 3)
  .attr("text-anchor", "middle")
  .attr("alignment-baseline", "middle")
  .attr("transform", "rotate(-90)")
  .text("Focus (0–5) ");

/* Legend: Mood (Color) */
let colorKeyX = margin + 40;
let colorKeyY = svgHeight - margin - 35; 

//  title
svg.append("text")
  .attr("x", colorKeyX)
  .attr("y", colorKeyY - 15)
  .style("font-weight", "bold")
  .text("Mood (blue to red)");

// color circles and labels
let moodValues = [1, 3, 5];
for (let i = 0; i < moodValues.length; i++) {
  svg.append("circle")
    .attr("cx", colorKeyX + i * 45)
    .attr("cy", colorKeyY)
    .attr("r", 7)
    .attr("fill", colorScale(moodValues[i]))
    .attr("stroke", "#181818ff");

  svg.append("text")
    .attr("x", colorKeyX + i * 45 - 2)
    .attr("y", colorKeyY + 22)
    .style("font-size", "10px")
    .text(moodValues[i]);
}

/* Legend: Stress */
let keyX = svgWidth - margin - 200;
let keyY = svgHeight - margin - 25; 

// title
svg.append("text")
  .attr("x", keyX)
  .attr("y", keyY - 15)
  .style("font-weight", "bold")
  .text("Perceived Stress");

let stressValues = [1, 3, 5]; //3 sample values for the legend
let prevLabelWidth = 0; //accumulator for extra spacing ： Labels have variable pixel widths. Fixed spacing alone can cause overlaps. therefore measure each label’s width and nudge later circles to the right accordingly.


for (let i = 0; i < stressValues.length; i++) {
  let cx = keyX + 25 + i * 70 + prevLabelWidth;
  let r = rScale(stressValues[i]);

  let stressCircle = svg.append("circle")
    .attr("cx", cx)
    .attr("cy", keyY)
    .attr("r", r)
    .attr("fill", "#66b3ff")
    .attr("opacity", 0.7)
    .attr("stroke", "#333");

// Label text
  let label = svg.append("text")
    .text(stressValues[i])
    .attr("x", cx + r + 5)
    .attr("y", keyY + 4)
    .style("font-size", "11px");

 // Use getComputedTextLength() to measure label width for spacing
  prevLabelWidth += label.node().getComputedTextLength() / 3;
  // dividing by 3 is a heuristic that avoids over-spacing.
}

svg.append("text")
  .attr("x", svgWidth - 260)
  .attr("y", svgHeight - 15)
  .style("font-size", "11px")
  .style("fill", "gray")
  .text("Sorted by stress descending (from high to low)");

