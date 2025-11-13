"use strict";

// Canvas setup
let svgWidth = 1000;
let svgHeight = 600;
let margin = { top: 25, right: 80, bottom: 55, left: 80 }; //Margins around chart area
let legendBandHeight = 100; //space for legend on top
let chartWidth = svgWidth - margin.left - margin.right;
let chartHeight = svgHeight - margin.top - margin.bottom - legendBandHeight;
let chartOffsetX = (svgWidth - chartWidth) / 2;

//SVG container
let svg = d3.select("#canvas")
  .append("svg")
  .attr("width", svgWidth)
  .attr("height", svgHeight)
  .style("display","block")
  .style("margin","0 auto");



//Chart group
let chartArea = svg.append("g")
  .attr("transform", "translate(" + chartOffsetX + "," + (margin.top + legendBandHeight - 10) + ")");
//downward to make room for the legend.



// Background
svg.insert("rect", "g")
  .attr("x", chartOffsetX - margin.left + 15)
  .attr("y", margin.top + legendBandHeight - 25)   // ✅ 往上提20px
  .attr("width", chartWidth + margin.left + margin.right - 30)
  .attr("height", chartHeight + margin.top + margin.bottom)  // ✅ 变高一点
  .attr("rx", 14)
  .attr("ry", 14)
  .attr("fill", "white")
  .attr("stroke", "#d0d0d0");



// Dataset — Lo-fi & Hardstyle (Oct 17–20)
let data = [
  // Hardstyle
  {date:"2025-10-17",genre:"Hardstyle",duration:28,focus:2,mood:4},
  {date:"2025-10-17",genre:"Hardstyle",duration:75,focus:5,mood:4},
  {date:"2025-10-18",genre:"Hardstyle",duration:35,focus:2,mood:4},
  {date:"2025-10-19",genre:"Hardstyle",duration:32,focus:2,mood:4},
  {date:"2025-10-20",genre:"Hardstyle",duration:29,focus:2,mood:4},
  // Lo-fi
  {date:"2025-10-17",genre:"Lo-fi",duration:33,focus:4,mood:4},
  {date:"2025-10-18",genre:"Lo-fi",duration:30,focus:3,mood:5},
  {date:"2025-10-19",genre:"Lo-fi",duration:34,focus:3,mood:4},
  {date:"2025-10-20",genre:"Lo-fi",duration:32,focus:4,mood:5},
  {date:"2025-10-20",genre:"Lo-fi",duration:21,focus:5,mood:4}
];

// Filter + sort
let filteredData = data.filter(function(d){ return d.duration > 20; }); // Keep only duration > 20mins
let validData = filteredData.slice().sort(function(a,b){ return a.duration - b.duration; }); //Sort by duration ascending



// Scales
let xScale = d3.scalePow()
  .exponent(1.3)   // Exponent >1 = front narrow, back wide
  .domain([0, 90])
  .range([0, chartWidth]);
let yScale = d3.scaleLinear().domain([0, 5]).range([chartHeight, 0]);
let rScale = d3.scaleSqrt().domain([0, 5]).range([3, 20]);
let colorScale = d3.scaleOrdinal().domain(["Lo-fi","Hardstyle"]).range(["#804ce8ff","#4cfcffff"]);



// Legend
//music genre legend
let legend = svg.append("g")
  .attr("transform", "translate(" + (chartOffsetX + chartWidth/2 -80) + "," + (margin.top - 15) + ")");
//Legend background box
legend.append("rect") 
  .attr("width", 180).attr("height", 80)
  .attr("rx", 10).attr("ry", 10)
  .attr("fill","rgba(255,255,255,0.9)").attr("stroke","#ccc");

legend.append("circle").attr("cx",20).attr("cy",24).attr("r",8).attr("fill","#804ce8ff");
legend.append("text").attr("x",40).attr("y",28).text("Lo-fi Music");

legend.append("circle").attr("cx",20).attr("cy",50).attr("r",8).attr("fill","#4cfcffff");
legend.append("text").attr("x",40).attr("y",56).text("Hardstyle Music");

//Mood size legend
let moodX = 200;
let moodY = 28;
let gap = 56;

// Legend background box
legend.append("rect")
  .attr("x", moodX - 15)
  .attr("y", moodY - 30)
  .attr("width", 200)
  .attr("height", 80)
  .attr("rx", 10)
  .attr("ry", 10)
  .attr("fill", "rgba(255,255,255,0.9)")
  .attr("stroke", "#ccc");

// Title
legend.append("text")
  .attr("x", moodX)
  .attr("y", 22)
  .style("font-weight","700")
  .text("Bubble size = Mood");

// Mood circles + numbers
let moods = [1,3,5];
for (let i = 0; i < moods.length; i++)
{
  legend.append("circle")
  .attr("cx", moodX + i * gap + 15)
  .attr("cy", moodY + 25)
  .attr("r", rScale(moods[i]))
  .attr("fill", "#d9d9d9")
  .attr("opacity", 0.5)
  .attr("stroke", "#555")
  .attr("data-static", "true");   
  // This 'data-static="true"' is  to specific circles in legend
  // to tell tranistion Don’t animate these three circles

// Text labels
  legend.append("text")
    .attr("x", moodX + i * gap + 15 + rScale(moods[i]) + 10) // 圆右缘 + 10px
    .attr("y", moodY + 30) // 与圆中心略对齐
    .attr("text-anchor", "start")
    .style("font-size", "12px")
    .text(moods[i]);
}




// Bubbles
chartArea.selectAll("circle")
  .data(validData)
  .enter()
  .append("circle")
  .attr("cx", function(d){ return xScale(d.duration); }) //X position → duration
  .attr("cy", function(d){ return yScale(d.focus); }) //Y position → focus
  .attr("r", function(d){ return rScale(d.mood); }) //Radius → mood
  .attr("fill", function(d){ return colorScale(d.genre); }) //Color → genre
  .attr("opacity", 0.6) 
  .attr("stroke", "#333")
  .append("title") // Tooltip hover effect
  .text(function(d){
    return d.genre + " | " + d.date +
      "\nDuration: " + d.duration + " min" +
      "\nFocus: " + d.focus +
      "\nMood: " + d.mood;
  });



// Pulsing animation！！
      // Reference: D3.js Transition Module (Mike Bostock, 2024)  https://d3js.org/d3-transition
      // This pulsing color animation is inspired by D3's transition chaining example
  function pulse() {
  chartArea.selectAll("circle")
    .transition() //Start a transition (animated change of attributes).
    .duration(1500) //first half of the cycle lasts 1500 ms.
    .attr("fill", function(d) { // Change fill color
      return d.genre == "Lo-fi" ? "#d36effff" : "#6cc4ffff"; // 目标高亮色
    })
    .transition() //a second transition quickly after the first finishes.
    .duration(1500) //second half of the cycle lasts 1500 ms
    .attr("fill", function(d) { 
      return colorScale(d.genre); // return back to the original color in the second half
    })

  
    legend.selectAll("circle")
  // only choose the circle is not data-static
  .filter(function() {
    return !d3.select(this).attr("data-static");
  })
  .transition() // First half of the color transition 
  .duration(1500) 
  .attr("fill", function(d, i) { 
    // i=0: Lo-fi, i=1: Hardstyle
    return i == 0 ? "#804ce8ff" : "#4e9decff"; 
  })
  .transition() // Second half of the transition
  .duration(1500)
  .attr("fill", function(d, i) {
    // Return back to original color
    return i == 0 ? "#d36effff" : "#6cc4ffff"; 
  })
    .on("end", pulse); //When the legend’s transition ends, call pulse() again (loop)
}
pulse(); // Start the pulsing animation




// Axes
chartArea.append("g") // X-axis group
  .attr("transform", "translate(0," + chartHeight + ")")
  .call(d3.axisBottom(xScale).ticks(10));
chartArea.append("g") //Y-axis group
  .call(d3.axisLeft(yScale).ticks(5));

// Labels
// X-axis label is listening duration
svg.append("text")
  .attr("x", margin.left + chartWidth / 2)
  .attr("y", margin.top + legendBandHeight + chartHeight + 40)
  .attr("text-anchor", "middle")
  .style("font-weight","700")
  .text("Listening Duration (minutes)");
// Y-axis label is focus level
svg.append("text")
  .attr("x", margin.left - 50)
  .attr("y", margin.top + legendBandHeight + chartHeight / 2)
  .attr("transform", "rotate(-90," + (margin.left - 50) + "," + (margin.top + legendBandHeight + chartHeight / 2) + ")")
  .attr("text-anchor", "middle")
  .style("font-weight","700")
  .text("Focus Level (0–5)");
