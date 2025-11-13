"use strict";

//canvas size and margins for layout
let svgWidth = 1000;
let svgHeight = 600;
let legendBandHeight = 100;
let margin = { top: 25, right: 80, bottom: 55, left: 80 };

//Calculate chart area size
let chartWidth = svgWidth - margin.left - margin.right;
let chartHeight = svgHeight - margin.top - margin.bottom - legendBandHeight;
let chartOffsetX = (svgWidth - chartWidth) / 2

//main SVG container
let svg = d3.select("#canvas")
  .append("svg")
  .attr("width", svgWidth)
  .attr("height", svgHeight);
  svg.style("display","block").style("margin","0 auto");

//legend group at top area 
let legendBand = svg.append("g")
  .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

//main chart drawing area
let chartArea = svg.append("g")
  .attr("transform", "translate(" + chartOffsetX + "," + (margin.top + legendBandHeight) + ")");

//background rectangle for chart area
svg.insert("rect", "g")
  .attr("x", chartOffsetX - margin.left + 15)
  .attr("y", margin.top + legendBandHeight - 5)
  .attr("width", chartWidth + margin.left + margin.right - 30)
  .attr("height", chartHeight + margin.top + margin.bottom - 28)
  .attr("rx", 14)
  .attr("ry", 14)
  .attr("fill", "white")
  .attr("stroke", "#d0d0d0")



  //Define the dataset (each record = one listening session)
  // Each object contains participant info, type (I/E), date, duration, mood, stress, and sessions
let data = [
  {type:"I",participant:"MANDY",date:"2025-10-17",duration:25.7,mood:3.67,stress:2.0,sessions:3},
  {type:"I",participant:"MANDY",date:"2025-10-20",duration:25.2,mood:4.33,stress:1.33,sessions:3},
  {type:"I",participant:"MANDY",date:"2025-10-21",duration:26.0,mood:4.3,stress:2.23,sessions:2},
  {type:"I",participant:"MANDY",date:"2025-10-18",duration:29.3,mood:4.0,stress:2.,sessions:3},
  {type:"I",participant:"MANDY",date:"2025-10-22",duration:30.0,mood:4.33,stress:2.67,sessions:3},
  {type:"I",participant:"ERIN",date:"2025-10-19",duration:31.3,mood:4.33,stress:1.33,sessions:3},
  {type:"I",participant:"ERIN",date:"2025-10-18",duration:29.3,mood:4.0,stress:2.0,sessions:3},
  {type:"I",participant:"ERIN",date:"2025-10-22",duration:31.0,mood:4.23,stress:2.67,sessions:3},
  {type:"I",participant:"ERIN",date:"2025-10-19",duration:32.3,mood:4.33,stress:1.33,sessions:3},
  {type:"E",participant:"ZACK",date:"2025-10-19",duration:37.3,mood:4.33,stress:2.33,sessions:3},
  {type:"E",participant:"ZACK",date:"2025-10-18",duration:37.7,mood:4.0,stress:2.0,sessions:3},
  {type:"E",participant:"ZACK",date:"2025-10-17",duration:39.0,mood:4.33,stress:2.67,sessions:3},
  {type:"E",participant:"XIAO",date:"2025-10-20",duration:35.0,mood:4.0,stress:2.5,sessions:2},
  {type:"E",participant:"XIAO",date:"2025-10-17",duration:40.0,mood:4.0,stress:2.0,sessions:1},
  {type:"E",participant:"XIAO",date:"2025-10-19",duration:45.0,mood:3.0,stress:4.0,sessions:1},
  {type:"E",participant:"XIAO",date:"2025-10-21",duration:45.0,mood:5.0,stress:1.0,sessions:1},
  {type:"E",participant:"XIAO",date:"2025-10-22",duration:48.0,mood:4.0,stress:2.0,sessions:1},
  {type:"E",participant:"XIAO",date:"2025-10-18",duration:50.0,mood:5.0,stress:1.0,sessions:1}
];

// Filter and sort data by sessions and duration
let filteredData = data.filter(function(d){
  return d.sessions >= 2; // Filter the data to include only participants with 2 or more sessions
});

//Sort the filtered data by listening duration (from shortest to longest)
let validData = filteredData.slice().sort(function(a, b){
  return a.duration - b.duration;
});

// focus on participants with enough listening sessions to show a more meaningful trend in the scatterplot. 
// ensures that smaller bubbles (shorter durations) are drawn first, so larger bubbles don't completely cover them.



//define scales for mapping data values to visual positions
let xScale = d3.scalePow()
  .exponent(1.2) // slight exponential scale to x-scale to spread small values
  .domain([0, 60])
  .range([0, chartWidth]);

let yScale = d3.scaleLinear()
  .domain([0, 5])
  .range([chartHeight, 0]);

let rScale = d3.scaleSqrt()
  .domain([0, 5])
  .range([2, 25]);

let colorScale = d3.scaleOrdinal()
  .domain(["I","E"])
  .range(["#4C9BE8","#FFA24C"]);



//legend to explain color and bubble size
let legendWidth = 360;
let legendHeight = 100;
let legendX = (chartWidth - legendWidth) / 2;
let legendY = (legendBandHeight - legendHeight) / 2;

let legend = legendBand.append("g")
  .attr("transform", "translate(" + (chartWidth / 2 + 40) + "," + (margin.top - 35) + ")");
// Create a <g> group for the legend and shift it slightly right and up



//legend background
legend.append("rect")
  .attr("width", legendWidth)
  .attr("height", legendHeight)
  .attr("rx", 12)
  .attr("ry", 12)
  .attr("fill", "rgba(255,255,255,0.9)")
  .attr("stroke", "#d0d0d0")

//title
legend.append("text")
  .attr("x", 16)
  .attr("y", 22)
  .style("font-weight","700")
  .text("Legend");

// Introvert circle
legend.append("circle")
  .attr("cx", 40)
  .attr("cy", 44)
  .attr("r", 9)
  .attr("fill", "#4C9BE8")
  .attr("opacity", 0.8);
legend.append("text")
  .attr("x", 62)
  .attr("y", 48)
  .text("Introvert (I)");

// Extrovert circle
legend.append("circle")
  .attr("cx", 40)
  .attr("cy", 66)
  .attr("r", 9)
  .attr("fill", "#FFA24C")
  .attr("opacity", 0.8);

legend.append("text")
  .attr("x", 62)
  .attr("y", 70)
  .text("Extrovert (E)");

// Mood size legend
let moodX = 200;
let moodY = 28;
let gap = 56;

legend.append("text")
  .attr("x", moodX)
  .attr("y", 22)
  .style("font-weight","700")
  .text("Bubble size = Mood");

//example circles for moods 1, 3, 5  
let moods = [1,3,5];
for (let i = 0; i < moods.length; i++)
  // Loop through each mood value and draw a sample circle + label
 {
  legend.append("circle")
    .attr("cx", moodX + i * gap)
    .attr("cy", moodY + 24)
    .attr("r", rScale(moods[i]))
    .attr("fill", "#bfbfbf")
    .attr("opacity", 0.6)
    .attr("stroke", "#555");

  legend.append("text")
    .attr("x", moodX + i * gap)
    .attr("y", moodY + 24 + rScale(moods[i]) + 16)
    .attr("text-anchor", "middle")
    .text(moods[i]);
}

//Draw bubbles for each data point
chartArea.selectAll("circle.point")
  .data(validData)
  .enter()
  .append("circle")
  .attr("class","point") //assign class name for styling
  .attr("cx", function(d){ return xScale(d.duration); }) //x position = listening duration
  .attr("cy", function(d){ return yScale(d.stress); }) //x position = listening duration
  .attr("r",  function(d){ return rScale(d.mood); }) //radius = mood rating
  .attr("fill", function(d){ return colorScale(d.type); }) //color by type (I/E)
  .attr("opacity", 0.55)
  .attr("stroke", "#333")
  .attr("stroke-width", 0.8)
  .append("title") //tooltip on hover
  .text(function(d){
    return d.participant + " | " + d.date + //participant and date
      "\nDuration: " + d.duration + " min" + //listening duration
      "\nMood: " + d.mood + //mood rating
      "\nStress: " + d.stress + //stress rating
      "\nSessions: " + d.sessions; //number of sessions
  });



//Draw axes
chartArea.append("g")
  .attr("transform", "translate(0," + chartHeight + ")")
  .call(d3.axisBottom(xScale).ticks(10));

chartArea.append("g")
  .call(d3.axisLeft(yScale).ticks(5));


//Axis labels
// X-axis label is listening duration
svg.append("text")
  .attr("x", margin.left + chartWidth / 2)
  .attr("y", margin.top + legendBandHeight + chartHeight + 40)
  .attr("text-anchor", "middle")
  .style("font-weight","700")
  .text("Listening Duration (minutes)");
// Y-axis label is stress level
svg.append("text")
  .attr("x", margin.left - 50)
  .attr("y", margin.top + legendBandHeight + chartHeight / 2)
  .attr("transform", "rotate(-90," + (margin.left - 50) + "," + (margin.top + legendBandHeight + chartHeight / 2) + ")")
  .attr("text-anchor", "middle")
  .style("font-weight","700")
  .text("Perceived Stress (0–5)");
